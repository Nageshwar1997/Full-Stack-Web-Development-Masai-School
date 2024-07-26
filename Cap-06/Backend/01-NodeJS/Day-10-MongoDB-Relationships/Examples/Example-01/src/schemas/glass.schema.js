const mongoose = require("mongoose");

// Schema for Glass
const glassSchema = mongoose.Schema(
  {
    color: String,
    material: String,
    size: Number,
    brand: String,
  },
  {
    versionKey: false,
  }
);

module.exports = glassSchema;