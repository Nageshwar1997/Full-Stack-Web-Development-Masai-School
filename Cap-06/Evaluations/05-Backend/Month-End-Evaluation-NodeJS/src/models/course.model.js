const mongoose = require("mongoose");
const courseSchema = require("../schemas/course.schema");

const CourseModel = mongoose.model("Course", courseSchema);

module.exports = CourseModel;
