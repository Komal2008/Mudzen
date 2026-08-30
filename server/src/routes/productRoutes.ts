import { Router } from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const router = Router();

// GET all products
router.get("/", getProducts);

// GET single product
router.get("/:id", getProductById);

// CREATE product
router.post("/", createProduct);

// UPDATE product
router.put("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

export default router;