(ns seeing.config
  (:require [clojure.edn :as edn]))

(def config (:clj (edn/read-string (slurp "resources/config.edn"))))
