function pivot(arr, callback, start, end){
    if(start >= end) return;

    let pivotElement = arr[start];
    let swithIn = start;

    for(let i = start+1; i<=end; i++){
        if(callback(arr[i], pivotElement)){
            swithIn++;
            swap(arr, i, swithIn)
        }
    }
    swap(arr, swithIn, start)
    return swithIn;

    function swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}

function quickSort(arr, callback, start = 0, end = arr.length-1){
    if(start >= end) return;

    let pos = pivot(arr, callback, start, end)
    quickSort(arr, callback, start, pos-1)
    quickSort(arr, callback, pos+1, end)
}

let asc = (x, y)=>x<y;
let des = (x, y)=>x>y;

let arr = [6, 5, 7, 4, 8, 3, 9, 2, 0, 10, 1];
quickSort(arr, asc)
console.log(arr)

