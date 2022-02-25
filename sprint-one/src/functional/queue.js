var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var back = 0;
  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue
    storage[back] = value;
    back++;
  };
  var front = 0;
  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    if (back - front > 0) {
      var holder = storage[front];
      delete storage[front];
      front++;
      return holder;
    }
  };

  someInstance.size = function() {
    // should return the number of items in the queue
    return back - front;
  };
  return someInstance;
};

// understanding the assignment
// Queue is going to be our class function that creates multiple instances with similar elements
