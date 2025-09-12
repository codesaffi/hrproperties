import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModels.js"

// funtion for add products
// const addProduct = async (req,res) => {
//     try {
        
//         const { name, description, price, category, subCategory, bestseller, bookingPrice, monthlyPrice, size, phase } = req.body

//         // require at least two images: image1 and image2
//         const image1 = req.files.image1 && req.files.image1[0]
//         const image2 = req.files.image2 && req.files.image2[0]
//         if (!image1 || !image2) {
//             return res.json({ success: false, message: 'At least two images (image1 and image2) are required' })
//         }

//         const images = [image1, image2]

//         const imagesUrl = []
//         const imageNames = []
//         // ensure Cloudinary is configured
//         if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET_KEY) {
//             return res.json({ success: false, message: 'Cloudinary credentials are missing. Please set CLOUDINARY_NAME, CLOUDINARY_API_KEY and CLOUDINARY_SECRET_KEY in .env' })
//         }

//         for (const item of images) {
//             const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
//             imagesUrl.push(result.secure_url)
//             imageNames.push(item.originalname || item.filename || "")
//         }

//         const productData = {
//             name,
//             description: description || "",
//             category,
//             price: Number(price),
//             subCategory: subCategory || "",
//             bestseller: bestseller === "true" ? true : false,
//             bookingPrice: bookingPrice ? Number(bookingPrice) : undefined,
//             monthlyPrice: monthlyPrice ? Number(monthlyPrice) : undefined,
//             size: size || "",
//             phase: phase || "",
//             image: imagesUrl,
//             imageName: imageNames,
//             date: Date.now()
//         }

//         console.log(productData);

//         const product = new productModel(productData);
//         await product.save()
        

//         res.json({success:true,message:"Product Added"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }

// }

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      bestseller,
      bookingPrice,
      monthlyPrice,
      size,
      phase,
      image1,
      image2,
    } = req.body;

    if (!image1 || !image2) {
      return res.json({
        success: false,
        message: "At least two images (image1 and image2) are required",
      });
    }

    // Upload to Cloudinary directly
    const result1 = await cloudinary.uploader.upload(image1, {
      resource_type: "image",
    });
    const result2 = await cloudinary.uploader.upload(image2, {
      resource_type: "image",
    });

    const productData = {
      name,
      description: description || "",
      category,
      price: Number(price),
      subCategory: subCategory || "",
      bestseller: bestseller === "true",
      bookingPrice: bookingPrice ? Number(bookingPrice) : undefined,
      monthlyPrice: monthlyPrice ? Number(monthlyPrice) : undefined,
      size: size || "",
      phase: phase || "",
      image: [result1.secure_url, result2.secure_url],
      imageName: [result1.public_id, result2.public_id],
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// funtion for list products
const listProducts = async (req,res) => {
    try {
        
        const products = await productModel.find({});
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// funtion for remove products
const removeProduct = async (req,res) => {
    try {
        
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }    
}


// funtion for single product info
const singleProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) return res.json({ success: false, message: "Slug is required" });

    // find product by slugified name
    const product = await productModel.findOne({
      slug: slug
    });

    if (!product) return res.json({ success: false, message: "Product not found" });

    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {addProduct,listProducts,removeProduct,singleProduct}