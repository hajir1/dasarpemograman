import express, { response } from "express";
import request from "supertest";

const app = express();
const errorHandle = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).send(`Terjadi error: ${message}`);
};

app.use(errorHandle);
app.get("/", (req, res) => {
  throw new Error("upss");
});

it("should be error handler", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(500);
});
