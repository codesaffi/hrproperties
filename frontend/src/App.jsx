import { Routes, Route } from "react-router-dom";
import TopHeadline from "./components/TopHeadline";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ceo from "./pages/Ceo";

export default function App() {
			return (
				<>
					<TopHeadline />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
            <Route path="/ceo-message" element={<Ceo />} />
					</Routes>
					<Footer />
				</>
			);
}
