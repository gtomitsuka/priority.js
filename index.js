/* priority.js - index.js
 * Open-source! Developed by gtomitsuka.
 */

function PriorityQueue(initial, sort) {
	var Queue = [];
	this.priorityProperty = 'priority'; //Later changeable
	this.length = Queue.length;
	this.sort = sort;
	this.prototype.enqueue = function(item){
		Queue.push(item);
	}
	this.prototype.dequeue = function(){
		Queue.sort(dynamicSort(this.priorityProperty));
	}
}

PriorityQueue.prototype.__iterator__ = function(){
  return new QueueIterator(this);
};

function QueueIterator(queue){
  this.queue = queue;
}

QueueIterator.prototype.next = function(){
  if (this.current > this.queue.length)
    throw StopIteration;
  else
    return this.queue.dequeue;
};

//Util Methods
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
module.exports = PriorityQueue;
