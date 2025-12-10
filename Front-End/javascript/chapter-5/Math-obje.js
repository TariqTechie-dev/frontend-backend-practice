
// what is Math object?
// Math object is a built-in object in JavaScript that provides properties and methods for mathematical constants and functions.

// properties
/*
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
// methods
console.log(Math.abs(-5)); // 5 returns the absolute value of a number
console.log(Math.ceil(4.2)); //5 // round up to nearest largest integer
console.log(Math.floor(4.8)); // 4 round down to nearest smallest integer
console.log(Math.max(1, 2, 3, 4));
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.round(4.5)); // 5
console.log(Math.sqrt(16)); // 4
*/


// Random integer
let randomInt = Math.floor(Math.random() * (10)+1); // Generates a random integer between 1 and 10
// Explanation: Math.random() generates a random number between 0 (min) and 1 (mix). 
// Multiplying by 10 gives a range of 0 to 9.999..., and adding 1 shifts the range to 1 to 10. 
// Math.floor() rounds it down to the nearest whole number, resulting in an integer from 1 to 10.

console.log(randomInt);
// Random number between 1 and 100
let randomInt100 = Math.floor(Math.random() * 100) + 1;
console.log(randomInt100); // Generates a random integer between 1 and 100

// Random number between 1 and 1000
let randomInt1000 = Math.floor(Math.random() * 1000) + 1;
console.log(randomInt1000); // Generates a random integer between 1 and 1000        


