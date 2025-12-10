// 1. DOM Events kya hote hain?

// Event = koi action jo user ya browser kare.

// example:

// user click kare button par

// user hover kare mouse se

// user type kare input box mai

// page load ho

// jab ye action hota hy, hum JavaScript ke through us par koi function run kara sakte hain.


// 2. Event listener kaise lagate hain?
// hum kisi bhi element ko select karte hain, phir uske upar .addEventListener() method lagate hain.

// isme do cheezein pass karte hain:
// 1. event ka naam (jaise "click", "mouseover", "keydown", etc.)
// 2. function jo run karna hai jab event hota hai.
// Example:

let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    alert("Button was clicked!");
});

// 3. Common events:
// click - jab user click kare
// mouseover - jab mouse hover kare 
// mouseout - jab mouse element se bahar jaye
// keydown - jab user keyboard par koi key press kare
// load - jab page ya image load ho jaye    
// submit - jab form submit ho

// 4. Event object:
// jab bhi event hota hai, ek event object automatically function ko milta hai.
// isme event ke baare mein information hoti hai, jaise mouse ki position, kaunsi key press hui, etc.
// Example:
btn.addEventListener("click", function(event) {
    console.log("Mouse X: " + event.clientX);
    console.log("Mouse Y: " + event.clientY);
});

// 5. Removing event listeners:
// agar aapko kisi event listener ko remove karna ho, to aap .removeEventListener() method use kar sakte hain.
// lekin iske liye aapko function ko named function banana padega, taki aap usi function ko remove kar sako.
// Example:
function handleClick() {
    alert("Button clicked!");
}   
btn.addEventListener("click", handleClick);

// to remove the event listener
// btn.removeEventListener("click", handleClick);
// Note: agar aap anonymous function use karte hain (jaise upar wale example mein), to aap usse remove nahi kar sakte.
// isliye named function use karna better hota hai jab aapko remove karna ho.