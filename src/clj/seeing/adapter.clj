(ns seeing.adapter)

(defrecord SerialPort [port config])
(defrecord TCPServer [port])
(defrecord UDPServer [port])

(defprotocol FirmataInterface
  (connect [this])
  (write [this])
  (read [this])
  (stop [this]))

(extend-protocol FirmataInterface
  SerialPort
  (connect [this]
           (swap! (:board this) (board/connect @(:port this)))
  (write [this bytes]
         )
  (read [this]
        )
  (stop [this]
        (board/close! @(:board this)))))
