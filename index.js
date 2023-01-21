const fs = require("fs");

//~ contineously give data by raising event with name 'data'.
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`); //& utf-8 encoding format.
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on("data", (chunk) => {
  ourWriteStream.write(chunk);
});
