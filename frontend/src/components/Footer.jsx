import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../assets/HR_Logo-2.avif";

export default function Footer() {
  return (
    <footer className="bg-[#1F3B87] text-white py-10 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <h1 className="text-4xl font-bold">
          <img src={logo} alt="HR Properties Logo" className="h-[5rem] w-auto mx-auto" />
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
            <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaYoutube className="hover:text-pink-400 cursor-pointer" />
            <FaTiktok className="hover:text-pink-400 cursor-pointer" />
            <FaWhatsapp className="hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-lg">
            <li className="hover:text-pink-400 cursor-pointer">Etihad Town Phase 1</li>
            <li className="hover:text-pink-400 cursor-pointer">Etihad Town Phase 2</li>
            <li className="hover:text-pink-400 cursor-pointer">Etihad Town Phase 3</li>
            <li className="hover:text-pink-400 cursor-pointer">About Us</li>
            <li className="hover:text-pink-400 cursor-pointer">CEO Message</li>
            <li className="hover:text-pink-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
            <h2 className="text-lg font-semibold mb-3">Let’s get in touch</h2>
            <p className="text-lg mb-3">
            Sign up for our newsletter and receive 10% off your
          </p>
          <input
            type="email"
            placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md text-black text-lg"
          />
        </div>
      </div>

      {/* Bottom Copy */}
        <div className="mt-10 text-center text-base text-white border-t border-white/20 pt-4">
        © HR PROPERTIES 2025
      </div>
    </footer>
  );
}
