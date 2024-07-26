const express = require("express");
const userRouter = express.Router();

const createUserController = require("../controllers/user/createUser.controller");
const getAllUsersController = require("../controllers/user/getAllUsers.controller");
const updateUserController = require("../controllers/user/updateUser.controller");
const deleteUserController = require("../controllers/user/deleteUser.controller");

userRouter.post("/create-user", createUserController);
userRouter.get("/get-all-users", getAllUsersController);
userRouter.patch("/update-user/:id", updateUserController);
userRouter.delete("/delete-user/:id", deleteUserController);

module.exports = userRouter;
