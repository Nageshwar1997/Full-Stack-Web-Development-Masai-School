const express = require("express");
const connection = require("./src/database/db");
const UserModel = require("./src/models/user.model");

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// CRUD Operations

// Create
app.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({
      success: false,
      error: "Please provide name, email and password",
    });
  }
  if (email && !email.includes("@")) {
    res.status(400).json({
      success: false,
      error: "Please provide valid email",
    });
  }

  if (password && password.length < 6) {
    res.status(400).json({
      success: false,
      error: "Password should be at-least 6 characters",
    });
  }

  const user = new UserModel({ name, email, password, ...req.body });
  await user.save();

  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
});

// Server Listening
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection to be failed");
  }
  console.log("Server is running on port 8080");
});
