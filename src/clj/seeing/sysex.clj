(ns seeing.sysex
  (:require [firmata.core :refer
             [read-sysex-event
              consume-sysex
              read-two-byte-data]]))

(def ^{:private true} SYSEX_TYPE_EVENT           0x01 )
(def ^{:private true} SYSEX_TYPE_REGISTER        0x02 ) ;; LABEL
(def ^{:private true} SYSEX_TYPE_LOG             0x03 ) ;; NEW

(def ^{:private true} KIND_ACCELEROMETER         0x01 ) ;;;
(def ^{:private true} KIND_MAGNETIC_FIELD        0x02 ) ;;;
(def ^{:private true} KIND_ORIENTATION           0x03 )
(def ^{:private true} KIND_GYROSCOPE             0x04 ) ;;;
(def ^{:private true} KIND_LIGHT                 0x05 )
(def ^{:private true} KIND_PRESSURE              0x06 )

(def ^{:private true} KIND_PROXIMITY             0x08 )
(def ^{:private true} KIND_HUMIDITY              0x12 )
(def ^{:private true} KIND_TEMPERATURE           0x13 )

(def ^{:private true} KIND_VOLTAGE               0x15 )
(def ^{:private true} KIND_CURRENT               0x16 )
(def ^{:private true} KIND_COLOR                 0x17 ) ;;;
(def ^{:private true} KIND_SWITCH                0x18 )
(def ^{:private true} KIND_ROTATION              0x19 )
(def ^{:private true} KIND_COUNTER               0x20 )
(def ^{:private true} KIND_LATLONG               0x21 )

;; KIND_ROTATION (degrees)

(def friendly-kinds
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

(defn- bytes-to-float
  "Takes a collection of 4 bytes and returns it's float value"
  [coll]
  (let [byte-coll (byte-array coll)]
    (try
      (.. (java.nio.ByteBuffer/wrap byte-coll)
                     (order java.nio.ByteOrder/LITTLE_ENDIAN)
                     getFloat)
      (catch Exception e nil))))

(defn- value-for
  "Returns one or more float values based on event kind"
  [kind data]
  (if (or (= kind KIND_ACCELEROMETER)
          (= kind KIND_MAGNETIC_FIELD)
          (= kind KIND_GYROSCOPE)
          (= kind KIND_COLOR))
      (let [coll (partition 4 data)]
        (into [] (map bytes-to-float coll)))
      (bytes-to-float data)))

;;
;; The following extends the internal multi-method defined
;; in clj-firmata. It takes an event type and returns a
;; hash-map a type key and appropriate values.
;;

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

(defmethod read-sysex-event SYSEX_TYPE_LOG
  [in]
  (let [value (consume-sysex in "" #(str %1 (char %2)))]
    {:type :log
     :value value}))
