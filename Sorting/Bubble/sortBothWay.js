let arr = [4, 3, 2, 5, 7, 1, 2, 7, 9, 2, 3, 7, 43, 5, 90];

function bubbleSort(arr, callback){
    for(let i = 0; i<arr.length; i++){
        let swaped = false;
        for(let j = 0; j<arr.length - i - 1; j++){
            if(callback(arr[j] , arr[j+1])){
                swaped = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        if(!swaped) break;
    }
}

function acc(a, b){
    return a > b
}

function des(a, b){
    return b > a
}

bubbleSort(arr, des);
console.log(arr);
bubbleSort(arr, acc)
console.log(arr)