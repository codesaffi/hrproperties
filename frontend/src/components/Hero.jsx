import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img_1.webp";
import img2 from "../assets/img_2.webp";
import img3 from "../assets/img_3.webp";
import img4 from "../assets/img_4.webp";
import img1_1 from "../assets/img_1.1.webp";
import img2_1 from "../assets/img_2.1.webp";
import img3_1 from "../assets/img_3.1.webp";
import img4_1 from "../assets/img_4.1.webp";

import { useEffect, useState } from "react";

export default function Hero() {

  // Responsive image selection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slides = isMobile
    ? [img1_1, img2_1, img3_1, img4_1]
    : [img1, img2, img3, img4];

  return (
    <div className={`relative w-full ${isMobile ? 'h-[70vh]' : 'h-[100vh]'}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
