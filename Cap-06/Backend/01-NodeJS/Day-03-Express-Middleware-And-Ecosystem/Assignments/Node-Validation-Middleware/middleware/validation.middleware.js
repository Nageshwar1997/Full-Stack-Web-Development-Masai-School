const fs = require("fs");

const isStringsArr = (arr) => {
  return (
    Array.isArray(arr) &&
    arr.length > 0 &&
    arr.every((el) => typeof el === "string")
  );
};

const validationMiddleware = (req, res, next) => {
  console.log("req.body", req.body);
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  const errors = [];

  if (typeof ID !== "number" || !ID || ID < 0) {
    errors.push("ID is required and must be a number and greater than zero");
  }

  if (typeof Name !== "string" || !Name) {
    errors.push("Name is required and must be a string");
  }

  if (typeof Rating !== "number" || Rating <= 0) {
    errors.push("Rating is required and must be a positive number");
  }

  if (typeof Description !== "string" || !Description) {
    errors.push("Description is required and must be a string");
  }

  if (typeof Genre !== "string" || !Genre) {
    errors.push("Genre is required and must be a string");
  }

  if (!isStringsArr(Cast)) {
    errors.push("Cast is required and must be an array of strings");
  }
  if (errors.length > 0) {
    res.writeHead(400, { "Content-Type": "plain/text" });
    const errorText = errors.join("\n");
    fs.writeFileSync("./res.txt", errorText);

    const data = fs.readFileSync("./res.txt", "utf-8");
    res.end(data);
  } else {
    fs.writeFileSync("./res.txt", "Data received successfully");
    next();
  }
};

module.exports = validationMiddleware;
