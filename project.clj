(defproject seeing "0.1.0-SNAPSHOT"
  :description "Use Arduino Firmata to collect and visualise data from Arduinos"
  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src" "src/clj"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"] ;; 0.0-2234

                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [org.clojure/core.match "0.2.1"]

                 [http-kit "2.1.18"]

                 [ring "1.3.0"]
                 [ring/ring-devel "1.3.0"]
                 [ring-cors "0.1.4"]

                 [com.taoensso/sente "0.14.1"]
                 [com.taoensso.forks/ring-anti-forgery "0.3.1"]
                 [com.taoensso/timbre "3.2.1"]

                 [compojure "1.1.8"]
                 [om "0.6.4"]

                 [clj-firmata "1.1.1-SNAPSHOT"]
                 [clj-time "0.7.0"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :main seeing.core
  :ring {:handler seeing.handler/app}

  :cljsbuild {
    :builds [{
        :id "dev"
        :source-paths ["src/cljs"]
        :compiler {
            :output-dir "resources/public/js/"
            :output-to  "resources/public/js/main.js"
            :source-map "resources/public/js/main.js.map"
            :optimization :none
            :pretty-print true}}]}

  :repl-options {:init (require 'seeing.repl)})
