(ns seeing.middleware
  (:require [taoensso.timbre :as timbre
    :refer (trace debug info warn error fatal spy with-log-level)]))

(defn wrap-timbre [handler config]
  (fn [request]
    (let [response (handler request)]
      (info (str "uri: " (:uri request) " - status: " (:status response)))
      (when (:websocket? request)
        (info "Received WebSocket request: " (:body request)))
      response)))
