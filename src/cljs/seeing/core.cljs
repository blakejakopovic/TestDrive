(ns seeing.core
  (:require
    [cljs.core.async :refer [chan <! >! put! take! close! timeout sliding-buffer]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [clojure.string :refer [upper-case]]
    [cljs-time.core :refer [now]]
    [cljs.reader :refer [read-string]])
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

(def debug
  "Enable console debug logging"
  false)

(def simulation
  "Enable simulation mode"
  false)

(def port 4567)
(def ws-url (str "ws://localhost:" port "/events"))
(def event-ch (chan 10))

(def max-data-points
  "Set the maximum number of data points per sensor"
  100)

(def max-log-entries
  "Set the total maximum number of log entries"
  200)

(def app-container-id "seeing-app")

(def app-state
  "The initial application state"
  (atom {}))


;; UI HELPERS

(defn label-for
  "Fetches a defined label from the app-state, or uses a generic one"
  [label-id]
  (if-let [label (get (:labels @app-state) label-id)]
    (upper-case label)
    (str "id: " label-id)))

(def unit-for
  "A map containing user facing strings for unit types"
  {:temperature "celsius (C)"
   :humidity    "percent (%)"
   :pressure    "hectopascals (hPa)"
   :altitude    "meters (m)"
   :voltage     "volts (V)"})


;; EVENT PROCESING

(defn process-new-event
  "Process a new sensor event by adding it's value to the app-state"
  [cursor {:keys [kind id value timestamp] :as payload}]
  (om/transact! cursor
                [:sensors {:kind kind :label-id id} :values]
                #(conj (vec (take-last max-data-points %)) [value timestamp])))


(defn process-new-label
  "Process a label by adding it to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/update! cursor [:labels id] value))


(defn process-new-log
  "Process a log message by adding is to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/transact! cursor [:log] #(conj (vec (take-last max-log-entries %)) {:id id :value value})))


;; OM

(defn widget-header [cursor owner]
  (let [title (-> cursor key :kind name upper-case)]
    (om/component
     (dom/div #js {:className "header"}
              (dom/span #js {:className "glyphicon glyphicon-dashboard"})
              (dom/span #js {:className "title"} title)))))

(defn text-widget-content [cursor owner]
  (let [value (-> cursor val :values last first)
        unit  (-> cursor key :kind unit-for)
        label (-> cursor key :label-id label-for)]
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
        (if-let [payload (<! event-ch)]
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
               (into-array (map #(om/build text-widget % {:react-key (key %)})
                                (:sensors cursor)))))))


;; SIMUATION

;; EVENT MESSAGE
;; {:type :event,
;;  :kind :temperature,
;;  :id 2,
;;  :value 25.6,
;;  :timestamp #inst "2014-07-26T05:13:29.051-00:00"}

;; LABEL MESSAGE
;; {:type :label,
;;  :id 2,
;;  :value "Main Bedroom"}

;; LOG MESSAGE
;; {:type :log,
;;  :id 0,
;;  :value "Hello World"}

(defn simulate-event
  "Simulate a real semi-random event"
  []
  (rand-nth
   [{:type :event :kind :temperature :id 1 :value (+ 19.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :pressure :id 2 :value (+ 995 (rand-int 11)) :timestamp (now)}
    {:type :event :kind :humidity :id 3 :value (+ 58.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :altitude :id 1 :value (+ 15.0 (rand-int 6)) :timestamp (now)}
    {:type :event :kind :voltage :id 2 :value (+ 3.0 (rand-int 2)) :timestamp (now)}
    {:type :label :id 1 :value "Main Bedroom"}
    {:type :label :id 2 :value "Kitchen"}]))

(defn simulate-events
  "Start event simulation"
  []
  (go (while true
        (>! event-ch (simulate-event))
        (<! (timeout 200)))))


;; WEBSOCKETS

(def ws-send (chan 5))
(def ws-receive (chan 5))

(defn init-websocket
  "Websocket setup and handler"
  []
  (let [ws (new js/WebSocket ws-url)]

    (set! (.-onopen ws)
        (fn [evt]
          (if debug (println "WS Open:" (.-data evt)))))

    (set! (.-onclose ws)
        (fn [evt]
          (if debug (println "WS Close:" (.-data evt)))))

    (set! (.-onmessage ws)
          (fn [evt] (let [data (.-data evt)
                          msg (read-string data)]
                         (put! event-ch msg)
                         (if debug (println "WS Event:" msg)))))

    (set! (.-onerror ws)
          (fn [evt] (println "WS Error:" (.-data evt))))

    (go (while ws
          (if-let [msg (<! ws-send)]
            (do
              (.send ws msg)
              (if debug (println "WS Send:" msg))))))))


;; INIT

(defn init
  "DOM ready initialisation of application"
  []
  (om/root widget-list app-state
    {:target (. js/document (getElementById app-container-id))})
  (if-not simulation
    (init-websocket)
    (simulate-events)))

;; Run init on dom ready
(set! (.-onload js/window) init)
