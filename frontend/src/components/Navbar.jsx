import { Search, User, Star, ShoppingCart } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/HR_Logos.webp";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [userDropdown, setUserDropdown] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY <= 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const navLinks = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Etihad Town Phase 1", to: "#" },
    { text: "Etihad Town Phase 2", to: "#" },
    { text: "Etihad Town Phase 3", to: "#" },
    { text: "CEO Message", to: "/ceo-message" },
    { text: "Maps", to: "/maps" },
    { text: "Contact Us", to: "contact" }
  ];

  return (
    <nav className={`w-full shadow-md bg-white sticky top-0 z-50 transition-transform duration-300 ${showNavbar ? '' : '-translate-y-full'}`}> 
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left - Hamburger & Search */}
        <div className="flex items-center space-x-2">
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          {/* Search icon */}
          <Search className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Center - Logo */}
        <div className="flex items-center justify-center flex-1">
          <img src={logo} alt="HR Properties Logo" className="h-[3rem] w-auto mx-auto" />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 relative">
          {user ? (
            <button
              className="flex items-center space-x-2 focus:outline-none"
              onClick={() => setUserDropdown((v) => !v)}
              aria-label="User menu"
            >
              <User className="w-5 h-5 cursor-pointer" />
              <span className="font-medium text-blue-800">Hey, {user.name}</span>
            </button>
          ) : (
            <button className="flex items-center space-x-2 focus:outline-none" aria-label="Login/Signup" disabled>
              <User className="w-5 h-5 cursor-pointer" />
            </button>
          )}
          {userDropdown && user && (
            <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg py-2 px-4 z-50 min-w-[120px]">
              <div className="mb-2 text-blue-800">Hey, {user.name}</div>
              <button
                className="w-full text-left text-red-600 hover:underline"
                onClick={() => {
                  localStorage.removeItem("user");
                  setUserDropdown(false);
                  window.location.reload();
                }}
              >Logout</button>
            </div>
          )}
          <Star className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>

      </div>

      {/* Links - Desktop */}
      <div className="hidden md:flex justify-center space-x-8 py-2 border-t text-sm font-medium text-gray-700">
        {navLinks.map((link, idx) => (
          link.to.startsWith("/") ? (
            <Link
              key={idx}
              to={link.to}
              className="relative px-1 transition-colors duration-200 hover:text-blue-700 group"
            >
              {link.text}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"
                style={{ borderRadius: '2px' }}
              ></span>
            </Link>
          ) : (
            <a
              key={idx}
              href={link.to}
              className="relative px-1 transition-colors duration-200 hover:text-blue-700 group"
            >
              {link.text}
              <span
                className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"
                style={{ borderRadius: '2px' }}
              ></span>
            </a>
          )
        ))}
      </div>

      {/* Links - Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 w-full h-full bg-white/95 z-[9999] flex flex-col justify-between px-6 py-6 text-sm font-medium text-gray-700 shadow-lg transition-all duration-300">
          <div>
            <button
              className="self-end mb-4 p-2 text-gray-700 float-right"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            <div className="flex flex-col items-start mt-8">
              {navLinks.map((link, idx) => (
                link.to.startsWith("/") ? (
                  <Link
                    key={idx}
                    to={link.to}
                    className="relative py-3 w-full text-left transition-colors duration-200 hover:text-blue-700 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.text}
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-3/4"
                      style={{ borderRadius: '2px' }}
                    ></span>
                  </Link>
                ) : (
                  <a
                    key={idx}
                    href={link.to}
                    className="relative py-3 w-full text-left transition-colors duration-200 hover:text-blue-700 group"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.text}
                    <span
                      className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-3/4"
                      style={{ borderRadius: '2px' }}
                    ></span>
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-start pb-4">
            <div className="font-semibold text-base mb-2">My Account</div>
            <div className="flex gap-2">
              {user ? (
                <>
                  <span className="px-4 py-2 text-blue-800 font-medium">Hey, {user.name}</span>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={() => {
                      localStorage.removeItem("user");
                      setMenuOpen(false);
                      window.location.reload();
                    }}
                  >Logout</button>
                </>
              ) : (
                <>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition" disabled>Login</button>
                  <button className="px-4 py-2 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition" disabled>Register</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
