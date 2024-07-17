const express = require("express");
const cors = require("cors");
const { studentRouter } = require("./routes/student.routes");
const { teacherRouter } = require("./routes/teacher.routes");
const { homeRouter } = require("./routes/home.routes");

const { logger } = require("./middlewares/logger.middleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use("/students", studentRouter);
app.use("/addStudent", studentRouter);
app.use("/teachers", teacherRouter);
app.use("/addTeacher", teacherRouter);
app.use("/", homeRouter);

// Running the server/app
app.listen(8080, () => {
  console.log("App is running on port 8080");
});
