const express = require("express");
const fs = require("fs");

const validationMiddleware = require("./middleware/validation.middleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(validationMiddleware);

// Routes
app.post("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "plain/text" });
  const msg = fs.readFileSync("./res.txt", "utf-8");
  res.end(msg);
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
