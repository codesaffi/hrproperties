import { ArrowRight } from "lucide-react";
import img from "../assets/ET_p3.webp";

export default function OpportunitiesSection() {
  const plots = [
    {
      id: 1,
      image:  img,
      size: "3.5 MARLA",
      type: "Residential Plots",
      desc: "3.5 Marla Residential Plot Block ETIHAD Town Phase 3",
      price: "Rs.33,000.00",
    },
    {
      id: 2,
      image: img,
      size: "7 MARLA",
      type: "Residential Plots",
      desc: "7 Marla Residential Plot Block ETIHAD Town Phase 3",
      price: "Rs.63,500.00",
    },
    {
      id: 3,
      image: img,
      size: "5 MARLA",
      type: "Executive Block",
      desc: "5 Marla Residential Plot Executive Block ETIHAD Town Phase 3",
      price: "Rs.53,333.00",
    },
    {
      id: 4,
      image: img,
      size: "10 MARLA",
      type: "Executive Block",
      desc: "10 Marla Residential Plot Executive Block ETIHAD Town Phase 3",
      price: "Rs.95,556.00",
    },
    {
      id: 5,
      image: img,
      size: "10 MARLA",
      type: "Residential Plots",
      desc: "10 Marla Residential Plot Block ETIHAD Town Phase 3",
      price: "Rs.89,000.00",
    },
    {
      id: 6,
      image: img,
      size: "20 MARLA",
      type: "Residential Plots",
      desc: "20 Marla Residential Plot Block ETIHAD Town Phase 3",
      price: "Rs.165,000.00",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
  <div className="w-full px-2 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          Ready-to-Invest Opportunities
        </h2>
        <p className="text-gray-600 mt-2 mb-10">Plots Chosen for You</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plots.map((plot) => (
            <div
              key={plot.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Image */}
              <img
                src={plot.image}
                alt={plot.type}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-blue-800 font-bold text-lg">
                  {plot.type}
                </div>
                <div className="text-xl font-extrabold text-gray-900 mt-1">
                  {plot.size}
                </div>
                <p className="text-sm text-black font-medium mt-2 flex-grow">
                  {plot.desc}
                </p>
                <p className="text-blue-800 font-semibold mt-3">{plot.price}</p>

                {/* Button */}
                <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  Schedule a Free Call <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
