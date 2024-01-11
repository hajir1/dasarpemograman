import express, { response } from "express";
import request from "supertest";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  res.json({
    nama: `hello ${name}`,
  });
});

it("should be request Body", async () => {
  const response = await request(app)
    .post("/")
    .send({ name: "world" })
    .set("content-type", "application/json");
    expect(response.body).toEqual({
        nama :"hello world"
    })
});
