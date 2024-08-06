const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 8080;

const logDirectory = path.join(__dirname, "src");
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

app.use(
  morgan(
    ":method :status :res[content-length] - :response-time ms :date[clf] HTTP/:http-version :url",
    { stream: accessLogStream }
  )
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Home Page");
});

app.get("/get-users", (req, res) => {
  res.status(200).json({ message: "All users..." });
});

app.post("/add-user", (req, res) => {
  res.status(201).json({ message: "User added successfully" });
});

app.put("/user/:id", (req, res) => {
  res.status(201).json({ message: `User updated successfully` });
});

app.delete("/user/:id", (req, res) => {
  res.status(200).json({ message: `User deleted successfully` });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
