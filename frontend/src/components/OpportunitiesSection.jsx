// import { ArrowRight } from "lucide-react";
// import img from "../assets/ET_p3.webp";

// export default function OpportunitiesSection() {
//   const plots = [
//     {
//       id: 1,
//       image:  img,
//       size: "3.5 MARLA",
//       type: "Residential Plots",
//       desc: "3.5 Marla Residential Plot Block ETIHAD Town Phase 3",
//       price: "Rs.33,000.00",
//     },
//     {
//       id: 2,
//       image: img,
//       size: "7 MARLA",
//       type: "Residential Plots",
//       desc: "7 Marla Residential Plot Block ETIHAD Town Phase 3",
//       price: "Rs.63,500.00",
//     },
//     {
//       id: 3,
//       image: img,
//       size: "5 MARLA",
//       type: "Executive Block",
//       desc: "5 Marla Residential Plot Executive Block ETIHAD Town Phase 3",
//       price: "Rs.53,333.00",
//     },
//     {
//       id: 4,
//       image: img,
//       size: "10 MARLA",
//       type: "Executive Block",
//       desc: "10 Marla Residential Plot Executive Block ETIHAD Town Phase 3",
//       price: "Rs.95,556.00",
//     },
//     {
//       id: 5,
//       image: img,
//       size: "10 MARLA",
//       type: "Residential Plots",
//       desc: "10 Marla Residential Plot Block ETIHAD Town Phase 3",
//       price: "Rs.89,000.00",
//     },
//     {
//       id: 6,
//       image: img,
//       size: "20 MARLA",
//       type: "Residential Plots",
//       desc: "20 Marla Residential Plot Block ETIHAD Town Phase 3",
//       price: "Rs.165,000.00",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12">
//   <div className="w-full px-2 md:px-8 text-center">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
//           Ready-to-Invest Opportunities
//         </h2>
//         <p className="text-gray-600 mt-2 mb-10">Plots Chosen for You</p>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plots.map((plot) => (
//             <div
//               key={plot.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
//             >
//               {/* Image */}
//               <img
//                 src={plot.image}
//                 alt={plot.type}
//                 className="w-full h-40 object-cover"
//               />

//               {/* Content */}
//               <div className="p-5 flex flex-col flex-grow">
//                 <div className="text-blue-800 font-bold text-lg">
//                   {plot.type}
//                 </div>
//                 <div className="text-xl font-extrabold text-gray-900 mt-1">
//                   {plot.size}
//                 </div>
//                 <p className="text-sm text-black font-medium mt-2 flex-grow">
//                   {plot.desc}
//                 </p>
//                 <p className="text-blue-800 font-semibold mt-3">{plot.price}</p>

//                 {/* Button */}
//                 <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
//                   Schedule a Free Call <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import fallbackImg from "../assets/ET_p3.webp";

export default function OpportunitiesSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl || "http://localhost:4000"}/api/product/list`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to load products");
      // load ALL products (ignore phase)
      setProducts(data.products || []);
    } catch (err) {
      toast.error(err.message || "Unable to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show simple placeholders while loading
  if (loading) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="w-full px-2 md:px-8 text-center max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">Ready-to-Invest Opportunities</h2>
          <p className="text-gray-600 mb-10">Plots chosen for you</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse p-6 h-[320px]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="w-full px-2 md:px-8 text-center max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">Ready-to-Invest Opportunities</h2>
        <p className="text-gray-600 mt-2 mb-10">Plots chosen for you</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">No properties found.</div>
          ) : (
            products.map((prod) => {
              // handle different image shapes (array or single string)
              const thumb =
                Array.isArray(prod.image) ? prod.image[0] : (prod.image || fallbackImg);
              const slug = prod.slug || prod._id;
              const price = prod.price !== undefined && prod.price !== null
                ? `Rs.${Number(prod.price).toLocaleString()}`
                : prod.priceText || "Contact for price";

              return (
                <div key={prod._id || slug} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  {/* Image */}
                  <img
                    src={thumb || fallbackImg}
                    alt={prod.name || "Property"}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = fallbackImg; }}
                  />

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-blue-800 font-bold text-lg">
                      {prod.category || "Property"}
                    </div>
                    <div className="text-xl font-extrabold text-gray-900 mt-1">
                      {prod.size || prod.title || prod.name || "Plot"}
                    </div>
                    <p className="text-sm text-black font-medium mt-2 flex-grow">
                      {prod.description || prod.desc || prod.shortDesc || "Great investment opportunity."}
                    </p>
                    <p className="text-blue-800 font-semibold mt-3">{price}</p>

                    {/* Button → links to product page */}
                    <Link to={`/products/${slug}`} className="mt-4 w-full">
                      <button className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                        Schedule a Free Call <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
