(ns seeing.core
  (:require
    [cljs.core.async :refer [chan <! put! timeout sliding-buffer]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.reader :as reader]
    [taoensso.sente :as sente :refer (cb-success?)]
    [cljs.core.match])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]]
    [cljs.core.match.macros :refer (match)]))

(enable-console-print!)

(def app-container-id "seeing-app")

(def events (chan))

(def app-state
  (atom {:sensors {}
         :labels {}}))

;; (def app-state
;;   (atom {:sensors
;;           {{:kind :temperature :label-id 1} [[21.0    #inst "2014-07-26T03:46:29.587-00:00"]]
;;            {:kind :temperature :label-id 2} [[32.0    #inst "2014-07-26T03:46:29.587-00:00"]]
;;            {:kind :humidity    :label-id 3} [[62.0    #inst "2014-07-26T03:46:29.587-00:00"]]
;;            {:kind :pressure    :label-id 2} [[1100.0  #inst "2014-07-26T03:46:29.587-00:00"]]
;;            {:kind :altitude    :label-id 1} [[120.0   #inst "2014-07-26T03:46:29.587-00:00"]]}
;;          :labels {1 "Bedroom"
;;                   2 "kitchen"}}))

(defn label-for [label-id]
  (if-let [label (get (:labels @app-state) label-id)]
    (clojure.string/upper-case label)
    (str "ID: " label-id)))

(def unit-for
  {:temperature "celsius (C)"
   :humidity    "percent (%)"
   :pressure    "hectopascals (hPa)"
   :altitude    "meters (m)"})

(defn widget-header [cursor owner]
  (let [title (-> cursor key :kind name clojure.string/upper-case)]
    (om/component
     (dom/div #js {:className "header"}
              (dom/span #js {:className "glyphicon glyphicon-dashboard"})
              (dom/span #js {:className "title"} title)))))

(defn widget-content [cursor owner]
  (let [value (-> cursor val last first)
        unit  (-> cursor key :kind unit-for)
        label (-> cursor key :label-id label-for)]
    (om/component
     (dom/div #js {:className "content"}
              (dom/strong nil value)
              (dom/small nil unit)
              (dom/small nil label)))))

(defn widget-footer [cursor owner]
  (let [last-updated nil #_(-> cursor val last last)]
    (om/component
     (dom/div #js {:className "footer"} "recently updated"))))

(defn widget [cursor owner]
  (let [kind-class (-> cursor key :kind name)]
    (om/component
     (dom/li #js {:className (str "widget " kind-class)}
             (om/build widget-header cursor)
             (om/build widget-content cursor)
             (om/build widget-footer cursor)))))

;; (defn widget-list [cursor owner]
;;   (om/component
;;    (dom/ul #js {:className "widgets grid"}
;;            (into-array (map #(om/build widget % {:react-key (key %)}) (:sensors cursor))))))


(defn process-new-event [cursor payload]
  (let [kind (:kind payload)
        id (:id payload)
        value (:value payload)
        timestamp (:timestamp payload)]
    (om/transact! cursor [:sensors {:kind kind :label-id id}] #(conj [value timestamp] %))))

(defn process-new-label [cursor payload]
  (let [id (-> payload :id)
        label (-> payload :value)]
    (om/update! cursor [:labels id] label)))

(defn widget-list [cursor owner]
  (reify
    om/IWillMount
      (will-mount
       [_]
       (go-loop []
        (if-let [payload (<! events)]
          (let [type (:type payload)]
            (condp = type
              :label (process-new-label cursor payload)
              :event (process-new-event cursor payload)
              nil)))
        (recur)))

    om/IRender
      (render
       [_]
       (dom/ul #js {:className "widgets grid"}
               (into-array (map #(om/build widget % {:react-key (key %)}) (:sensors cursor)))))))

(om/root widget-list app-state
  {:target (. js/document (getElementById app-container-id))})


;; {:type :event, :kind :temperature, :id 2, :value 25.6, :timestamp #inst "2014-07-26T05:13:29.051-00:00"}
;; {:type :label, :id 2, :value Main Bedroom}

(defn event-handler-ext [[kind payload]]
  (put! events payload))

(let [{:keys [event ch-recv send-fn state]}
      (sente/make-channel-socket! "/events" {:type :auto})]
  (def event        event)
  (def ch-events    ch-recv)
  (def events-send! send-fn)
  (def events-state state))

(defn- event-handler [[id data :as ev] _]
  (match [id data]
    [:chsk/recv payload]
         (event-handler-ext payload)

    [:chsk/state {:first-open? true}]
         (println "Channel socket successfully established!")

    [:chsk/state new-state]
         (println "Chsk state change: " new-state)

    :else
         (println "Unmatched event: " ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-events))
