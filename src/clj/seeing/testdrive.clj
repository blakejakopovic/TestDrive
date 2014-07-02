(ns testdrive
  (:require [clojure.core.async
              :refer [go-loop chan sliding-buffer put! <! >! timeout]]
            [firmata.core :as f]))

(def board (atom nil))
(def receiver (atom nil))

(defn read-board-events []
    (try
      (reset! board (f/open-board "cu.usbmodemfd1231"))
      (reset! receiver (f/event-channel @board))
        (go-loop []
            (when-some [event (<! @receiver)]
              (println event))
            (recur))
      (catch Exception e (println "Firmata connection error: " e))))

(read-board-events)

(do
;;   (firmata.receiver/stop-receiver @receiver)
  (f/close! @board))

(f/close! @board)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (reduce #(bit-or (bit-shift-left %1 7) (bit-and %2 0x7f)) 0 [0 0 5 27])

;; (let [bytes (byte-array [102 102 174 65])]
;;   (.. (java.nio.ByteBuffer/wrap bytes)
;;       (order java.nio.ByteOrder/LITTLE_ENDIAN)
;;       getFloat))

;; (map to-number (partition 2 [0 102 0 102 1 46 0 65]))

;; (reduce #(bit-or (bit-shift-left %1 7) (bit-and %2 0x7f)) 0 [0 0 1 8])

;; (defn to-number
;;   "Converts a sequence of bytes into an (long) number."
;;   [values]
;;   (reduce #(bit-or (bit-shift-left %1 7) (bit-and %2 0x7f)) 0 values))

;; (map to-number (partition 2 [127 116 0 8 127 115 0 8]))

;; (second (map to-number (partition 2 [0 100 0 0 0 50])))
