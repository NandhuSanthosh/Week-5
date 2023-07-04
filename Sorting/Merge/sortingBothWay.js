let arr = [4, 3, 2, 5, 7, 1, 2, 7, 9, 2, 3, 7, 43, 5, 90];
let count = 0

let acc = (x, y)=> x < y;
let des = (x, y)=> x > y;

function merge(arr1, arr2, callback){
    let newArray = [];
    let i = 0, j = 0;

    while(i<arr1.length || j<arr2.length){
        if(i<arr1.length && j<arr2.length){
            if(callback(arr1[i], arr2[j])){
                newArray.push(arr1[i]);
                i++;
            }
            else{
                newArray.push(arr2[j]);
                j++;
            }
        }
        else if(i < arr1.length){
            newArray.push(arr1[i]);
            i++;
        }
        else{
            newArray.push(arr2[j])
            j++;
        }
    }


    return newArray;
}

function mergeSort(arr, callback){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    return merge(mergeSort(arr.slice(0, mid), callback), mergeSort(arr.slice(mid), callback), callback)
    
}


console.log(mergeSort(arr, acc))