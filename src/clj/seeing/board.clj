(ns seeing.board
  (:require [clojure.core.async
              :refer [go-loop chan sliding-buffer put! <! >! timeout]]
            [taoensso.timbre :as timbre
              :refer (trace debug info warn error fatal)]
            [firmata.core :as firmata :refer [read-sysex-event consume-sysex read-two-byte-data]]
            [seeing.config :refer [config]]
            [seeing.routes.events
              :refer [events-send! connected-uids]]))

(def board (atom nil))
(def receiver-ch (atom nil))

(def event-ch (chan (sliding-buffer (or (:board-buffer-size config) 1023))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; EXTEND SYSEX
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^{:private true} SYSEX_TYPE_EVENT           0x01 )
(def ^{:private true} SYSEX_TYPE_REGISTER        0x02 )

(def ^{:private true} KIND_ACCELEROMETER         0x01 ) ;;;
(def ^{:private true} KIND_MAGNETIC_FIELD        0x02 ) ;;;
(def ^{:private true} KIND_ORIENTATION           0x03 ) ;
(def ^{:private true} KIND_GYROSCOPE             0x04 ) ;;;
(def ^{:private true} KIND_LIGHT                 0x05 )
(def ^{:private true} KIND_PRESSURE              0x06 )
;; note that 7 is ommitted on purpose
(def ^{:private true} KIND_PROXIMITY             0x08 )
(def ^{:private true} KIND_GRAVITY               0x09 )
(def ^{:private true} KIND_LINEAR_ACCELERATION   0x10 ) ;;;
(def ^{:private true} KIND_ROTATION_VECTOR       0x11 ) ;;;
(def ^{:private true} KIND_RELATIVE_HUMIDITY     0x12 )
(def ^{:private true} KIND_AMBIENT_TEMPERATURE   0x13 )
;; note that 14 is ommitted on purpose
(def ^{:private true} KIND_VOLTAGE               0x15 )
(def ^{:private true} KIND_CURRENT               0x16 )
(def ^{:private true} KIND_COLOR                 0x17 ) ;;;
(def ^{:private true} KIND_SWITCH                0x18 )

(def friendly-kinds
  {KIND_ACCELEROMETER        :acceleration
   KIND_MAGNETIC_FIELD       :magnetic-field
   KIND_ORIENTATION          :orientation
   KIND_GYROSCOPE            :gyroscope
   KIND_LIGHT                :light
   KIND_PRESSURE             :pressure
   KIND_PROXIMITY            :distance
   KIND_RELATIVE_HUMIDITY    :humidity
   KIND_AMBIENT_TEMPERATURE  :temperature
   KIND_VOLTAGE              :voltage
   KIND_CURRENT              :current
   KIND_COLOR                :color
   KIND_SWITCH               :switch})

(defn bytes-to-float [coll]
  (let [byte-coll (byte-array coll)]
    (try
      (.. (java.nio.ByteBuffer/wrap byte-coll)
                     (order java.nio.ByteOrder/LITTLE_ENDIAN)
                     getFloat)
      (catch Exception e nil))))

(defn value-for [kind data]
  (if (or (= kind KIND_ACCELEROMETER)
          (= kind KIND_MAGNETIC_FIELD)
          (= kind KIND_GYROSCOPE)
          (= kind KIND_COLOR))
      (let [coll (partition 4 data)]
        (into [] (map bytes-to-float coll)))
      (bytes-to-float data)))

(defmethod read-sysex-event SYSEX_TYPE_EVENT
  [in]
    (let [kind      (.read in)
          kind-sym  (get friendly-kinds kind :unknown)
          id        (.read in)
          value     (value-for kind (read-two-byte-data in))
          now (new java.util.Date)]
    {:type :event
     :kind kind-sym
     :id id
     :value value
     :timestamp now}))

(defmethod read-sysex-event SYSEX_TYPE_REGISTER
  [in]
    (let [id   (.read in)
          value (consume-sysex in "" #(str %1 (char %2)))]
    {:type :label
     :id id
     :value value}))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; SIMULATE BOARD
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn simulate-board-events []
  (go-loop []
           (let [data {:type :analog-msg :value (rand-int 1024) :pin (rand-int 6)}]
             (put! event-ch data)
             (<! (timeout 50)))
             (recur)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; PROCESS BOARD EVENTS (SERIAL)
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn read-board-events []
  (let [port (or (:board-port config) "tty.usbmodemfd1231")
;;         baud (or (:board-baud config) 57600)
;;         buff-size (or (:board-buffer-size config) 1023)
;;         board-config {:baud-rate baud :event-buffer-size buff-size}
        ]
    (try
      (reset! board (firmata/open-board port))
      (reset! receiver-ch (firmata/event-channel @board))
        (go-loop []
            (when-some [event (<! @receiver-ch)]
              (>! event-ch event)
              (println event))
            (recur))
      (catch Exception e (println "Firmata connection error: " e)))))

;; (.addShutdownHook (Runtime/getRuntime)
;;                   (Thread. (fn []
;;                              (info "Disconnecting")
;;                              (stop-events @board (firmata/event-channel @board))
;;                              (close! @board))))


(defn start-board-events []
  (if (:board-simulation config)
    (simulate-board-events)
    (read-board-events)))

(defn handle-board-events []
  (go-loop []
     (when-some [event (<! event-ch)]
          (doseq [uid (:any @connected-uids)]
            (events-send! uid [:event/new event])))
     (recur)))
