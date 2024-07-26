const UserModel = require("../../models/user.model");

const updateUserController = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);

    res.status(202).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to update user",
      error: error.message || error,
    });
  }
};

module.exports = updateUserController;
