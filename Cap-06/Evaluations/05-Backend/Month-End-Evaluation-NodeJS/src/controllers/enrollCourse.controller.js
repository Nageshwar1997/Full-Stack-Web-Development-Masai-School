const UserModel = require("../models/user.model");

const enrollCourseController = async (req, res) => {
  try {
    const { courseId } = req.body;
    const user = await UserModel.findById(req.user._id);

    if (user.enrolledCourses.includes(courseId)) {
      return res
        .status(400)
        .json({ message: "Already enrolled in this course" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.status(201).json({
      message: "Successfully enrolled in the course",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = enrollCourseController;