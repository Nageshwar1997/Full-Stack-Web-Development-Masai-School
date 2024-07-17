const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/", (req, res) => {
  res.send({ message: "All Students data" });
});

studentRouter.post("/", (req, res) => {
  console.log("new student", req.body);
  res.send({ message: "New Student Added" });
});

module.exports = { studentRouter };
