import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../assets/ET_p1map.webp";
import img2 from "../assets/ET_p2map.webp";

export default function Maps() {
  return (
<>
      <div className="flex flex-col items-center w-full col-span-2 mb-6">
        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-blue-800 text-center mb-4 mt-8">
          Maps
        </h2>
        {/* Breadcrumb */}
        <div className="flex items-center justify-center text-xl md:text-2xl text-gray-600 mb-2">
          <Link to={"/"}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <ChevronRight className="w-5 h-5 mx-2 text-gray-500" />
          <span className="text-blue-800 font-medium">Maps</span>
        </div>
      </div>
      <section className="bg-white py-12">
        <div className="w-full px-2 md:px-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 w-full flex justify-center">
            <h2 className="text-5xl md:text-6xl font-bold italic text-blue-800 mb-8 text-center">
              Etihad Town Pahse-1
            </h2>
          </div>

          {/* Image (mobile-first order) */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={img} // put your CEO image here
              alt="etihad town phase 1 map"
              className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-full px-2 md:px-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 w-full flex justify-center">
            <h2 className="text-5xl md:text-6xl font-bold italic text-blue-800 mb-8 text-center">
              Etihad Town Pahse-2
            </h2>
          </div>

          {/* Image (mobile-first order) */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={img2} // put your CEO image here
              alt="etihad town phase 2 map"
              className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="w-full px-2 md:px-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 w-full flex justify-center">
            <h2 className="text-5xl md:text-6xl font-bold italic text-blue-800 mb-8 text-center">
              Etihad Town Pahse-3
            </h2>
          </div>

          {/* Image (mobile-first order) */}
          <div className="order-1 md:order-2 flex justify-center">
            <h1 className="text-4xl font-bold text-red-600 text-center">
              Coming soon
            </h1>
          </div>
        </div>
      </section>
      </>
  );
} 
