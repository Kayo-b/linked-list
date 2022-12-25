class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(headNode) {
    this.HEAD = headNode;
    this.HEAD.nextNode = null;
  }

  append(value) {
    const node = new Node(value);
    let temp = this.HEAD;

    while(temp.nextNode != null) {
      temp = temp.nextNode;
    };
    temp.nextNode = node;
  }

  prepend(value) {
    const node = new Node(value);
    let temp = this.HEAD;
    this.HEAD = node;
    node.nextNode = temp;
  }

  size() {
    let count = 0;
    let temp = this.HEAD;
    while(temp.nextNode != null) {
      temp = temp.nextNode;
      count++;
    }
    return count + 1;
  }

  head() {
    return this.HEAD
  }

  tail() {
    let temp = this.HEAD;
    while(temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp
  }

  at(index) {
    let temp = this.HEAD;
    let count = 0
    while(count != index) {
      temp = temp.nextNode;
      count++
    }
    return temp
  }

  pop() {
    let temp = this.HEAD;
    let count = 0;
    while(temp.nextNode != null) {
      temp = temp.nextNode;
      count++;
    };
    this.at(count - 1).nextNode = null;
  }

  contains(value) {
    let temp = this.HEAD;
    while(temp.nextNode != null) {
      if(temp.value === value) return true;
      temp = temp.nextNode;
    }
    if(temp.value === value) return true;
    return false;
  }

  find(value) {
    let temp = this.HEAD;
    while(temp.nextNode != null) {
      if(temp.value === value) return true;
      temp = temp.nextNode;
    }
    if(temp.value === value) return true;
    return false;
  }

  toString() {
    return JSON.stringify(this.HEAD)
  }

  insertAt(value, index) {
    if(index === 0) {
      this.prepend(value);
      return;
    };
    if(index === this.size() - 1) {
      let temp = this.at(this.size() - 1);
      this.pop();
      this.append(value);
      this.tail().nextNode = temp;
      return;
    }
    let temp1 = this.at(index - 1);
    let temp2 = this.at(index); 
    temp1 = temp1.nextNode = new Node(value);
    temp1.nextNode = temp2;
  
  };

  removeAt(index) {
    if(index === 0) {
      this.HEAD = this.HEAD.nextNode;
      return;
    }
    if(index === this.size() - 1) {
      this.pop();
      return
    }
    let first = this.at(index - 1);
    let second = this.at(index + 1);
    first.nextNode = second;
  }
}
