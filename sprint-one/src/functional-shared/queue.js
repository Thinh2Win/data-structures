// functional shared:
//Create an object that holds the methods that will be shared by all instances of the class
//Use the keyword this in your methods
//Use _.extend  to copy the methods onto the instance

// what the assignment is asking:
// shared functions are outside of the class function
// so we're recreating
// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue

var Queue = function() {


  var someInstance = {
    storage: {},
    front: 0,
    back: 0,
  };
  _.extend(someInstance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(string) {
  // add a string to the back of the que
  this.storage[this.back] = string;
  this.back++;

};


queueMethods.dequeue = function() {
  // Remove and return the string at the front of the queue
  if (this.back - this.front > 0) {
    var holder = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return holder;
  }
};

queueMethods.size = function() {
  // size() - Return the number of items in the queue
  return this.back - this.front;
};
