//Stack - LIFO
class Stack {
    constructor() {
      this.data = []; //Initialized empty Stack
    }
    //check whether Stack is empty or not
    isEmpty() {
      return this.data.length == 0;
    }
    //Add Element to Stack
    push(info) {
      this.data.push(info);
    }
    //Remove Element from Stack
    pop() {
      if (this.isEmpty()) {
        return "Stack Underflow";
      }
      return this.data.pop();
    }
    display() {
      console.log(this.data);
    }
    length() {
      console.log("Length: " + this.data.length);
    }
  }