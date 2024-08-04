const morgan = require("morgan");

const loggingMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms"
);

module.exports = loggingMiddleware;
