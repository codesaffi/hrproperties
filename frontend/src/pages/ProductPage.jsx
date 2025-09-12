import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { ChevronRight, Cog, Headphones, LineChart, ShieldCheck } from "lucide-react";
import img1 from "../assets/product-img.webp";
import img2 from "../assets/product-img.webp";
import img3 from "../assets/product-img.webp";
import img4 from "../assets/product-img.webp";
import img5 from "../assets/prod-loc.webp";
import img6 from "../assets/prod-limg.webp";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${backendUrl}/api/product/product/${slug}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setProduct(data.product);
      setSelectedImage(data.product.image[0]); // default first image
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center">Product not found</div>;

    const items = [
    {
      icon: <LineChart className="w-12 h-12 text-blue-700" />,
      title: "Proven Track Record",
      desc: "Consistently delivering successful projects",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-700" />,
      title: "Transparency & Trust",
      desc: "Clear, honest, and reliable dealings",
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-700" />,
      title: "Market Expertise",
      desc: "Expert guidance in real estate investments",
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-700" />,
      title: "After-Sales Support",
      desc: "Dedicated care beyond your purchase",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>{">"}</li>
          <li>
            <Link to="/etihad-town-phase-2" className="hover:text-blue-700">
              Etihad Town Phase 2
            </Link>
          </li>
          <li>{">"}</li>
          <li className="text-gray-700 font-medium truncate max-w-[200px] md:max-w-none">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Images Section */}
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-24">
              {product.image.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded border cursor-pointer transition 
                    ${
                      selectedImage === img
                        ? "ring-2 ring-blue-600"
                        : "hover:shadow-md"
                    }`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Right Info Section */}
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="text-xl font-semibold mb-6">
            Rs.{product.price.toLocaleString()}
          </p>

          {/* Size */}
          <div className="mb-4">
            <span className="block text-gray-700 mb-1 font-medium">Size:</span>
            <div className="bg-black text-white px-4 py-2 rounded w-fit">
              {product.size}
            </div>
          </div>

          {/* Booking Price */}
          {product.bookingPrice && (
            <div className="mb-4">
              <span className="block text-gray-700 mb-1 font-medium">
                Booking 10%:
              </span>
              <div className="bg-black text-white px-4 py-2 rounded w-fit">
                {product.bookingPrice}
              </div>
            </div>
          )}

          {/* Monthly Installment */}
          {product.monthlyPrice && (
            <div className="mb-4">
              <span className="block text-gray-700 mb-1 font-medium">
                Monthly Installment (36 Installments):
              </span>
              <div className="bg-black text-white px-4 py-2 rounded w-fit">
                {product.monthlyPrice}
              </div>
            </div>
          )}

{/* Order Button */}
<Link
  to={`/order/${product.slug}`}
  className="mt-8 block text-center w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800 transition"
>
  Schedule a Free Call →
</Link>
        </div>
      </div>

      {/* Collapsible Description */}
      <div className="mt-10 border-t pt-6">
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="flex items-center justify-between w-full text-blue-700 font-medium cursor-pointer"
        >
          <span>Description</span>
          <ChevronRight
            className={`w-5 h-5 transform transition-transform ${
              showDescription ? "rotate-90" : ""
            }`}
          />
        </button>

        {showDescription && (
          <div className="mt-3 text-gray-600">
                  <p className="mb-6">
        Step into the calm and charm of <strong>Etihad Town Lahore</strong>, where life unfolds in a world of <strong className="text-blue-700">peace, comfort, and affordable luxury</strong>. Backed by <strong className="underline">LDA approval</strong>, Etihad Town guarantees not only safe investment and trustworthy development but also the delivery of every promise to its residents.
      </p>

      <p className="mb-6">
        The <strong> {product.subCategory} plots of phase {product.phase}</strong> is carefully planned to offer maximum value with top-quality <strong>infrastructure, modern facilities, sustainability, and a well-connected lifestyle</strong>. Designed for families and investors alike, Etihad Town combines convenience, natural beauty, and modern living standards to create a community like no other.
      </p>

            {/* Features & Facilities */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Features & Facilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Grand Mosque</li>
          <li>Wide Carpeted Roads & Green Belts</li>
          <li>Landscaped Parks & Playgrounds</li>
          <li>Secure Boundary Wall</li>
          <li>Gated Community with 24/7 Security</li>
          <li>Vibrant Commercial Areas</li>
          <li>Community Centers & Lifestyle Amenities</li>
          <li>Reliable Water Supply System</li>
          <li>Sustainable & Eco-Friendly Development</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Etihad Town?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-blue-900">LDA Approved</strong> – A secure and transparent investment.</li>
          <li><strong className="text-blue-900">Modern Master Plan</strong> – Smartly designed living spaces.</li>
          <li><strong className="text-blue-900">World-Class Infrastructure</strong> – Premium roads, utilities & layouts.</li>
          <li><strong className="text-blue-900">Luxury Lifestyle</strong> – Comfortable, modern, and serene living.</li>
          <li><strong className="text-blue-900">Green & Eco-Friendly Environment</strong> – A healthier way of life.</li>
          <li><strong className="text-blue-900">Affordable Payment Plan</strong> – Easy installments with great returns.</li>
        </ul>
      </div>
          </div>
        )}
      </div>

           {/* 4-Image Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={img1}
          alt="Etihad Town View 1"
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <img
          src={img2}
          alt="Etihad Town View 2"
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <img
          src={img3}
          alt="Etihad Town View 3"
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
        <img
          src={img4}
          alt="Etihad Town View 4"
          className="w-full h-[300px] object-cover rounded-lg shadow-md"
        />
      </div>

            {/* Single Large Image */}
      <div className="mt-8">
        <img
          src={img5}  // import this at the top like img1–img4
          alt="Etihad Town Large View"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>


            <div className="max-w-6xl mx-auto px-6 text-center mt-16 mb-10">

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


                  {/* Single Large Image */}
      <div className="mt-8">
        <img
          src={img6}  // import this at the top like img1–img4
          alt="Etihad Town Large View"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
}
