# priority.js

Simple priority queue module for Node.js.

**NOTE 1:** This module is in development, not production-ready. It was developed for `montreus-swc`, but will probably be also used in [Oratio.io](http://www.oratio.io).

**NOTE 2:** Version 2.x will have mayor changes and won't have background compatibility.

**NOTE 3:** Version 2.x requires Node.js v0.11.6+, because it uses Generators.

## Installation

    npm install priority.js

Currently, there's only a NPM module available.

## Quick-start Guide

`priority.js` uses Event Listeners. Like this:

``` javascript
var PriorityQueue = require('priority.js') //Import the module

// You can add whatever properties you like to the objects. Just don't forget to add a priority property.
var queue = new PriorityQueue([{name: "Read Books", priority: 1}, {name: "Learn JavaScript", priority: 7}], "descending")

//Or, if having priority as a property is inconvinient, you can do this:
//PriorityQueue.priorityProperty = "myPriorityPropertyName"

console.log(queue.size) //2

var object = queue.next();
console.log(JSON.stringify(object)) //'{"name":"Read Books","priority":1}'

queue.enqueue({name: "Watch a Movie", priority: 3})
queue.enqueue{name: "Go back to Work", priority: 10})

var object = queue.next();
```
