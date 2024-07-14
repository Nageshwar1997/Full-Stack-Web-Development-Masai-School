const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/movie", (req, res) => {
    const movie_chunks = fs.createReadStream("./data.txt", "utf-8");
    movie_chunks.pipe(res);
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
