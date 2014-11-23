(ns testdrive.core
  (:require
    [om.core :as om]
    [testdrive.messages]
    [testdrive.dashboard :refer [dashboard]]
    [testdrive.connections :refer [detect-serial-connection]]
    [testdrive.config :refer [app-state config debug]]
    [testdrive.simulation :refer [simulate-events]]))


(defn init
  "DOM ready initialisation of application"
  []
  (om/root dashboard app-state
    {:target (. js/document (getElementById (config :app-container-id)))})
  (if (config :simulation)
    (simulate-events)
    (detect-serial-connection)))

;; Run init on dom ready
(set! (.-onload js/window) init)
