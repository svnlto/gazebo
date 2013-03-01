# gazebo

__a lightweight AMD scaffold that gets out of the way__

### Prerequisites

the readme assumes that you have NPM and Bower installed.

## Application Structure ##

* `app` - holds your app
* `assets` - images and css
* `bin` - bin files that start the projects webserver in different modes
* `lib` - js libraries (this will be created once you run bower install)
* `prod` - this is where stuff goes post build
* `server` - the actual web server
* `tests` - mocha / chai based unit tests
* `grunt.js`  - [grunt.js](http://gruntjs.com "grunt.js") grunt file ( look out for the watch and build task )
* `testem.yml` - [testem](https://github.com/airportyh/testem "Testem") control file
* `component.json` -  [bower](https://github.com/twitter/bower "bower") bower dependecy spec

## Usage ##

Run the following commands from within the project directory

`npm install` `bower install`

start node service

`node bin/dev`

point your browser to

`http://localhost:4444`

and start hacking.

### Testing

Running your unit tests is as easy as going to `http://localhost:4444/_tests`.

### Build Process

To get a minified version of your app. All you should have to do is run `grunt build`
from within the project directory. This will generate a deployable version of your app right
under: `/prod`


#### Author: [Sven Lito](http://svenlito.com)

#### License: MIT
