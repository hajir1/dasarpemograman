import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";
if (cluster.isPrimary) {
  console.log(`is Primary ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
    cluster.addListener("exit", (exit) => {
      console.log(`worker die ${process.pid}`);
      cluster.fork()
    });
  }
}

if (cluster.isWorker) {
  console.log(`is worker ${process.pid}`);
  const server = http.createServer((req, res) => {
    res.write(`response ${process.pid}`);
    res.end();
    process.exit();
  });
  server.listen(4000);
}
