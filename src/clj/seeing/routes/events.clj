(ns seeing.routes.events
  (:use [compojure.core :only (defroutes GET POST)])
  (:require [org.httpkit.server :refer [with-channel websocket? on-close on-receive send!]]
            [clojure.core.async :refer [<! >! put! close! go]]
            [taoensso.timbre :as timbre
             :refer (trace debug info warn error fatal)]))

(def clients (atom {}))

(defn ws-on-close [status request channel]
  (swap! clients dissoc channel)
  (debug channel "disconnected from /events. status: " status))

(defn ws-on-receive [message-string request channel]
  (debug message-string))

(defn ws-handler
  [request]
  (with-channel request channel
    (if (websocket? channel)
      (do
        (swap! clients assoc channel true)
        (debug channel "connected to /events")
        (on-close channel #(ws-on-close % request channel))
        (on-receive channel #(ws-on-receive % request channel))))))

(defn broadcast-event! [data]
  (debug data)
  (doseq [client @clients]
    (send! (key client) (prn-str data))))

(defroutes routes
  (GET  "/events" [] ws-handler))
