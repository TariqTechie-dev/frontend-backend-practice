let inp = document.createElement("input")
let btn = document.createElement("button")
btn.innerHTML = "click me"
inp.setAttribute("type", "text")


document.body.appendChild(inp)
document.body.appendChild(btn)

btn.setAttribute("id", "btn")
inp.setAttribute("placeholder", "enter your name")

let button=document.querySelector("#btn")

// Question:4 answer
let h1=document.createElement("h1")
h1.innerHTML="<ul> Dom practice</ul>"
document.body.appendChild(h1)

// Question:5 answer

let p=document.createElement("p")
p.innerHTML="Apna College <b>Delta</b> Practice"
document.body.appendChild(p)