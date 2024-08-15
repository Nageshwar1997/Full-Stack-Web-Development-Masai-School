const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const PORT = 8080 || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Blogs");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
};


const BlogSchema = new mongoose.Schema(
  {
    author: String,
    title: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: (value) => {
        return value.includes("@");
      },
    },
    createdAt: Date,
    content: String,
    tags: [String],
  },
  {
    versionKey: false,
  }
);

const BlogModel = mongoose.model("Blog", BlogSchema);

app.post("/add-blog", async (req, res) => {
  const blog = new BlogModel({
    author: "John Doe",
    title: "Example Title",
    email: "zS6qo@example.com",
    content: "Example Content",
    tags: ["example", "blog"],
    createdAt: new Date(),
  });
});

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Server is not running", error);
  }
});
