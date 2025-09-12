import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bookingPrice, setBookingPrice] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [size, setSize] = useState("");
  const [phase, setPhase] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("Name is required");
    if (!price) return toast.error("Price is required");
    if (!category.trim()) return toast.error("Category is required");
    if (!image1 || !image2) return toast.error("Two images are required");

    try {
      setLoading(true);
      const image1Base64 = await toBase64(image1);
      const image2Base64 = await toBase64(image2);

      const token = localStorage.getItem("adminToken");
      const res = await fetch(
        `${backendUrl || "http://localhost:4000"}/api/product/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { token } : {}),
          },
          body: JSON.stringify({
            name,
            description,
            price,
            bookingPrice,
            monthlyPrice,
            category,
            subCategory,
            size,
            phase,
            bestseller: bestseller ? "true" : "false",
            image1: image1Base64,
            image2: image2Base64,
          }),
        }
      );

      const data = await res.json();
      if (!data.success)
        throw new Error(data.message || "Failed to add product");
      toast.success("Product added");
      navigate("/admin/products");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Product Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="Sub Category"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                value={size}
                onChange={(e) => setSize(e.target.value)}
                placeholder="Size"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition w-full h-28"
            />
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Pricing
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                value={bookingPrice}
                onChange={(e) => setBookingPrice(e.target.value)}
                placeholder="Booking Price"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                value={monthlyPrice}
                onChange={(e) => setMonthlyPrice(e.target.value)}
                placeholder="Monthly Price"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          {/* Phase + Bestseller */}
          <div className="flex items-center gap-6">
            <input
              value={phase}
              onChange={(e) => setPhase(e.target.value)}
              placeholder="Phase"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition flex-1"
            />
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={bestseller}
                onChange={(e) => setBestseller(e.target.checked)}
                className="w-5 h-5 accent-blue-600"
              />
              Bestseller
            </label>
          </div>

          {/* Images with Preview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Upload Images
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Image 1 */}
              <label className="p-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-400 transition relative overflow-hidden">
                {image1 ? (
                  <img
                    src={URL.createObjectURL(image1)}
                    alt="Preview 1"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-sm font-medium">
                    Image 1 (required)
                  </span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage1(e.target.files[0])}
                  className="hidden"
                />
              </label>

              {/* Image 2 */}
              <label className="p-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-400 transition relative overflow-hidden">
                {image2 ? (
                  <img
                    src={URL.createObjectURL(image2)}
                    alt="Preview 2"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-sm font-medium">
                    Image 2 (required)
                  </span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage2(e.target.files[0])}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium shadow hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
