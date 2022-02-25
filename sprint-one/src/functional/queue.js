var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var n = 0;
  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue
    if (storage[n] === undefined) {
      storage[n] = value;
      n++;
    }
  };
  var d = 0;
  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    var holder = storage[d];
    delete storage[d];
    d++;
    return holder;
  };

  someInstance.size = function() {
    // should return the number of items in the queue
    return _.allKeys(storage).length;
  };
  return someInstance;
};

// understanding the assignment
// Queue is going to be our class function that creates multiple instances with similar elements
