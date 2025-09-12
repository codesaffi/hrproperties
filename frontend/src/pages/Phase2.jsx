import React, { useEffect, useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Phase2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("default");
  const [columns, setColumns] = useState(3); // default 3 columns

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl || 'http://localhost:4000'}/api/product/list`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed to load');
      setProducts((data.products || []).filter(p => p.phase === '2'));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts() }, []);

  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "nameAZ") return a.name.localeCompare(b.name);
    if (sortOption === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Left: Sorting */}
          <div className="mb-4 md:mb-0">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="default">Best Selling</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Alphabetical: A-Z</option>
              <option value="nameZA">Alphabetical: Z-A</option>
            </select>
          </div>

          {/* Right: Column selector */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                onClick={() => setColumns(num)}
                className={`px-2 py-1 border rounded ${columns === num ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                {Array(num).fill("┃").join("")}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`}>
            {sortedProducts.map(prod => (
            //   <div key={prod._id} className="border rounded p-3 bg-white shadow-sm">
            //     <img src={prod.image && prod.image[0]} alt={prod.name} className="h-48 w-full object-cover mb-3 rounded" />
            //     <h3 className="font-semibold text-lg">{prod.name}</h3>
            //     <div className="text-sm text-gray-600">{prod.category}</div>
            //     <div className="text-lg font-bold mt-2">Rs.{prod.price.toLocaleString()}</div>
            //   </div>
            <Link to={`/products/${prod.slug}`}>
  <div key={prod._id} className="border rounded p-3 bg-white shadow-sm cursor-pointer">
    <img src={prod.image && prod.image[0]} alt={prod.name} className="h-48 w-full object-cover mb-3 rounded" />
    <h3 className="font-semibold text-lg">{prod.name}</h3>
    <div className="text-sm text-gray-600">{prod.category}</div>
    <div className="text-lg font-bold mt-2">Rs.{prod.price.toLocaleString()}</div>
  </div>
</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
