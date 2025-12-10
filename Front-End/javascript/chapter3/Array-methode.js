// Array methods
// 1 push : add to end indexe
// 2 pop: remo value from end indexe
// 3 unshift: add to start index
// 3 shift: remove from start index

let days = ["monday", "teusday", "wensday", "thursday"];

days.push("friday");
// days.pop();
days.unshift("sunday");
// days.shift();

console.log(days);

// .indexOf() : returan index of something or value
//  if the value is not exist it return -1
console.log(days.indexOf("monday"));

// includes: search for a value if exits returan true if
//            not returan false
console.log(days.includes("teusday"));

// concate: merge two Array

let primary = ["red", "yellow", "blue"];
let secoundary = ["orange", "green", "white"];

primary.concat(secoundary);

// reverse: reverse the order of an array

primary.reverse();

// splice() → elements add/remove dono ka kaam karta hai
//       jis se hum kisi bhi index se element ko add ya   remove kar sakte hain

let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, "new"); // 2 is the index where we want to add "new"
console.log(arr); // [1, 2, "new", 3, 4, 5]

// 8️⃣ slice() → array ka ek part copy karta hai
// javascript
let fruits = ["apple", "banana", "kiwi", "mango"];
// slice(start, end) → start se lekar end tak ke elements ko copy karta hai
// end index is not included in the result
let newFruits = fruits.slice(0, 2);
console.log(newFruits); // ["apple", "kiwi"]

// Array banate hain
let fruit = ["apple", "banana", "mango"];
console.log("Original Array:", fruit);

// push() → Last mai element add
fruit.push("orange");
console.log("After push:", fruit);

// pop() → Last element remove
fruit.pop();
console.log("After pop:", fruit);

// unshift() → Start mai element add
fruit.unshift("grape");
console.log("After unshift:", fruit);

// shift() → First element remove
fruit.shift();
console.log("After shift:", fruit);

// indexOf() → Element ka index
console.log("Index of banana:", fruit.indexOf("banana"));

// includes() → Element exist karta hai ya nahi
console.log("Includes apple?", fruit.includes("apple"));
console.log("Includes mango?", fruit.includes("mango"));

// splice() → Remove / Add elements
fruits.splice(1, 1, "kiwi"); // index 1 se 1 remove, "kiwi" add
console.log("After splice:", fruits);

// slice() → Part copy
let newFruit = fruit.slice(0, 2);
console.log("After slice (0,2):", newFruit);

// join() → Array ko string
console.log("Join with comma:", fruit.join(", "));

// reverse() → Ulatna
fruit.reverse();
console.log("After reverse:", fruit);



// sort() → Array ko sort karta hai
//  mesage ko assendant or descendant order mai sort karta hai
//  ye  number ko shahi tara sort nahi karta hai


// Nested  or two dimentional array
// array within array
// data are store in rows ,coulms

let arry=[[23],[45],[67]];
console.log(arry[0][0]);



