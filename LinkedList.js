class Node {
  constructor(val) { 
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; 
  }
  
  append() {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    
    let curr = this.head;
    while (curr.next !== null) { // keep looping until you hit the tail
      curr = curr.next; // keep reassigning this node, setting it to next 
    }
    curr.next = new Node(val); //add a new node to the end
      
  
}

const list = new LInkedList()
list.append('a');
list.append('b');
list.append('c');
list.append('d'); 
console.log(list.head); // prints out the 'a' node
// a -> b
