// alert and prompt
// alert is used to display a message to the user while prompt is used to get input from the user.
// alert is a simple pop-up message that cannot be dismissed until the user clicks "OK".
// prompt allows the user to enter some input and returns that input as a string.

// alert("Hello, welcome to our website!");

let userName = prompt("Please enter your name:");
if (userName) {
  alert(`Hello, ${userName}! Nice to meet you.`);
} else {
  alert("Hello, guest! Nice to meet you.");
}

console.error("This is an error message that will be logged to the console.");
console.warn("This is a warning message that will be logged to the console.");
// The console.error  method is used to log error messages, while console.warn is used for warnings.
// Both methods can help in debugging and understanding issues in your code.



let istName=prompt("enter your name.")
let lName=prompt("enter your 2nd name.")
let msg= `hello ${istName} ${lName}  welcome to website.`;
alert(msg);
