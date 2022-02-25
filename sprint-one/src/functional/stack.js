var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var n = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // add a string to the top of the stack
    if (storage[n] === undefined) {
      storage[n] = value;
      n++;
    }
  };

  someInstance.pop = function() {
    // remove and return the string on the top of the stack
    var keys = _.allKeys(storage);
    var last = keys[keys.length - 1];
    var holder = storage[last];
    delete storage[last];
    return holder;
  };

  someInstance.size = function() {
    // return the number of items on the stack
    return _.allKeys(storage).length;
  };

  return someInstance;
};
