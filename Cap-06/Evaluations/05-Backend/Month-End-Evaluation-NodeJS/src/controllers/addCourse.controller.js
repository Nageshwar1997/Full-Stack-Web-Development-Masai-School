const CourseModel = require("../models/course.model");

const addCourseController = async (req, res) => {
  try {
    const { title, category, difficulty, description } = req.body;

    const newCourse = new CourseModel({
      title,
      category,
      difficulty,
      description,
    });

    await newCourse.save();

    res.status(201).json({
      message: "Course Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = addCourseController;