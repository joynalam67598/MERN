// can communicate with network.
// through this we can create server in our app.
const http = require("http");

const server = http.createServer();

// const server = http.createServer((req, res) => {
//   res.write("req accepted");
//   res.end();
// });

// port  number -> in which port we want run. can be multiple.
server.listen(3000);
