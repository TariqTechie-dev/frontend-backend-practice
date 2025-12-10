// change event

// the change event is used to detect when the value of an input element changes.
// ye chotay chotay change ko trick nahi karta
// ye inital aur final value ke beech ka difference ko detect karta hy

// ye tabhi chalega jab hum input box se bahar click karenge


let form = document.querySelector("form")
form.addEventListener("submit",
    function (event) {
        event.preventDefault();
    })      
let inp=document.querySelector("input")

inp.addEventListener("input",function(event){
    
    console.log("input value is changed")
    console.log(this.value)
})

// input event
 // the input event is used to detect when the value of an input element changes.
// ye har chotay change ko detect karta hy` 
