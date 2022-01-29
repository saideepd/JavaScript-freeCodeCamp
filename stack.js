class Stack {
    constructor() {
        this.items = [];
    }

    // Insert new item in stack
    push(item) {
        console.log(`Item inserted at position: ${this.items.push(item)} in stack`);
    }

    // Delete the top-most element from stack & return it
    pop() {
        if(this.items.length === 0)
            return "Stack Underflow";
        return this.items.pop();
    }

    // Return the top-most element from stack
    peek() {
        if(this.items.length === 0)
            return "Stack Underflow";
        return this.items[this.items.length - 1];
    }

    // Check whether the lenght of stack is 0
    // And return boolean result
    isEmpty() {
        return this.items.length === 0;
    }

    // Set the length of stack to 0 to simulate empty stack
    clear() {
        return this.items.length = 0;
    }

    // Print the elements of array using map
    printStack() {
        return this.items.map(element => {
            return element;
        });
    }

    // Returns length of stack
    length() {
        return this.items.length;
    }
}

// instantiate object of Stack class
// And invoke each methods of stack
let stack = new Stack();

// Length: 0
console.log(`Length: ${stack.length()}`);
// Is the stack empty?: true
console.log(`Is the stack empty?: ${stack.isEmpty()}`);
// []
console.log(stack.printStack());
// Item inserted at position: 1 in stack
stack.push(10);
// Item inserted at position: 2 in stack
stack.push(20);
// Item inserted at position: 3 in stack
stack.push(30);
// [ 10, 20, 30 ]
console.log(stack.printStack());
// Length: 3
console.log(`Length: ${stack.length()}`);
// Item that has been removed from stack: 30
console.log(`Item that has been removed from stack: ${stack.pop()}`);
// Item that has been removed from stack: 20
console.log(`Item that has been removed from stack: ${stack.pop()}`);
// Item that has been removed from stack: 10
console.log(`Item that has been removed from stack: ${stack.pop()}`);
// Item that has been removed from stack: Stack Underflow
console.log(`Item that has been removed from stack: ${stack.pop()}`);
// Item present at top of stack: undefined
console.log('Item present at top of stack: ' + stack.peek());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
// Item present at top of stack: 30
console.log('Item present at top of stack: ' + stack.peek());
// The stack has been cleared: 0
console.log(`The stack has been cleared: ${stack.clear()}`);
// []
console.log(stack.printStack());

