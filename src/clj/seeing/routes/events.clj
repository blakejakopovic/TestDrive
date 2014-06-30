(ns seeing.routes.events
  (:use [compojure.core :only (defroutes GET POST)]
        [taoensso.sente :as sente]
        [clojure.core.match :as match :refer (match)]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-events                     ch-recv)
  (def events-send!                  send-fn)
  (def connected-uids                connected-uids))

(defroutes routes
  (GET  "/events" req (ring-ajax-get-or-ws-handshake req))
  (POST "/events" req (ring-ajax-post                req)))

(defn- event-msg-handler
  [{:as ev-msg :keys [ring-req event ?reply-fn]} _]
  (let [session (:session ring-req)
        uid     (:uid session)
        [id data :as ev] event]

    (println "Event: %s" ev)
    (match [id data]
    ;; TODO: Match your events here, reply when appropriate <...>
    :else
    (do (println "Unmatched event: %s" ev)
        (when-not (:dummy-reply-fn? (meta ?reply-fn))
          (?reply-fn {:umatched-event-as-echoed-from-from-server ev}))))))

(defonce chsk-router
  (sente/start-chsk-router-loop! event-msg-handler ch-events))
