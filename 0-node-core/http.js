import * as http from "node:http";

const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/bye") {
    res.end("Bye! \n");
  } else {
    res.end("Hello World \n");
  }
});

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
