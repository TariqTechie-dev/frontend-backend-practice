let h1 = document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color="blue";
// },1000);
// setTimeout(()=>{
//     h1.style.color="red";
// },2000);
// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

function changeColor(color, delay, nextColorchange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorchange) nextColorchange();
    }, delay);


}


changeColor("blue", 1000, () => {
    changeColor("red", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("purple", 1000);
            });
        });
    })

})
// yaha per callback nesting horaha hay
// ye callback hell hay  yani aik function ke andar doosra function call karna  is tarah se code likhna mushkil ho jata hay samajhna mushkil ho jata hay islia is tarah se code nahi likhna chahie  islia hum promises or async await ka use karte hain jese hum aglay topics mai dekhenge. 

function saveTodb(data, success, failer) {
    let interspeed = Math.floor(Math.random() * 10) + 1;
    if (interspeed > 4) {
        success();
        console.log(interspeed);


    } else {
        failer();
        console.log(interspeed);
    }
}

saveTodb("tariq", () => {
    console.log("success: data was saved to DB",);
    saveTodb("khan", () => {
        console.log("sucess 2: data was saved to DB")
        saveTodb("sana",()=>{
             console.log("sucess 3:  data was saved to DB")
        },()=>{
             console.log("failer 3:  data was saved to DB")
        })
    },
        () => {
            console.log("failer 2: data was not saved to DB weak connection")
        })
}, () => {
    console.log("failer 1: data was not saved to DB weak connection");
});


// we can do  the first above work same thing with the help of promise like following


// function changeColor(color, delay,) {
//     return new Promise((resolve, rejected) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color change");
//         }, delay);

//     })

// }
// changeColor("red", 1000)
//     .then(() => {
//         console.log("color change to red");
//         return changeColor("yellow", 1000)
//     })
//     .then(() => {
//         console.log("color change to yellow");
//         return changeColor("green", 1000)
//     })
//     .then(() => {
//         console.log("color change to green");
//     })
//     .catch(() => {
//         console.log("color not supported")
//     })
