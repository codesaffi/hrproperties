import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../assets/ET_p2.webp";
import img2 from "../assets/ET_p3.webp";

export default function InvestmentSection() {
  const projects = [
    {
      id: 1,
      title: "Etihad Town Phase-II",
      image: img1, // put image in public/images/
      link: "/etihad-town-phase-2",
    },
    {
      id: 2,
      title: "Etihad Town Phase-III",
      image: img2, // put image in public/images/
      link: "/etihad-town-phase-3",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="w-full px-2 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10">
          Secure Your Investment with LDA Approved Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="block group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* Background Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 md:h-[22rem] object-cover group-hover:scale-105 transform transition duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
