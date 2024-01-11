import express from "express";
import request from "supertest";

const app = express();


app.get("/product/:idProduct/seller/:idSeller",(req,res)=>{
    const idProduct = req.params.idProduct
    const idSeller= req.params.idSeller
    res.send(`${idProduct} ${idSeller}`)
})

it("should to be params",async()=>{
    const response = await request(app).get("/product/:idProduct/seller/:idSeller")
    expect(response.text).toBe(":idProduct :idSeller")
})