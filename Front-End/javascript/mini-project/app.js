let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")


btn.addEventListener("click", function () {
   let item = document.createElement("li")
   item.innerHTML = inp.value;
   let delbtns = document.createElement("button")
   delbtns.innerHTML = "delete"
   delbtns.classList.add("delete")
   item.appendChild(delbtns)
   ul.appendChild(item);
   inp.value = "";

})
// 💡 Event delegation kyu use karte hain?

// Kam code likhna padta hai
// — Agar 100 buttons hain, to har button per addEventListener laganay ke bajaye
// sirf ek listener parent (jaise <ul>) par laga do.

// Naye elements ke sath bhi kaam karta hai
// — Agar baad mai JavaScript se new button add karo,
// wo bhi automatically click listener ke under aa jata hai

// 🧩 1. Event Bubbling (یعنی واقعے کا اوپر جانا)

// Socho tumharay HTML mai ye structure hai:

// <ul id="list">
//   <li><button>Delete</button></li>
// </ul>


// Ab agar button per click hua, to event pehlay button par chalta hai,
// phir uska parent (li) par jata hai,
// phir uska parent (ul) par jata hai,
// aur aise aage aage “upar” bubble hota rehta hai.
// 👉 Is process ko event bubbling kehtay hain.

ul.addEventListener("click", function (event) {
   // console.dir(event.target.nodeName);
   if (event.target.nodeName === "BUTTON") {
      const listitem = event.target.parentElement;
      listitem.remove();
      console.log("button deleted");
   }
});








// let delBtns=document.querySelectorAll(".delete")

// for(delbtn of delBtns){
//    delbtn.addEventListener("click", function(){
//       let par=delbtn.parentElement;
//       par.remove()
//       console.log(par)
//    })
// }