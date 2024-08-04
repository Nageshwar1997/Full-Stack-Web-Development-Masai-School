const express = require("express");
const enrollCourseController = require("../controllers/enrollCourse.controller");
const cancelEnrollmentController = require("../controllers/cancelEnrollment.controller");
const getMyCoursesController = require("../controllers/getMyCourses.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = express.Router();

userRouter.post("/enroll", authMiddleware, enrollCourseController);
userRouter.post(
  "/cancel-enrollment",
  authMiddleware,
  cancelEnrollmentController
);
userRouter.get("/my-courses", authMiddleware, getMyCoursesController);

module.exports = userRouter;
