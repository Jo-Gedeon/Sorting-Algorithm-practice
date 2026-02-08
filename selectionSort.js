import fill_random from './fill_random.js'

let size = 5;
let myarr = new Array(size);


fill_random(myarr)
console.log(myarr)

let n = myarr.length

function selectionSort(arr){
    for (let i = 0; i < arr.length;i++){
        let mindex = i; // current smallest index
        console.log(`This is our mindex: ${mindex}`)
        for (let j = i+1; j < arr.length; j++){ // go thru the unsorted array
            if (arr[j] < arr[mindex]){ // if we find an index with a smaller value
                console.log(`${arr[j]} is smaller than ${arr[mindex]}`)
                mindex = j; // that index is the new mindex
                console.log(`this is our new mindex: ${mindex}`)
            }
        }
        //now that we have the new mindex
        let temp = arr[i]; // set a temp
        arr[i] = arr[mindex]; // then swap
        arr[mindex] = temp;
        console.log(arr)
    }
    return arr;
}

selectionSort(myarr);
console.log(myarr);