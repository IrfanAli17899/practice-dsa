class Stack {
  constructor(size) {
    this.size = size;
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    if (this.data.length + 1 > this.size) {
      throw new Error("Stack Overflow");
    }
    this.data.push(value);
    return this;
  }

  pop() {
    if (!this.data.length) {
      throw new Error("Stack Underflow");
    }
    return this.data.pop();
  }
}

const stack = new Stack(5);
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.peek());
