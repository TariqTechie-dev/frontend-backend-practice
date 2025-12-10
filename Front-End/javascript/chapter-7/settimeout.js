
// setTimeout 
// setTimeout ek built-in JavaScript function hai jo kisi function ko specified time ke baad execute karta hai.
// Iska syntax hai: setTimeout(function, delayInMilliseconds, param1, param2, ...);


// exmple1

console.log("Start");

setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 60000); // 6 milliseconds = 3 seconds

console.log("end")





// exmple2

function greet(name) {
    console.log("Hello, " + name + "!");
 
}
setTimeout(greet, 4000, "Alice"); // 4 seconds ke baad "Hello, Alice!" print karega


