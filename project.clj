(defproject seeing "0.1.0-SNAPSHOT"
  :description "Real-time dashboard for visualising Arduino and micro-controller inner workings"
  :url "http://github.com/blakejakopovic"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src" "src/clj"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2307"]

                 [org.clojure/core.async "0.1.303.0-886421-alpha"]

                 [http-kit "2.1.18"]

                 [ring "1.3.0"]
                 [ring/ring-devel "1.3.0"]
                 [ring-cors "0.1.4"]
                 [com.taoensso.forks/ring-anti-forgery "0.3.1"]

                 [com.taoensso/timbre "3.2.1"]

                 [compojure "1.1.8"]

                 [clj-firmata "1.1.2"]
                 [clj-serial "2.0.1"]

                 [om "0.7.1"]

                 [clj-time "0.8.0"]
                 [com.andrewmcveigh/cljs-time "0.1.6"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :main seeing.core

  :cljsbuild {
    :builds [
       {:id "dev"
        :source-paths ["src/cljs"]
        :compiler {
            :output-dir "resources/public/js/"
            :output-to  "resources/public/js/main.js"
;;             :source-map "resources/public/js/main.js.map"
            :optimization :none
            :pretty-print true}
         :notify-command ["terminal-notifier"
                                         "-title"
                                         "CljsBuild Complete"
                                         "-contentImage" ;; appIcon
                                         "resources/clojure-icon.png"
                                         "-message"]}]})
