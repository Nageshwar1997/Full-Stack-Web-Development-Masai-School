require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");
const fs = require("fs");

const usersRouter = require("./routes/users.route");
const todosRouter = require("./routes/todos.route");
const blogsRouter = require("./routes/blogs.route");
const loggerMiddleware = require("./middlewares/logger.middleware");
const validationMiddleware = require("./middlewares/validation.middleware");

const app = express();
app.use(express.json());

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

// Users
app.use("/users", [loggerMiddleware, validationMiddleware], usersRouter);

// Todos
app.use("/todos", todosRouter);

// Blogs
app.use("/blogs", blogsRouter);

// Multer
app.post("/profile", upload.single("avatar"), async function (req, res, next) {
  // Ensure the uploads directory exists
  !fs.existsSync("./uploads") && fs.mkdirSync("./uploads");

  // Configure Cloudinary
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
  });

  try {
    // Upload the file to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(req.file.path);
    console.log(uploadResult);

    // Remove the file from the local uploads directory
    fs.unlinkSync(req.file.path);

    res.send("Success");
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file");
  }
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
