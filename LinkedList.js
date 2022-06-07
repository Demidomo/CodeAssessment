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
  
  print() {
    let str = ''; 
    let curr = this.head;   // this head is the arrow 
    while (curr !== null) { // as long as the arro wis not pointing to the last value
      str += curr.val;      // the arrow pointing node will be added to the str 
      curr = curr.next;     // move the arrow to the next node
    }
    console.log(str); 
  
  contains(target) {
    let curr = this.head;
    while (curr!== null) {
      if (curr.val === target) {
        return true;
        {
          curr = curr.next
        }
        
        return false;
      }

}

const list = new LInkedList()
list.append('a');
list.append('b');
list.append('c');
list.append('d'); 
console.log(list.head); // prints out the 'a' node
list.print();
// a -> b
// abcd

list.contains('a'); //true 
list.contains('b'); // true
list.contains('c');
list.contains('d');
list.contains('z');
list.contains('f');
