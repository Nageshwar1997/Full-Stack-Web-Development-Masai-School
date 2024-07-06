const path = require("path");

const {
  createFile,
  appendToFile,
  readFile,
  renameFile,
  deleteFile,
  listDirectory,
} = require("./functions.js");

const args = process.argv.slice(2);
const operation = args[0];
const file = args[1];
const newFileName = args[2];
const content = args.slice(2).join(" ");
const filePath = path.resolve(__dirname, file);

switch (operation) {
  // complete the following function.
  case "create": {
    createFile(filePath);
    break;
  }
  case "append": {
    appendToFile(filePath, content);
    break;
  }
  case "read": {
    readFile(filePath);
    break;
  }
  case "rename": {
    renameFile(filePath, newFileName);
    break;
  }
  case "delete": {
    deleteFile(filePath);
    break;
  }
  case "list": {
    listDirectory(filePath);
    break;
  }

  default:
    console.log(`Invalid operation '${operation}'`);
}
