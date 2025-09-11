import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    bookingPrice: { type: Number, required: false },
    monthlyPrice: { type: Number, required: false },
    image: { type: Array, required: true }, // urls
    imageName: { type: Array, required: false }, // original filenames
    category: { type: String, required: true },
    subCategory: { type: String, required: false },
    size: { type: String, required: false },
    phase: { type: String, required: false },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel