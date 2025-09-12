import express from "express";
import { placeOrder, listOrders, updateOrderStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder); // place new order
orderRouter.get("/list", listOrders);   // list all orders
orderRouter.put("/update/:id", updateOrderStatus);

export default orderRouter;
