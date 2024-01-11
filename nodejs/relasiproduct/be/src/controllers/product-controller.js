import { prismaClient } from "../config/prisma.js";

export const getProduct = async (req, res) => {
  try {
    const result = await prismaClient.products.findMany();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
export const getProductById = async (req, res) => {
  try {
    const result = await prismaClient.products.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
export const createProduct = async (req, res) => {
  const namaU = req.body.nama;
  const priceU = req.body.price;
  const stockU = req.body.stock;
  const categoryU = req.body.category;
  try {
    const result = await prismaClient.products.create({
      data: {
        nama: namaU,
        price: priceU,
        stock: stockU,
        category: categoryU,
      },
    });
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
    const namaU = req.body.nama;
    const priceU = req.body.price;
    const stockU = req.body.stock;
    const categoryU = req.body.category;
  try {
    const result = await prismaClient.products.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama: namaU,
        price: priceU,
        stock: stockU,
        category: categoryU,
      },
    });
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    await prismaClient.products.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({
      data :"success delete data"
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};
