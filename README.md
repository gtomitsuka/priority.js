# priority.js

Simple priority queue module for Node.js.

**NOTE:** Version 2.x has mayor changes and won't have background compatibility.

## Installation

    npm install priority.js

Currently, there's only a NPM module available.

## Quick-start Guide

``` javascript
var PriorityQueue = require('priority.js') //Import the module

// You can add whatever properties you like to the objects. Just don't forget to add a priority property.
var queue = new PriorityQueue([{name: "Read Books", priority: 1}, {name: "Learn JavaScript", priority: 7}])

//Or, if having "priority" as your priority property is inconvinient, you can do this:
//queue.priorityProperty = "myPriorityPropertyName";
queue.sort = 'descending'; //Options: 'ascending', 'descending', or your own sorting function

console.log(queue.length) //2

console.log(queue.dequeue()) //{ name: 'Learn JavaScript', priority: 7 }

queue.enqueue({name: "Watch a Movie", priority: 3})
queue.enqueue({name: "Go back to Work", priority: 10})

console.log(queue.dequeue()); //{ name: 'Go back to Work', priority: 10 }
```
