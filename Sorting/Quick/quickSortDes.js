function pivot(arr, start, end){
    if(start >= end) return;

    let pivotElement = arr[start];
    let swithIn = start;

    for(let i = start+1; i<=end; i++){
        if(arr[i] > pivotElement){
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

function quickSort(arr, start = 0, end = arr.length-1){
    if(start >= end) return;

    let pos = pivot(arr, start, end)
    quickSort(arr, start, pos-1)
    quickSort(arr, pos+1, end)
}

let arr = [6, 5, 7, 4, 8, 3, 9, 2, 0, 10, 1];
quickSort(arr)
console.log(arr)

