// 🔹 Rest Operator ( ... )

// Rest operator bhi spread jesa lagta hai (...), lekin iska kaam thoda different hai.

// Spread: cheezon ko phailata hai.
// 
// Rest: cheezon ko gather (jama) karta hai.


// Rest operator function ke parameters mai use hota hai, jahan wo multiple arguments ko ek array mai convert kar deta hai.


// ✅ Example 1: Function Arguments

function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5); 
// Output: [1, 2, 3, 4, 5]📌 Matlab: ...nums saare arguments ko ek array ke andar jama kar lega.



// ✅ Example 2: Actual Sum

 function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(10, 20, 30)); // 60
console.log(sum(5, 10, 15, 20)); // 50
// Matlab tum kitne bhi numbers pass karo, rest operator unko array bana dega, aur reduce se hum unka sum nikal sakte hain.





// ✅ Example 3: Array Destructuring

let [first, second, ...others] = [10, 20, 30, 40, 50];

console.log(first);  // 10
console.log(second); // 20
console.log(others); // [30, 40, 50]

// 📌 Matlab ...others baaki bachi hui values ko ek array me jama kar lega.



// Destructing objec

let student={
    name: "Tariq",
    age:  21,
    class:  12,
    subject:["data base","DLD","algorithum"],
    username: "tariq122",
    password:  "12444",
    city:  "peshawar"
}

// let{username,password}=student;

// console.log(username,)

let{username:user ,password: secret, city :place="lahore"}=student;