const http = require("http");
const fs = require("fs")



const myServer = http.createServer((req, res) => {
//   console.log("New Request Recived");
    // console.log(req);
    // console.log(req.headers);

    const log  = `New Request Recived : ${Date.now()} : ${req.url} \n`

   fs.appendFile("log.txt", log, (err, data) => {
       res.end("Namaste User");
   } )

});

myServer.listen(8000, () => {
  console.log("Server Started");
});
