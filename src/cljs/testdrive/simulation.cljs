(ns testdrive.simulation

  (:require
    [cljs.core.async :refer [<! >! put! timeout]]
    [testdrive.config :refer [config debug]]
    [cljs-time.core :refer [now]])

  (:require-macros
    [cljs.core.async.macros :refer [go]]))


;; EVENT MESSAGE
;; {:type :event,
;;  :kind :temperature,
;;  :id 2,
;;  :value 25.6,
;;  :timestamp #inst "2014-07-26T05:13:29.051-00:00"}

;; LABEL MESSAGE
;; {:type :label,
;;  :id 2,
;;  :value "Main Bedroom"}

;; LOG MESSAGE
;; {:type :log,
;;  :id 0,
;;  :value "Hello World"}


(defn- generate-event
  "Simulate a real semi-random event"
  []
  (rand-nth
   [{:type :event :kind :temperature :id 1
     :value (+ 19.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :pressure :id 2
     :value (+ 995 (rand-int 11)) :timestamp (now)}
    {:type :event :kind :humidity :id 3
     :value (+ 58.0 (rand-int 8)) :timestamp (now)}
    {:type :event :kind :altitude :id 1
     :value (+ 15.0 (rand-int 6)) :timestamp (now)}
    {:type :event :kind :voltage :id 2
     :value (+ 3.0 (rand-int 2)) :timestamp (now)}
    {:type :label :id 1 :value "Main Bedroom"}
    {:type :label :id 2 :value "Kitchen"}
    {:type :log :id 2 :value "Hello"}
    {:type :log :id 1 :value "World"}
    {:type :log :id 0 :value "General message"}]))


(defn simulate-events
  "Start event simulation"
  []
  (if (debug)
    (println "Using event simulator"))
  (put! (config :connection-ch) :open)
  (go (while true
        (let [event    (generate-event)
              event-ch (config :event-ch)]
          (>! event-ch event)
          (if (debug) (println "Simulated Event: " event))
          (<! (timeout 100))))))
