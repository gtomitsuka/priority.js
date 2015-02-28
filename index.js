/* priority.js - index.js
 */

var EventEmitter = require('events'); //For emmiting events
var priority = new EventEmitter();
var util = require('util');

function Priority(initial) {
	
	var queue = [];
	var self = this;
	queue = initial; //On start, the queue will be the initial values
	
	this.on('queue', function(object){ queue.push(object) });
	this.size = function(){ return queue.length()};
	
	var first = queue.sort(compare)[0];
	self.emit('dequeue', first);
	queue.shift();
	
	this.on('dequeueRequest', function(){
		var next = queue.sort(compare)[0];
		self.emit('dequeue', next);
		queue.shift();
	});
}

function compare(a,b) {
  if (a.priority < b.priority)
     return -1;
  if (a.priority > b.priority)
    return 1;
  return 0;
}

module.exports = Priority;
