const CourseModel = require("../models/course.model");

const getCoursesController = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, difficulty } = req.query;
    const query = {};

    if (category) {
      query.category = category;
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    const courses = await CourseModel.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    res.status(200).json({
      data: courses,
      page,
      totalPages: Math.ceil(courses.length / limit),
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = getCoursesController;