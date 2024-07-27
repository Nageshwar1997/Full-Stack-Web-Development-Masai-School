const mongoose = require("mongoose");

const mongoDbURL = process.env.MONGODB_URI;

const connection = mongoose.connect(mongoDbURL);

module.exports = connection;
