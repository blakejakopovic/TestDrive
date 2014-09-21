(ns testdrive.core
  (:require
    [cljs.core.async :refer [chan <! >! put! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [clojure.string :refer [upper-case]] ;; can factor out into UI stuff
    [cljs-time.core :refer [now]] ;; can factor out into utils and simulation
    [cljs-time.format :refer [formatters unparse]] ;; can factor out into utils/console-timestamp
    ;; [cljs.reader :refer [read-string]]
    [firmata.core :refer [open-serial-board open-network-board event-channel]]
    [firmata.util :refer [detect-arduino-port]]
    [testdrive.messages]
    [cljs.nodejs :as nodejs]) ;; can factor out for UDP beacon
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state
  "The initial application state"
  (atom {;; Dom ID of application container
         :app-container-id "testdrive-app"

         ;; Default Server port
         ;;:port 4567

         ;; Board connection status
         :connected? false

         ;; Console visibility
         :console-hidden? true

         ;; Set the maximum number of data points per sensor
         :max-data-points 100

         ;; Set the total maximum number of log entries
         :max-log-entries 100

         ;; Enable console (debug) logging
         :debug true

         ;; Enable simulation mode
         :simulation false

         ;; Shared events channel
         :event-ch (chan 10)}))

;; CHANNELS

(def connection-ch
  "Channel for device connection state changes"
  (chan))

;; STATE HELPERS

(defn config [k]
  (get @app-state k))

; (defn ws-url [] (str "ws://localhost:" (config :port) "/events"))

(defn debug [] (config :debug))


;; UI HELPERS

;;testdrive.ui.helpers
(defn label-for
  "Fetches a defined label from the app-state, or uses a generic one"
  [label-id]
  (if (= label-id 0)
    (str "") ;; blank string
    (if-let [label (get (:labels @app-state) label-id)]
      (upper-case label)
      (str "LABEL #" label-id))))

;;testdrive.ui.helpers
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
;;testdrive.ui.widget
(defn widget-header [cursor owner]
  (let [title (-> cursor key :kind name upper-case)]
    (om/component
     (dom/div #js {:className "header"}
              (dom/span #js {:className "glyphicon glyphicon-dashboard"})
              (dom/span #js {:className "title"} title)))))

;;testdrive.ui.widget
(defn text-widget-content [cursor owner]
  (let [value (-> cursor val :values last first pretty-value)
        unit  (-> cursor key :kind unit-for)
        label (-> cursor key :label-id label-for)]
    (om/component
     (dom/div #js {:className "content"}
              (dom/strong nil value)
              (dom/small #js {:className "units"} unit)
              (dom/small nil label)))))

;;testdrive.ui.widget
(defn widget-footer [cursor owner]
  (om/component
   (dom/div #js {:className "footer"} "just updated")))

;;testdrive.ui.widget
(defn text-widget [cursor owner]
  (let [kind-class (-> cursor key :kind name)]
    (om/component
     (dom/li #js {:className (str "widget " kind-class)}
             (om/build widget-header cursor)
             (om/build text-widget-content cursor)
             (om/build widget-footer cursor)))))

;;testdrive.ui.widget
(defn widget-list [cursor owner]
  (reify

    om/IWillMount
      (will-mount
       [_]
       (go (while true
        (if-let [payload (<! (config :event-ch))]
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

;;testdrive.ui.console
(defn console-entry [{:keys [id value] :as cursor} owner]
  (let [label (label-for id)
        timestamp (unparse (formatters :date-hour-minute-second) (now))]
  (om/component
  (if (not (= label ""))
    (dom/li nil (str timestamp " [" label "]: " value))
    (dom/li nil (str timestamp ": " value))))))

;;testdrive.ui.console
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
;;testdrive.ui.placeholder
(defn not-connected
  "Component to show when no connection"
  [cursor owner]
  (om/component
   (dom/div #js {:className "no-connection"}
            (dom/h2 nil "Awaiting connection...")
            (dom/a #js {:href "https://github.com/blakejakopovic/TestDrive"}
                   "Is this taking a while to connect...?"))))

;;testdrive.ui.header
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

;;testdrive.ui.dashboard
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

;;testdrive.simulation
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

;;testdrive.simulation
(defn simulate-events
  "Start event simulation"
  []
  (put! connection-ch :open)
  (go (while true
        (let [event    (simulate-event)
              event-ch (config :event-ch)]
          (>! event-ch event)
          (if (debug) (println "Simulated Event: " event))
          (<! (timeout 100))))))


;; INIT

;; REMOVE
(def board (atom nil))
(def receiver-ch (atom nil))

;; testdrive.connections
(defn handle-board-connected [new-board]
  (reset! board new-board)
  (reset! receiver-ch (event-channel @board))

  ;; Send open event
  (put! connection-ch :open)

  ;; Read board events
  (go
   (while true
     (let [event-ch (config :event-ch)]
       (when-let [event (<! @receiver-ch)]
         (if (debug) (println "Event: " event))
         (>! event-ch event))))))

(defn init-serial-board []
  (open-serial-board "/dev/tty.usbmodemfd1231" handle-board-connected))

(defn init-network-board []
  (open-network-board "192.168.2.219" 5678 handle-board-connected))

(defn init-board-server []
  ;; (open-network-server 5678 "0.0.0.0" handle-board-connected)
  ;; (start-board-server-beacon)
  ;; TODO: add :server-beacon to app-config
  )

;;;;;;;;;;;;;;;;;;;;

;; testdrive.beacon
; (def dgram (nodejs/require "dgram"))

; (defn start-board-server-beacon []
;   (go (let [server (.createSocket dgram "udp4")
;             ip "192.168.2.69" ;; TODO: detect real IP address
;             msg (str "TDS+" ip ":" (config :port))
;             msg_len 21
;             port 8888
;             host "230.200.200.200"]
;     (.bind server 8887 "0.0.0.0" (fn [] (.setBroadcast server true)))
;     (while true 
;       (.send server msg 0 msg_len port host)
;       (<! (timeout 1000))))))

; (start-server-beacon)

;; Beacon broadcast for devices to connect to via TCP
;; Beacon broadcast for relay dashboards

;; Listen for Relay beacons

;;;;;;;;;;;;;;;;;;;;;

(detect-arduino-port 
  (fn [name]
    (if name
      (println name)
      (println "No Serial Device Detected"))))

; (let [list-fn (.-list (nodejs/require "serialport"))]
;         (list-fn (fn [err ports]
;           (if err
;             (do 
;               (println err)
;               (println "none"))
;             (println (first (filter arduino-port? (map #(.-comName %) ports))))))))

;;;;;;;;;;;;;;;;;;;;;

;; testdrive.core
(defn init
  "DOM ready initialisation of application"
  []
  (om/root dashboard app-state
    {:target (. js/document (getElementById (config :app-container-id)))})
  (if-not (config :simulation)
    ; (init-serial-board)
    ; (init-network-board)
    (do
      (simulate-events)
      (println "Simulation mode enabled. All data displayed is generated."))))

;; testdrive.core
;; Run init on dom ready
(set! (.-onload js/window) init)



; :connections [
;   {:type        :simulation
;    :host        nil
;    :port        nil
;    :board       nil
;    :receiver-ch nil
;    :send-ch     nil}
;   {:type        :serial
;    :host        nil
;    :port        nil
;    :board       (atom nil)
;    :receiver-ch (atom nil)
;    :send-ch     (atom nil)}
;   {:type        :client-socket
;    :host        nil
;    :port        nil
;    :board       (atom nil)
;    :receiver-ch (atom nil)
;    :send-ch     (atom nil)}
;   {:type        :server-socket
;    :host        nil
;    :port        nil
;    :server      nil
;    :clients     []
;    :board       (atom nil)
;    :receiver-ch (atom nil)
;    :send-ch     (atom nil)}]


;
; [New Serial Connection] (detect port every 3 seconds)
; [Start Board Server] (start server and beacon)
; [Connect to board] (enter ip + port)
; [Connect to relay dashboard]
; 
; Stuck? Things not working... take a look at http://gh.com/faq
; 



; [ o [ No Active Connections   ]                                      ]

; [ o [ \/ 2 Active Connections ]                                      ]
;     ---------------------------
;     | Serial                  |
;     | tty.usbmodem1324        | 
;     | (disconnect)            |
;     ---------------------------
;     | TCP Client              |
;     | 192.168.1.199:5678      |
;     | (disconnect)            |
;     ---------------------------

; [ Console                                                         \/ ]

; [ Console                                                         /\ ]




; (let [stop (chan)]
;   (go (loop []
;         (println "Hello World!")
;         (let [[v c]] (alts! [(timeout 10000) stop])]
;           (if (= c stop)
;             :done
;             (do (println "I'm done sleeping, going to recur now...")
;               (recur)))))))