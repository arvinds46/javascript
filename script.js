/*var num1=10;
var num2=10.56;
var test = undefined;
var boole = 67>=50;

document.write(`First Num is ${num2}<br>`);
document.write(`Addition ${num1+num2}<br>`);
document.write(`Boolean Num is ${boole}<br>`);

console.log(typeof(test));

//function -- reusable code
function display(num1, num2) {
    console.log(Math.round(num1+num2, 2));
}
display(num1, num2);
function cube(n) {
    return n*n*n;
}

const result1 = cube(5);//block scope
let result = cube(5);//hoisting is only available to var no let no const(Hoisting means using the variable before its initialisation)
console.log(result1);
console.log(result);
console.log(`Cube of 5 is ${cube(5)}`);

greet();//function hoisting is only available to `function`
function greet() {
    console.log("Greetings!!!");
}*/
//do while loop is EXIT CONTROL LOOP.
/*let num3 = prompt("Enter any number") * 1;//function declaration
let num4 = prompt("Enter any number") * 1;//function declaration
console.log(`Sum : ${num3+num4}`); 
console.log(`Sub : ${num3-num4}`);
console.log(`Mul : ${num3*num4}`); 
console.log(`Div : ${num3/num4}`);

let len = prompt("Enter Length") * 1;
let bred = prompt("Enter Breadth") * 1;
console.log(`Area : ${len*bred}`); 
console.log(`Perimeter : ${2*len*bred}`);

let P = prompt("Enter Principle Amt") * 1
  , R = prompt("Enter ROI") * 1
  , T = prompt("Enter Period") * 1;
console.log(`Simple Interest : ${(P * T * R) / 100}`);

let num5 = prompt("Enter any number") * 1;
function isOdd(num5) { return (num5 % 2) ? 'Number is Odd' : 'Number is Even';}
console.log(isOdd(num5));

let age = prompt("Enter your Age") * 1;
function voterisvalid(age) { return (age <= 18) ? 'Not Eligible' : 'Eligible';}
console.log(voterisvalid(age));

console.log("First 50 Even Numbers");
let x = 1;
while (x !== 101) {
  if (x % 2 == 0)
    console.log(x);
  x++;
}

console.log("First 10 Multiples of Five");
let y = 5;
while (y !== 101) {
  if (y % 5 == 0)
    console.log(y);
  y+5;
}
const name = prompt("Enter your Name!");
const hello = document.getElementById("hello");
hello.innerHTML = `Welcome ${name}!...`;
hello.style.color = "red";
const para = document.getElementById("para");
para.innerText = document.getElementById("para1").innerText + ' ' + document.getElementById("para2").innerText;

const cp = prompt("Enter cost price of an Item") * 1;
const sp = prompt("Enter selling price of an Item") * 1;
const result= (sp>cp) ? `Profit of ${sp-cp}` : (sp==cp) ? `Profit of ${cp-sp}` : `Loss of ${cp-sp}`;
const para1 = document.getElementById("para");
para1.style.color = "red";
para1.innerHTML = `Item Cost ${cp}/- <br> Item Sold ${sp}/- <br> ${result}`;
const para = document.getElementById("para");
const cities = ['Mumbai','Pune','Bangalore','Delhi','Chennai'];
const movies = ['ABC', 'BGM'];
const players = ["Sachin","Kapil Dev"];
const wrng = "Guess is wrong. Better Luck next time.";
const crt = "You guessed correct!";
const num = prompt("Enter any number") * 1;
switch(num) {
    case 1:     const z = prompt("Enter any City Name");
                if (cities.indexOf(z) > -1) para.innerHTML = crt;
                else para.innerHTML = wrng;
                break;
    case 2:     const zz = prompt("Enter any Movie Name");
                if (movies.indexOf(zz) > -1) para.innerHTML = crt;
                else para.innerHTML = wrng;
                break;
    case 3:     const zzz = prompt("Enter any Cricket Player Name");
                if (players.indexOf(zzz) > -1) para.innerHTML = crt;
                else para.innerHTML = wrng;
                break;
}*/

const list = document.querySelectorAll("p");
const ele1 = document.createElement("div");
ele1.textContent = "My New Div";
for (var ele of list) {
  ele.style.fontSize = "20px";
  ele.appendChild(ele1);
}
//Arrow Functions are used to pass function as a parameter
const welcome = (name) => "Good Morning..." + name;
const calculate = (a,b) => {
  let num1 = a+b;
  let num2 = a-b;
  return num1*num2;
}
console.log(welcome("Arvind"));
console.log(calculate(3,4));

const newArray = [1,2,3,4,5,6,7,8];
newArray.forEach((value,index) => {
  console.log(index + " " + value);
});

const newArray1 = newArray.map((value) => value*3); //Arrow Function
console.log(newArray1);

//Spread Operators
const num1 = [1,2,3];
const num2 = [4,5,6];

const newArray2 = [...num1, ...num2];
console.log(newArray2);

function sumNumbers(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log(sumNumbers(1,2,3,4,5));

//Destructuring

const newArray3 = ["Arvind","Hi",36,"a@gmail.com","India"];
const [firstName, lastName, age, email, country] = newArray3;

console.log("First Name: " + firstName + " Age: " + age);

//Callback - passing function as parameter to work with Asynchronous Functionality of JS
let data = [];
function func2(func3) {
  setTimeout(() => {
    data = [1,2,3,45,6,7,89];
    console.log("Data Fetching Executed");
    func3(); //sync flow
  }, 3000); //Arrow Function
}

function func3() {
  for (let x of data) {
    console.log(x);
  }
  console.log("Data Display done");
}

func2(func3);
console.log("Data Fetch done") //async flow

//Callback Hell
//Multiple Callbacks bad practice
//Promises

const myPromise = new Promise((resolve, reject) => {
  if (45>90) resolve({message:"Success....!!!"});
  else reject({message:"Fail....!!!"});
});

myPromise
.then((resp) => JSON.stringify(resp))
.then((resp) => console.log(resp))
.catch((err) => console.log("Error Occured: ", err));

//Fetch API
const url = "https://jsonplaceholder.typicode.com/users";

const mypromise1 = fetch(url);

mypromise1
.then((resp)=>resp.json())
.then((json)=>{
  let data='';
  json.forEach(element => {
    data+=`<tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.username}</td>
    </tr>`;
  });

  document.getElementById("tbody").innerHTML = data;
})
.catch((err)=>console.log(err));

//Async and Await
async function fetchData() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await resp.json();
    console.log(json);
  } catch(err) {
    console.log("Error: ", err);
  }
}

fetchData();

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
    this.items = data;
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
});
map.clear();
console.log(map.size);

//Graphs
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v,[]);
  }
  addEdge(v,w) {
    this.adjList.get(v).push(w);
    //unidirectional graph mean point both sides
    this.adjList.get(w).push(v);
  }

  printGraph() {
    //get all vertices
    var getKeys = this.adjList.keys();
    for (let i of getKeys) {
      let values = this.adjList.get(i);
      var conc = "";
      for (let j of values) {
        conc += j+" ";
      }
      console.log(i+"  --->  "+conc);
    }
  }
}

var g = new Graph();
var vertices = ["A","B","C","D","E"];
for (let i=0;i<vertices.length;i++) {
  g.addVertex(vertices[i]);
}
//adding edges
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("A","D");
g.addEdge("B","C");
g.addEdge("D","B");
g.addEdge("D","C");
g.addEdge("E","A");

g.printGraph();