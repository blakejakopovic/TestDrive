(ns seeing.routes.index
  (:use ring.util.response
        [compojure.core :only (defroutes GET)]))

(defroutes routes
  (GET "/" [] (file-response "index.html" {:root "resources/public"})))
