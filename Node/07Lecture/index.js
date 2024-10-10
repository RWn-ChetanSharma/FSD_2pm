const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

// Middleware

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Static Array for all Records  // as a database

let records = [];

// Home Route

app.get("/", (req, res) => {
  // res.send("Namaste Bharat")
  return res.render("index", { records });
});

// Add Route 

app.post("/add", (req, res)=>{
    const newRecord = req.body.record
    records.push(newRecord)    
    res.redirect("/")
})

// Server listen

app.listen(PORT, () => {
  console.log("Server Started");
});
