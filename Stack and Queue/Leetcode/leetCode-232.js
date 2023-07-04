
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
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

var MyQueue = function() {
    this.stack = new MyStack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let helperStack = new MyStack()
    for(let i = 1; 1<this.stack.length; i++){
        helperStack.push(this.stack.pop())
    }
    let nodeToDelete = this.stack.pop()
    for(let i = 1; helperStack.length; i++){
        this.stack.push(helperStack.pop())
    }

    return nodeToDelete
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let helperStack = new MyStack()
    for(let i = 1; 1<this.stack.length; i++){
        helperStack.push(this.stack.pop())
    }
    let nodeToDelete = this.stack.pop()
    this.stack.push(nodeToDelete)
    for(let i = 1; helperStack.length; i++){
        this.stack.push(helperStack.pop())
    }
    return nodeToDelete
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.empty()
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */