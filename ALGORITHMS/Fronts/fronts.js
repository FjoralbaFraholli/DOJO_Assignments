// Add Front:

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
}

// Example usage
const SLL1 = new SLL();
console.log(SLL1.addFront(18)); // Node { data: 18, next: null }
console.log(SLL1.addFront(5)); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.addFront(73)); // Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }



// Remove Front:
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }
}

// Example usage
const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.removeFront()); // Node { data: 18, next: null }
console.log(SLL1.removeFront()); // null (list is empty)



// Front:
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    front() {
        if (!this.head) {
            return null; // If the list is empty, return null
        }
        return this.head.data;
    }
}

// Example usage
const SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
console.log(SLL1.front()); // 5
console.log(SLL1.removeFront()); // Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1.front()); // 18
console.log(SLL1.removeFront()); // Node { data: 18, next: null }
console.log(SLL1.front()); // null
