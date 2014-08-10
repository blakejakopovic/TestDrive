(ns seeing.board
  (:use [seeing.sysex])
  (:require [clojure.core.async
              :refer [go chan put! <! >! timeout]]
            [taoensso.timbre :as timbre
              :refer (trace debug info warn error fatal)]
            [firmata.core :refer [open-board event-channel close!]]
            [serial.core :as serial]
            [seeing.config :refer [config]]
            [seeing.routes.events :refer [broadcast-event!]]))

(def ^{:private true} board (atom nil))
(def ^{:private true} receiver-ch (atom nil))

(defn- substring? [sub st]
  (not= (.indexOf st sub) -1))

(defn- arduino-port?
  "Compares port name with known arduino port formats"
  [port-name]
  (or
    (substring? "tty.usbmodem" port-name)      ;; Uno or Mega 2560
    (substring? "tty.usbserial" port-name)))   ;; Older boards

(defn- detect-arduino-port
  "Returns the first arduino serial port based on port name, or nil"
  []
  (first (filter arduino-port?
                 (map #(.getName %) (serial/port-ids)))))

(defn read-board-events
  "Reads arduino serial data containing TestDrive messages"
  [port-name]
  (let [port (or port-name
                 (:serial-port config)
                 (detect-arduino-port)
                 "tty.usbmodemfa1331")]

    (info "Connecting to Arduino using" port)

    (try
      (reset! board (open-board port))
      (reset! receiver-ch (event-channel @board))
      (.addShutdownHook (Runtime/getRuntime)
                  (Thread. (fn []
                             (info "Disconnecting")
                             (close! @board))))
        (go (while true
            (if-let [event (<! @receiver-ch)]
              (broadcast-event! event))))

      (catch Exception e
        (do
          (println "Firmata connection error: " (.getMessage e))
          (System/exit 1))))))
