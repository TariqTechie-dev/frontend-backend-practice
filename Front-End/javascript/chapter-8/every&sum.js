/*1. every()

👉 Kaam: Ye check karta hai ke array ke saare elements condition pass karte hain ya nahi.
👉 Return: true ya false (boolean value).
    ye  AND logicla operation ki tarah kaam karta hai.
Example:  */

let numbers = [2, 4, 6, 8];

let allEven = numbers.every((el) => {
  return el % 2 === 0;   // check even hai ya nahi
});

console.log(allEven); // true
// Kyunki saare numbers even hain, isliye result true hai.
// Agar array mein koi bhi odd number hota, to result false hota.
// Matlab: Saare numbers even hain → result true.Agar ek bhi odd hota to → false.



/*2. some()

👉 Kaam: Ye check karta hai ke array mai se kam se kam ek element condition pass karta hai ya nahi.
👉 Return: true ya false.
  ye OR logical operation ki tarah kaam karta hai.
Example:  */


let numbers2 = [1, 3, 5, 6];

let hasEven = numbers2.some((el) => {
  return el % 2 === 0;   // check even hai ya nahi
});

console.log(hasEven); // true


// 📝 Matlab: Saare odd hain except 6 jo even hai → result true.Agar saare odd hote to result false hota.


// ⚡ Easy Trick:

// every → Har element ko check karega → sab pass hue to true.

// some → Kisi ek ne bhi pass kar diya to true.




// cheak if all numers in our array are multiples of 10 or not.

let multiple = [20, 50, 90, 70, 60]

let multiple10 = multiple.every((el) => el % 10 == 0);

console.log(multiple10);



let nm=[1,2,3,4,5];

// const sq=nm.map((el)=>el*el)

// const sm=sq.reduce((sm,el)=> sm+el)

// let avg=sm/nm.length

// const newnm=nm.map((el)=> el+5)

