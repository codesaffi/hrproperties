import TopHeadline from "./components/TopHeadline";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import VideoGallery from "./components/VideoGallery";
import InvestmentSection from "./components/InvestmentSection";
import AdVideo from "./components/AdVideo";
import OpportunitiesSection from "./components/OpportunitiesSection";
import Footer from "./components/Footer";
import vid1 from "./assets/vid_1.mp4";
import vid2 from "./assets/vid_2.mp4";
import LeadershipMessage from "./components/LeadershipMessage1";


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
    <div className="font-sans">
      <TopHeadline />
      <Navbar />
      <Hero />
      <TrustSection />
      <VideoGallery />
      <InvestmentSection />
      <AdVideo src={vid1} />
      <OpportunitiesSection />
      <AdVideo src={vid2}  />
      <LeadershipMessage />
      <Footer />
  <ScrollToTopButton />
    </div>
  );
}
