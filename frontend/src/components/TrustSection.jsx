import { LineChart, ShieldCheck, Cog, Headphones } from "lucide-react";

export default function TrustSection() {
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
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-10">
          Why Trust HR Properties
        </h2>

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
    </section>
  );
}
