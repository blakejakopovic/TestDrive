(ns testdrive.messages
	(:require [firmata.sysex 
							:refer [read-sysex-event consume-sysex 
							read-two-byte-data]]
						[firmata.stream.spi :refer [read!]]
						[cljs-time.core :refer [now]]))

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
(def KIND_PROXIMITY             0x07 )
(def KIND_HUMIDITY              0x08 )
(def KIND_TEMPERATURE           0x09 )
(def KIND_VOLTAGE               0x10 )
(def KIND_CURRENT               0x11 )
(def KIND_COLOR                 0x12 )
(def KIND_SWITCH                0x13 )
(def KIND_ROTATION              0x14 )
(def KIND_COUNTER               0x25 )
(def KIND_LATLONG               0x26 )


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
        ;; TODO: Tidy up
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
      
      ;; Handle single value 
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
     :kind-id kind-id
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