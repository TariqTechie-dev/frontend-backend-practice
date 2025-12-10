// 🔹 1. append() (new)

// ye kisi element ke last mai content ya element add karta hai.

// isme aap text bhi add kar sakte ho aur element bhi.

let div = document.querySelector(".box");

let p1 = document.createElement("p");
p1.innerHTML = "This is paragraph 1";

// add inside div (last position)
div.append(p1);

// you can also add text directly
div.append(" -- extra text at the end");


// 🔹 2. prepend()

// ye bhi add karta hai, lekin start mai (first position).


let p2 = document.createElement("p");
p2.innerHTML = "This is paragraph 2";

// add inside div (at start)
div.prepend(p2);




// 🔹 3. insertAdjacentElement(position, element)

// isme aap position specify karte ho aur element wahi add hota hai.

// positions:

// "beforebegin" → element ke start se pehle

// "afterbegin" → element ke andar sabse start mai

// "beforeend" → element ke andar sabse end mai

// "afterend" → element ke end ke baad

// Example:


let p3 = document.createElement("p");
p3.innerHTML = "Inserted Para";

// Example positions:
let div2 = document.querySelector(".box");

// div2.insertAdjacentElement("beforebegin", p3);  // div ke pehle
// div.insertAdjacentElement("afterbegin", p3);   // div ke andar start mai
// div.insertAdjacentElement("beforeend", p3);    // div ke andar last mai
// div.insertAdjacentElement("afterend", p3);     // div ke baad
