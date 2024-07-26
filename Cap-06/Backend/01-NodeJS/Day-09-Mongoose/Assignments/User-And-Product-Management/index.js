require("dotenv").config();
const express = require("express");

const connection = require("./src/configs/db.config");
const userRouter = require("./src/routes/user.route");
const productRouter = require("./src/routes/product.route");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to User and Product Management");
});

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, async () => {
  try {
    console.log(`App is running on port ${PORT}`);
    await connection;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection failed", error);
  }
});
