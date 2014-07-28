(ns seeing.board
  (:require [clojure.core.async
              :refer [go chan put! <! >! timeout]]
            [taoensso.timbre :as timbre
              :refer (trace debug info warn error fatal)]
            [firmata.core :as firmata]
            [seeing.sysex]
            [seeing.config :refer [config]]
            [seeing.routes.events :refer [broadcast-event!]]))

(def board (atom nil))
(def receiver-ch (atom nil))

(defn read-board-events
  "Reads arduino serial data containing TestDrive messages"
  [port-name]
  (let [port (or port-name "tty.usbmodemfa1331")]
    (try
      (reset! board (firmata/open-board port))
      (reset! receiver-ch (firmata/event-channel @board))
      (.addShutdownHook (Runtime/getRuntime)
                  (Thread. (fn []
                             (info "Disconnecting")
                             (firmata/close! @board))))
        (go (while true
            (if-let [event (<! @receiver-ch)]
              (broadcast-event! event))))
      (catch Exception e (do
                           (println "Firmata connection error: " (.getMessage e))
                           (System/exit 0))))))
