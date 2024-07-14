const express = require("express");

const app = express();

//this is a middleware we will see these in detail in the upcoming session
app.use(express.json()); //this will parse the data in the req.body and you will be able to get it as well and console.log() it

app.get("/", (req, res) => {
  res.end("Home Page");
});

app.get("/reports", (req, res) => {
  res.end("Reports Page");
});

app.post("/add", (req, res) => {
  console.log("Data", req.body);
  res.end("Data Sent");
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
