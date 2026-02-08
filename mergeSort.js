import fill_random from "./fill_random.js";

function mergeSort(arr){

    if (arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let leftArr = arr.slice(0,mid);
    console.log(leftArr)
    let rightArr = arr.slice(mid);
    console.log(rightArr)

    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(arr,arrTwo){
    let newArr = [];
    let i = 0, j = 0;
    while (i < arr.length && j < arrTwo.length){
        if (arr[i] < arrTwo[j]){
            newArr.push(arr[i]);
            i += 1;
        }
        else{
            newArr.push(arrTwo[j]);
            j += 1;
        }
    }

    if (i == arr.length && j < arrTwo.length){
        while (j < arrTwo.length){
            newArr.push(arrTwo[j]);
            j += 1;
        }
    }

    if (j == arrTwo.length && i < arr.length){
        while (i < arr.length){
            newArr.push(arr[i]);
            i += 1;
        }
    }

    return newArr;
}

let size = 100;
let myarr = new Array(size);


fill_random(myarr)

console.log(mergeSort(myarr))