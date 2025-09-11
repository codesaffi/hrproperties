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
														</Routes>
					<Footer />
					<ToastContainer />
				</>
			);
}
