const express = require("express");
const fs = require("fs");
const path = require("path");

const server = express();
const PORT = 8080;

// Middleware to parse JSON bodies
server.use(express.json());

const userValidationMiddleware = (req, res, next) => {
  console.log("This is User Validation Middleware");
  try {
    // Read and parse the database file
    const dataPath = path.join(__dirname, "db.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    const parsedData = JSON.parse(data);

    // Check if the user already exists
    const existingUser = parsedData.users.find(
      (user) => user.email === req.body.email
    );

    if (!existingUser) {
      // If user exists, send a response and return early
      return res.status(409).send({
        message: "User Not Found",
      });
    }

    // Add the new user to the database
    parsedData.users.push(req.body);
    fs.writeFileSync(dataPath, JSON.stringify(parsedData, null, 2));

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors (file reading, JSON parsing, etc.)
    console.error("Error:", error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
};
const authMiddleware = (req, res, next) => {
  console.log("This is Auth Middleware");
  try {
    // Read and parse the database file
    const dataPath = path.join(__dirname, "db.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    const parsedData = JSON.parse(data);

    // Check if the user available in the database
    const existingUser = parsedData.users.find(
      (user) =>
        user.email === req.body.email && user.password === req.body.password
    );

    if (!existingUser) {
      // If user exists, send a response and return early
      return res.status(409).send({
        message: "User Not Found",
      });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors (file reading, JSON parsing, etc.)
    console.error("Error:", error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

const hashPasswordMiddleware = (req, res, next) => {
  console.log("This is Hash Password Middleware");
  try {
    // Read and parse the database file
    const dataPath = path.join(__dirname, "db.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    const parsedData = JSON.parse(data);

    // Check if the user available in the database
    const existingUser = parsedData.users.find(
      (user) =>
        user.email === req.body.email && user.password === req.body.password
    );

    if (!existingUser) {
      // If user exists, send a response and return early
      return res.status(409).send({
        message: "Wrong Credentials",
      });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors (file reading, JSON parsing, etc.)
    console.error("Error:", error);
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

server.get("/", (req, res) => {
  console.log("This is Home Page");
  res.status(200).send(`<h1>Welcome to Home Page</h1>`);
});

server.post("/sign-up", userValidationMiddleware, (req, res) => {
  console.log(req.body);
  res.status(201).send({
    message: "User added successfully",
  });
});

server.post("/login", authMiddleware, hashPasswordMiddleware, (req, res) => {
  res.status(200).send({
    message: "User logged in successfully",
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
