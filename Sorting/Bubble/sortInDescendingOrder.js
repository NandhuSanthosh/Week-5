let arr = [4, 3, 2, 5, 7, 1, 2, 7, 9, 2, 3, 7, 43, 5, 90];
let count = 0;

function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        let swaped = false;
        for(let j = 0; j<arr.length - i - 1; j++){
            count++;
            if(arr[j] < arr[j+1]){
                swaped = true;
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
        if(!swaped) break;
    }
}

bubbleSort(arr);
console.log("number of comparisons: " + count);
console.log(arr);