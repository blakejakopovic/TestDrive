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
(def app-state (atom {:analog {:0 {:pin 0} :1 {:pin 1} :2 {:pin 2}
                               :3 {:pin 3} :4 {:pin 4} :5 {:pin 5}}}))

(let [{:keys [event ch-recv send-fn state]}
      (sente/make-channel-socket! "/events" {:type :auto})]
  (def event       event)
  (def ch-events    ch-recv)
  (def events-send! send-fn)
  (def events-state state))

(defn- event-handler [[id data :as ev] _]
  (match [id data]
    [:chsk/recv [:event/new payload]]
         (let [pin (:pin payload)
               pin-key (keyword (str pin))
               value (or (:value payload) "")]
           (swap! app-state assoc-in [:analog pin-key] {:pin pin :value value}))

    [:chsk/state {:first-open? true}]
         (println "Channel socket successfully established!")

    [:chsk/state new-state]
         (println "Chsk state change: " new-state)

    :else
         (println "Unmatched event: " ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-events))

;; http://www.bengarvey.com/sparklines/
;; https://github.com/gdf/sparkline-canvas


(defn pin [{:keys [pin value]} data owner]
  (om/component
   (dom/div {}
            (dom/strong nil (str pin ": "))
            (dom/span nil value))))

(defn pin-list [data owner]
  (om/component
   (dom/div nil
            (dom/div nil
                     (into-array (map #(om/build pin (-> data :analog %))
                                      (-> data :analog keys sort)))))))

(defn pin-box [app owner opts]
  (reify
    om/IRender
    (render [_]
            (dom/h1 nil "Pin Monitor")
            (om/build pin-list app))))

(om/root pin-box app-state
  {:target (. js/document (getElementById app-container-id))})
