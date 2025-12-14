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
    let diceVal=Math.floor(Math.random()*6) +1
    res.render("rolldice.ejs", {num:diceVal});
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

