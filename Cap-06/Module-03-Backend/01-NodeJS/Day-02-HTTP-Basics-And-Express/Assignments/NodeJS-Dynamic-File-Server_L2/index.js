const http = require("http");
const fs = require("fs");
const StyleSheet = require("./style");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    try {
      const directoryContents = fs.readdirSync("./", "utf-8");
      //   console.log("DirectoryContents", directoryContents);
      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      const styledHTML = directoryContents
        .map((item) => {
          const isFile = fs.statSync(`./${item}`).isFile(); // Check if item is a file
          const icon = isFile ? "📃" : "📁";

          return `
        <div class="directory-item">
          <a class="links" href="${item}">
            ${icon}
            ./${item}
          </a>
        </div>
      `;
        })
        .join("");
      res.end(`
      <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Directory Listing</title>
                <style>
                    ${StyleSheet()}
                </style>
            </head>
            <body>
                <h1>Directory Listing</h1>
                <div class="directory-container">
                    ${styledHTML}
                </div>
            </body>
        </html>
    `);
    } catch (error) {
      console.error("Error reading directory:", error);
      res.status(500).end("<h1>Internal Server Error</h1>");
    }
  } else if (req.url !== "/favicon.ico") {
    try {
      let checkIsDirectory = fs.statSync(`.${req.url}`).isDirectory();
      if (!checkIsDirectory) {
        try {
          let fileContent = fs.readFileSync(`.${req.url}`, "utf-8");
          //   console.log("This is from else if", checkIsDirectory);
          res.end(fileContent);
        } catch (error) {
          res
            .writeHead(404, {
              "Content-Type": "text/html",
            })
            .end("<h1>File Not Found</h1>");
        }
      } else {
        try {
          const directoryContents = fs.readdirSync(`.${req.url}`, "utf-8");
          res.writeHead(200, {
            "Content-Type": "text/html",
          });
          const styledHTML = directoryContents
            .map((item) => {
              let isDirectoryOrFile = fs
                .statSync(`.${req.url}/${item}`)
                .isDirectory();

              const icon = isDirectoryOrFile ? "📁" : "📃";

              return `
        <div class="directory-item">
          <a class="links" href="${req.url}/${item}">
            ${icon}
            ./${item}
          </a>
        </div>
      `;
            })
            .join("");
          res.end(`
      <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Directory Listing</title>
                <style>
                    ${StyleSheet()}
                </style>
            </head>
            <body>
                <h1>Directory Listing</h1>
                <div class="directory-container">
                    ${styledHTML}
                </div>
            </body>
        </html>
    `);
        } catch (error) {
          console.error("Error reading directory:", error);
          res
            .writeHead(500, { "Content-Type": "text/html" })
            .end("<h1>Internal Server Error</h1>");
        }
      }
    } catch (error) {
      res
        .writeHead(500, { "Content-Type": "text/html" })
        .end("<h1>Internal Server Error</h1>");
      console.error("Error reading directory:", error);
    }
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
