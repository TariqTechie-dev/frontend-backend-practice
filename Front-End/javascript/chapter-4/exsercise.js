// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arry = [1, 2, 3, 4, 5, 6, 2, 3];
// let num=2;

// for(let i=0; i<arry.length; i++){
//     if(arry [i]==num){
//         arry.splice(i,1)
//         console.log(arry);
//     }
// }



let number = 287152;
let count=0;
let copy= number;


while(copy>0){
    copy++;
    copy=Math.floor(copy/10);

    console.log(count);
}





