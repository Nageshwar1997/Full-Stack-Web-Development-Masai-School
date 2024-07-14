const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// GET --> Read
app.get("/todos", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send(data.todos);
  } catch (error) {
    res.send("Something went wrong");
  }
});

// POST --> Create
app.post("/add-todo", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.todos.push({ ...req.body, id: Math.round(Math.random() * 1000) });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Todo added successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

// PATCH ---> Update
app.patch("/update-todo", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.todos.forEach((todo, index) => {
      if (!todo.status && todo.id % 2 === 0) {
        data.todos[index].status = true;
      }
    });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Todo updated successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

// DELETE --> Delete
app.delete("/delete-todo", (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let updatedData = data.todos.filter((todo) => {
      return todo.status !== true;
    });
    data.todos = updatedData;
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Todos Deleted successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
