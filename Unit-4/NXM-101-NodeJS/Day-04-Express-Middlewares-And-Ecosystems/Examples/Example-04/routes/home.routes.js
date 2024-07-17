const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send({ message: "Hello from HOME PAGE" });
});

module.exports = { homeRouter };
