(ns seeing.config
  (:require [clojure.edn :as edn]))

(def ^{:private true} empty-config "{}")

(defn- read-config []
  (try
    (slurp "resources/config.edn")
    (catch Exception e empty-config)))

(def config (-> (read-config)
                edn/read-string
                :clj))
