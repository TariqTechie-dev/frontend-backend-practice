// setInterval
/* 
setinterval matlab hai ke har specific time ke baad koi function ko baar baar chalana hai
    setinterval ka syntax hai

    setInterval(function, milliseconds, param1, param2, ...);
    function: wo function jo tum chalana chahte ho
    milliseconds: wo time interval jo tum set karna chahte ho milliseconds mai
    param1, param2, ...: ye optional parameters hain jo tum function ko pass kar sakte ho */

//  example
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Har 2 second ke baad greet function ko call karo aur "Alice" parameter pass karo
let intervalId = setInterval(greet, 2000, "Alice");
// isay rokne ke liye clearInterval use karte hain
// clearInterval(intervalId); // isay comment kar do to ye baar baar chalega

// agar 10 second ke baad isay rokna hai to
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval rok diya gaya.");
}, 10000);
//  setInterval ka use tab hota hai jab hume koi kaam baar baar karna ho jaise ke clock banana ya koi animation chalana waghera
//  setTimeout ka use tab hota hai jab hume koi kaam delay ke baad karna ho jaise ke notification dikhana ya koi message show karna waghera




// const square=n=> n*n;



let id = setInterval(() => {
    console.log("hellow word!");
}, 2000)


setTimeout(() => {
    clearInterval(id)
    console.log("it is clear")

}, 10000)