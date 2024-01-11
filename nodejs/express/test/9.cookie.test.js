import express, { response } from "express";
import request from "supertest";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser("ContohRahasia"));
app.use(express.json())
app.get("/", (req, res) => {
  const name = req.cookies.name;
  res.send(`hello ${name}`);
});
app.post("/login", (req, res) => {
  const name = req.cookies.name;
  res.cookie("login", name, { path: "/", signed: true });
  res.send(`hello ${name}`);
});

it("should be cookie parser", async () => {
  const response = await request(app).get("/").set("Cookie", "name=hajir");
  expect(response.text).toBe("hello hajir");
});
it("should be created cookie parser", async () => {
  const response = await request(app).post("/login").send({ name: "usammuhajir" });
  expect(response.get("Set-Cookie").toString()).toBe("login=hajir;Path=/");
  expect(response.text).toBe("hello hajir");
});
