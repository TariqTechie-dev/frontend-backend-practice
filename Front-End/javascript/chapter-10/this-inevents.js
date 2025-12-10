let button=document.querySelector("button")
let h1=document.querySelector("h1")
let h3=document.querySelector("h3")
let p=document.querySelector("p")

function color1(){
    console.log(this.innertext)
    this.style.backgroundColor="blue"

}
button.addEventListener("click",color1)
h1.addEventListener("click",color1)
h3.addEventListener("click",color1)
p.addEventListener("click",color1)

// button.addEventListener("click",function (){
   
//     let colors=randomColor()
//      this.style.backgroundColor=colors
       
// })

// function randomColor(){
//    let red= Math.floor(Math.random()*255);
//    let green= Math.floor(Math.random()*255);
//    let blue= Math.floor(Math.random()*255);

//    let color=`rgb(${red},${green},${blue} )`;
//    return color;
// }




// let body=document.querySelector("body")
// body.addEventListener("click",function(){
//     let color=randomColor()
//     this.style.backgroundColor=color;
// })

// function randomColor(){
//    let red= Math.floor(Math.random()*255);
//    let green= Math.floor(Math.random()*255);
//    let blue= Math.floor(Math.random()*255);

//    let color=`rgb(${red},${green},${blue} )`;
//    return color;
// }
