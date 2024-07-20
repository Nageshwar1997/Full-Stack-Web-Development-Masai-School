const fs = require("fs");
const { sum, sub, pro, div } = require("./data");

// Read the data from file

// Asynchronous read
fs.readFile("./data.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
console.log(asyncData);
console.log("Asynchronous");

// Synchronous read
