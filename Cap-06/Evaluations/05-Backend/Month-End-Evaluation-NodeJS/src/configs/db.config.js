const mongoose = require("mongoose");
const mongoUrl =
  process.env.MONGODB_URI ||
  "mongodb+srv://nageshpawarpatil:nageshwar1997@cluster0.sjckoau.mongodb.net/?retryWrites=true&w=majority&appName=NodeJSEvaluation";
const connection = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Server is connected to Database");
  } catch (error) {
    console.log("Failed to database connection", error);
  }
};

module.exports = connection;
