function calcavg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

// calcavg(8,5,8);

function printtable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }

}

printtable(2);





// return keyword 
// is used to return a value from a function.
// If a function does not have a return statement, it returns undefined by default.
// The return statement ends function execution and specifies a value to be returned to the function caller.

function square(num) {
    return num * num;
}
// Function Call and storing the result
let result = square(4);
console.log("Square:", result); // Output: Square: 16



function getsum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Add each number from 1 to n
    }
    return sum; // Return the total sum
}

console.log(getsum(5)); // Output: 15 (1 + 2 + 3 + 4 + 5)



let str = ["hi", "hello","how ","are","you?"];

function concate(str) {
    let sum = "";

    for (i = 0; i < str.length; i++) {
        sum += str[i];

    }
    return sum; // Return the concatenated string
}

// console.log(concate(str)); 