(def sensors
  {{:kind :temperature :label-id 1} [[21, 0]]
   {:kind :temperature :label-id 2} [[32, 0]]
   {:kind :humidity    :label-id 1} [[62, 0]]
   {:kind :pressure    :label-id 2} [[1100, 0]]
   {:kind :altitude    :label-id 1} [[120, 0]]})

(assoc-in data [:sensors] (update-in (:sensors data) [{:kind :temperature :label-id 1}] conj [22 1]))


(:kind (key (first sensors)))        ;; kind
(:label-id (key (first sensors)))    ;; label
(first (last (val (first sensors)))) ;; current-value
(last (last (val (first sensors))))  ;; updated-at

(group-by #(:label-id (key %)) (:sensors data)) ;; sensors grouped by id
(vals (group-by #(:label-id (key %)) (:sensors data))) ;; sensors by id

(filter #(= 1 (:label-id (key %))) (:sensors data)) ;; sensors with id = 1
(filter #(= 2 (:label-id (key %))) (:sensors data)) ;; sensors with id = 2


(def data
  {:sensors
      {{:kind :temperature :label-id 1} [[21, 0]]
       {:kind :temperature :label-id 2} [[32, 0]]
       {:kind :humidity    :label-id 1} [[62, 0]]
       {:kind :pressure    :label-id 2} [[1100, 0]]
       {:kind :altitude    :label-id 1} [[120, 0]]}
   :labels {:1 "Bedroom"
            :2 "kitchen"}})





;; (def update {{:kind :temperature :label-id 1} {:value 23 :updated-at #inst "2014-07-22T01:07:02.730-00:00"}})

;; (def d (assoc-in data [:sensors] (update-in data [{:kind :temperature :label-id 1}] conj [10 1])))

;; d

;; (update-in d [{:kind :temperature :label-id 1}] conj [10 1])
