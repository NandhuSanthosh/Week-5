class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    pop(){
        if(!this.head){
            console.log("empty stack")
            return new Node();
        }
        this.length--;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp;
    }

    display(curr = this.head){
        if(!curr) return;
        console.log(curr.value)
        this.display(curr.next)
    }

    peak(){
        if(!this.head) return null;
        return this.head.value;
    }

    // inserting into the stack without using another stack
    insertInto(value, pos){
        if(this.length <= pos) return false;

        let helperStack = new Stack();
        let helper = (p)=>{
            if(p == 0){
                this.push(value)
                return;
            }
            let currNode = this.pop();
            helper(p - 1)
            this.push(currNode.value)
        }
        helper(pos)
        this.length++;
        return this.length;

    }

    // inserting into the stack with using another stack
    insertIntoUsingAnotherStack(value, pos){
        if(this.length <= pos) return false;

        let newStack = new Stack();

        for(let i = 0; i<pos; i++){
            newStack.push(this.pop().value);
        }

        this.push(value)

        for(let i = 0; i<pos; i++){
            this.push(newStack.pop().value);
        }

        return ++this.length;
    }
}

let s = new Stack();
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)

console.log("updated size" , s.insertIntoUsingAnotherStack(99, 3));
s.display();
console.log("updated size" , s.insertInto(99, 3));
s.display();
console.log("The last element inserted into the stack is " + s.peak())

// console.log(s.pop().value)
// console.log(s.pop().value)
// console.log(s.pop().value)
// console.log(s.pop().value)
// console.log(s.pop().value)
// console.log(s.pop().value)