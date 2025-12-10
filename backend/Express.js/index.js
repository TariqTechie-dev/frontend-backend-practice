const express=require('express');
const app=express();
let port=3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("Request received");
//    let fruits="<h1>fruits</h1> <ul><li>apple</li><li>Mango</li</ul>"
//    res.send(fruits);
// })


app.get("/", (req,res)=>{
    res.send("you contacted to root path")
})
// app.get("/apple", (req,res)=>{
//     res.send("you contacted to apple path")
// })
// app.get("/orange", (req,res)=>{
//     res.send("you contacted to orange path")
// })

// app.get("*", (req,res)=>{
//     res.send("404 page not found")
// })
// app.post("/", (req,res)=>{
//     res.send("you send a post request to root path")
// })

app.get("/:user/:id", (req,res)=>{
    let user=req.params.user;
    let id=req.params.id;
    res.send(`<h1>you contacted to ${user} with id of ${id}</h1>`);
});


app.get("/search", (req,res)=>{
    let query=req.query.q;
    res.send(`<h1>you searched for ${query}</h1>`);
    console.log(req.query);
});