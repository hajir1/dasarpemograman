import express from "express";
import request from "supertest";

const app = express();

const testMidlleWare = (req, res, next) => {
  res.set("X-Powered-By");
  next();
};
const testMidlleWare2 = (req, res, next) => {
  res.send(`recieve ${req.method} ${req.hostname}`);
  next();
};
app.get("/", (req, res) => {
  if (req.query.apikey) {
    res.status(200);
    res.send(`hello ${req.query.apikey}`);
  } else {
    res.status(400);
    res.end();
  }
});
app.use(testMidlleWare);
app.use(testMidlleWare2);

test("to be response", async () => {
  let response = await request(app).get("/").query({ apikey: "Hajir" });
  expect(response.status).toBe(200);
  expect(response.text).toBe("hello Hajir");
  response = await request(app).get("/");
  expect(response.status).toBe(400);
});
