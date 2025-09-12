import { Routes, Route } from "react-router-dom";
import TopHeadline from "./components/TopHeadline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Ceo from "./pages/Ceo";
import Maps from "./pages/Maps";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AdminRoute from "./components/AdminRoute";
import AdminAddProduct from "./pages/AdminAddProduct";
import AdminProducts from "./pages/AdminProducts";
import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase2";
import Phase3 from "./pages/Phase3";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import AdminOrders from "./pages/AdminOrders";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setVisible(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-[99999] bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    ) : null;
  }
  return (
    <>
      <TopHeadline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ceo-message" element={<Ceo />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phase-1" element={<Phase1 />} />
        <Route path="/phase-2" element={<Phase2 />} />
        <Route path="/phase-3" element={<Phase3 />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <AdminAddProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminRoute>
              <AdminOrders />
            </AdminRoute>
          }
        />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/order/:slug" element={<OrderPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
      <ScrollToTopButton />
    </>
  );
}
