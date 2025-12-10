
const arrayAverage=(aray)=>{
    let total=0;
    for(let number of aray){
        total +=number;
    }
   return total/aray.length;
};

let aray=[5,8,8,2,4,6];
console.log(arrayAverage(aray));



let num=4;

 const isEven = (num) => num % 2 === 0;

    console.log(isEven(num));

const object = {
  message: 'Hello, World! ',
  logMessage() { console.log(this.message); }
};
setTimeout(object.logMessage, 1000); // Output: undefined
// Explanation: setTimeout ke andar object.logMessage ko as a callback function pass kiya gaya hai. Jab ye function call hota hai, to iska context (this) lost ho jata hai, is liye this.message undefined hota hai.



/*
🟢 Code:
const object = {
  message: 'Hello, World! ',
  logMessage() { console.log(this.message); }
};

setTimeout(object.logMessage, 1000);

🔹 Step 1: Normal socho

Agar hum direct call karte:

object.logMessage();


to output hota:

Hello, World!


✅ Kyonki this = object hai.

🔹 Step 2: Lekin setTimeout kya karta hai?

setTimeout thoda alag hai.

Jab hum likhte hain setTimeout(object.logMessage, 1000),
to hum function ka reference pass kar dete hain — matlab logMessage function copy ho gaya, lekin uske saath this nahi gaya.

1 second baad, setTimeout us function ko khud chalata hai.

Jab wo function chalta hai, uske paas this object ka reference nahi hota.

To this default ho jata hai → undefined (strict mode) ya window (browser mai).

🔹 Step 3: Output kya hoga?

this.message milega undefined,
to output:

undefined

🔑 Rule yaad rakho:

Jab bhi tum function ko as a callback (jaise setTimeout, setInterval, ya kisi aur function ko pass karo),
to this gum ho jata hai, kyunki ab wo object se attach nahi rehta.

🔹 Solution (2 tareeqe)
1. Arrow Function ke through
setTimeout(() => object.logMessage(), 1000);


Yahaan arrow function apna this nahi rakhta, isliye object ka this use hota hai.
Output: ✅ Hello, World!

2. .bind() use karke
setTimeout(object.logMessage.bind(object), 1000);


bind(object) lagane se function permanently object ke saath chipak jata hai.
Output: ✅ Hello, World!

🔎 Easy Story

Socho tumhare paas ek teacher hai jo apna naam bolta hai.
Agar tum teacher ko khud bulao, to wo apna naam batayega.
Agar tumne teacher ka dialogue likh kar kisi aur ko de diya (jaise setTimeout),
to us waqt teacher ka naam bhool jata hai 😅    */



 let length = 4;
function callback() {
  console.log(this.length);
}
const object2 = {
  length: 5,
  method(callback) {
    callback();
  }
};
object2.method(callback, 1, 2);

