(ns seeing.board
  (:require [clojure.core.async
              :refer [go-loop chan sliding-buffer put! <! >! timeout]]
            [taoensso.timbre :as timbre
              :refer (trace debug info warn error fatal)]
            [firmata.core :as firmata]
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

(def ^{:private true} SYSEX_TYPE_EVENT        0x01 )
(def ^{:private true} SYSEX_TYPE_REGISTER     0x02 )


(defn bytes-to-float [coll]
  (let [byte-coll (byte-array coll)]
    (.. (java.nio.ByteBuffer/wrap byte-coll)
                   (order java.nio.ByteOrder/LITTLE_ENDIAN)
                   getFloat)))

(defmethod firmata/read-sysex-event SYSEX_TYPE_EVENT
  [in]
    (let [kind  (.read in)
          id    (.read in)
          data  (firmata/read-two-byte-data in)
          value (bytes-to-float data)]
    {:type :event
     :kind kind
     :id id
     :value value}))

(defmethod firmata/read-sysex-event SYSEX_TYPE_REGISTER
  [in]
    (let [id   (.read in)
          data (firmata/consume-sysex in "" #(str %1 (char %2)))]
    {:type :label
     :id id
     :value data}))


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
  (let [port (or (:board-port config) "cu.usbmodemfd1231")
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
