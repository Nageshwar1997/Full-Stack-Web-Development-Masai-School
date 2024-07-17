const express = require("express");
const teacherRouter = express.Router();

teacherRouter.get("/", (req, res) => {
  res.send({ message: "All Teachers data" });
});

teacherRouter.post("/", (req, res) => {
  console.log("new teacher", req.body);
  res.send({ message: "Teacher added successfully" });
});

module.exports = { teacherRouter };
