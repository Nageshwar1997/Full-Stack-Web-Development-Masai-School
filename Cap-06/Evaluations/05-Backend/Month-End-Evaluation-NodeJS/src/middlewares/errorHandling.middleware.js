const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err.message || err);
  res.status(500).json({
    message: "Internal Server Error",
  });
};

module.exports = errorHandlingMiddleware;
