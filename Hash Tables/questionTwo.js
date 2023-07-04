/* Given an array of integers, find two numbers that add up to a given target sum. For example, given the array [2, 7, 11, 15] and target sum 9, the output should be [2, 7]. You can solve this problem efficiently using a hash table to store the complements of each number as you iterate through the array. */

class HashTable{
    constructor(size = 53){
        this.size = size;
        this.hashTable = new Array(size);
    }

    _hash(str, arrayLength){
        let output = 0;
        for(let x of str){
            output += x.charCodeAt(0) - 96;
            output %= arrayLength;
        }
        return output;
    }

    set(key, value){
        let index = this._hash(key, this.size);
        if(!this.hashTable[index]){
            this.hashTable[index] = [];
        }
        else{
            for(let x of this.hashTable[index]){
                if(x[0] == key){
                    x[1] = value;
                    return;
                }
            }
        }
        this.hashTable[index].push([key, value])
    }

    get(key){
        let index = this._hash(key, this.size);
        if(this.hashTable[index]){
            for(let x of this.hashTable[index]){
                if(x[0] == key){
                    return x[1];
                }
            }
        }
        return 
    }

    keys(){
        let keys = [];

        for(let x of this.hashTable){
            if(m.get(`${target - a}`)){
            }
        }
        return keys
    }

    values(){
        let values = [];

        for(let x of this.hashTable){
            if(x){
                for(let a of x){
                    values.push(a[1])
                }
            }
        }

        return values
    }
}


function findDuplicates(arr){
    let m = new HashTable();

    let output = []
    for(let x of arr){
        let a = m.get(`${x}`)
        if(a) output.push(x)
        m.set(`${x}`, x)
    }

    return output

}

let arr = [2, 7, 7, 7, 2,  2, 15]
console.log(findDuplicates(arr))

// let m = new HashTable();
// m.set(`${10}`, 9)
// console.log(m.get(`${10}`))