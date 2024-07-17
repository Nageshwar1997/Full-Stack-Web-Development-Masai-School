const express = require("express");
const fs = require("fs");

// Question : Write a middleware that will log all routes and methods visited by a client in a separate file

const app = express();

// First middleware execute first
app.use((req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `Client visited ${req.url} and the method was ${req.method} at ${Date()}\n`,
    "utf-8"
  );
  next();
});

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("HOME PAGE");
// });

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});

app.get("/contacts", (req, res) => {
  res.send("CONTACTS PAGE");
});

app.get("/data", (req, res) => {
  res.send("DATA PAGE");
});

// app.use((req, res, next) => {
//   req.body.location = "Nanded";
//   next()
// })

// app.post("/add", (req, res) => {
//   console.log(req.body)
//   res.send("Data that has to be posted in terminal")
// })

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
