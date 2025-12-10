let btn= document.querySelector("button")

btn.addEventListener("click", function(){
   let h3=document.querySelector("h3")
   let randomcolor=getRandoColor();
   h3.innerHTML=randomcolor;
   let div=document.querySelector("div")
   div.style.backgroundColor=randomcolor;
   let randomcolor2=getRandoColor2()
   div.style.color=randomcolor2
   console.log("color is updated");
})

function getRandoColor(){
   let red= Math.floor(Math.random()*255);
   let green= Math.floor(Math.random()*255);
   let blue= Math.floor(Math.random()*255);

   let color=`rgb(${red},${green},${blue} )`;
   return color;
}

function getRandoColor2(){
   let red= Math.floor(Math.random()*255);
   let green= Math.floor(Math.random()*255);
   let blue= Math.floor(Math.random()*255);

   let color=`rgb(${red},${green},${blue} )`;
   return color;
}

