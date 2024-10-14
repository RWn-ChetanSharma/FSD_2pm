const fs = require("fs");

// Synchronous

// fs.writeFileSync('./test.txt', "Namaste Bharat Sync")

// const res = fs.readFileSync("./test.txt", "utf-8", (err)=>{})
const res = fs.readFileSync("./test.txt",  (err)=>{})
console.log(res);
console.log(res.toString());

// fs.unlinkSync("./about.txt")



// Asynchronous

// fs.writeFile("./test.txt", "Namaste Bharat Async");  // err
// fs.writeFile("./test.txt", "Namaste Bharat Async", (err) => {});

// fs.readFile("./about.txt", "utf-8" , (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//     // console.log(res.toString());
//   }
// });

// fs.unlink("./test.txt", (err)=>{})
