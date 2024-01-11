import express from "express"
import routers from "./routers/productRoute.js"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(routers)
app.use(express.json())
app.listen(process.env.PORT ,()=>{
    console.log(`server running di ${process.env.PORT}`)
})