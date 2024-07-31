const express = require("express");

const blogsRouter = express.Router();

blogsRouter.get("/blogs", (req, res) => {
  res.send("These are the blogs");
});

blogsRouter.post("/add-blog", (req, res) => {
  res.send("Blog added successfully");
});

blogsRouter.put("/blog/:id", (req, res) => {
  res.send("Blog updated successfully");
});

blogsRouter.delete("/blog/:id", (req, res) => {
  res.send("Blog deleted successfully");
});

module.exports = blogsRouter;
