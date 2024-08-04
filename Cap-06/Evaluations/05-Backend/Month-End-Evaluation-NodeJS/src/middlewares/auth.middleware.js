const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  const secretKey = process.env.TOKEN_SECRET_KEY || "masai";
  if (!token) {
    return res.status(401).json({
      message: "Access Denied",
    });
  }

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;
