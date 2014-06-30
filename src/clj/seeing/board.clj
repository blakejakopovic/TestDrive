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

(def event-ch (chan (sliding-buffer (or (:board-buffer-size config) 1023))))

(defn simulate-board-events []
  (go-loop []
           (let [data {:type :analog-msg :value (rand-int 1024) :pin (rand-int 6)}]
             (put! event-ch data)
             (<! (timeout 50)))
             (recur)))

(defn read-board-events []
  (let [port (or (:board-port config) "cu.usbmodemfd1231")
        baud (or (:board-baud config) 57600)
        buff-size (or (:board-buffer-size config) 1023)
        board-config {:baud-rate baud :event-buffer-size buff-size}]
    (try
      (reset! board (firmata/open-board port board-config))
      (firmata/enable-analog-in-reporting @board 1 true)
      (firmata/enable-analog-in-reporting @board 2 true)
      (let [firmata-ch (firmata/event-channel @board)]
        (go-loop []
            (when-some [event (<! firmata-ch)]
              (>! event-ch event)
              (println event))
            (recur)))
      (catch Exception e (println "Firmata connection error: " e)))))

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
