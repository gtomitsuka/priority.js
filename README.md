# priority.js

Simple priority queue module for Node.js.

## Installation

    npm install priority.js

Currently, there's only a NPM module available.

## Quick-start Guide

`priority.js` uses Event Listeners. Like this:

``` javascript
var Priority = require('priority.js') //Import the module
,   queue = new Priority([{name: "Leonard", priority: 1}, {name: "Justin", priority: 7}], "descending")

console.log(queue.size) //2

queue.on('dequeue', function(object){ //On this listener, the object gets automatically dequeued.
    console.log(queue.size) //1
    queue.emit('queue', {name: "Mark", priority: 3})
    queue.emit('queue', {name: "Alexander", priority: 5})
    console.log(queue.size) //3
}) //Note: This sample code is an infinite loop.

queue.on('error', function(error){
    console.error(error)
})
```
