(ns seeing.core
  (:require
    [cljs.core.async :refer [chan <! put! timeout sliding-buffer]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.reader :as reader]
    [taoensso.sente :as sente :refer (cb-success?)]
    [cljs.core.match])
  (:require-macros
    [cljs.core.async.macros :refer [go-loop]]
    [cljs.core.match.macros :refer (match)]))

(enable-console-print!)

(def app-container-id "seeing-app")
(def app-state (atom {:label {}}))

(defn kind-for-id [id]
  (condp = id
    19 "Temp (℃)"
    20 "Humidity (%)"))

(defn label-for-id [id]
  (get (:label @app-state) id (str "ID: " id)))

(defn panel [data owner]
  (let [value (.toFixed (:value data) 1)
        kind  (:kind data)]
    (om/component
     (dom/div #js {:className "panel panel-default widget widget-short"}
              (dom/div #js {:className "panel-body clearfix"}
                       (dom/div #js {:className "widget-value text-center"}
                                (into-array [(dom/div nil (dom/strong nil value))
                                             (dom/div nil (dom/small nil (kind-for-id (:kind data))))
                                             (dom/div nil (dom/small nil (label-for-id (:id data))))])))))))

(defn panel-list [app owner]
  (om/component
;;     (dom/div nil
      (dom/div nil
        (into-array (map #(om/build panel (get-in app [19 %]))
                          (keys (get app 19))))
;;       (dom/div nil
;;         (into-array (map #(om/build panel (get-in app [18 %]))
;;                           (keys (get app 18))))))
             )))

(om/root panel-list app-state
  {:target (. js/document (getElementById app-container-id))})

(defn handle-event
  [payload]
  (swap! app-state assoc-in [(:kind payload) (:id payload)] payload))

(defn handle-label
  [payload]
  (swap! app-state assoc-in [:label (:id payload)] (:value payload)))

(defn event-handler-ext [[kind payload]]
;;   (println kind payload)
  (let [{:keys [type kind data]} payload]
    (condp = type
      :label (handle-label payload)
      :event (handle-event payload)
;;           :temperature (swap! app-state assoc :temperature {:value data})
;;           :humidity    (swap! app-state assoc :humidity {:value data})
    )))

(let [{:keys [event ch-recv send-fn state]}
      (sente/make-channel-socket! "/events" {:type :auto})]
  (def event        event)
  (def ch-events    ch-recv)
  (def events-send! send-fn)
  (def events-state state))

(defn- event-handler [[id data :as ev] _]
;;   (println "EVENT>" data)
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
