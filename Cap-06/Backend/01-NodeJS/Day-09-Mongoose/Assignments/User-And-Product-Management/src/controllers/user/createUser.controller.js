const UserModel = require("../../models/user.model");

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name) {
      return res.status(400).json({
        success: false,
        error: "Please provide name",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "Please provide email",
      });
    }

    if (!password) {
      return res.status(400).json({
        success: false,
        error: "Please provide password",
      });
    }

    if (email && !email.includes("@")) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid email",
      });
    }

    if (password && password.length < 6) {
      return res.status(400).json({
        success: false,
        error: "Password should be at-least 6 characters",
      });
    }

    const userExist = await UserModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        success: false,
        error: "User already exist",
      });
    }

    const user = new UserModel({ ...req.body, name, email, password });
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create user",
      error: error.message || error,
    });
  }
};

module.exports = createUserController;
