require("dotenv").config();
const express = require("express");
const connection = require("./src/configs/db.config");
const movieRouter = require("./src/routes/movie.route");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Movie Store API");
});

app.use("/movies", movieRouter);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
});
