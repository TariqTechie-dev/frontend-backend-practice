// waht is loops in javascript

// Loops are used to execute a block of code repeatedly until a specified condition is met.
// They are essential for tasks that require repetition, such as iterating over arrays or performing actions multiple times.

// There are several types of loops in JavaScript, including:

// 1. for loop
for (let i = 0; i < 5; i++) {
  console.log("For Loop Iteration: " + i);
}

for (let i = 10; i >= 1; i--) {
  console.log("Reverse For Loop Iteration: " + i);
}

// Dry Run Table:
// | i   | Condition (i < 5) | Output            |
// |-----|--------------------|-------------------|
// | 0   | true               | For Loop Iteration: 0 |
// | 1   | true               | For Loop Iteration: 1 |
// | 2   | true               | For Loop Iteration: 2 |
// | 3   | true               | For Loop Iteration: 3 |
// | 4   | true               | For Loop Iteration: 4 |
// | 5   | false              |                   |

/*
Explanation:

Start: i = 1, condition 1 <= 5 true → print 1

i = 2, condition true → print 2

i = 3, condition true → print 3

i = 4, condition true → print 4   

i = 5, condition true → print 5

i = 6, condition false → exit loop
*/

let marks = [88, 92, 75, 64, 99];

for (let i = 1; i < marks.length; i++) {
  console.log("Marks of student " + i + ": " + marks[i]);
}

// Dry Run Table:
// | i   | marks[i] |
// |-----|-----------|
// | 0   | 88        |
// | 1   | 92        |
// | 2   | 75        |
// | 3   | 64        |
// | 4   | 99        |

//  for loop to print odd numbers from 1 to 15
for (i = 1; i <= 15; i = i + 2) {
  console.log("Odd number: " + i);
}

// for loop to print even numbers from 20 to 40
for(let i=20; i<=40; i=i+2){
    console.log("Even number: " + i);
}


// multiplication table of 5 from 5 to 50
for(let i=5; i<=50; i=i+5){
    console.log("Multiples of 5: " + i);
}



/*
Problem:
JavaScript mai ek for loop likho jo 1 se 30 tak ke numbers print kare:

Agar number 3 se divisible ho → print karo "Fizz"

Agar number 5 se divisible ho → print karo "Buzz"

Agar number 3 aur 5 dono se divisible ho → print karo "FizzBuzz"

Warna sirf number print karo */



for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    }
}

    

for (let i = 1; i <= 5; i++) {  // outer loop → lines ka count
    let pattern = "";
    for (let j = 1; j <= i; j++) {  // inner loop → stars ka count
        pattern += "*";
    }
    console.log(pattern);
}
