import CeoSection from "../components/CeoSection";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


export default function Ceo() {
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
<CeoSection />
<ScrollToTopButton />
</div>
  );
}
