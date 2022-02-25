var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  this.storage[this.back] = string;
  this.back++;
};

queueMethods.dequeue = function() {
  if (this.back - this.front > 0) {
    var holder = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return holder;
  }
};

queueMethods.size = function() {
  return this.back - this.front;
};
