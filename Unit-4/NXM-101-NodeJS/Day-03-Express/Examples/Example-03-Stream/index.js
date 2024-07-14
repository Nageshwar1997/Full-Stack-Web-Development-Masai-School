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
app.post("/addMovie", (req, res) => {
  const writeStream = fs.createWriteStream("./data.txt", {
    flags: "a",
  });

  writeStream.write(
    `Title: ${req.body.title}, Year: ${req.body.year}\n`,
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error writing to file");
      }
      res.send("Movie added successfully");
    }
  );
  writeStream.end();
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
