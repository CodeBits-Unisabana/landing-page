import { JsxElement } from "typescript";

class myNode {
  value: JsxElement;
  next: myNode | null;
  constructor(value: JsxElement) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: myNode | null;
  bottom: myNode | null;
  length: number;
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value: JsxElement) {
    const newNode = new myNode(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
}

const myStack = new Stack();
