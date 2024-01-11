import express from "express";
import request from "supertest";

const app = express();

app.get("/hello", (req, res) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    host: req.hostname,
  });
});

test("should request url", async () => {
  const response = await request(app).get("/hello").query({ name: "UsamMuhajir" });
  expect(response.body).toEqual({
    path: "/hello",
    originalUrl: "/hello?name=UsamMuhajir",
    host: "127.0.0.1",
  });
});
