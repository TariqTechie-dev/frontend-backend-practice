/*1. Object kya hota hy?

Object = ek cheez jisme properties aur methods hotay hain.

Properties = data (values)

Methods = functions (jo kaam karte hain)

example (JS object):

let car = {
  brand: "Toyota",     // property
  color: "Black",      // property
  start: function() {  // method
    console.log("Car started");
  }
};


yaha brand aur color properties hain.

start() ek method hy.

so object = ek container jo data + functions ko ek sath rakhta hy.

2. JavaScript mai har cheez object hoti hy?

👉 haan, JavaScript mai bohot kuch object hota hy:

window = object

document = object

arrays bhi object hoti hain

functions bhi object hoti hain

aap jo khud banate ho (let car = {...}) wo bhi object hota hy

lekin numbers (5), strings ("hello") aur boolean (true/false) ye primitive types hain.
par unko bhi JS object ki tarah treat kar sakta hy (kyunki behind the scene wrapper objects hote hain).

3. relation samajhne ka easy tareeqa

JavaScript world ek object based language hy.

matlab jo bhi cheez thodi complex hy (array, function, document, window) → wo sab object hi hain.  */







/*   DOM kya hy?

DOM ka matlab hy Document Object Model.

Browser jab HTML page load karta hy, tu us HTML ko ek object mai convert karta hy.

Matlab: har <tag> ek object ban jata hy.

example:

<h1>Hello</h1>
<p>This is para</p>


browser isko ek tree object mai change karta hy:

document
 └── h1 → "Hello"
 └── p → "This is para"


yani HTML ka structure ek tree of objects ban jata hy.

2. DOM ek Object q kaha jata hy?

kyunke document khud JavaScript mai ek object hy.
aur us object ke andar bohot saare properties aur methods hote hain.

example (JS code):

console.log(document.title);   // page ka title show karega
console.log(document.body);    // <body> ka sara part show karega

3. Use of DOM

DOM ki help se hum JS se:

HTML element ko find kar sakte hain.

element ka text ya style change kar sakte hain.

naye elements add ya remove kar sakte hain.

ab ek chhoti si practice karte hain 👇

agar aap ke HTML mai ye code hy:

<h1 id="demo">Hello</h1>


aur JS mai likho:

document.getElementById("demo").innerHTML = "Welcome Tariq!";


tu page per jo Hello likha tha, wo change hoke Welcome Tariq! ban jayega.

4. Summary:

DOM = Document Object Model
HTML page ka object representation
Har HTML tag ek object banta hy
document khud ek object hy
DOM ki help se hum HTML ko JS se manipulate kar sakte hain.  */ 




