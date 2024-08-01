const mongoose = require("mongoose");
const userSchema = require("../schemas/user.schema");

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
