(ns testdrive.config
  (:require [cljs.core.async :refer [chan]]))


(enable-console-print!)

(def app-state
  "The initial application state"
  (atom {;; Dom ID of application container
         :app-container-id "testdrive-app"

         ;; Board connection status
         :connected? false

         ;; Console visibility
         :console-hidden? true

         ;; Set the maximum number of data points per sensor
         :max-data-points 100

         ;; Set the total maximum number of log entries
         :max-log-entries 100

         ;; Enable console (debug) logging
         :debug false

         ;; Enable simulation mode
         :simulation false

         ;; Shared events channel
         :event-ch (chan 10)

         ;; Connection events channel
         :connection-ch (chan)}))


(defn config [k]
  (get @app-state k))

(defn debug []
  (config :debug))
