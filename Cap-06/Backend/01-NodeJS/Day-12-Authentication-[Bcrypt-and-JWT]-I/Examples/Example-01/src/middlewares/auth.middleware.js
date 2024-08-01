const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.query.token;
  if (req.query.token === "token") {
    var decoded = jwt.verify(token, "shhhhh");
    console.log(decoded); // bar

    // verify a token symmetric
    jwt.verify(token, "token", function (err, decoded) {
      console.log(decoded); // bar
    });
    next();
  } else {
    res.status(401).send("Please login first");
  }
};

module.exports = authMiddleware;
