const express = require("express");
var jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    const user = new UserModel({
      name,
      email,
      password,
      age,
    });
    user.save();

    res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
      }
var token = jwt.sign({ name: user.name }, 'token');
      
    res.status(200).json({
      message: "Login successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging user",
      error: error.message,
    });
  }
});

module.exports = userRouter;
