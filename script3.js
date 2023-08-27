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
}
//use the Stack
let books = new Stack();
books.push("Comedy");
books.push("Comics");
books.push("History");
books.push("Chemistry");
//Check the Stack
books.display();
console.log("Stack Empty? " + books.isEmpty());
//Remove Elements from Stack
console.log(books.pop());
console.log(books.pop());
console.log(books.pop());
console.log(books.pop());

console.log("Stack Empty? " + books.isEmpty());

//Queue - FIFO
class Queue {
  constructor(data) {
    this.items = data; //Initialized with array
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

let songs = new Queue(["Song1", "Song2", "Song3"]);
songs.enqueue("Song4");

console.log(songs.peek() + " is playing");

console.log("Length " + songs.getLength());

console.log(songs.dequeue() + " Finished");
console.log(songs.peek() + " is playing");
console.log(songs.dequeue() + " Finished");
console.log(songs.peek() + " is playing");
console.log(songs.dequeue() + " Finished");
console.log(songs.peek() + " is playing");

//LinkedList
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //add new Node
  add(ele) {
    let newNode = new Node(ele);
    let temp;
    if (this.head == null) {
      this.head = newNode;
    } else {
      temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.size++;
  }
  removeElement(ele) {
    let curr = this.head;
    let prev = null;

    while (curr != null) {
      if (curr.data == ele) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size++;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }
  displayList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let lists = new LinkedList();
lists.add(10);
lists.add(20);
lists.add(30);

lists.displayList();
lists.removeElement(20);
lists.displayList();

//Map
let map= new Map();
map.set(1,"sonam");
map.set(2,"pooja");
map.set(3,"gourav");
map.set(4,"arvind");

console.log(map);
console.log("Size: "+map.size);
console.log("Get: "+map.get(4));
console.log("Remove: "+map.delete(3));
console.log(map);

map.forEach((value,key)=>{
  console.log(key + "  "+value);
});//Arrow Function
map.clear();
console.log(map.size);