class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
        }
        else{
            this.last.next = newNode;
        }
        this.last = newNode;

        this.length++;
        return this.length;
    }

    dequeue(){
        if(!this.first) return null;
        let curr = this.first;
        this.first = this.first.next;
        curr.next = null;

        this.length--;
        return curr;
    }

    display(){
        let output = '';
        function helper(curr){
            if(!curr) return;
            output += curr.value + " ";
            helper(curr.next)
        }

        helper(this.first)
        console.log("This is the output" , output)
    }

    peak(){
        if(this.first) return this.first.value
    }

    
}

let q = new Queue();

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

q.display()
console.log( q.peak())

console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())