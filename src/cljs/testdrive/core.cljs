(ns testdrive.core
  (:require
    [cljs.core.async :refer [chan <! >! put! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [clojure.string :refer [upper-case]]
    [cljs-time.core :refer [now]]
    [cljs-time.format :refer [formatters unparse]]
    [cljs.reader :refer [read-string]]
    [firmata.core :refer [open-board event-channel]]
    [firmata.stream :refer [FirmataStream]]
    [cljs.nodejs :as nodejs])
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state
  "The initial application state"
  (atom {;; Dom ID for application
         :app-container-id "testdrive-app"

         ;; Websocket port
         :port 4567

         ;; Websocket connection state
         :connected? false

         ;; Console visibility
         :console-hidden? true

         ;; Set the maximum number of data points per sensor
         :max-data-points 100

         ;; Set the total maximum number of log entries
         :max-log-entries 100

         ;; Enable console (debug) logging
         :debug false

         ;; Enable simulation mode
         :simulation false}))

(def event-ch
  "Event channel for websocket messages"
  (chan 10))

(def connection-ch
  "Channel for websocket state change updates"
  (chan))

;; STATE HELPERS

(defn config [k]
  (get @app-state k))

(defn ws-url [] (str "ws://localhost:" (config :port) "/events"))

(defn debug [] (config :debug))


;; UI HELPERS

(defn label-for
  "Fetches a defined label from the app-state, or uses a generic one"
  [label-id]
  (if (= label-id 0)
    (str "GENERAL")
    (if-let [label (get (:labels @app-state) label-id)]
      (upper-case label)
      (str "LABEL " label-id))))

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

;; EVENT PROCESING

(defn process-new-event
  "Process a new sensor event by adding it's value to the app-state"
  [cursor {:keys [kind id value timestamp] :as payload}]
  (om/transact! cursor
                [:sensors {:kind kind :label-id id} :values]
                #(conj (vec (take-last (config :max-data-points) %))
                       [value timestamp])))


(defn process-new-label
  "Process a label by adding it to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/update! cursor [:labels id] value))


(defn process-new-log
  "Process a log message by adding is to the app-state"
  [cursor {:keys [id value] :as payload}]
  (om/transact! cursor [:console]
                #(conj (vec (take-last (config :max-log-entries) %))
                       {:id id :value value})))


;; OM

(defn widget-header [cursor owner]
  (let [title (-> cursor key :kind name upper-case)]
    (om/component
     (dom/div #js {:className "header"}
              (dom/span #js {:className "glyphicon glyphicon-dashboard"})
              (dom/span #js {:className "title"} title)))))


(defn text-widget-content [cursor owner]
  (let [value (-> cursor val :values last first pretty-value)
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
               (into-array
                (map #(om/build text-widget % {:react-key (key %)})
                     (:sensors cursor)))))))


(defn console-entry [{:keys [id value] :as cursor} owner]
  (let [label (label-for id)
        timestamp (unparse (formatters :date-hour-minute-second) (now))]
  (om/component
   (dom/li nil (str timestamp " [" label "]: " value)))))


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
                   "This seems to be taking a while...?"))))


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
        (if-let [state (<! connection-ch)]
          (condp = state
            :open  (om/update! cursor [:connected?] true)
            :close (om/update! cursor [:connected?] false)
            nil)))))

    om/IRender
      (render
       [_]
       (if (:connected? cursor)
         (dom/div #js {:id "dashboard"}
;;                   (om/build header-bar cursor)
                  (om/build widget-list cursor)
                  (om/build console cursor))
         (om/build not-connected cursor)))))



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


(defn- simulate-event
  "Simulate a real semi-random event"
  []
  (rand-nth
   [{:type :event :kind :temperature :id 1
     :value (+ 19.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :pressure :id 2
     :value (+ 995 (rand-int 11)) :timestamp (now)}
    {:type :event :kind :humidity :id 3
     :value (+ 58.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :altitude :id 1
     :value (+ 15.0 (rand-int 6)) :timestamp (now)}
    {:type :event :kind :voltage :id 2
     :value (+ 3.0 (rand-int 2)) :timestamp (now)}
    {:type :label :id 1 :value "Main Bedroom"}
    {:type :label :id 2 :value "Kitchen"}
    {:type :log :id 2 :value "Hello"}
    {:type :log :id 1 :value "World"}
    {:type :log :id 0 :value "General message"}]))


(defn simulate-events
  "Start event simulation"
  []
  (put! connection-ch :open)
  (go (while true
        (let [event (simulate-event)]
        (>! event-ch event)
        (if (debug) (println "Simulated Event: " event))
        (<! (timeout 100))))))


;; WEBSOCKETS

(def ws-send (chan 5))
(def ws-receive (chan 5))

(defn init-websocket
  "Websocket setup and handler"
  []
  (let [ws (new js/WebSocket (ws-url))]

    (set! (.-onopen ws)
        (fn [evt]
          (put! connection-ch :open)
          (if (debug) (println "WS Open:" (.-data evt)))))

    (set! (.-onclose ws)
        (fn [evt]
          (put! connection-ch :close)
          (if (debug) (println "WS Close:" (.-data evt)))))

    (set! (.-onmessage ws)
          (fn [evt] (let [data (.-data evt)
                          msg (read-string data)]
                         (put! event-ch msg)
                         (if (debug) (println "WS Event:" msg)))))

    (set! (.-onerror ws)
          (fn [evt] (println "WS Error:" (.-data evt))))

    (go (while ws
          (if-let [msg (<! ws-send)]
            (do
              (.send ws msg)
              (if (debug) (println "WS Send:" msg))))))))


;; INIT

;; (defn init
;;   "DOM ready initialisation of application"
;;   []
;;   (om/root dashboard app-state
;;     {:target (. js/document (getElementById (config :app-container-id)))})
;;   (if-not (config :simulation)
;;     (init-websocket)
;;     (do
;;       (simulate-events)
;;       (println "Simulation mode enabled. All data displayed is generated."))))

(def board (atom nil))
(def receiver-ch (atom nil))



;; (def SerialPort (.-SerialPort (nodejs/require "serialport")))
;; (defrecord SerialStream [port-name baud-rate]
;;   FirmataStream

;;   (open! [this]
;;     (let [serial-port (new SerialPort (:port-name this) #js {:baudrate (:baud-rate this)})]
;;       (assoc this :serial-port serial-port)))

;;   (close! [this]
;;     (when-let [serial-port (:serial-port this)]
;;       (.close serial-port)
;;       (dissoc this :serial-port)))

;;   (listen [this handler]
;;     (when-let [serial-port (:serial-port this)]
;;       (.on serial-port "data" handler)))

;;   (write [this data]
;;     (when-let [serial-port (:serial-port this)]
;;       (.write serial-port data))))

;; (def stream (SerialStream. "/dev/tty.usbmodemfd1231" 57600))

;; (listen (open! stream)
;;         (fn [data]
;;           (println data)
;;           (.dir js/console data)))


(def net (nodejs/require "net"))
(defrecord SocketStream [host port]
  FirmataStream

  (open! [this]
    (let [socket (.Socket net)
          conn (.connect socket (:port this) (:host this))]
      (assoc this :conn conn)))

  (close! [this]
    (when-let [conn (:conn this)]
      (.close conn)
      (dissoc this :conn)))

  (listen [this handler]
    (when-let [conn (:conn this)]
      (.on conn "data" handler)))

  (write [this data]
    (when-let [conn (:conn this)]
      (.write conn data))))

;; (def s (SocketStream. "192.168.2.202" 5678))

;; (listen (open! s)
;;         (fn [data] (println data)))

(defn init []
  (let [b (SocketStream. "192.168.2.202" 5678)]
    (.dir js/console b)
    (println b)
    (reset! board (open-board b))
    (reset! receiver-ch (event-channel @board))
    (go (while true
        (when-let [event (<! @receiver-ch)]
          (println event))))
    ))


;; (defn init []
;;   (println "Testing cljs firmata support")
;;   (let [b (SerialStream. "/dev/tty.usbmodemfd1231" 57600)]
;;     (.dir js/console b)
;;     (println b)
;;     (open-board b)
;;     (reset! board (open-board b))
;;   (reset! receiver-ch (event-channel @board))
;;   (go (while true
;;         (when-let [event (<! receiver-ch)]
;;           (println event))))
;;   ))

;; Run init on dom ready
(set! (.-onload js/window) init)
