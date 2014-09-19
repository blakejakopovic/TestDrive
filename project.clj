(defproject testdrive "0.1.0-SNAPSHOT"
  :description "Real-time dashboard for visualising Arduino and micro-controller inner workings"
  :url "http://github.com/blakejakopovic"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-npm "0.4.0"]
            [lein-node-webkit-build "0.1.1"]
            [lein-bower "0.5.1"]
            [lein-shell "0.4.0"]]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]

                 [clj-firmata "2.0.0-SNAPSHOT"]
                 [clj-serial "2.0.1"]

                 [om "0.7.3"]

                 [com.andrewmcveigh/cljs-time "0.1.6"]]

  ;; cljbuild config
  :cljsbuild {
    :builds [
       {:id "dev"
        :source-paths ["src/cljs"]
        :compiler {
            :output-to  "resources/public/js/main.js"
            :optimization :whitespace
            :pretty-print true }
         :notify-command ["terminal-notifier"
                             "-title" "Build Complete"
                             "-contentImage" "resources/clojure-icon.png"
                             "-message" ]}

        {:id "release"
        :source-paths ["src/cljs"]
        :compiler {
            :output-to "resources/public/js/main.js"
            :optimization :advanced }}

      {:id "demo"
        :source-paths ["src/cljs"]
        :compiler {
            :output-to "demo/js/main.js"
            :optimization :advanced
            :pretty-print true }}]}

  ;; npm dependancies
  :node-dependencies [[bower "1.3.11"]
                      [node-pre-gyp "0.5.25"]]

  ;; node-webkit config
  :node-webkit-build {:root "resources/public"
                      :name "TestDrive"
                      :osx { :icon "resources/dashboard-512.icns" }
                      :platforms #{ :osx64 }
                      :nw-version "0.10.5"
                      :output "releases"
                      :disable-developer-toolbar false
                      :use-lein-project-version true
                      :tmp-path "nw-build" }

  ;; bower config
  :bower { :directory "resources/public/vendor" }
  :bower-dependencies [[bootstrap "3.2.0"]
                       [react "0.11.1"]]
  
  ;; lein aliases
  :aliases { "install-dep" ["do" ["npm" "install"]
                                 ["bower" "install"]
                                 ["shell" "scripts/build_nw_serialport"]]

             "build-dev"   ["do" ["cljsbuild" "clean" "dev"] 
                                 ["cljsbuild" "once" "dev"]
                                 ["node-webkit-build"]]
            
             "build-rel"   ["do" ["cljsbuild" "clean" "release"]
                                 ["cljsbuild" "once" "release"]
                                 ["node-webkit-build"]]

             "repack"      ["node-webkit-build"]})