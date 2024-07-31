const express = require("express");

const usersRouter = express.Router();

usersRouter.post("/signup", (req, res) => {
  res.send("Signup success");
});
usersRouter.post("/login", (req, res) => {
  res.send("Login success");
});
module.exports = usersRouter;
