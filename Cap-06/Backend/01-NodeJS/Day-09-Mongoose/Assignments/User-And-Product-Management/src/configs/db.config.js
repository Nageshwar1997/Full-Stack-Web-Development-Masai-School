const mongoose = require("mongoose");

const connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Mongoose"
);

module.exports = connection;