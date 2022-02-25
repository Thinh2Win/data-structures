var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // add a string to the top of the stack
    storage[front] = value;
    front++;

  };

  someInstance.pop = function() {
    // remove and return the string on the top of the stack
    if (front > 0) {
      var holder = storage[front - 1];
      delete storage[front];
      front--;
      return holder;
    }
  };

  someInstance.size = function() {
    // return the number of items on the stack
    return front;
  };

  return someInstance;
};
