(ns seeing.core
  (:require
    [cljs.core.async :refer [chan <! >! put! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [cljs.reader :as reader])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def receive (chan))

(def websocket (atom (new js/WebSocket "ws://localhost:4567/ws")))

(doall
  (map #(aset @websocket (first %) (second %))
       [["onopen" (fn [] (js/console.log "OPEN"))]
        ["onclose" (fn [] (js/console.log "CLOSE"))]
        ["onerror" (fn [e] (js/console.log (str "ERROR: " e)))]
        ["onmessage" (fn [m] (put! receive (reader/read-string (.-data m))))]]))


;; (def ws-url "ws://localhost:4567/ws")
;; (def ws (atom (new js/WebSocket ws-url)))

;; (aset @ws "onmessage" (fn [m] (js/console.log (str "MSG: " (.-data m)))))

;; (set! (.-onopen ws) #(println "OPEN"))

;; http://www.bengarvey.com/sparklines/
;; https://github.com/gdf/sparkline-canvas

(def app-container-id "seeing-app")
(def app-state (atom {:analog {}}))

(go
   (loop []
     (when-let [data (<! receive)]
       (let [pin (:pin data)
             pin-key (keyword (str pin))
             value (:value data)]
         (swap! app-state assoc-in [:analog pin-key] {:pin pin :value value})))
     (recur)))

(defn pin [{:keys [pin value]} data owner]
  (om/component
   (dom/div {}
            (dom/strong nil (str pin ": "))
            (dom/span nil value))))

(defn pin-list [data owner]
  (om/component
   (dom/div nil
            (dom/div {}
                     (into-array (map #(om/build pin (-> data :analog %))
                                      (-> data :analog keys)))))))

;; (defn widget [data owner]
;;   (reify
;;     om/IRender
;;     (render [this]
;;       (dom/h1 nil (-> data :analog :1)))))

(om/root pin-list app-state
  {:target (. js/document (getElementById app-container-id))})
