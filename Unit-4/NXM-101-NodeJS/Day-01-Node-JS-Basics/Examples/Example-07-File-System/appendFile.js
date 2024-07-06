const fs = require("fs");

// fs.appendFile("./test.txt", "Learning FS Module", (err) => { // it will append data in a same line
// fs.appendFile("./test.txt", "\nLearning Path Module", (err) => { // it will append the data in a new line
// fs.appendFile("./test.txt", "\n\t\tLearning Path Module", (err) => {
fs.appendFile("./test.txt", "\n\t\tLearning Path Module", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data Appended successfully in the file");
  }
});
