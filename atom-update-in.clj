(def app-state
  (atom {:sensors
          {{:kind :temperature :label-id 1} [[21.0, 0]]
           {:kind :temperature :label-id 2} [[32.0, 0]]}
         :labels {}}))

(swap! app-state update-in (:sensors @app-state) [:sensors {:kind :temperature :label-id 1}] conj [99.9 1])


(def app {:sensors {{:kind :temperature :label-id 1} [[21, 0]]}})
;; (update-in app [:sensors {:kind :temperature :label-id 1}] conj [1 1])


(def app2 (atom {:sensors {{:kind :temperature :label-id 1} [[21, 0]]}}))
(swap! app2 update-in [:sensors {:kind :temperature :label-id 1}] conj [1 1])

@app2



(def app-state
  (atom {:sensors
          {{:kind :temperature :label-id 1} [[21.0, #inst "2014-07-26T03:46:29.587-00:00"]]
           {:kind :temperature :label-id 2} [[32.0, #inst "2014-07-26T03:46:29.587-00:00"]]
           {:kind :humidity    :label-id 3} [[62.0, #inst "2014-07-26T03:46:29.587-00:00"]]
           {:kind :pressure    :label-id 2} [[1100.0, #inst "2014-07-26T03:46:29.587-00:00"]]
           {:kind :altitude    :label-id 1} [[120.0, #inst "2014-07-26T03:46:29.587-00:00"]]}
         :labels {1 "Bedroom"
                  2 "kitchen"}}))

(swap! app-state update-in [:sensors {:kind :temperature :label-id 1}] conj [1 1])


(swap! app-state assoc-in [:labels 1] "TEST")



(defn process-new-label [payload]
  (let [id (-> payload :id)
        label (-> payload :value)]
    (swap! app-state assoc-in [:labels id] label)))

(process-new-label {:type :label, :id 2, :value "TEST ME"})
