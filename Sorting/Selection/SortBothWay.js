let arr = [4, 3, 2, 5, 7, 1, 2, 7, 9, 2, 3, 7, 43, 5, 90];

function acc(a, b){
    return a > b;
}

function dec(a, b){
    return b > a;
}

function selectionSort(arr, callback = (a, b)=> a > b){

    for(let i = 0; i<arr.length; i++){
        let minIndex = i;
        for(let j = i+1; j<arr.length; j++){
            if(callback(arr[minIndex], arr[j])){
                minIndex = j
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
}

selectionSort(arr);
console.log(arr);

selectionSort(arr, dec);
console.log(arr);

selectionSort(arr, acc);
console.log(arr);