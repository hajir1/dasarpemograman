import express, { response } from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload"

const app = express()
app.use(expressFileUpload())
app.post("/file",async (req,res)=>{
    const textfile = req.files.article
    await textfile.mv(__dirname +"/upload"+textfile.name)
    res.send(`hello ${req.body.name}`)
})


test("should be post data",async()=>{
    const response = await request(app).post("/file").set("Content-type","multipart/form-data").field("name","hajir").attach("article",__dirname+"/contoh.txt")
    expect(response.text).toBe("hello hajir")
})