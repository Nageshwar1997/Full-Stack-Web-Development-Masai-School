const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    age: {
      type: "Number",
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
    gender: "String",
    city: "String",
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = userSchema;
