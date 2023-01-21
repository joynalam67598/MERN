// const fs = require("fs");

// //~ contineously give data by raising event with name 'data'.
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf-8"); //& encoding format.

// ourReadStream.on("data", (data) => {
//   console.log(data);
// });

const http = require("http");
const { Stream } = require("stream");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head>");
    res.write(
      "<body><form method='post' action='/process'><input name='message' /></form></body></html>"
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.end("data", (chunk) => {
      console.log("stream finished");
      const parsedBody = Buffer.concat(body).toString(); //~ Buffer -> node js default object.
      console.log(parsedBody);
    });
    res.write("Data found");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(8080);
