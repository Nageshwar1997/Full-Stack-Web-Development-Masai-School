const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB_URI;
/**
 * mongodb://127.0.0.1:27017/dbName
 * mongodb --> http
 * 127.0.0.1 --> ip address
 * 27017 --> port number
 * dbName --> name of database
 */

const connection = mongoose.connect(mongoURI);

module.exports = connection;
