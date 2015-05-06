/* priority.js - index.js
 * Open-source! Developed by gtomitsuka.
 */

function PriorityQueue(initial) {
	this._queue = initial || [];
	this.priorityProperty = 'priority'; //Later changeable
	this.length = this._queue.length;
	this.sort = 'descending';
}

PriorityQueue.prototype.__iterator__ = function(){
  return new QueueIterator(this);
}
PriorityQueue.prototype.enqueue = function(item){
	this._queue.push(item);
}
PriorityQueue.prototype.dequeue = function(){
  var _sortFunction;
	if(typeof this.sort === 'string'){
	  var _priorityProperty = this.sort === 'descending' ? '-' + this.priorityProperty : this.priorityProperty;
	  _sortFunction = dynamicSort(_priorityProperty);
	}else if(typeof this.sort === 'function'){
		_sortFunction = this.sort;
	}else{
	  throw new Error('Invalid data type for queue.type property.');
	}
	this._queue.sort(_sortFunction);
	return this._queue.shift();
}

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
