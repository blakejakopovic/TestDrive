(def data
  {:sensors
      {{:kind :temperature :label-id 1} [[21, 0]]
       {:kind :temperature :label-id 2} [[32, 0]]
       {:kind :humidity    :label-id 1} [[62, 0]]
       {:kind :pressure    :label-id 2} [[1100, 0]]
       {:kind :altitude    :label-id 1} [[120, 0]]}
   :labels {:1 "Bedroom"
            :2 "kitchen"}})


(:kind (key (first sensors)))        ;; kind
(:label-id (key (first sensors)))    ;; label
(first (last (val (first sensors)))) ;; current-value
(last (last (val (first sensors))))  ;; updated-at

(group-by #(:label-id (key %)) (:sensors data)) ;; sensors grouped by id
(vals (group-by #(:label-id (key %)) (:sensors data))) ;; sensors by id

(filter #(= 1 (:label-id (key %))) (:sensors data)) ;; sensors with id = 1
(filter #(= 2 (:label-id (key %))) (:sensors data)) ;; sensors with id = 2




(def BUFFER-SIZE 2)
(def data [[0 1] [2 3] [4 5]])
(vec (take-last BUFFER-SIZE data))

(def new [6 7])

(conj (vec (take-last BUFFER-SIZE data)) new)



(conj (vec (take-last BUFFER-SIZE c)) NEW)
(def d [[1 2] [3 4] [5 6] [7 8] [9 10]])
(conj (vec (take-last 3 c)) [11 12])


(def f nil)
(conj (vec (take-last 3 f)) [11 12])
