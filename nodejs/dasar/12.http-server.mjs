import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.method === "POST") {
    req.addListener("data", (data) => {
      res.setHeader("Content-Type", "application/json");
      res.write(data);
      res.end();
    });
  } else {
    if (req.url === "/hajir") {
      res.write("Hallo hajir");
    } else {
      res.write("server running at port 3000");
    }
    res.end();
  }
});

server.listen(3000);
