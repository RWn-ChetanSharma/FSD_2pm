const express = require("express");
const PORT = 8000;
const app = express();



// Set View Engine

app.set("view engine", "ejs")

// Routing 

app.get("/", (req, res)=>{
    // res.send("Namaste From Index Page")
    return res.render("index")
})

app.get("/home", (req, res)=>{
    return res.render("home")
})
app.get("/contact", (req, res)=>{
    return res.render("contact")
})

// For Error Handling we will use Middleware

app.use((req, res)=>{
    return res.status(404).render("404")
})



app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
    
})
