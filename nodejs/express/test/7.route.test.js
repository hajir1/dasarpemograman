import express from "express";
import request from "supertest";

const app = express();

app
  .route("/product")
  .get((req, res) => {
    res.send("method get");
  })
  .post((req, res) => {
    res.send("method post");
  })
  .put((req, res) => {
    res.send("method put");
  });

it("should be app function", async () => {
  let response = await request(app).get("/product");
  expect(response.text).toBe("method get");
  response = await request(app).post("/product");
  expect(response.text).toBe("method post");
  response = await request(app).put("/product");
  expect(response.text).toBe("method put");
});
