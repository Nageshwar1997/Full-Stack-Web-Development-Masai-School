const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/dbName";
/**
 * mongodb://127.0.0.1:27017/dbName
 * mongodb --> http
 * 127.0.0.1 --> ip address
 * 27017 --> port number
 * dbName --> name of database
 */

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

// Model for Glass
const GlassModel = mongoose.model("Glass", glassSchema);

const main = async () => {
  try {
      const connection = await mongoose.connect(mongoURI);
      const newGlass =  new GlassModel({
        color: "red",
        material: "plastic",
        size: 4,
        brand: "puma",
      })

    // await GlassModel.insertMany([
    //   {
    //     color: "red",
    //     material: "plastic",
    //     size: 5,
    //     brand: "puma",
    //   },
    //   {
    //     color: "blue",
    //     material: "steel",
    //     size: 6,
    //     brand: "raymond",
    //   },
    // ]);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

main();
