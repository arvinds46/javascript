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
      let result = '';
      for (let i of getKeys) {
        let values = this.adjList.get(i);
        var conc = "";
        for (let j of values) {
          conc += j+" ";
        }
        result += i+"  --->  "+conc + "<br>";
      }
      return result;
    }
<<<<<<< HEAD
    search(v) {
      const arrayEntries = this.adjList.entries();
      for (const element of arrayEntries) {
        if (element.includes(v)) {
          return "Node Found";
        }
      }
      return "Node Not Found";
    }
=======
>>>>>>> 949139aa732e4c1c597c9fb71d2650b723cc5cac
  }