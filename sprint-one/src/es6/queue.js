class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(string) {
    this.storage[this.back] = string;
    this.back++;
  }

  dequeue() {
    if (this.back - this.front > 0) {
      var holder = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return holder;
    }
  }

  size() {
    return this.back - this.front;
  }
}
