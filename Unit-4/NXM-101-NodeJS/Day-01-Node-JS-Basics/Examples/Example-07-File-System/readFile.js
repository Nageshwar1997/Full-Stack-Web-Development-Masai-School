const fs = require("fs");

// This is a synchronous read
// fs.readFile("test.txt", { encoding: "utf-8" }, (err, data) => {
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Hi Guys");

// // This is a synchronous read
let data;
try {
  read = fs.readFileSync("test.txt", "utf-8");
} catch (error) {
  console.log(error);
}

console.log("Read", read);
console.log("Bye Guys");
