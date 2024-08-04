const express = require("express");
const CourseModel = require("../models/course.model");
const getCoursesController = require("../controllers/getCourses.controller");
const addCourseController = require("../controllers/addCourse.controller");

const courseRouter = express.Router();

courseRouter.get("/courses", getCoursesController);
courseRouter.post("/add-course", addCourseController);

module.exports = courseRouter;
