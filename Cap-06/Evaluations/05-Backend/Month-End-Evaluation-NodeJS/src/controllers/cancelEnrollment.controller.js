const UserModel = require("../models/user.model");

const cancelEnrollmentController = async (req, res) => {
  try {
    const { courseId } = req.body;

    const user = await UserModel.findById(req.user._id);

    user.enrolledCourses = user.enrolledCourses.filter(
      (course) => course !== courseId
    );

    await user.save();

    res.status(202).json({ message: "Enrollment cancelled Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = cancelEnrollmentController;