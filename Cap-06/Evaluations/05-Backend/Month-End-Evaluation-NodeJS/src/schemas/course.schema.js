const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    difficulty: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = courseSchema;
