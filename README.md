Mission Control
===
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Mission_control_center.jpg/640px-Mission_control_center.jpg" width="500" />

A **real-time dashboard for visualising Arduino** and micro-controller inner workings. Great for **tinkering**, **robotics**, **sensor monitoring**, and more.

**!! Please be aware that this is an early release. Things may break. APIs may change. I may look silly.**

## How it works 
Mission Control uses the [TestDrive Arduino](#) library to help you send your sensor and related data to the dashboard, using an extension of the popular [Firmata Protocol](http://firmata.org/wiki/Main_Page).

## Data-flow
**Arduino ~> Serial ~> Computer ~> WWW ~> Dashboard**

*Note: TCP/UDP/Bluetooth are all being experimented with as alternative ways to receive data.* 

## Demo!

To view the demo dashboard, please visit [URL](URL). It uses simulated
sensor readings, but your dashboard will be automatically customised based on the data you send it.

## Key Features

* Simple Arduino library and existing project integration
* Supports many sensor readings, including **Acceleration, Magnetic, Orientation, Gyro, Temperature, Distance, Light, Pressure, Humidity, Current, Voltage, and Color**
* Ability to show the same dashboard on multiple screens (including TVs, laptops, tablets, smart phones, projectors, and other browser enabled devices)


## Dependancies

* Java 7+
* [Clojure/Clojurescript](http://clojure.org/)
* [Leiningen](http://leiningen.org/)

*Note: I am working on porting the server to a node.js , which will enable node-webkit releases and fewer dependencies.*

## Getting Started

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
live widgets.

```

## Future
There are plans to support both Serial and TCP communication. This means you won't need to have your serial cable plugged in, and you can visualise data from remote devices.

To make it easier to use, I am planning to compile the clojurescript code to nodejs, and then distribute Mission Control as a node-webkit application. This means you will only need to launch an app, and have everything just work.

Improvements to the dashboard, including rearranging widgets, widget size support, more data types,  graphs, maps, 3d visualisations, etc. The goal will be to display your data in the most meaningful way possible.

## Thank you
* [Peter Schwarz](https://github.com/peterschwarz/)
* [Clojure IRC](irc://chat.freenode.net/#clojure)
* [Firmata](http://firmata.org/wiki/Main_Page)

## Inspired by
* Bret Victor - [Seeing Spaces (15:11)](http://vimeo.com/97903574)

## Contributing
All contributions welcome.

## License

Copyright © 2014 Blake Jakopovic

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.