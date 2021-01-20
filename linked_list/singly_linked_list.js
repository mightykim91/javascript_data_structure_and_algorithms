//Singly linked list in javascript.

//Define class for Node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    toString() {
        return `data: ${this.val}, next: ${this.next}`;
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
        //#Case2(Non empty list)
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    //Define instance method for remove action(removing last node)
    pop() {
        //#Case1(Empty List)
        if(!this.head){
            return "List is empty!";
        //#Case2(Non empty list)
        } else {
            //Set node to be head(for start loop from the beginning)
            let node = this.head;
            let newTail = node;
            //Traverse to second element to end.
            while(node.next != null) {
                newTail = node;
                node = node.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length -= 1;
            if(this.length === 0) {
                return "List is empty!";
            }
            return this;
        }
    }
    //Define instance method to remove first element in list.
    shift() {
        //If list is empty return empty message
        if(!this.head) {
            return "List is empty!";
        } else {
            let newHead = this.head.next;
            this.head = newHead;
            this.length--;
            if(this.length === 0) {
                return "List is empty!";
            }
            return this.head.toString();
        }
    }
}

//Instantiation
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(0);
singlyLinkedList.push(1);
singlyLinkedList.push(2);
//console.log(singlyLinkedList);
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.shift());

//output
/*
SinglyLinkedList {
  head: Node { val: 0, next: Node { val: 1, next: null } },
  tail: Node { val: 1, next: null },
  length: 2
}
*/