const UserModel = require("../models/user.model");

const getMyCoursesController = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).populate(
      "enrolledCourses"
    );

    res.status(200).json({ courses: user.enrolledCourses });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getMyCoursesController;