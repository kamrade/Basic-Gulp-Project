(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var sayHello = require('./say-hello');
var consoleDebug = require('./modules/console-debug');

sayHello();
consoleDebug('Me');

var testBabel = function testBabel() {
  console.log('test babel');
};

},{"./modules/console-debug":2,"./say-hello":3}],2:[function(require,module,exports){
"use strict";

// var $ = require('jquery');

module.exports = function (output) {
  console.log(output + " : this text is from console-debug module 04");
  // $('.sub-title').text('we are glad to see you');
};

},{}],3:[function(require,module,exports){
'use strict';

// var $ = require('jquery');

module.exports = function () {
  console.log('Hello 14');
  // $('.title').text('Welcome here 1');
};

},{}]},{},[1])

//# sourceMappingURL=build.js.map
