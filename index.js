const http = require("http");
const fs = require("fs");

const server = http.createServer(
  (req /* readable stream */, res /* writable stream */) => {
    const myReadStream = fs.createReadStream(
      `${__dirname}/bigdata.txt`,
      "utf-8"
    );
    myReadStream.pipe(res);
  }
);
server.listen(8080);
