(ns seeing.tcp
  (:use [lamina.core]
        [aleph.tcp]
        [aleph.formats]))

(defn tcp-handler [ch client-info]
  (receive ch
    #(do (println (slurp (bytes->input-stream %)))
         (println "next..."))))

;; (defn tcp-handler [ch client-info]
;;   (receive ch
;;     #(let [in (bytes->input-stream %)
;;            firmata-fn (firmata-handler {:state board-state :channel read-ch})]
;;        (firmata-fn in)
;;        (println (slurp in))
;;        (println ("next...")))))


(start-tcp-server tcp-handler {:port 5678})
