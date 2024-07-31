const loggerMiddleware = (req, res, next) => {
  console.log(req.url, req.method, req.time);
  next();
};

module.exports = loggerMiddleware;
