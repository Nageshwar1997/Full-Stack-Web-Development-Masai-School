require("dotenv").config();
const express = require("express");
const connection = require("./src/configs/db.config");
const userRouter = require("./src/routes/user.route");
const authMiddleware = require("./src/middlewares/auth.middleware");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});
app.get("/products", (req, res) => {
  res.send("Products Page");
});
app.get("/cart", authMiddleware, (req, res) => {
  res.send("Cart Page");
});
app.get("/checkout", authMiddleware, (req, res) => {
  res.send("Checkout Page");
});

app.listen(PORT, async () => {
  console.log("App is running on port ", PORT);
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
});
