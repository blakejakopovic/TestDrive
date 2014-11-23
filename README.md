TestDrive Dashboard
===

A **real-time dashboard for visualising Arduino** and micro-controller inner workings. Great for **tinkering**, **robotics**, and **sensor monitoring**.

[![TestDrive Dashboard](https://cloud.githubusercontent.com/assets/427450/3868668/8f5cc922-2059-11e4-8fc0-816bd225f518.png)](http://blakejakopovic.github.io/TestDrive/)

###[Download Mac OS X App Beta](https://github.com/blakejakopovic/TestDrive/releases)

**!! Please be aware that this is an early release. Things may break. APIs may change. Linux and Windows support coming soon.**

## View online simulation demo

To view the demo dashboard, please visit [http://blakejakopovic.github.io/TestDrive/](http://blakejakopovic.github.io/TestDrive/). It uses simulated
sensor readings. Your dashboard will be automatically customised based on the data you send it.

## Key Features

* Simple Arduino library and existing project integration
* Supports many sensor kinds, including **Temperature, Distance, Light, Pressure, Altitude, Humidity, Current and Voltage** (with Acceleration, Magnetic, Orientation, Gyro, Color and others coming soon)

## How it works
TestDrive uses the [TestDrive Arduino](https://github.com/blakejakopovic/testdrive-arduino) library to help you send your sensor data to the dashboard, by extending the popular [Firmata Protocol](http://firmata.org/wiki/Main_Page). Data is currently sent via USB serial connection.

*Note: TCP/UDP/Bluetooth are all being experimented on as alternative ways to receive data.*

## Getting Started (OS X)

1. Download the [TestDrive-Arduino](https://github.com/blakejakopovic/TestDrive-Arduino) library
2. Import the TestDrive-Arduino Library into the Arduino IDE (see [Installing Additional Arduino Libraries](http://arduino.cc/en/Guide/Libraries) for help)
3. Go to `File > Examples > TestDrive > Getting Started` to load the example sketch
4. Upload the sketch to your Arduino
5. Launch TestDrive.app
6. The dashboard should automatically populate with
live widgets after it connects.


## Future
There are plans to support both Serial and TCP communication. This means you won't need to have your serial cable plugged in, and you can visualise data from remote devices.

Improvements to the dashboard, including rearranging widgets, widget size support, more data types,  graphs, maps, 3d visualisations, etc. The goal will be to display your data in the most meaningful way possible.

## Thank you
* [Peter Schwarz](https://github.com/peterschwarz/)
* [Firmata](http://firmata.org/wiki/Main_Page)
* Clojure IRC (chat.freenode.net/#clojure)

## Inspired by
* Bret Victor - [Seeing Spaces (15:11)](http://vimeo.com/97903574)

## Developer dependancies

**Currently developed and tested using OS X 10.10 Yosemite**

* [Clojure](http://clojure.org/)
* [Leiningen](http://leiningen.org/)
* [Nodejs](http://nodejs.org)

## Contributing
All contributions welcome. Just keep in mind it's very early on and many things are still falling into place.

## License

Copyright © 2014 Blake Jakopovic.

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
