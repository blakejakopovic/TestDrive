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

(defn pin [{:keys [pin value]} data owner]
  (om/component
   (dom/div {}
            (dom/strong nil (str pin ": "))
            (dom/span nil value)
            (dom/span #js {:id (str "chartA" pin)} nil))))

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



;; https://gist.github.com/msgodf/8495781

(def graph
  (doto
    (Rickshaw.Graph. (clj->js {:element (. js/document (getElementById "chartA1"))
                               :renderer "area"
                               :width 100
                               :height 20
                               :max 1023
                               :interpolation "step-after"
                               :series (Rickshaw.Series.FixedDuration. (clj->js [{ :name "a1" }])
                                                                       nil
                                                                       (clj->js {:timeInterval 50
                                                                                 :maxDataPoints 100
                                                                                 :timeBase (. (js/Date.) getTime)}))}))
    (.render)))

(def graph2
  (doto
    (Rickshaw.Graph. (clj->js {:element (. js/document (getElementById "chartA2"))
                               :renderer "area"
                               :width 100
                               :height 20
                               :max 1023
                               :series (Rickshaw.Series.FixedDuration. (clj->js [{ :name "a2" }])
                                                                       nil
                                                                       (clj->js {:timeInterval 50
                                                                                 :maxDataPoints 100
                                                                                 :timeBase (. (js/Date.) getTime)}))}))
    (.render)))

;; (go-loop [data (rand-int 1023)]
;;          (.addData (.-series graph) (clj->js {:one data}))
;;          (-> graph (.render))
;;          (<! (timeout 50))
;;          (recur (rand-int 1023)))


(let [{:keys [event ch-recv send-fn state]}
      (sente/make-channel-socket! "/events" {:type :auto})]
  (def event        event)
  (def ch-events    ch-recv)
  (def events-send! send-fn)
  (def events-state state))

(defn- event-handler [[id data :as ev] _]
  (match [id data]
    [:chsk/recv [:event/new payload]]
         (let [pin (:pin payload)
               pin-key (keyword (str pin))
               value (or (:value payload) "")]
           (swap! app-state assoc-in [:analog pin-key] {:pin pin :value value})

           (if (= pin 1)
             (.addData (.-series graph) (clj->js {:a1 value}))
             (-> graph (.render)))

           (if (= pin 2)
             (.addData (.-series graph2) (clj->js {:a2 value}))
             (-> graph2 (.render))))

    [:chsk/state {:first-open? true}]
         (println "Channel socket successfully established!")

    [:chsk/state new-state]
         (println "Chsk state change: " new-state)

    :else
         (println "Unmatched event: " ev)))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-handler ch-events))
