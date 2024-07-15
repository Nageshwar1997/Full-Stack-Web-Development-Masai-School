const express = require("express");

const app = express();
const timeLogger = (req, res, next) => {
  //   console.log("Hello from MIDDLEWARE");
  const startTime = new Date().getTime();
  next(); // It is going to take your compiler to the next thing in line to be executed
  const endTime = new Date().getTime();
  console.log(
    `Time taken by MIDDLEWARE for processing is ${endTime - startTime}ms`
  );
  //   console.log("Bye from MIDDLEWARE");
};

// Middleware will run before every route
app.use(timeLogger);

app.get("/", (req, res) => {
  console.log("Hello from HOME PAGE");
  res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
  console.log("Hello from ABOUT PAGE");
  res.send("ABOUT PAGE");
});

app.get("/contacts", (req, res) => {
  console.log("Hello from CONTACTS PAGE");
  res.send("CONTACTS PAGE");
});

app.get("/data", (req, res) => {
  console.log("Hello from DATA PAGE");
  res.send("DATA PAGE");
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
