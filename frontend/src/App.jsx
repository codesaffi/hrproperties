import { Routes, Route } from "react-router-dom";
import TopHeadline from "./components/TopHeadline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ceo from "./pages/Ceo";
import Maps from "./pages/Maps";
import Contact from "./pages/Contact";


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
					</Routes>
					<Footer />
				</>
			);
}
