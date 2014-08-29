(ns testdrive.stream
	(:require [cljs.nodejs :as nodejs]))

(defprotocol ByteReader
  (read! [this] "reads a byte, and removes it from the stream"))

(extend-type js/Buffer
  ByteReader
  (read! [this]
    (if (not (aget this "__current-index"))
      (aset this "__current-index" 0))

    (let [current-index (aget this "__current-index")
          value (if (< current-index (.-length this)) (.readUInt8 this current-index) -1)
          _ (aset this "__current-index" (inc current-index))]
      value)))

(defprotocol FirmataStream
  (open! [this] "opens the stream")
  (close! [this] "closes the stream")
  (listen [this handler] "listens for data on this stream")
  (write [this data]))

(def SerialPort (.-SerialPort (nodejs/require "serialport")))
(defrecord SerialStream [port-name baud-rate]
  FirmataStream

  (open! [this]
    (let [serial-port (new SerialPort (:port-name this) #js {:baudrate (:baud-rate this)})]
      (assoc this :serial-port serial-port)))

  (close! [this]
    (when-let [serial-port (:serial-port this)]
      (.close serial-port)
      (dissoc this :serial-port)))

  (listen [this handler]
    (when-let [serial-port (:serial-port this)]
      (.on serial-port "data" handler)))

  (write [this data]
    (when-let [serial-port (:serial-port this)]
      (.write serial-port data))))