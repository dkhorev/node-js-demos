const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    console.log("POST");

    if (req.url === "/users/register" && req.method === "POST") {
      let body = "";
      req.on("data", function (chunk) {
        body += chunk;
      });

      req.on("end", function () {
        console.log(JSON.parse(body));
        res.end("User Register");
      });
    }
  } else {
    console.log("GET");

    if (req.url === "/users") {
      res.end("Data Users");
      return;
    }
  }

  res.end("Route not defined");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
