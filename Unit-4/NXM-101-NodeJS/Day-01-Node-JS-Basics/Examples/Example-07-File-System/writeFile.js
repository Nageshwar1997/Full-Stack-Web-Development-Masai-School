const fs = require("fs");

// This is a synchronous write
// fs.writeFile("./test.txt", "Hi I'm Nageshwar Pawar", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Data added successfully in the file");
// });

// This is for synchronous write
try {
  fs.writeFileSync("./test.txt", "Hi I'm Nageshwar Pawar");
  console.log("Data added successfully in the file");
} catch (error) {
  console.log(err);
}
