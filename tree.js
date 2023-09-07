const origConsoleLog = console.log;
const logArr = [];
console.log = (...args) => {
  origConsoleLog.apply(console, args);
  logArr.push(args);
};
var logAll = () => {
  return logArr.join('\n');
};

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        //root node by default null
        this.root = null;
    }
    //insert the node at root level
    insert(data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    //insert the node either left or right
    insertNode(node,newNode) {
        if (newNode.data<node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                // if left is not null then repeat
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                // if right is not null then repeat
                this.insertNode(node.right, newNode);
            }
        }
    }
    //tree traversal
    traversal(temp) {
        if (temp != null) {
            console.log(temp.data);
            this.traversal(temp.left);
            this.traversal(temp.right);
        }
    }
    // remove node
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // delete node with 2 childs
            var x = this.findMinNode(node.right);
            node.data = x.data;
            node.right = this.removeNode(node.right, x.data);
            return node;
        }
    }
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}