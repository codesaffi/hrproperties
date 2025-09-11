import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent reload; you can change this to send API/email
    const form = new FormData(e.currentTarget);
    console.log("Contact form:", {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
      save: form.get("save") === "on",
    });
  };

  return (
    <section className="bg-white min-h-screen flex items-start justify-center">
      <div className="max-w-5xl w-full px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-2 mt-8">
          Contact
        </h2>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center md:justify-start text-lg md:text-xl text-gray-600 mb-8">
          <Link to={"/"}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
          <span className="text-blue-800 font-medium">Contact</span>
        </div>

        {/* Top contact details (3 columns on md+, stacked on mobile) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
          {/* Email */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-sm bg-purple-100 flex items-center justify-center">
                <Mail className="w-4 h-4 text-purple-600" />
              </div>
              <h4 className="text-blue-800 font-medium">Email</h4>
            </div>
            <p className="text-gray-700">hrestatebuilders@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-sm bg-pink-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-pink-600" />
              </div>
              <h4 className="text-blue-800 font-medium">Phone</h4>
            </div>
            <p className="text-gray-700">03322826107</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-6 rounded-sm bg-gray-100 flex items-center justify-center">
                {/* small globe / social badge */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-700" fill="currentColor" aria-hidden>
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7.5 9.5a1 1 0 110-2 1 1 0 010 2zm9 0a1 1 0 110-2 1 1 0 010 2zM12 17a4.5 4.5 0 01-4.5-4.5h9A4.5 4.5 0 0112 17z" />
                </svg>
              </div>
              <h4 className="text-blue-800 font-medium">Social Media</h4>
            </div>

            <div className="flex gap-4 text-2xl text-gray-700 mt-1">
              <a aria-label="facebook" href="#" className="w-7 h-7 flex items-center justify-center text-blue-600 hover:text-blue-800">
                <Facebook className="w-6 h-6" />
              </a>
              <a aria-label="instagram" href="#" className="w-7 h-7 flex items-center justify-center text-pink-500 hover:text-pink-700">
                <Instagram className="w-6 h-6" />
              </a>
              <a aria-label="youtube" href="#" className="w-7 h-7 flex items-center justify-center text-red-600 hover:text-red-800">
                <Youtube className="w-6 h-6" />
              </a>
              <a aria-label="tiktok" href="#" className="w-7 h-7 flex items-center justify-center text-black hover:text-gray-700">
                <FaTiktok className="w-6 h-6" />
              </a>
              <a aria-label="whatsapp" href="#" className="w-7 h-7 flex items-center justify-center text-green-600 hover:text-green-800">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Form heading */}
        <div className="w-full mt-4 mb-4">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            We would love to hear from you.
          </h3>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* two inputs side-by-side on md, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                aria-label="Name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                aria-label="Email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Large textarea */}
            <div className="mb-4">
              <textarea
                aria-label="Message"
                name="message"
                rows={8}
                placeholder="Message"
                className="w-full border border-gray-200 rounded-md px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-vertical"
              />
            </div>

            {/* checkbox and submit */}
            <div className="flex items-center gap-3 mb-6">
              <input id="save" name="save" type="checkbox" className="w-4 h-4" />
              <label htmlFor="save" className="text-sm text-gray-700">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-800 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-900 transition"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
