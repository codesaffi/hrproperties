import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
// import cartRouter from './routes/cartRoute.js'
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
try {
  connectCloudinary();
  console.log("Cloudinary configured");
} catch (e) {
  console.warn("Cloudinary not configured:", e.message);
}

// middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // only if you’re sending cookies or auth headers
  })
);

app.use(express.json({ limit: "10mb" })); // for JSON payloads
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // if needed

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server started running on PORT :" + port));
