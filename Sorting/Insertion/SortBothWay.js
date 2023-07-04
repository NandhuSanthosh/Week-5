let arr = [4, 3, 2, 5, 7, 1, 2, 7, 9, 2, 3, 7, 43, 5, 90];

function acc(a, b){
    return a>b
}

function dec(a, b){
    return a<b
}

function insertionSort(arr, callback = (a, b)=> a>b){
     
    for(let i = 1; i<arr.length; i++){
        let currVal = arr[i];

        let j;
        for(j = i-1; j >= 0 && callback(arr[j], currVal); j--){
                arr[j+1] = arr[j];
        }
        
        arr[j + 1] = currVal
    }

}

console.log(arr)
insertionSort(arr);
console.log(arr);