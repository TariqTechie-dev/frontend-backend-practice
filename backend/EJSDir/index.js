const express = require('express');
const app = express();
let port = 3000;
const path = require("path")

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    let followers = ["john_doe", "jane_smith", "cool_user", "tech_guru", "nature_lover"];

    res.render("rolldice.ejs", { num: diceVal, diceVal, followers });
})

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     let followers = ["john_doe", "jane_smith", "cool_user", "tech_guru", "nature_lover"]; // 👈 yahan add karo

//     res.render("instagram.ejs", { username, followers }); // 👈 followers bhi pass karo
// })

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");
    let userData = instaData[username];
    console.log(userData);
   if (userData) {
       res.render("instagram.ejs", { userData });
   } else {
    res.render("error.ejs");
   }
    
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

