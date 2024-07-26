const UserModel = require("../../models/user.model");

const getAllUsersController = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({
      success: true,
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message || error,
    });
  }
};

module.exports = getAllUsersController;
