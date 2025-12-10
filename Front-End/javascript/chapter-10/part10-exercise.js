// const text = document.getElementById("text");

//     text.addEventListener("mouseout", function() {
//       text.style.color = "red";
//       text.innerText = "Mouse left!";
//       console.log("Mouse left the element");
//     });

// const inputBox = document.getElementById("inputBox");
// const message = document.getElementById("message");

// inputBox.addEventListener("keypress", function () {
//     message.innerText = `Key Pressed: ${event.key}`;
// });




let p=document.querySelector("p")
window.addEventListener("scroll", function () {
    document.getElementById("scrollMsg").innerText = "You are scrolling!" ;
    p.style.color="red"

});

let h3=document.querySelector("h3")

window.addEventListener("load", function () {
    h3.innerText = "Page is loaded" ;
    h3.style.color="green"
})

setTimeout(function(){
    h3.innerText = "downlode is complete successfully" ;
    h3.style.color="blue"
},10000
)




button=document.createElement("button")

button.innerText="click";

p.appendChild(button);

button.addEventListener("click",function(){
    this.style.backgroundColor="yellow"
})




