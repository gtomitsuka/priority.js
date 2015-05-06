var assert = require("assert");
var PriorityQueue = require('priority.js');
describe('PriorityQueue', function(){
  //TO DO: Add more tests
  it('should be able to create a new queue with an array as an argument', function(){
    assert(new PriorityQueue([{something: 'test', priority: 10}]))
  })
})
