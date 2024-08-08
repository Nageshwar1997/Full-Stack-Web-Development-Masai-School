require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure the uploads directory exists
if (!fs.existsSync("./uploads")) {
  fs.mkdirSync("./uploads");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), async (req, res) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path);

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "File uploaded successfully",
      imageUrl: uploadResult.url,
    });
  } catch (error) {
    res.status(500).send("Error uploading file");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
