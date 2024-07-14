const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/": {
      res.setHeader("Content-Type", "text/html");
      res.end("You are on Home Page");
      break;
    }
    case "/reports": {
      res.end("You are on Reports Page");
      break;
    }
    case "/data": {
      res.write("<h1 style='color: red;'>Data 1</h1>\n");
      res.write("Data 2\n");
      res.write("Data 3\n");
      res.end();
      break;
    }
    case "/blogs": {
      res.end("You are on Blogs Page");
      break;
    }
    case "/users": {
      try {
        const data = fs.readFileSync("./db.json", "utf-8");
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      } catch (error) {
        res.end(error);
      }
      break;
    }
    case "/add-user": {
      const user = {
        id: Math.floor(Math.random() * 100),
        name: "John Doe",
        age: 30,
      };
      try {
        const users = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
        users.push(user);
        fs.writeFileSync("./db.json", JSON.stringify(users));
        res.end("Data has been updated");
      } catch (error) {
        res.end(error);
      }
      break;
    }
    case "/new": {
      if (req.method === "POST") {
        let data = [];
        req.on("data", (chunk) => {
          data.push(JSON.parse(chunk));
        });
        req.on("end", () => {
          console.log("Data", data);
        });
        res.end("New Data Sent");
        break;
      }
    }
    default: {
      res.end("404 Page Not Found");
    }
  }
});

// Running
server.listen(8080, () => {
  console.log("Server Running on port 8080");
});
