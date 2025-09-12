import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import VideoGallery from "../components/VideoGallery";
import InvestmentSection from "../components/InvestmentSection";
import AdVideo from "../components/AdVideo";
import OpportunitiesSection from "../components/OpportunitiesSection";
import CeoMessage from "../components/CeoMessage";

export default function Home() {
  return (
    <>       
      <Hero />
      <TrustSection />
      <VideoGallery />
      <InvestmentSection />
      <AdVideo src="https://res.cloudinary.com/dyzo70rdx/video/upload/v1757700146/vid_1_mfdb6e.mp4" />
      <OpportunitiesSection />
      <AdVideo src="https://res.cloudinary.com/dyzo70rdx/video/upload/v1757700024/vid_2_e07cjy.mp4" />
      <CeoMessage />
    </>
  );
}
