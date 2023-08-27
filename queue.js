//Queue - FIFO
class Queue {
    constructor() {
      this.items = []; //Initialized with array
      this.headIndex = 0; //front end
      this.tailIndex = 0; //tail end
    }
    enqueue(item) {
      this.items[this.tailIndex] = item;
      this.tailIndex++;
    }
    dequeue() {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
    peek() {
      return this.items[this.headIndex];
    }
    getLength() {
      return this.tailIndex - this.headIndex;
    }
  }