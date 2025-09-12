import { Search, User, Star, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/HR_Logos.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw && raw !== "undefined") setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const navLinks = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Etihad Town Phase 1", to: "phase-1" },
    { text: "Etihad Town Phase 2", to: "phase-2" },
    { text: "Etihad Town Phase 3", to: "phase-3" },
    { text: "CEO Message", to: "/ceo-message" },
    { text: "Maps", to: "/maps" },
    { text: "Contact Us", to: "contact" },
    { text: "admin", to: "admin-login" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setUserOpen(false);
    window.location.reload();
  };

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left - Hamburger & Search */}
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>

        {/* Center - Logo */}
        <div className="flex items-center justify-center flex-1">
          <Link to={"/"}>
            <img
              src={logo}
              alt="HR Properties Logo"
              className="h-[3rem] w-auto mx-auto"
            />
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 relative">
          {user ? (
            <div className="relative">
              <button
                className="flex items-center space-x-3"
                onClick={() => setUserOpen((v) => !v)}
              >
                <div className="text-sm font-medium">Hey, {user.name}</div>
              </button>
              {userOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50 py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="Login"
            >
              <User className="w-5 h-5 cursor-pointer" />
            </Link>
          )}
          <Star className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex justify-center space-x-8 py-2 border-t text-sm font-medium text-gray-700">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="relative px-1 transition-colors duration-200 hover:text-blue-700 group"
          >
            {link.text}
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"
              style={{ borderRadius: "2px" }}
            ></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
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
            <div className="flex flex-col items-start mt-8 space-y-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="relative py-3 w-full text-left transition-colors duration-200 hover:text-blue-700 group"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                  <span
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-3/4"
                    style={{ borderRadius: "2px" }}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  Signup
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
