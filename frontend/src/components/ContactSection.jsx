import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ChevronRight, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact`,
        formData
      );
      toast.success(res.data.message || "Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Error sending message. Try again.");
    } finally {
      setLoading(false);
    }
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
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7.5 9.5a1 1 0 110-2 1 1 0 010 2zm9 0a1 1 0 110-2 1 1 0 010 2zM12 17a4.5 4.5 0 01-4.5-4.5h9A4.5 4.5 0 0112 17z" />
                </svg>
              </div>
              <h4 className="text-blue-800 font-medium">Social Media</h4>
            </div>

            <div className="flex gap-4 text-2xl mt-1">
              <Link to={"https://www.facebook.com/HRProperties1/"}>
                <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              </Link>
              <Link to={"https://www.instagram.com/hrproperties_group/?hl=en"}>
                <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              </Link>
              <Link to={"https://www.youtube.com/HREstateBuilders"}>
                <FaYoutube className="hover:text-red-400 cursor-pointer" />
              </Link>
              <Link to={"https://www.tiktok.com/@hrproperties1"}>
                <FaTiktok className="hover:text-black cursor-pointer" />
              </Link>
              <Link
                to={
                  "https://api.whatsapp.com/send/?phone=%2B923322826107&text&type=phone_number&app_absent=0"
                }
              >
                <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
              </Link>
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
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded-md px-4 py-2"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border border-gray-200 rounded-md px-4 py-2"
                required
              />
            </div>

            {/* Large textarea */}
            <div className="mb-4">
              <textarea
                name="message"
                rows={8}
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full border border-gray-200 rounded-md px-4 py-3 resize-vertical"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-800 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-900 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
