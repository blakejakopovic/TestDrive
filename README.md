TestDrive Dashboard
===

A **real-time dashboard for visualising Arduino** and micro-controller inner workings. Great for **tinkering**, **robotics**, **sensor monitoring**, and more.

[![TestDrive Dashboard](https://cloud.githubusercontent.com/assets/427450/3868668/8f5cc922-2059-11e4-8fc0-816bd225f518.png)](http://blakejakopovic.github.io/TestDrive/)

**!! Please be aware that this is an early release. Things may break. APIs may change. I may look silly.**

## How it works 
TestDrive uses the [TestDrive Arduino](#) library to help you send your sensor and related data to the dashboard, using an extension of the popular [Firmata Protocol](http://firmata.org/wiki/Main_Page).

## Data-flow
**Arduino ~> USB Serial ~> Computer ~> Web Server ~> Dashboard**

*Note: TCP/UDP/Bluetooth are all being experimented on as alternative ways to receive data.* 

## Demo!

To view the demo dashboard, please visit [http://blakejakopovic.github.io/TestDrive/](http://blakejakopovic.github.io/TestDrive/). It uses simulated
sensor readings, but your dashboard will be automatically customised based on the data you send it.

## Key Features

* Simple Arduino library and existing project integration
* Supports many sensor readings, including **Temperature, Distance, Light, Pressure, Altitude, Humidity, Current and Voltage** (with Acceleration, Magnetic, Orientation, Gyro, Color and others coming soon)
* Ability to show the same dashboard on multiple screens at the same time (including TVs, laptops, tablets, smart phones, projectors, and other browser enabled devices)

## Dependancies

**Currently developed and tested using OS X 10.10 Yosemite**

* Java
* [Clojure/Clojurescript](http://clojure.org/)
* [Leiningen](http://leiningen.org/)

*Note: I am working on porting the server to node.js , which will enable node-webkit based application releases and fewer dependencies.*

## Getting Started (OS X)
```
# Download the project
$ git clone https://github.com/blakejakopovic/TestDrive.git
$ cd TestDrive

# Download the TestDrive Arduino Library (TestDrive-Arduino)
1. Load the TestDrive-Arduino Library* into the Arduino IDE*
2. Open TestDriveExample.ino
3. Upload the sketch to the Arduino
*(make sure you keep your Arduino plugged in)

# Compile the dashboard clojurescript code
$ lein cljsbuild once

# Start the TestDrive server
$ lein run

# Open the dashboard in your browser
$ open http://localhost:4567/

The dashboard should automatically populate with
live widgets.

```
1. [TestDrive Arduino Library](https://github.com/blakejakopovic/testdrive-arduino)
2. [Installing Additional Arduino Libraries](http://arduino.cc/en/Guide/Libraries)

## Future
There are plans to support both Serial and TCP communication. This means you won't need to have your serial cable plugged in, and you can visualise data from remote devices.

To make it easier to use, I am planning to compile the clojurescript code to nodejs, and then distribute TestDrive as a node-webkit application. This means you will only need to launch an app, and have everything just work.

Improvements to the dashboard, including rearranging widgets, widget size support, more data types,  graphs, maps, 3d visualisations, etc. The goal will be to display your data in the most meaningful way possible.

## Thank you
* [Peter Schwarz](https://github.com/peterschwarz/)
* [Firmata](http://firmata.org/wiki/Main_Page)
* Clojure IRC (chat.freenode.net/#clojure)

## Inspired by
* Bret Victor - [Seeing Spaces (15:11)](http://vimeo.com/97903574)

## Contributing
All contributions welcome. Just keep in mind it's very early on and many things are still falling into place.

## License

Copyright © 2014 Blake Jakopovic

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.