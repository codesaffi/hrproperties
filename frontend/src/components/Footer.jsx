import { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/HR_Logo-2.avif";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return toast.error("Please enter an email");

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/newsletter`,
        { email: newsletterEmail }
      );
      toast.success(res.data.message || "Subscribed successfully!");
      setNewsletterEmail("");
    } catch (err) {
      toast.error("Failed to subscribe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#1F3B87] text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h1 className="text-4xl font-bold">
            <img
              src={logo}
              alt="HR Properties Logo"
              className="h-[5rem] w-auto mx-auto"
            />
          </h1>
        </div>

        {/* Contact & Social Icons */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <div className="flex items-center text-lg mb-2">
            <MdPhone className="mr-2 text-pink-400" />
            0332 2826107
          </div>
          <div className="flex items-center text-lg mb-4">
            <MdEmail className="mr-2 text-pink-400" />
            contact@hrproperties.pk
          </div>
          <div className="flex space-x-3 text-xl">
            <Link to={"https://www.facebook.com/HRProperties1/"}>
              <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
            </Link>
            <Link to={"https://www.instagram.com/hrproperties_group/?hl=en"}>
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            </Link>
            <Link to={"https://www.youtube.com/HREstateBuilders"}>
              <FaYoutube className="hover:text-pink-400 cursor-pointer" />
            </Link>
            <Link to={"https://www.tiktok.com/@hrproperties1"}>
              <FaTiktok className="hover:text-pink-400 cursor-pointer" />
            </Link>
            <Link
              to={
                "https://api.whatsapp.com/send/?phone=%2B923322826107&text&type=phone_number&app_absent=0"
              }
            >
              <FaWhatsapp className="hover:text-pink-400 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-lg">
            <Link to={"/phase-1"}>
              <li className="hover:text-pink-400 cursor-pointer">
                Etihad Town Phase 1
              </li>
            </Link>
            <Link to={"/phase-2"}>
              <li className="hover:text-pink-400 cursor-pointer">
                Etihad Town Phase 2
              </li>
            </Link>
            <Link to={"/phase-3"}>
              <li className="hover:text-pink-400 cursor-pointer">
                Etihad Town Phase 3
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:text-pink-400 cursor-pointer">About Us</li>
            </Link>
            <Link to={"/ceo-message"}>
              <li className="hover:text-pink-400 cursor-pointer">CEO Message</li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-pink-400 cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Let’s get in touch</h2>
          <p className="text-lg mb-3">
            Sign up for our newsletter and receive 10% off your
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md text-black text-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md shadow-md transition"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-10 text-center text-base text-white border-t border-white/20 pt-4">
        © HR PROPERTIES 2025
      </div>
    </footer>
  );
}
