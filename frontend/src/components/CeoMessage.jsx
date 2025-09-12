import { Link } from "react-router-dom";
import img from "../assets/ceo.webp";

export default function CeoMessage() {
  return (
    <section className="bg-white py-12">
      <div className="w-full px-2 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image (mobile-first order) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={img} // put your CEO image here
            alt="CEO Zeeshan Shoukat"
            className="rounded-lg shadow-lg w-full md:w-[90%] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Message from Leadership
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold text-blue-800">HR Properties</span>,
            our mission has always been to redefine real estate in Pakistan
            through{" "}
            <span className="font-semibold">
              trust, transparency, and value-driven development
            </span>
            . As CEO, I am deeply committed to creating communities that not
            only provide homes but also ensure{" "}
            <span className="font-semibold">
              long-term investment security and lifestyle excellence
            </span>
            . Every project we deliver is a reflection of our promise—
            <span className="font-semibold">
              LDA-approved, sustainable, and customer-focused
            </span>
            — because we believe our clients deserve nothing less than the very
            best.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Together, we are building more than just properties; we are shaping{" "}
            <span className="font-semibold">
              secure futures and thriving communities
            </span>
            for generations to come.
          </p>

          <p className="font-semibold text-blue-800 mb-6">
            — Zeeshan Shoukat ( CEO HR Properties )
          </p>

          {/* Button */}
          <Link to={"/ceo-message"}>
            <button className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
