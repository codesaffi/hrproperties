import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post("/add", adminAuth, addProduct);
productRouter.post("/remove", adminAuth, removeProduct);
productRouter.get("/list", listProducts);
productRouter.get("/product/:slug", singleProduct);

export default productRouter;
