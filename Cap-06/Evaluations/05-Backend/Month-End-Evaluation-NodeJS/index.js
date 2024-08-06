const express = require("express");
const cors = require("cors");
const connection = require("./src/configs/db.config");
const loggingMiddleware = require("./src/middlewares/logging.middleware");
const errorHandlingMiddleware = require("./src/middlewares/errorHandling.middleware");
const courseRouter = require("./src/routes/course.route");
const userRouter = require("./src/routes/user.route");

const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
// Logging Middleware
app.use(loggingMiddleware);

// Routes
app.use(courseRouter);
app.use(userRouter);

// Error Handling Middleware
app.use(errorHandlingMiddleware);

app.listen(PORT, async () => {
  try {
    await connection();
    console.log("App is running on port", PORT);
  } catch (error) {
    console.log("App is not running");
  }
});
