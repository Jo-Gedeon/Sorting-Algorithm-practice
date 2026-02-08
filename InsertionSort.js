

let test_arr = [4,3,2,1,0]

function insertionSort(arr){
    for (let i = 1; i<arr.length;i++){
        let key = arr[i];
        //console.log(`current key ${key}`)
        let j = i - 1;

        while (j >= 0 && arr[j] > key){
           // console.log(`swapping ${arr[j+1]} and ${arr[j]}`)
            arr[j+1] = arr[j]
            j -= 1;
        }
        //console.log(`putting  ${key} into ${arr[j+1]}`)
        arr[j+1] = key;
    }
}

insertionSort(test_arr)
console.log(test_arr)