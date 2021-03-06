var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.front = 0;
};

Stack.prototype.push = function(string) {
  this.storage[this.front] = string;
  this.front++;
};

Stack.prototype.pop = function() {
  if (this.front > 0) {
    var holder = this.storage[this.front - 1];
    delete this.storage[this.front];
    this.front--;
    return holder;
  }
};

Stack.prototype.size = function() {
  return this.front;
};

