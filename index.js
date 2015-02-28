/* priority.js - index.js
 */

var EventEmitter = require('events'); //For emmiting events
var priority = new EventEmitter();
var util = require('util');

function Priority(initial, sort) {
	
	var queue = [];
	var self = this;
	queue = initial; //On start, the queue will be the initial values
	
	this.on('queue', function(object){ queue.push(object) });
	this.size = function(){ return queue.length()};
	
	
	this.on('dequeueRequest', function(){
		if(sort == "ascending")
			var next = queue.sort(compareAscending)[0];
		else if(sort == "descending")
			var next = queue.sort(compareDescending)[0];
		else
			self.emit('error', new Error("Invalid array sorting type"));
			
		self.emit('dequeue', next);
		queue.shift();
	});
}

function compareDescending(a, b) {
  if (a.priority < b.priority)
     return -1;
  if (a.priority > b.priority)
    return 1;
  return 0;
}

function compareAscending(a, b) {
  if (a.priority < b.priority)
     return 1;
  if (a.priority > b.priority)
    return -1;
  return 0;
}

util.inherits(Priority, EventEmitter);
module.exports = Priority;
