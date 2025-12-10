
//  select element by class name 



let smallimages= document.getElementsByClassName("oldImg")


for (let i=0; i<smallimages.length;i++){
    smallimages[i].src="assets/spiderman_img.jpeg";
    console.log(`value of image no.${i} is changed`);

}

// explanition
// hum nay getElementsByClassName ka use kiya hai jisse hum sari images ko select kar saken jo class oldImg rakhti hain.
// phir hum nay for loop ka use kiya hai jisse hum har image ko access kar saken aur uska src attribute change kar saken.
// loop ke andar hum nay har image ka src attribute change kar diya hai nayi image ke path se.
// loop ke andar hum nay console.log ka use kiya hai jisse hum confirm kar saken ke image ka src change ho gaya hai.



// select element by id

// let div=document.getElementById("description")
// div.innerText="this is changed by js";
// console.log("div text is changed");

// explanition
// hum nay getElementById ka use kiya hai jisse hum specific element ko select kar saken jo id description rakhta hai.
// phir hum nay us element ka innerText property change kar diya hai nayi text se.
// phir hum nay console.log ka use kiya hai jisse hum confirm kar saken ke div ka text change ho gaya hai.



// select element by tag name
// let paragraphs=document.getElementsByTagName("p")
//  paragraphs[0].innerText="this is changed by js";


// explanition
// hum nay getElementsByTagName ka use kiya hai jisse hum sari paragraph elements ko select kar saken.
// phir hum nay first paragraph ka innerText property change kar diya hai nayi text se.
// phir hum nay console.log ka use kiya hai jisse hum confirm kar saken ke paragraph ka text change ho gaya hai.



// select element by query selector

 console.dir(document.querySelector("h1"))  //tag             first<h1>element

  document.querySelector(".oldImg")    // id
 document.querySelector("#description")  // class

//  ye sirf first element ko select karta hai jo match karta hai query se
//  agar humein sari matching elements chahiyein to hum querySelectorAll ka use karte hain

//  console.log(document.querySelectorAll(".oldImg"))  // ye sari elements ko select karta hai jo match karte hain query se


//  querySelectorAll()

// ye saare matching elements select karta hy.

// aur ek NodeList return karta hy (jese array).

