(ns seeing.core
  (:require [taoensso.timbre :as timbre
             :refer (trace debug info warn error fatal)]
            [seeing.config  :refer [config]]
            [seeing.handler :as handler]
            [seeing.board   :as board]))

(defn setup-logger []
  (timbre/set-level!(or (:log-level config) :debug)))

(defn -main [& args]
  (setup-logger)

  (info "Server Starting...")
  (handler/start-server)

  (board/handle-board-events)
  (info "Ready for board events.")

  (board/start-board-events)
  (info "Processing board events."))


;; #<IllegalArgumentException java.lang.IllegalArgumentException: No implementation of method: :take! of protocol: #'clojure.core.async.impl.protocols/ReadPort found for class: nil>
