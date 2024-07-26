const express = require("express");
const connection = require("./src/config/db.config");
const glassRouter = require("./src/routes/glass.route");


const app = express();
const PORT = 8080;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Glass Store");
});

app.use("/glass", glassRouter)



app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`App is running on port ${PORT} and connected to MongoDB`);
  } catch (error) {
    console.log("Error connecting to MongoDB or app is not running ", error);
  }
});

// JUST FOR TESTING SCRIPT

/*
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
    console.log("Connected to MongoDB");

    // If I want to add a single data
    const newGlass = new GlassModel({
      color: "red",
      material: "plastic",
      size: 4,
      brand: "puma",
    });

    await newGlass.save();
    console.log("Glass added successfully");
    connection.disconnect();

    // If I want to add multiple data
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
    // console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB ", error);
  }
};

main();
*/
