const http = require("node:http");
const { usersApi } = require("./users");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    if (req.url === "/users/register") {
      let body = "";
      req.on("data", function (chunk) {
        body += chunk;
      });

      req.on("end", function () {
        const data = JSON.parse(body);

        try {
          const newUser = usersApi.register(data.email, data.name);
          res.end(JSON.stringify(newUser));
        } catch (e) {
          res.end(JSON.stringify({ error: e.message }));
        }
      });

      return;
    }
  } else if (req.method === "GET") {
    if (req.url === "/users") {
      res.end(JSON.stringify(usersApi.all()));

      return;
    }
  }

  res.end("Route not defined");
});

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
