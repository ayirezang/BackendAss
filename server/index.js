const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url === "/") {
    res.end("<h1>welcome to home page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>welcome to about page </h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>welcome to about page </h2>");
  } else if (req.url === "/services") {
    res.end(
      "<h1>We offer Web Development and Mobile App Development services </h1>"
    );
  } else if (req.url === "/time") {
    const currentTime = new Date().toLocaleDateString();
    res.end(`<h1>server time </h1><p>${currentTime}</p>`);
  } else {
    res.writeHead(404);
    res.end("<h1>page not found</h1>");
  }
});

server.listen(3000, "127.0.0.1", () => console.log("server is ready"));
