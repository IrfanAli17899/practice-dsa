class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) {
      return null;
    }
    if (this.first === this.last) {
        this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const q = new Queue();
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
