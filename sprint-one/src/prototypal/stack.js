var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.front = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  this.storage[this.front] = string;
  this.front++;
};

stackMethods.pop = function() {
  if (this.front > 0) {
    var holder = this.storage[this.front - 1];
    delete this.storage[this.front];
    this.front--;
    return holder;
  }
};

stackMethods.size = function() {
  return this.front;
};
