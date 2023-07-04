/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

 class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyQueue{
    constructor(){
        this.front = null;
        this.rare = null;
        this.length = 0;
    }

    enqueue(val){
        let newNode = new Node(val)
        if(!this.front){
            this.front = newNode
        }
        else{
            this.rare.next = newNode;
        }
        this.rare = newNode;
        this.length++;
    }

    dequeue(){
        if(!this.front) return null
        let nodeToDelete = this.front;
        this.front = this.front.next;
        this.length--;
        return nodeToDelete.val;
    }

    isEmpty(){
        return this.length === 0
    }

    peek(){
        if(!this.front) return;
        return this.front.val
    }
}

class MyStack{
    constructor(){
        this.top = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)

        newNode.next = this.top;
        this.top = newNode;
    
        this.length++;
    }

    pop(){
        if(!this.top) return null;
        let nodeToDelete = this.top

        this.top = this.top.next;
        nodeToDelete.next = null;
        this.length--;

        return nodeToDelete.val
    }

    peek(){
        if(!this.top) return null
        return this.top.val
    }

    empty(){
        return this.length === 0
    }


}

var countStudents = function(students, sandwiches) {
    let studentsQueue = new MyQueue();
    for(let i = 0; i<students.length; i++){
        studentsQueue.enqueue(students[i])
    }
    let sandwichesStack = new MyStack()
    for(let i = 1; i<=sandwiches.length; i++){
        sandwichesStack.push(sandwiches[sandwiches.length - i])
    }

    let m = studentsQueue.length;
    while(studentsQueue.length && m){
        if(studentsQueue.peek() == sandwichesStack.peek()){
            studentsQueue.dequeue();
            sandwichesStack.pop();
            m = studentsQueue.length;
        }
        else{
            m--;
            let n = studentsQueue.dequeue();
            studentsQueue.enqueue(n)
        }
    }

    return studentsQueue.length;
};
