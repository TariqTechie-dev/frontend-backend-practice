let num = 2; // You can change this value to test with other numbers

if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

// alert and prompt
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
alert(`${name},is ${age}, year old`);
let Mquarter = prompt(
  "Enter the name of the month (e.g., January, February, etc.):"
);

// switch(Mquarter) {
//     case "January":
//     case "February":
//     case "March":
//     console.log("Month in Quarter 1")
//     break;
//     case "April":
//     case "May":
//     case "June":
//     console.log("Month in Quarter 2")
//     break;
//     case "July":
//     case "August":
//     case "September":
//     console.log("Month in Quarter 3")
//     break;
//     case "October":
//     case "November":
//     case "December":
//     console.log("Month in Quarter 4")
//     break;
//     default:
//     console.log("Invalid Month")
// }

// Golden String Check
let str = "appl";
if ((str[0] === "A" || str[0] === "a") && str.length >= 5) {
  console.log("golden string");
} else {
  console.log("not golden string");
}

// Largest of 3 numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
if (num1 > num2 && num1 > num3) {
  console.log("num1 is the largest of 3 numbers");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is the largest of 3 numbers");
} else if (num3 > num1 && num3 > num2) {
  console.log("num3 is the largest of 3 numbers");
} else {
  console.log("num1,num2,num3 are equal");
}
