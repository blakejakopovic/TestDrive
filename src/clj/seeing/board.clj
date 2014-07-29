(ns seeing.board
  (:use [seeing.sysex])
  (:require [clojure.core.async
              :refer [go chan put! <! >! timeout]]
            [taoensso.timbre :as timbre
              :refer (trace debug info warn error fatal)]
            [firmata.core :as firmata]
            [serial.core :as serial]
            [seeing.config :refer [config]]
            [seeing.routes.events :refer [broadcast-event!]]))

(def board (atom nil))
(def receiver-ch (atom nil))

(defn- substring? [sub st]
  (not= (.indexOf st sub) -1))

(defn port-match
  "Compares a board port string with known arduino port names"
  [s]
  (or
    (substring? "tty.usbmodem" s)      ;; Uno or Mega 2560
    (substring? "tty.usbserial" s)))   ;; Older boards

(defn detect-board-port
  "Detect arduino serial port based on it's port name"
  []
  (first (filter port-match
                 (map #(.getName %) (serial/port-ids)))))

(defn read-board-events
  "Reads arduino serial data containing TestDrive messages"
  [port-name]
  (let [port (or port-name (detect-board-port) "tty.usbmodemfa1331")]
    (info "Connecting to Arduino using" port)
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
      (catch Exception e
        (do
          (println "Firmata connection error: " (.getMessage e))
          (System/exit 0))))))
