function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        let swaped = false;
        for(let j = 0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swaped = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        if(!swaped) break;
    }
}

function findMaxAndMin(arr){
    bubbleSort(arr)
    return [arr[0], arr[arr.length-1]]
}

console.log(findMaxAndMin([7, 6, 8, 5, 9, 3, 0, 2, 10, 1]))