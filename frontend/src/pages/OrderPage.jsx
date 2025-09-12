import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function OrderPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // fetch product details
  const fetchProduct = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/product/product/${slug}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setProduct(data.product);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/api/order/place`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          productId: product._id,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      toast.success("Order placed successfully!");
      setFormData({ name: "", phone: "", address: "" });
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Product Info */}
      <div>
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-80 object-cover rounded shadow"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-lg text-blue-700 font-semibold mt-2">
          Rs.{product.price.toLocaleString()}
        </p>
      </div>

      {/* Order Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div> 
  );
}
