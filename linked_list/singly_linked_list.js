//Singly linked list in javascript.

//Define class for Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Define class for Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    //Define instance method for push action(adding new node to list)
    push(val) {
        //Create new node
        let node = new Node(val);
        //#Case1(Empty List)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
}

//Instantiation
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(0);
singlyLinkedList.push(1);
console.log(singlyLinkedList);

//output
/*
SinglyLinkedList {
  head: Node { val: 0, next: Node { val: 1, next: null } },
  tail: Node { val: 1, next: null },
  length: 2
}
*/