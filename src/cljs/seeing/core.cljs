(ns seeing.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-container-id "seeing-app")

(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 nil (:text data)))))

(om/root widget {:text "Seeing App!!!"}
  {:target (. js/document (getElementById app-container-id))})
