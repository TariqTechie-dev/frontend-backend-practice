let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("error", err);
//     })

// yaha per humne ek simple api request ki hay jisme humne catfact api se data fetch kiya hay or phir usay json format mai convert kar ke console p print kiya hay.

// fetch api asynchronous hota hay islia humne then() method ka use kiya hay jisme humne response or data ko handle kiya hay.
// agar koi error aata hay to hum catch() method ka use kar ke usay handle kar sakte hain.
// hum async await ka use kar ke bhi api request kar sakte hain jese ke aglay topic mai dekhenge.


// ab hum isay async await ka use kar ke bhi karte hain

// async function fetchCatFact() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log("error", err);
//     }
// }


// ⭐ Axios kya hota hai?

// Axios aik JavaScript library hai
// jo API requests ko fetch() se zyada easy banati hai.

// Yani Axios = "API call ko easy banane wala tool"



let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let fact = await axiousCatFact();

    let p = document.getElementById("result");
    p.innerText = fact;
    p.style.fontSize = "20px";
    p.style.color = "blue";
    p.style.backgroundColor = "lightgray";

});



async function axiousCatFact() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch (err) {
        console.log("error", err);
        return "no fact found";
    }
}




    // dogs api request  
let dogButton = document.getElementById("dog");
let img = document.getElementById("img");

dogButton.addEventListener("click", async () => {
    let response = await axios.get(dogapi);
    img.src = response.data.message;
    img.style.width = "300px";
    img.style.height = "300px";
    img.style.borderRadius = "10px";
    img.style.marginTop = "10px";
    img.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
    img.style.objectFit = "cover";
    img.alt = "dog image";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";


});

let dogapi="https://dog.ceo/api/breeds/image/random";
 async function dog (){
    try{
        let response = await axios.get(dogapi);
        console.log(response.data.message);
    }
    catch(err){
        console.log("error", err);
    }
}