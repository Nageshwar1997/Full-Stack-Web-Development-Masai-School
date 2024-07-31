const express = require("express");
const app = express();

app.post("/signup", (req, res) => {
  res.send("Signup success");
});
app.post("/login", (req, res) => {
  res.send("Login success");
});

app.get("/todos", (req, res) => {
    
})

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
