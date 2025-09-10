import { ChevronRight } from "lucide-react";
import LDA from "../assets/LDA.webp";
import secure from "../assets/secure.webp";
import trust from "../assets/trust.webp";

export default function AboutUsSection() {

      const items = [
    {
      icon: LDA,
      title: "Proven Track Record",
      desc: "Consistently delivering successful projects",
    },
    {
      icon: secure,
      title: "Transparency & Trust",
      desc: "Clear, honest, and reliable dealings",
    },
    {
      icon: trust,
      title: "Market Expertise",
      desc: "Expert guidance in real estate investments",
    },

    
  ];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 flex flex-col items-center justify-center">
        {/* Breadcrumb */}
  <div className="flex items-center justify-center md:justify-start text-lg md:text-xl text-gray-600 mb-6 mt-8">
          <span className="hover:underline cursor-pointer">Home</span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
          <span className="text-blue-800 font-medium">About Us</span>
        </div>

        {/* Section Heading */}
  <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-10">
          About Us
        </h2>

  <div className=" flex flex-col items-center text-center">
          {/* Who We Are */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Who We Are?
            </h3>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center mb-10">
              HR Properties is a name synonymous with{" "}
              <span className="font-bold">
                trust, transparency, and excellence
              </span>{" "}
              in Pakistan’s real estate sector. With years of expertise, we
              specialize in delivering{" "}
              <span className="font-bold">LDA-approved projects</span> that
              promise secure investments and modern living. Our portfolio
              reflects our unwavering commitment to{" "}
              <span className="font-bold">
                timely delivery, sustainable development and customer
                satisfaction.
              </span>
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center mb-10">
              Our mission is to{" "}
              <span className="font-bold">redefine real estate in Pakistan</span>{" "}
              by creating communities that offer both{" "}
              <span className="font-bold">
                profitable investment opportunities and a superior lifestyle
              </span>
              . Every project we deal is carefully planned to provide maximum
              value to investors while ensuring a comfortable, eco-friendly, and
              modern environment for residents.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-xl md:text-2xl text-center mb-10">
              We envision HR Properties as a{" "}
              <span className="font-bold">
                benchmark for reliability and innovation
              </span>{" "}
              in real estate. Our goal is to build projects that not only
              provide homes but also become{" "}
              <span className="font-bold">thriving communities</span>,
              contributing to a brighter future for generations to come.
            </p>
          </div>

          {/* What We Stand For */}
          <div className="flex flex-col items-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              What We Stand For
            </h3>
            <div className="text-gray-700 leading-relaxed text-xl md:text-2xl space-y-2 text-center mb-10">
              <p>
                <span className="font-bold">Transparency:</span> We believe in
                honest and clear dealings at every step.
              </p>
              <p>
                <span className="font-bold">Commitment:</span> Delivering what
                we promise, on time and with quality.
              </p>
                            <p>
                <span className="font-bold">Commitment:</span> Delivering what
                we promise, on time and with quality.
              </p> 
                           <p>
                <span className="font-bold">Excellence:</span> Setting new standards in planning, infrastructure, and customer care.
              </p>
              <p>
                <span className="font-bold">Sustainability:</span> Eco-conscious development for a healthier tomorrow.
              </p>
             <p>
                <span className="font-bold">Customer-Centric Approach:</span> Our clients are at the heart of everything we do.
              </p>
            <p>
                At HR Properties, we don’t just build projects — we <span className="font-bold">build trust, secure futures, and create lasting value.</span>
              </p>
            </div>


          </div>

          {/* <TrustSection /> */}



      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">
          Why Trust HR Properties
        </h2>

  <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 w-full md:w-1/3">
              <img src={item.icon} className="h-16 w-16 object-contain mb-4" />
              <h3 className="font-semibold text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>



        </div>
      </div>
    </section>
  );
}
