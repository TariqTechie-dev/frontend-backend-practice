// sending  header with api 

// let joke = "https://icanhazdadjoke.com/"

// async function getjoke() {
//     try {
//         let config = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         let res = await axios.get(joke , config);
//         console.log(res.data.joke);
//     } catch (err) {
//         console.log(err);
//     }

// }








let url = "http://universities.hipolabs.com/search?name="
let button = document.getElementById("country");
button.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let uniArray = await getUniversity(country);
    show(uniArray);

});

function show(uniArray) {
    let list=document.getElementById("list");
    list.innerHTML="";  // to clear previous list
    for(let uni of uniArray){
        console.log(uni.name);
        let li=document.createElement("li");
        li.innerText=uni.name;
        list.appendChild(li);
    }   

}




async function getUniversity(country) {
    try {
        let response = await axios.get(url + country);
        return response.data;

    } catch (err) {
        console.log("error", err);
        return [];
    }
}