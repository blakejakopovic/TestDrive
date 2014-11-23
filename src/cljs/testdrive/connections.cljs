(ns testdrive.connections
  (:require
    [cljs.core.async :refer [<! >! put!]]
    [testdrive.config :refer [config debug]]
    [firmata.core :refer [open-serial-board event-channel]]
    [cljs.nodejs :as nodejs])

   (:require-macros
    [cljs.core.async.macros :refer [go]]))


(def board (atom nil))
(def receiver-ch (atom nil))

(defn handle-board-connected [new-board]
  (reset! board new-board)
  (reset! receiver-ch (event-channel @board))

  ;; Send open event
  (put! (config :connection-ch) :open)

  ;; Read board events
  (go
   (while true
     (let [event-ch (config :event-ch)]
       (when-let [event (<! @receiver-ch)]
         (if (debug) (println "Event: " event))
         (>! event-ch event))))))

(defn init-serial-board [port]
  (if port
    (open-serial-board port handle-board-connected)))

(defn auto-detect-serial-port [callback-fn]
  (let [list-fn (.-list (nodejs/require "serialport"))]
         (list-fn (fn [err ports]
             (loop [i (- (.-length ports) 1)]
               (let [port (aget ports i)
                     name (.-comName port)]
                (if-let [match (re-matches #"^(/dev/)?(tty|cu)\.usbmodem.*$" name)]
                  (callback-fn (first match)))
                (if (> 0 i)
                  (recur i)
                  (callback-fn nil))))))))

(defn detect-serial-connection []
  (auto-detect-serial-port init-serial-board))
