import fill_random from './fill_random.js'

let size = 100;
let myarr = new Array(size);


fill_random(myarr)

let n = myarr.length

for (let i = 0; i < n-1; i++){ // iterate once for each element in the array
    for (let j = 0; j < n-i-1 ;j++){  
        if (myarr[j] > myarr[j+1]){
            let temp = myarr[j]
            myarr[j]= myarr[j+1], myarr[j+1] = temp;
        }
    }
}


console.log(myarr)