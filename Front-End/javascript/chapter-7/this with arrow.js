
// this keyword with arrow function

// Example 1: Using 'this' in a regular function
const obj1 = {
    value: 42,
    regularFunction: function () {
        console.log("Regular Function 'this':", this.value);
    }
}
obj1.regularFunction(); // Output: 42

// Explanation:
//    regularFunction ke andar 'this' obj1 ko refer karta hai, is liye this.value 42 return karta hai. yaha per scope obj1 ka hai


// Example 2: Using 'this' in an arrow function

const obj2 = {
    value: 42,
    arrowFunction: () => {
        console.log("Arrow Function 'this':", this.value);
    }
}
obj2.arrowFunction(); // Output: undefined (or window.value in non-strict mode)
// Explanation:
// arrowFunction ke andar 'this' global object ko refer karta hai (browser mai window, Node.js mai global). is liye this.value undefined hota hai kyunki global object ke paas value property nahi hai. yaha per scope global ka hai


// Example 3: Arrow function inside a regular function
const obj3 = {
    value: 42,
    regularFunctionWithArrow: function () {
        const arrowFunc = () => {
            console.log("Arrow inside Regular Function 'this':", this.value);
        }
        arrowFunc();
    }
}
obj3.regularFunctionWithArrow(); // Output: 42

// Explanation:
// arrowFunc ke andar 'this' surrounding regularFunction ka 'this' hi hota hai, jo obj3 ko refer karta hai. is liye this.value 42 return karta hai. yaha per scope obj3 ka hai





// Regular function → apna this rakhta hai (jisne bulaya).

// Arrow function → apna this nahi rakhta, upar wale se hi copy karta hai.




