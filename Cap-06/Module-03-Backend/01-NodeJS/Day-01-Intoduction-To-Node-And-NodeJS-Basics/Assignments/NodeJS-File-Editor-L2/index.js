const fs = require("fs");
const path = require("path");

const arguments = process.argv.slice(2);
const operation = arguments[0];
const file = arguments[1];
const content = [...arguments.slice(2)];

const currentDirectory = process.cwd();

// complete the following function.

switch (operation) {
  case "create": {
    if (!file) {
      console.log("Please provide a file name");
      break;
    }
    const filePath = path.join(currentDirectory, file);
    fs.writeFileSync(filePath, content.join(" "), "utf-8");
    console.log("File created successfully");
    break;
  }

  default:
    console.log("Invalid operation");
    break;
}
