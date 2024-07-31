const express = require("express");

const todosRouter = express.Router();

todosRouter.get("/todos", (req, res) => {
  res.send("These are the todos");
});

todosRouter.post("/add-todo", (req, res) => {
  res.send("Todo added successfully");
});

todosRouter.put("/todo/:id", (req, res) => {
  res.send("Todo updated successfully");
});

todosRouter.delete("/todo/:id", (req, res) => {
  res.send("Todo deleted successfully");
});

module.exports = todosRouter;
