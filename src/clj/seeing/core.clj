(ns seeing.core
  (:require [clojure.core.async :refer [<!!]]
            [firmata.core :refer [open-board close! event-channel query-firmware enable-analog-in-reporting]]))


(def board (atom nil))

(reset! board (open-board "cu.usbmodemfd1231"))


(let [ch    (event-channel @board)
      _     (query-firmware @board)
      event (<!! ch)]
  (println (:type event))
  (println (:version event))
  (println (:name event))

  (enable-analog-in-reporting @board 0 true)

  (loop [event (<!! ch)]
    (println (:value event))
    (recur (<!! ch))))


(defn -main [& args]
  (println "Seeing App"))
