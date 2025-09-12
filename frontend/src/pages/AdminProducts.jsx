import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${backendUrl}/api/product/list`
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to load");
      setProducts(data.products || []);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRemove = async (id) => {
    if (!confirm("Remove this product?")) return;
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(
        `${backendUrl}/api/product/remove`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { token } : {}),
          },
          body: JSON.stringify({ id }),
        }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Remove failed");
      toast.success("Product removed");
      setProducts((p) => p.filter((x) => x._id !== id));
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>
          <span className="text-gray-500 text-sm">{products.length} items</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No products found.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((prod) => (
              <div
                key={prod._id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <img
                  src={prod.image && prod.image[0]}
                  alt={prod.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{prod.category}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      ${prod.price}
                    </div>
                    <button
                      onClick={() => handleRemove(prod._id)}
                      className="px-4 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
