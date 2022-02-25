var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(string) {
  this.storage[this.back] = string;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.back - this.front > 0) {
    var holder = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return holder;
  }
};

Queue.prototype.size = function() {
  return this.back - this.front;
};
