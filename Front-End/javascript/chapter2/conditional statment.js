// what is conditional statment?
// conditional statements are used in programming to perform different actions based on different conditions. They allow the code to make decisions and execute certain blocks of code only when specific criteria are met.
// in JavaScript, conditional statements are typically implemented usin
// g `if`, `else if`, and `else` keywords. Here's a basic example:
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }
// in this example, the code checks if the value of `age` is greater than or equal to 18. If the condition is true, it executes the code inside the `if` block and logs "You are an adult." to the console. If the condition is false, it executes the code inside the `else` block and logs "You are a minor." to the console.
// conditional statements allow you to write more flexible and adaptable code that can handle different scenarios based on the values of variables or user input. They are fundamental to controlling the flow of execution in a program.

// if  statment syntax & example
// syntax:
// if (condition) {
//     // code to be executed if the condition is true
// }
// example:
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Electricity Bill

let units = 180;

if (units > 0 && units <= 100) {
  console.log("Your bill is: Rs. 500");
} else if (units > 101 && units <= 200) {
  console.log("Your bill is: Rs. 1000");
} else if (units > 201 && units <= 300) {
  console.log("Your bill is: Rs. 2000");
} else if (units > 300) {
  console.log("Your bill is: Rs. 3000");
}

// traffic system

let color = "red";

if (color === "red") {
  console.log("Stop! traffic is high.");
} else if (color === "yellow") {
  console.log("Get ready! traffic is low.");
} else if (color === "green") {
  console.log("Go! traffic is clear.");
} else {
  console.log("Invalid color!");
}

// Weather-Based Clothing System
let weather = "rainy";
if (weather === "sunny") {
  console.log("Wear sunglasses and light clothes");
} else if (weather === "rainy") {
  console.log("take an umbrella.");
} else if (weather === "snowy") {
  console.log("Wear a warm coat and boots .");
} else if (weather === "windy") {
  console.log("Wear a windbreaker");
} else if (weather === "cold") {
  console.log("Wear a jacket");
} else {
  console.log("Unknown weather condition");
}

// popcorn price calc based on size

let Size = "XL";

if (Size === "XL") {
  console.log("Price is: Rs 250");
} else if (Size === "L") {
  console.log("Price is: Rs 200");
} else if (Size === "M") {
  console.log("Price is: Rs 100");
} else if (Size === "s") {
  console.log("Price is: Rs 50");
} else {
  console.log("not avilable.");
}

// nested if statement

let cardInserted = true;
let pinCorrect = false;
if (cardInserted) {
  console.log("Access granted");
  if (pinCorrect) {
    console.log("You can withdraw cash");
  } else {
    console.log("Incorrect PIN");
  }
} else {
  console.log("Card not inserted");
}




//  Exercise: Online Exam Login System
// Scenario:

let isLoggedIn = true;
let cameraOn = true;
let micWorking = false;

if (isLoggedIn) {
  if (cameraOn) {
    if (micWorking) {
      console.log("Welcome to the exam");
    } else {
      console.log("Mic is not working");
    }
  } else {
    console.log("Camera is not working");
  }
} else {
  console.log("Please login to continue");
}

  

// if (isLoggedIn) {            // Start 1
//   if (cameraOn) {            // Start 2
//     if (micWorking) {        // Start 3
//       ...
//     } else {
//       ...
//     }                        // End 3
//   } else {
//     ...
//   }                          // End 2
// } else {
//   ...
// }                            // End 1

  
  
// exercie Question
  
let goodstrig="appale";

if(goodstrig[0]==="a" && goodstrig.length>3){
    console.log( "it is a good string");}
    else {
    console.log("it is not a good string");
    }
  
  