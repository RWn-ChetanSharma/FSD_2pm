const express = require("express");
const app = express();
const PORT = 8000;


// Home Path Route 

app.get('/', (req, res) => {
    res.send("Hello Home Page")
})

// About Path Route 

app.get('/about', (req, res) => {
    // res.send("Hello About Page " + req.query.name + req.query.age)
    res.send(`Namaste ${req.query.name}. Your age is ${req.query.age}`)
})


app.listen(PORT, () => {
  console.log(`Server Started at PORT : ${PORT}`);
});
