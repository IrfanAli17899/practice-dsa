class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(size) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.size = size;
  }

  peek() {
    return this.top;
  }

  push(value) {
    if (this.length + 1 > this.size) {
      throw new Error("Stack Overflow");
    }
    const newNode = new Node(value);
    if (this.length === 0) {
        this.top = newNode;
        this.bottom = this.top;
    }else{
        newNode.next = this.top;
        this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      throw new Error("Stack Underflow");
    }
    this.top = this.top.next;
    if (!this.top) this.bottom = this.top;
    this.length--;
    return this;
  }
}

const stack = new Stack(5);
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push(2));
console.log(stack.push(3));
