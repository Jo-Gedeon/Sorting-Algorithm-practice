export default function fill_random(arr){
    // fills array with random elements  /*
    let size = arr.length;
    for (let k=0;k<size;k++){
        let inserted = false
        while(inserted == false){
            let index = Math.floor(Math.random() * size);
            if (arr[index] == null){
                arr[index] = k;
                inserted = true;
            }
            else{
                inserted = false;
            }
        }
    }
    return arr;
}