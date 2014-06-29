(defproject seeing "0.1.0-SNAPSHOT"
  :description "Use Arduino Firmata to collect and visualise data from Arduinos"
  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src" "src/clj"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2234"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [http-kit "2.1.18"]
                 [ring "1.3.0"]
                 [ring/ring-devel "1.3.0"]
                 [ring-cors "0.1.4"]
                 [compojure "1.1.8"]
                 [om "0.6.4"]
                 [clj-firmata "1.1.0"]
                 [clj-time "0.7.0"]
                 [cheshire "5.3.1"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :main seeing.core

  :cljsbuild {
    :builds [{
        :id "dev"
        :source-paths ["src/cljs"]
        :compiler {
            :output-dir "resources/public/js/"
            :output-to  "resources/public/js/main.js"
            :source-map "resources/public/js/main.js.map"
            :optimization :none
            :pretty-print true}}]})
