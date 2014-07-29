# TestDrive Real-time Dashboard

Real-time dashboard for visualising Arduino and micro-controller inner workings. Great for **tinkering**, **robots**, **weather stations** and more.

Arduino ~> Serial ~> Computer ~> WWW ~> Dashboard

## Demo!

To view the demo dashboard, please visit [URL](URL). It uses simulated
sensor readings, but your dashboard will be automatically customised for
your usage.

## Key Features

* Easy to use Arduino library
* Automatic dashboard creation based on the data you send it
* Supports a tonne of different sensor types; including temperature, humidity, voltage, current, pressure, orientation, acceleration, gyroscopic tilt, colour, latitude and longitude, switches and more.
* Ability to show the same dashboard on multiple screens (including TVs, laptops, tablets, smart phones, projectors, and other browser enabled devices)


## Dependancies

* Java
* Clojure
* Leiningen
* Arduino IDE (or way to upload sketches)

## Usage

```
# Download the project
$ git clone ...
$ cd ...

# Download the TestDrive Arduino Library (TestDrive-Arduino)
Load the TestDrive Arduino Library into the Arduino IDE
Open the example TestDriveExample.ino
Upload the sketch to the Arduino

# Find your serial port path
$ ls /dev/tty.*

look for <usbmodemxxxx>

# Compile the dashboard clojurescript
$ lein cljsbuild once

# Start the TestDrive server
$ lein run <tty.usbmodemxxxx>

# Open the dashboard in your browser
$ open http://localhost:4567/

The dashboard should automatically populate with
sample widgets.

```

## Future
There are plans to support both Serial and TCP communication. This means you won't need to have your serial cable plugged in, and you can show data from remote devices.

To make it easier to use, I am planning to compile the clojurescript to nodejs, and then distribute TestDrive as a node-webkit application. This means you will only need to launch an app, and have everything just work.

Improvements to the dashboard, including rearranging widgets. Adding graphs, maps, 3d visualisations, etc. However we can best represent your data.

## Thank you to
* [Peter Schwarz](https://github.com/peterschwarz/)
* [#clojure IRC channel](irc://...)
* [Firmata]()
* Justin Smith
* technomancy
* nkozo
* bblo..

## Inspired by
* Bret Victor - [Seeing Spaces (15:11)](http://vimeo.com/97903574)

## License

Copyright © 2014 Blake Jakopovic

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
