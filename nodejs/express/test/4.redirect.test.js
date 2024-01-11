import express from "express";
import request from "supertest";


const app = express()

app.get("/",(req,res)=>{
    res.redirect("/to-next-page")
    res.status(302)
})


test("should be redirect",async ()=>{
    const res = await request(app).get("/")
    expect(res.get("location")).toBe("/to-next-page")
    expect(res.status).toBe(302)
})