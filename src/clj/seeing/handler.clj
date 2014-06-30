(ns seeing.handler
  (:use [compojure.core :only (defroutes GET)]
        [org.httpkit.server :only (run-server)])
  (:require [ring.middleware.reload :as reload]
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.cors :as cors]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [seeing.middleware :refer [wrap-timbre]]
            [seeing.routes.index :as index]
            [seeing.routes.events :as events]
            [seeing.config :refer [config]]))

(defroutes app-routes
  index/routes
  events/routes

  (route/resources "/")
  (route/not-found "Not Found")

  (wrap-anti-forgery
    {:read-token (fn [req] (-> req :params :csrf-token))}))


(def app (-> (handler/site app-routes)
             (wrap-timbre {})
             reload/wrap-reload
             (cors/wrap-cors :access-control-allow-origin #".+"
                        :access-control-allow-methods [:get])))

(defn start-server []
  (let [port (or (:port config) 4567)]
    (run-server app {:port port :join? false})))