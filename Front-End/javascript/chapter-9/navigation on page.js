// ==========================
// DOM NAVIGATION & CREATION
// ==========================

// 1. Select element (example h4)
let h4 = document.querySelector("h4");

// Parent element (jis ke andar h4 hai)
console.log(h4.parentElement);

// Next sibling element (h4 ke baad jo element hai)
console.log(h4.nextElementSibling);

// Count of child elements inside h4
console.log(h4.childElementCount);

// Children list (agar h4 ke andar koi elements hain to wo show karega)
console.log(h4.children);


// 2. Select div with class "box"
let div = document.querySelector(".box");

// Agar dekhna ho ke div ke andar kitne children hain
console.log(div.children);


// 3. Create a new <p> element
let newpara = document.createElement("p"); // new element create
newpara.innerHTML = "Hello, this is me Tariq Hussain"; // add text inside <p>


// 4. Add new paragraph inside div (at last position)
div.appendChild(newpara);


// 5. Append more text at the end of newpara
newpara.append(" — adding to last index of newpara");
// Note: .append() se hum ek element ya text add karte hain last mai

let btn=document.createElement("button")

btn.innerHTML="click me"

div.appendChild(btn)
  


