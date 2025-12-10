// what is scop?
// Scope is the context in which variables are defined and accessed in JavaScript.
// It determines the visibility and lifetime of variables, functions, and objects in your code.

// There are two main types of scope in JavaScript: global scope and local scope.



let sum = 55;  // Global Scope
// This variable is accessible anywhere in the code


function add(a, b) {
    //  let sum =a+b;  // Local Scope
    console.log(sum);
}

add(5, 10); // Output: 55
console.log(sum); // Output: 55

// In the above example, the variable `sum` defined outside the function `add` is in the global scope, 
// and it can be accessed both inside and outside the function. 
// If you define a variable with `let` or `const` inside a function, it will have local scope and won't be accessible outside that function.


// Block Scope
// Variables declared with `let` or `const` inside a block {}
// cannot be accessed outside that block.

{
    let a = 40;

}

//  console.log(a); 
// it will give error because `a` is not defined outside the block.

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log(i);
// The variable `i` is only accessible within the for loop block and will throw an error if accessed outside of it. 


// lexical scope
// Lexical scope refers to the scope of variables based on their physical placement in the code.
// Inner functions can access variables from their outer (parent) functions.   

function outerFunction() {
    let x = 5;
    let y = 10;
    function innerFunction() {
        console.log(x);
        console.log(y);
        // Accessing outerVariable from innerFunction
    }
    innerFunction(); // Output: 5, 10
}


//  inner wala function can access outer wala variable
//  but outer wala function cannot access inner wala variable




let greet = "hellow";    //global scope variable
function changegreet() {
    let greet = "namasta"; // local scope variable
    console.log(greet);
    function innergreet() {
        console.log(greet);  //loxical scope variable
    }
}
console.log(greet);
changegreet();


// function experessions

// esa  function jeska koue name nahi hota aur o hum ak 
//   varibale ke andar stor kartay hy


let Sum = function (a, b) {
    return a + b;

}



// Higher order function 
// wo function jo ya to kisi function ko argument mai leta ho, ya phir ek function return karta ho.
// take one or multiple function as arguments 


function multisalam(func, count) {
    for (let i = 1; i <= count; i++)
        func();
}



let salam = function () {
    console.log("hellow darling")
}

multisalam(salam, 10);


// HigherOrder Function  returns
function oddEvenTest(request) {
    if (request === "odd") {
        return function (num) {
            console.log(!(num % 2 == 0));
        }


    } else if (request === "even") {
        return function (num) {
            console.log(num % 2 == 0);
        }
    } else {
        return function () {
            console.log("Invalid request");
        }
    }
}

let oddFunction = oddEvenTest("odd");
let evenFunction = oddEvenTest("even");
let invalidFunction = oddEvenTest("invalid");

oddFunction(5);   // Output: true
evenFunction(4);   // Output: true
invalidFunction();  // Output: Invalid request




// Methodes
// // Methods are functions that are associated with an object.
// They are used to perform actions on the object or retrieve information from it.

const calCulator = {
    add: function (a, b) {
        return a + b;
    }
    ,
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

 console.log(calCulator.add(5, 10) );// Output: 15
 console.log(calCulator.subtract(10, 5)); // Output: 5
 