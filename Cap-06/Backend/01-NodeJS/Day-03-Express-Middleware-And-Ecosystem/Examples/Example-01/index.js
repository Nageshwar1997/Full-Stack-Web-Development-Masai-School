require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary");

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
    cb(null, file.originalname);
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
  // req.file is the `avatar` file

  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY, // Click 'View Credentials' below to copy your API secret
  });
  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(req.file.path)
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);
  // req.body will hold the text fields, if there were any
  res.send("Success");
});

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
