// what is function?

/*A function is a block of code designed to perform a particular task.
A function is executed when "something" invokes it (calls it).
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().*/

// Function Declaration
function greet() {
    console.log("Hello, World!");
}

// Function Call
greet(); // Output: Hello, World!


// Function with parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Function Call with argument
greetUser ("Alice"); // Output: Hello, Alice!



// Function with return value
function add(a, b) {
    return a + b;
}   

// Function Call and storing the result
let sum = add(5, 3);    
console.log("Sum:", sum); // Output: Sum: 8


function diceroll(){
    return Math.floor(Math.random() * 6) + 1; // Returns a random number between 1 and 6
}
// Function Call and storing the result
let roll = diceroll();
console.log("Dice Roll:", roll); 