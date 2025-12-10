// let a= 20;
// console.log(a);
// let b= 30;
// console.log(a+b);

/*

js ak single threaded programming language haymatalab ek time per sirf ek hi kaam kar sakta hay  jaise uper humne pehlay a ki value ko console kia phir b ki value ko console kia or phir dono ka sum console kia  ye sab ek ke bad ek hua  islia isko single threaded kaha jata hay  yani ek time per ek hi kaam kar sakta hay  agar hum chahain ke hum aik sath do kaam karain to wo possible nahi hay js mai  islia js mai asynchronous programming ka concept aya jisme hum aik sath do ya zyada kaam kar sakte hain  lekin wo alag topic hay jo hum baad mai dekhenge  filhal hum single threaded programming ko samajhtay hain.
*/


// callback is a function passed as an argument to another function. It allows a function to call another function after completing its task, enabling asynchronous behavior in JavaScript.


setTimeout(()=>{
    console.log("timer done");
},2000);
setTimeout(()=>{
    console.log("2timer done");
},2000);

console.log("hello");
console.log("hi");

// hera if js is single threaded then how setTimeout is working asynchronously?
// answer is js is single threaded but browser environment is multi threaded  jese hum setTimeout use karte hain wo browser ka feature hay  jab hum setTimeout use karte hain to wo browser ke timer thread mai chala jata hay or wo timer thread apna kaam karta hay or jab time complete ho jata hay to wo callback function ko call stack mai push kar deta hay jaha se js usko execute kar sakta hay  is tarah se hum asynchronous behavior achieve kar sakte hain js mai  yani js single threaded hay lekin browser environment multi threaded hay  islia hum asynchronous programming kar sakte hain js mai.

// browser  c++ mai leka multi threaded hay or js single threaded hay  islia hum asynchronous programming kar sakte hain js mai  lekin wo browser ke features ke through hota hay  jese setTimeout, fetch api etc.

