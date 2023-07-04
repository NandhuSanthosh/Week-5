// video i refered to solve this problem - https://youtu.be/G5So-9Vw1fo
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

var MyStack = function() {
    this.queue = new MyQueue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(val) {
     this.queue.enqueue(val)

        for(let i = 1; i<this.queue.length; i++){
            let n = this.queue.dequeue()
            this.queue.enqueue(n)
        }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */