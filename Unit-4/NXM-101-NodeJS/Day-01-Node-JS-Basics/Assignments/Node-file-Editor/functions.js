const fs = require("fs");

const createFile = (fileName) => {
  fs.writeFile(fileName, "", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File 'test.txt' created");
  });
};

const appendToFile = (fileName, content) => {
  fs.appendFile(fileName, "\n" + content, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Content appended to 'test.txt'");
  });
};

const readFile = (fileName) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const renameFile = (prevFileName, newFileName) => {
  fs.rename(prevFileName, newFileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File 'test.txt' renamed to 'new.txt");
    }
  });
};
const deleteFile = (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File 'test.txt' deleted");
    }
  });
};
const listDirectory = (dirPath) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log(files);
    }
  });
};

module.exports = {
  createFile,
  appendToFile,
  readFile,
  renameFile,
  deleteFile,
  listDirectory,
};
