import orderModel from "../models/orderModel.js";
import productModel from "../models/productModels.js";

// Place a new order
const placeOrder = async (req, res) => {
  try {
    const { productId, name, phone, address } = req.body;

    if (!productId || !name || !phone || !address) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    const order = new orderModel({
      product: productId,
      name,
      phone,
      address,
    });

    await order.save();
    res.json({ success: true, message: "Order placed successfully", order });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Get all orders (admin) or user orders (future)
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("product");
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, listOrders };
