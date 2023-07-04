
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
            if(x){
                for(let a of x){
                    keys.push(a[0])
                }
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

let m = new HashTable();

m.set("color", "red");
m.set("color", "green");
m.set("height", 45);


m.keys().forEach( (x)=>{
    console.log(m.get(x))
})