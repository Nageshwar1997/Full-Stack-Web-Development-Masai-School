const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("This is Home Page");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Welcome to Home Page</h1>`);
    res.end();
  } else if (req.url === "/cart" && req.method === "GET") {
    console.log("This is Cart Page");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Welcome to Cart Page</h1>`);
    res.end();
  } else if (req.url === "/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body);
        console.log(parsedBody);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`<h1>Welcome to Login Page</h1>`);
        res.end();
      } catch (error) {
        console.error("Error parsing JSON:", error);
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write(`<h1>Invalid JSON</h1>`);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`<h1>Page Not Found</h1>`);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
