(ns seeing.core
  (:use [compojure.core :only (defroutes GET)]
        ring.util.response
        ring.middleware.cors
        org.httpkit.server)
  (:require [clojure.core.async :as async]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.reload :as reload]
            [firmata.core :as firmata]))

(def clients (atom #{}))

(defn ws-on-connect [channel]
  (swap! clients conj channel))

(defn ws-on-close [status request channel]
  (swap! clients disj channel))

(defn ws-on-receive [message-string request channel]
    (println "WS:" message-string))

(defn ws-handler
  [request]
  (with-channel request channel
    (if (websocket? channel)
      (do
        (ws-on-connect channel)
        (on-close channel #(ws-on-close % request channel))
        (on-receive channel #(ws-on-receive % request channel))))))

(defroutes routes
  (GET  "/"   [] (file-response "index.html" {:root "resources/public"}))
  (GET  "/ws" [] ws-handler)
  (route/resources "/")
  (route/not-found "Not Found"))

(def application (-> (handler/site routes)
                     reload/wrap-reload
                     (wrap-cors :access-control-allow-origin #".+"
                                :access-control-allow-methods [:get])))


(def board (atom nil))

(def event-ch (async/chan))

(defn read-board-events []
  (try
    (reset! board (firmata/open-board "cu.usbmodemfd1231"))
    (firmata/enable-analog-in-reporting @board 1 true)
    (firmata/enable-analog-in-reporting @board 2 true)
    (let [firmata-ch (firmata/event-channel @board)]
      (async/go
        (loop []
          (when-let [event (async/<! firmata-ch)]
            (async/put! event-ch event)
            (println event))
        (recur))))
    (catch Exception e (println "Firmata connection error: " e))))


(defn simulate-board-events []
  (async/go
    (loop []
      (async/put! event-ch {:type :analog-msg :value (rand-int 1024) :pin 4})
      (Thread/sleep 50)
    (recur))))


(defn process-board-events []
  (async/go
   (loop []
     (when-let [event (async/<! event-ch)]
       (if-not (empty? @clients)
         (doseq [client @clients]
           (send! client (pr-str event)))))
     (recur))))


(defn -main [& args]
  (println "Server Starting...")
  (run-server application {:port 4567 :join? false})
  (println "Started.")
  (read-board-events)
;;   (simulate-board-events)
  (process-board-events))
