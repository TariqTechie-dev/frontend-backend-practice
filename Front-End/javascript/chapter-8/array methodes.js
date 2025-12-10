
// forEach()

// 👉 Kaam: Array ke har element per loop chalata hai, aur function run karta hai.
// 👉 Return: Kuch wapis nahi deta (sirf kaam karta hai, result banata nahi).

// Example:


let arr = [1, 2, 3, 4, 5];

let print = function (e) {
    console.log(e)

}


// arr.forEach(print);


// esa be karskta hy directly fuction banana

arr.forEach(function (k) { console.log(k); })


//    throug arrow function
arr.forEach((n) => { console.log(n); })

// 📝 Matlab: forEach sirf array ke elements ko use karke kaam karega (print karna, add karna, etc.), lekin naya array return nahi karega.

// Example 2:

let arry = [
    {
        name: "tariq",
        marks: 30
    },
    {
        name: "ayaz",
        marks: 79
    }, {
        name: "sana",
        marks: 90

    }

]

arry.forEach((o)=>{console.log(o.marks)});







// . map()
/*
👉 Kaam: Har element per function chalata hai aur ek naya array banata hai.
👉 Return: Naya array with modified values.

Example:    */



let num=[1,2,3,4,5];

let double=num.map((el)=>{console.log(el*2); })


// 📝 Matlab: map purana array ko change nahi karega, balki ek new array banayega.




/*JavaScript filter()

Kaam: Array mai loop chalata hai aur har element ko check karta hai.

Result: Sirf un elements ka naya array banata hai jo tumhari condition pass karte hain.

filter = “Array mai se sirf wo cheezain rakho jo condition pass karte hain.”*/

// exmaple:1
let numbers = [1, 2, 3, 4, 5];

let evens = numbers.filter(function(num) {
  return num % 2 === 0;   // sirf even numbers rakho
});

console.log(evens); 
// Output: [2, 4]

/*📝 Matlab: 1 odd tha → nikal gaya,
2 even tha → reh gaya,
3 odd → nikal gaya,
4 even → reh gaya,
5 odd → nikal gaya. */

// example:2
let fruits = ["apple", "banana", "mango", "apple"];

let onlyApples = fruits.filter(function(fruit) {
  return fruit === "apple";
});

console.log(onlyApples);
// Output: ["apple", "apple"]
// 📝 Matlab: sirf wo fruits rakho jo "apple" hain, baaki nikal do.




