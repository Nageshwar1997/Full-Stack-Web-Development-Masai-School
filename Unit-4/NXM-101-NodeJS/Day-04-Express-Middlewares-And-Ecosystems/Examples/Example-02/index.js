const express = require("express");

const app = express();

// Middleware will run before every route
// First middleware execute first
app.use((req, res, next) => {
  console.log(1);
  next();
  console.log(7);
});
app.use((req, res, next) => {
  console.log(2);
  next();
  console.log(8);
});

app.get("/", (req, res) => {
  console.log(3);
  res.send("HOME PAGE");
}); // 1 2 3 8 7

app.get("/about", (req, res) => {
  console.log(4);
  res.send("ABOUT PAGE");
}); // 1 2 4 8 7

app.get("/contacts", (req, res) => {
  console.log(5);
  res.send("CONTACTS PAGE");
}); // 1 2 5 8 7

app.get("/data", (req, res) => {
  console.log(6);
  res.send("DATA PAGE");
}); // 1 2 6 8 7

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
