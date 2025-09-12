import express from "express";
import { placeOrder, listOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder); // place new order
orderRouter.get("/list", listOrders);   // list all orders

export default orderRouter;
