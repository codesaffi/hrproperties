import { Routes, Route } from "react-router-dom";
import TopHeadline from "./components/TopHeadline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';


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

export const backendUrl = import.meta.env.VITE_BACKEND_URL
// export const adminUrl = import.meta.env.VITE_ADMIN_URL



export default function App() {
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
							  <Route path="/admin" element={<AdminRoute><AdminHome /></AdminRoute>} />
							  <Route path="/admin/add-product" element={<AdminRoute><AdminAddProduct /></AdminRoute>} />
							  <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
                 <Route path="/products/:slug" element={<ProductPage />} />
                 <Route path="/order/:slug" element={<OrderPage />} />
														</Routes>
					<Footer />
					<ToastContainer />
				</>
			);
}
