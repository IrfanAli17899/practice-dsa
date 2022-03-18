class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return undefined;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return currentNode;
      } else if (value < currentNode.value) {
        // Left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // Right
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(JSON.stringify(bst));

//       9
//  4        20
//1   6   15   170
