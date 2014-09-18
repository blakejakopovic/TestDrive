(ns testdrive.core
  (:require
    [cljs.core.async :refer [chan <! >! put! timeout]]
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]
    [clojure.string :refer [upper-case]]
    [cljs-time.core :refer [now]]
    [cljs-time.format :refer [formatters unparse]]
    [cljs.reader :refer [read-string]]
    [firmata.core :refer [open-board open-serial-board open-network-board event-channel]]
    [firmata.sysex :refer [read-sysex-event consume-sysex read-two-byte-data]]
    [firmata.stream :as st]
    [firmata.stream.spi :refer [read!]]
    [cljs.nodejs :as nodejs]
   )
  (:require-macros
    [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def app-state
  "The initial application state"
  (atom {;; Dom ID for application
         :app-container-id "testdrive-app"

         ;; Websocket port
         :port 4567

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
         :simulation false}))

;; CHANNELS

(def event-ch
  "Event channel for testdrive messages"
  (chan 10))

(def connection-ch
  "Channel for device connection state changes"
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
    (str "") ;; blank string
    (if-let [label (get (:labels @app-state) label-id)]
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


;; SYSEX

;; Message Types
(def SYSEX_TYPE_EVENT           0x01 )
(def SYSEX_TYPE_LABEL           0x02 )
(def SYSEX_TYPE_LOG             0x03 )

;; Event Kinds
(def KIND_ACCELEROMETER         0x01 )
(def KIND_MAGNETIC_FIELD        0x02 )
(def KIND_ORIENTATION           0x03 )
(def KIND_GYROSCOPE             0x04 )
(def KIND_LIGHT                 0x05 )
(def KIND_PRESSURE              0x06 )

(def KIND_PROXIMITY             0x08 )

(def KIND_HUMIDITY              0x12 )
(def KIND_TEMPERATURE           0x13 )

(def KIND_VOLTAGE               0x15 )
(def KIND_CURRENT               0x16 )
(def KIND_COLOR                 0x17 )
(def KIND_SWITCH                0x18 )
(def KIND_ROTATION              0x19 )
(def KIND_COUNTER               0x20 )
(def KIND_LATLONG               0x21 )


(def event-kinds
  "Hash-map containing keyword values for event kind"
  {KIND_ACCELEROMETER        :acceleration
   KIND_MAGNETIC_FIELD       :magnetic-field
   KIND_ORIENTATION          :orientation
   KIND_GYROSCOPE            :gyroscope
   KIND_LIGHT                :light
   KIND_PRESSURE             :pressure
   KIND_PROXIMITY            :distance
   KIND_HUMIDITY             :humidity
   KIND_TEMPERATURE          :temperature
   KIND_VOLTAGE              :voltage
   KIND_CURRENT              :current
   KIND_COLOR                :color
   KIND_SWITCH               :switch})



(defn bytes-to-float32
  "Takes a seq of 4 bytes and returns a float32"
  [data]
  (let [buffer   (js/ArrayBuffer. 4)
        dataview (js/DataView. buffer)
        ;; TODO Tidy up
        _ (.setInt8 dataview 0 (get data 0))
        _ (.setInt8 dataview 1 (get data 1))
        _ (.setInt8 dataview 2 (get data 2))
        _ (.setInt8 dataview 3 (get data 3))
        value    (.getFloat32 dataview 0 true)] ;; little-endian
    value))

(defn value-for
  "Returns one or more float values based on event kind"
  [kind data]
  (if (or (= kind KIND_ACCELEROMETER)
          (= kind KIND_MAGNETIC_FIELD)
          (= kind KIND_GYROSCOPE)
          (= kind KIND_COLOR))
      ;; Handle multi-dimentional value
      (let [coll (partition 4 data)]
        (into [] (map bytes-to-float32 coll)))
      (bytes-to-float32 data)))

(defmethod read-sysex-event SYSEX_TYPE_EVENT
  [in]
  (let [kind-id (read! in)
        kind    (get event-kinds kind-id :unknown)
        id      (read! in)
        data    (read-two-byte-data in)
        value   (value-for kind data)
        now     (now)]
    {:type :event
     :kind kind
     :id id
     :value value
     :timestamp now}))

(defmethod read-sysex-event SYSEX_TYPE_LABEL
  [in]
  (let [id   (read! in)
        value (consume-sysex in "" #(str %1 (char %2)))]
    {:type :label
     :id id
     :value value}))

(defmethod read-sysex-event SYSEX_TYPE_LOG
  [in]
  (let [id   (read! in)
        value (consume-sysex in "" #(str %1 (char %2)))]
    {:type :log
     :id id
     :value value}))

;; INIT


(def board (atom nil))
(def receiver-ch (atom nil))

(defn handle-board-connected [new-board]
  (reset! board new-board)
  (reset! receiver-ch (event-channel @board))

  ;; Send open event
  (put! connection-ch :open)

  ;; Read board events
  (go
   (while true
     (when-let [event (<! @receiver-ch)]
       (>! event-ch event)))))

(defn init-serial-board []
  (open-serial-board "/dev/tty.usbmodemfd1231" handle-board-connected))


(defn init
  "DOM ready initialisation of application"
  []
  (om/root dashboard app-state
    {:target (. js/document (getElementById (config :app-container-id)))})
  (if-not (config :simulation)
    (init-serial-board)
    (do
      (simulate-events)
      (println "Simulation mode enabled. All data displayed is generated."))))

;; Run init on dom ready
(set! (.-onload js/window) init)
