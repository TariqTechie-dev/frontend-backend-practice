const student = {
    name: "Tariq",
    age: 24,
    english: 50,
    maths: 79,
    computer: 69,

    getAvg(){
            let avg= (this.english + this.maths + this.computer)/3
            console.log(avg)
    }

}
/*
🔹 1. Try...Catch ka Introduction

JavaScript mai agar code mai error aata hai to pura program ruk jata hai.

try...catch error ko pakad leta hai aur tumhe chance deta hai error handle karne ka.

Is tarah program crash nahi hota aur agay ka code chal jata hai.  */

// Example 1: Simple error

try {
  let x = 5;
  console.log(x + y); // ❌ y defined nahi hai
} catch (err) {
  console.log("Error pakra gaya: " + err.message);
}

console.log("Program chal raha hai...");


// Example 2: No error case

try {
  let x = 10;
  let y = 20;
  console.log(x + y); // ✅ koi error nahi
} catch (err) {
  console.log("Error pakra gaya: " + err.message);
}

//  ➡️ Catch block skip ho gaya kyunki error hi nahi tha.



//   Arrow function 

// Yeh JavaScript ka ek modern (ES6) feature hai jo functions ko short aur clean tareeqay se likhne ke liye use hota hai.

const add=(a,b)=>{
    return a+b;
}


// 2. Arrow Function ki Shortcuts
// Case 1: Agar ek hi line return ho rahi ho to curly braces {} aur return keyword dono hata sakte hain.


const sub=(a,b)=>( a-b);

// Case 2: Agar function ka ek hi parameter ho to parentheses () hata sakte hain.
const square=x=> x*x;
// Case 3: Agar function ka koi parameter na ho to empty parentheses () zaroori hain.
const greet=()=> console.log("Hello, World!");


//  arrow function emplicity return 
//  emlicity return matlab agar function ke andar sirf ek hi expression ho to usay directly return kar sakte hain bina return keyword ke.
const multiply=(a,b)=> a*b;

