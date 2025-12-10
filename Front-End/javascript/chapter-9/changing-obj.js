//  ab hum DOM mai object (element) ka content change karne ke tareeqay dekhte hain.

//  hum kisi bhi element ka content change kar sakte hain jaise text, image, link, etc.

//  hum innerText, innerHTML, outerHTML, src, href, etc. properties use kar sakte hain content change karne ke liye.

//  chaliye kuch examples dekhte hain:


//  abi hum 3 properties par bat karyngay  ju hum aksar use kartay hain content change karne k liye

// 1. innerText
// 2. innerHTML
// 3. textContent
// 4. src
// 5. href      
// 6. style

// 1. innerText
// ye property element ke andar ka text content change karti hai. ye sirf text ko change karti hai, agar element ke andar koi HTML tags hain to wo ignore kar deti hai 

 // example:

// let para= document.getElementById("about");
// console.dir(para.innerText);


// 2. innerHTML
// ye property element ke andar ka HTML content change karti hai. ye text ke sath sath HTML tags ko bhi change kar deti hai

// example:

// let para = document.getElementById("about");
//  console.dir(para.innerHTML );


 
// 3. textContent 

// let para= document.getElementById("about")
// console.dir(para.textContent);



// manifulating attributes
    //obj.getattribute(attr)
    //  get attribute humay kisi bhi element ka attribute value return karta hai


//  obj.setattribute(attr,value)
    // set attribute humay kisi bhi element ka attribute value set karta hai

 
//  .removeattribute()
    // remove attribute humay kisi bhi element ka attribute remove karta hai

//  .hasattribute()
    // has attribute humay check karta hai k kisi element mai wo attribute hai ya nahi  
  

    // example:

// let img=document.getElementById("mainImg");
// console.dir(img);

//  ab hum get attribute use karte hain src attribute ka value lene k liye
// console.log(img.getAttribute("src")); // images/img1.jpg    
//  ab hum set attribute use karte hain src attribute ka value change karne k liye
// img.setAttribute("src","assets/creation_1.jpeg");



// manipulating style with syle attribue

// let heading1=document.querySelector("h1")

// heading1.style.color="green";
// heading1.style.backgroundColor="yellow";
// console.log(heading1)
  

// classlist property

//   classlist ke through hum cheak karta hy ak obj ka 
// class list ka esko hum nay ketnay class dey raka hy


let img=document.querySelector("img");
 
//  img.classList.add("addnew"); //add new class to obj
console.log(img.classList);

let heading=document.querySelector("h1");
 
heading.classList.add("blue")
heading.classList.add("green")
// heading.classList.remove("blue") // it's used to remove class
 heading.classList.contains("red") //contains cheak class is exist or not ye false dega kuenkay red ka class nahi hy
  
 heading.classList.toggle("blue") 
  /* toggle ka matlab agar on hoga tu off karyga aur agar off hoga  tu on karga  yaha per hum nay blue pas kya tu blue 
   list mai hy tu toggle huva matlab remove hova aur agar 
   ye list mai nahi ta tu per esko ye  add karyga */

   
console.log(heading.classList);



// let div=document.querySelector("div")
//   console.log(div.classList.add("newbox")) ;



