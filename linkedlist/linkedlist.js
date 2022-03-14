class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseNode(index - 1);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    const leader = this.traverseNode(index - 1);
    const unwanted = leader.next;
    leader.next = unwanted.next;
    this.length--;
    return this;
  }
  traverseNode(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  unshift() {
    this.head = this.head.next;
    this.length--;
    return this;
  }

}

const list = new LinkedList(10);
list.append(2);
list.insert(1, 5);
console.log(list);
list.remove(1);
console.log(list);
list.unshift();
console.log(list);
list.append(3);
