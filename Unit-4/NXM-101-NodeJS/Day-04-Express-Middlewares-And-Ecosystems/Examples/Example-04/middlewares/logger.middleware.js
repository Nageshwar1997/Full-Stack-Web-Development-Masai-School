const fs = require("fs");

const logger = (req, res, next) => {
  fs.appendFileSync(
    "./logs.txt",
    `Client visited ${req.url} and the method was ${req.method} at ${Date()}\n`,
    "utf-8"
  );
  next();
};

module.exports = {logger};
