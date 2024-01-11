import express from "express"
import registerController from "../controller/user-controller.js"

const publicRouter = new express.Router()
publicRouter.post("/api/users",registerController.registered)

export default{
    publicRouter
}