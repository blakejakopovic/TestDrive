(ns testdrive.core
  (:require [taoensso.timbre :as timbre
             :refer (trace debug info warn error fatal)]
            [testdrive.config  :refer [config]]
            [testdrive.handler :as handler]
            [testdrive.board   :as board]))

(defn setup-logger []
  (timbre/set-level! (or (:log-level config) :info)))

(def server-url
  (let [port (or (:server-port config) 4567)]
    (str "http://localhost:" port "/")))

(defn -main [& args]
  (setup-logger)

  (handler/start-server)
  (info "Server Running...")

  (let [port-name (first *command-line-args*)]
    (board/read-board-events port-name))
  (info "Reading board events...")

  (info "Open" server-url "in your browser"))
