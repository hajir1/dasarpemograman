import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product-controller.js";
import express from "express";

const routers = express
  .Router()
  .get("/products", getProduct)
  .get("/products/:id", getProductById)
  .post("/products", createProduct)
  .patch("/products/:id", updateProduct)
  .delete("/products/:id", deleteProduct);

export default routers;
