(ns testdrive.dashboard

  (:require
    [cljs.core.async :refer [chan <! >! put! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [clojure.string :refer [upper-case]]
    [cljs-time.core :refer [now]]
    [cljs-time.format :refer [formatters unparse]])

  (:require-macros
    [cljs.core.async.macros :refer [go]]))


(defn label-for
  "Fetches a defined label from the app-state, or uses a generic one"
  [labels label-id]
  (if (= label-id 0)
    (str "") ;; blank string
    (if-let [label (get labels label-id)]
      (upper-case label)
      (str "LABEL #" label-id))))

(def unit-for
  "A map containing user facing strings for unit types"
  {:temperature "celsius (C)"
   :humidity    "percent (%)"
   :pressure    "hectopascals (hPa)"
   :altitude    "meters (m)"
   :voltage     "volts (V)"
   :current     "milliamps (mA)"
   :light       "lux"
   :distance    "meters (m)"})

(defn pretty-value [n]
  (if (> n 999)
    (int n)
    (.toFixed n 1)))



(defn process-new-event
  "Process a new sensor event by adding it's value to the app-state"
  [cursor {:keys [kind id value timestamp] :as payload}]
  (om/transact! cursor
                [:sensors {:kind kind :label-id id} :values]
                #(conj (vec (take-last (:max-data-points @cursor) %))
                       [value timestamp])))

(defn process-new-label
  "Process a label by adding it to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/update! cursor [:labels id] value))


(defn process-new-log
  "Process a log message by adding is to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/transact! cursor [:console]
                #(conj (vec (take-last (:max-log-entries @cursor) %))
                       {:id id :value value})))



(defn widget-header [cursor owner]
  (let [title (-> cursor key :kind name upper-case)]
    (om/component
     (dom/div #js {:className "header"}
              (dom/span #js {:className "glyphicon glyphicon-dashboard"})
              (dom/span #js {:className "title"} title)))))


(defn text-widget-content [cursor owner]
  (let [value  (-> cursor val :values last first pretty-value)
        unit   (-> cursor key :kind unit-for)
        labels {}
        label  (->> cursor key :label-id (partial label-for labels))]
    (om/component
     (dom/div #js {:className "content"}
              (dom/strong nil value)
              (dom/small #js {:className "units"} unit)
              (dom/small nil label)))))


(defn widget-footer [cursor owner]
  (om/component
   (dom/div #js {:className "footer"} "just updated")))


(defn text-widget [cursor owner]
  (let [kind-class (-> cursor key :kind name)]
    (om/component
     (dom/li #js {:className (str "widget " kind-class)}
             (om/build widget-header cursor)
             (om/build text-widget-content cursor)
             (om/build widget-footer cursor)))))


(defn widget-list [cursor owner]
  (reify

    om/IWillMount
      (will-mount
       [_]
       (go (while true
        (if-let [payload (<! (:event-ch @cursor))]
          (let [type (:type payload)]
            (condp = type
              :label (process-new-label cursor payload)
              :event (process-new-event cursor payload)
              :log   (process-new-log cursor payload)
              nil))))))

    om/IRender
      (render
       [_]
       (dom/ul #js {:className "widgets grid"}
               (into-array
                (map #(om/build text-widget % {:react-key (key %)})
                     (:sensors cursor)))))))


(defn console-entry [{:keys [id value] :as cursor} owner]
  (let [label (label-for (cursor :labels) id)
        timestamp (unparse (formatters :date-hour-minute-second) (now))]
  (om/component
  (if (not (= label ""))
    (dom/li nil (str timestamp " [" label "]: " value))
    (dom/li nil (str timestamp ": " value))))))


(defn console [cursor owner]
  (reify

    om/IDidUpdate
    (did-update
      [_ _ _]
      (let [console (. js/document (getElementById "console-content"))]
           (set! (.-scrollTop console) (.-scrollHeight console)))
       (if-not (empty? (:console cursor))
         (om/update! cursor [:console-hidden?] false)
         (om/update! cursor [:console-hidden?] true)))

    om/IRender
      (render
       [_]
       (dom/div #js {:id "console"
                     :className (str "console"
                                     (when (:console-hidden? cursor) " hidden"))}
                (dom/div #js {:className "header"}
                         (dom/span #js {:className "glyphicon glyphicon-dashboard"})
                         (dom/span #js {:className "title"} "CONSOLE"))
                (dom/div #js {:id "console-content" :className "content"}
                         (dom/ul nil
                                 (into-array
                                  (map #(om/build console-entry %)
                                                  (:console cursor)))))))))

(defn not-connected
  "Component to show when no connection"
  [cursor owner]
  (om/component
   (dom/div #js {:className "no-connection"}
            (dom/h2 nil "Awaiting connection...")
            (dom/a #js {:href "https://github.com/blakejakopovic/TestDrive"}
                   "Is this taking a while to connect...?"))))


(defn header-bar
  "Dashboard header with logo and actions"
  [cursor owner]
  (om/component
   (dom/div #js {:id "header"
                 :className "header clearfix"}
            (dom/div #js {:className "logo"}
                     (dom/span #js {:className "glyphicon glyphicon-dashboard"})
                     (dom/span #js {:className "title"} "TestDrive Dashboard"))
            (dom/div #js {:className "actions"} ""))))


(defn dashboard
  "OM Root function"
  [cursor owner]
  (reify
    om/IWillMount
    (will-mount
       [_]
       (go (while true
        (if-let [state (<! (:connection-ch @cursor))]
          (condp = state
            :open  (om/update! cursor [:connected?] true)
            :close (om/update! cursor [:connected?] false)
            nil)))))
    om/IRender
      (render
       [_]
       (if (:connected? cursor)
         (dom/div #js {:id "dashboard"}
                ;;(om/build header-bar cursor)
                  (om/build widget-list cursor)
                  (om/build console cursor))
         (om/build not-connected cursor)))))
