// default parametur: giving a defualt value to the argument

//  nechay 7 ak default parametur hy  matlab agar incase hum
// es arrow wala function mai ak parametue pas kare 
// tu koue error nahi ayga kunki yaha per 7 b ko assign hoga 

let fun = (a, b = 7) => a + b;
console.log(fun(3));  // 10

// yaha per hum ne 3 pass kiya hy aur b ki value nahi di
// to b ki value 7 assign hogi
// to 3+7=10


// 🔹 1. Default Parameters

// 👉 Jab hum function banate hain aur usme koi argument pass na ho, to hum ek default value de sakte hain.

// Example:
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
// Yahan, agar hum greet() ko bina argument ke call karte hain, to name ki value "Guest" ho jati hai.
// Agar hum "Alice" pass karte hain, to name ki value "Alice" ho jati hai. ✅





// 🔹 2. Spread Operator
// 👉 Spread operator (...) ek array ya object ke elements ko alag-alag values mein tod deta hai.
// 👉 Ye function calls, array literals, aur object literals mein use hota hai.
// Example 1: Array ko function mein pass karna
let numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(numbers)); // 6
console.log(sum(...numbers)); // 6
// Yahan, ...numbers ne array ke elements ko alag-alag arguments mein tod diya.
// Agar hum sirf numbers pass karte hain, to wo ek single argument ban jata hai, jo ke array hota hai.
// Jabki ...numbers se humne uske elements ko alag-alag arguments mein convert kar diya. ✅
// Example 2: Array ko combine karna


// spread with arry

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let integer = [...even, ...odd]

console.log(integer)


//  spread with string

let name = "TariqHussain"

console.log(...name)



// spread with Object

let data = {
    email: "tariqtech@gmail.com",
    passWord: "abc"
}


let copyData={...data, id:2,name:"badboy"}



/*

🔹 Default Parameters – Kaha use hotay hain?

Functions with optional values

Jab koi parameter zaroori na ho, aur tum ek safe value rakhna chaho.

Example: Tax, delivery charges, default name, page size.

function calculateBill(amount, tax = 0.05) {
  return amount + amount * tax;
}

console.log(calculateBill(100));    // 105 (default tax)
console.log(calculateBill(100, 0.2)); // 120 (custom tax)


Avoid errors when argument missing

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();      // Hello, Guest
greet("Ali"); // Hello, Ali


📌 Matlab: agar programmer argument bhool jaye, code break nahi hoga.

🔹 Spread Operator – Kaha use hota hai?

Array Copy karne ke liye

let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // copy


Array merge karne ke liye

let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1,2,3,4]


Function arguments pass karne ke liye

function add(x, y, z) {
  return x + y + z;
}

let nums = [10, 20, 30];
console.log(add(...nums)); // 60


Object copy / merge karne ke liye

let user = { name: "Ali", age: 20 };
let updated = { ...user, city: "Karachi" };

console.log(updated);
// { name: "Ali", age: 20, city: "Karachi" }


⚡ Short & Sweet:

Default parameter → error se bachata hai aur optional values kaam aati hain.

Spread operator → arrays/objects ko copy, merge, ya arguments mai todne ke liye.
*/