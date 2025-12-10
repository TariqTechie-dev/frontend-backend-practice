// async function hellow() {
//     return "hellow good morning";           //return a promise
// }


// hellow()
// .then((result)=>{
//     console.log("promise was resolved")
//     console.log("result was :", result)
// })
// .catch((err)=>{
//     console.log("promise was rejected with :", err)
// })


// function getnum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve("random num is ", num);

//         }, 1000)
//     })
// }


// async function demo() {
//     await getnum()
//     await getnum()
//     await getnum()
//     getnum()
// }

let h1 = document.querySelector("h1")

function changeColor(color, delay,) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num > 3) {
                rejected("promise is rejected")
            }
            h1.style.color = color;
            console.log(`color change to ${color}`)
            resolve("color change");
        }, delay);

    })
}

async function colorcall() {
    try{
        await changeColor("red", 1000)
        await changeColor("yellow", 1000)
        await changeColor("blue", 1000)
        await changeColor("green", 1000)
        await changeColor("purpule", 1000)

    } catch(err) {
        console.log("error cought")
        console.log(err);
     }
    let a = 5;
    console.log(a);
    console.log("new number", a + 3);
}