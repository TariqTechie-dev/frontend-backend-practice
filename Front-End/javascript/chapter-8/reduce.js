/*🔹 reduce()

👉 Kaam: Pura array traverse karta hai aur ek single value bana kar return karta hai.
👉 Return: Jo value tum chaho (sum, product, string, object, etc.)

Socho tumhare paas ek thaila hai aur array ke har element ko us thailay mai daalte ho, akhir mai ek hi result nikalta hai — yehi reduce ka kaam hai. 🎒  */

// Example 1: Sum nikalna

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log(sum); // 10
// Yahan, acc (accumulator) wo thaila hai jisme hum sum rakh rahe hain, aur el (element) array ka current element hai.
// Initial value 0 hai, aur har step pe hum acc mein el ko add kar rahhe hain.
// Final result 10 hai, jo ke saare numbers ka sum hai.



/*📝 Samjh:

acc = accumulator (pehle se jama hua result).

el = current element.

0 = initial value (starting point).

Calculation:

Start acc = 0

0 + 1 = 1

1 + 2 = 3

3 + 3 = 6

6 + 4 = 10

Result = 10 ✅  */


// Example 2: Product (multiplication)
let numbers2 = [2, 3, 4];

let product = numbers2.reduce((acc, el) => {
    return acc * el;
}, 1);

console.log(product); // 24

// Yahan, initial value 1 hai (kyunki multiplication mein 1 neutral element hota hai).
// Calculation: 1 * 2 = 2, 2 * 3 = 6, 6 * 4 = 24
// Result = 24 ✅



// Example 3: Maximum value nikalna
let nums = [5, 1, 8, 3, 2];
let max = nums.reduce((acc, el) => {
    return el > acc ? el : acc;
}, nums[0]); // Initial value array ka pehla element hai
console.log(max); // 8

// Yahan, hum har element ko acc se compare kar rahe hain aur jo bada hai use acc bana rahe hain.
// Final result 8 hai, jo ke array ka maximum value hai. ✅


// Example 4: Array ko ek string mein convert karna

let words = ["Hello", "world", "from", "coders"];
let sentence = words.reduce((acc, el) => {
    return acc + " " + el;
}, ""); // Initial value empty string hai   
console.log(sentence.trim()); // "Hello world from coders"
// Yahan, hum har word ko acc (jo ek string hai) mein jod rahe hain.
// Final result ek complete sentence hai. ✅
// 📝 trim() function extra spaces ko remove karne ke liye use hota hai.
// Agar initial value "" na dete to pehla word acc ban jata aur uske aage wale words jodte jate.
// Isliye initial value dena zaroori hai jab hum string banate hain.

// Example 5: Array of objects ka total marks nikalna

let students = [ 
    { name: "tariq", marks: 85 },
    { name: "imad", marks: 92 },
    { name: "shaid", marks: 78 }
];
let totalMarks = students.reduce((acc, el) => {
    return acc + el.marks;
}, 0); // Initial value 0 hai
console.log(totalMarks); // 255
// Yahan, hum har student ke marks ko acc mein jod rahe hain.   

  
//  find max reduce methode kay zaray
let num4=[1,4,5,8,9];

let ans=num4.reduce((max,el)=>{
    if(max < el){
        return el;
    }else{
        return max;
    }
})

console.log(ans);




// creat a function to find minmum number in an array

function getmin(num) {
  let minnum = num.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  })
  return minnum;
}

let num2=[,4,6,7];
console.log(getmin(num2));



