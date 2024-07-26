const UserModel = require("../../models/user.model");

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to delete user",
      error: error.message || error,
    });
  }
};

module.exports = deleteUserController;
