import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import img1 from "../assets/img_1.webp";
import img2 from "../assets/img_2.webp";
import img3 from "../assets/img_3.webp";
import img4 from "../assets/img_4.webp";
import img5 from "../assets/img_1.1.webp";
import img6 from "../assets/img_2.1.webp";
import img7 from "../assets/img_3.1.webp";
import img8 from "../assets/img_4.1.webp";
import img9 from "../assets/img_1.webp";
import img10 from "../assets/img_2.webp";
import img11 from "../assets/img_3.webp";
import img12 from "../assets/img_4.webp";
import img13 from "../assets/img_1.1.webp";
import img14 from "../assets/img_2.1.webp";
import img15 from "../assets/img_3.1.webp";

function VideoStory({ src, isActive, onEnded, style: videoStyle }) {
  const [playing, setPlaying] = useState(isActive);
  const [preview, setPreview] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setPlaying(isActive);
    setPreview(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [isActive, src]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [playing]);

  const handleTimeUpdate = () => {
    if (preview && videoRef.current && videoRef.current.currentTime >= 3) {
      videoRef.current.pause();
      setPlaying(false);
      setPreview(false);
    }
  };

  const handleClick = () => {
    if (!playing) {
      setPreview(false);
      setPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      setPlaying(false);
      if (videoRef.current) videoRef.current.pause();
    }
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={isActive}
      muted={false} // 🔊 sound enabled
      controls={!preview}
      playsInline
      preload="metadata" // ⚡ only load metadata first
      className="object-cover rounded-lg shadow-lg transition-all duration-300"
      style={
        typeof videoStyle === "object"
          ? videoStyle
          : { width: "100vw", height: "100vh" }
      }
      onClick={handleClick}
      onEnded={onEnded}
      onTimeUpdate={handleTimeUpdate}
    />
  );
}

export default function VideoGallery() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videos = [
    { id: 1, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757698123/reel_7_eufwnm.mp4", thumb: img1 },
    { id: 2, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757698276/reel_15_kmrxzq.mp4", thumb: img2 },
    { id: 3, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757698080/reel_9_uxr08x.mp4", thumb: img3 },
    { id: 4, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757698072/reel_6_k6l6up.mp4", thumb: img4 },
    { id: 5, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757698068/reel_8_bhc1mp.mp4", thumb: img5 },
    { id: 6, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697891/reel_2_cxw1qk.mp4", thumb: img6 },
    { id: 7, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697859/reel_1_emdmed.mp4", thumb: img7 },
    { id: 8, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697823/reel_4_gya4us.mp4", thumb: img8 },
    { id: 9, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697782/reel_14_ggxcxh.mp4", thumb: img9 },
    { id: 10, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697758/reel_3_gd5g6h.mp4", thumb: img10 },
    { id: 11, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697726/reel_13_lzmgzt.mp4", thumb: img11 },
    { id: 12, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697699/reel_12_le8mdo.mp4", thumb: img12 },
    { id: 13, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697686/reel_11_pcosdw.mp4", thumb: img13 },
    { id: 14, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697685/reel_5_rrqbpa.mp4", thumb: img14 },
    { id: 15, src: "https://res.cloudinary.com/dyzo70rdx/video/upload/v1757697667/reel_10_mrj4nz.mp4", thumb: img15 },
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  const handleClose = (event) => {
    if (event) {
      try {
        event.preventDefault();
        event.stopPropagation();
      } catch {}
    }
    try {
      const vids = document.querySelectorAll(".video-modal video");
      vids.forEach((v) => {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {}
      });
    } catch {}
    try {
      if (window._modalSwiper && typeof window._modalSwiper.destroy === "function") {
        window._modalSwiper.destroy(true, true);
      }
      window._modalSwiper = null;
    } catch {}
    document.body.style.overflow = "";
    setActiveVideo(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && activeVideo) {
        try {
          e.preventDefault();
          e.stopPropagation();
        } catch {}
        handleClose();
      }
    };
    window.addEventListener("keydown", onKey, { capture: true });
    return () => window.removeEventListener("keydown", onKey, { capture: true });
  }, [activeVideo]);

  const modal = activeVideo ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[99999] video-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose(e);
      }}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        onMouseDown={(e) => {
          try {
            e.preventDefault();
          } catch {}
        }}
        onClick={(e) => {
          try {
            e.stopPropagation();
            e.preventDefault();
          } catch {}
          handleClose(e);
        }}
        className="absolute top-6 right-8 text-white text-4xl font-bold hover:text-red-400 transition cursor-pointer z-[1100000]"
      >
        ×
      </button>

      <div
        className="relative w-full flex items-center justify-center pt-12 pb-12"
        onClick={(e) => e.stopPropagation()}
      >
        {isMobile ? (
          <Swiper
            direction="vertical"
            modules={[Navigation, Virtual, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            initialSlide={videos.findIndex((v) => v.id === activeVideo.id)}
            onSlideChange={(swiper) => setActiveVideo(videos[swiper.realIndex])}
            pagination={{ clickable: true }}
            virtual
            loop={true}
            className="fixed inset-0 w-screen h-screen bg-black z-50"
            style={{ width: "100vw", height: "100vh" }}
            onSwiper={(swiper) => (window._modalSwiper = swiper)}
          >
            {videos.map((video, idx) => (
              <SwiperSlide
                key={video.id}
                virtualIndex={idx}
                className="flex items-center justify-center w-full h-full"
              >
                <VideoStory
                  src={video.src}
                  isActive={video.id === activeVideo.id}
                  onEnded={() => {
                    setActiveVideo(videos[(idx + 1) % videos.length]);
                    setTimeout(() => {
                      if (window._modalSwiper)
                        window._modalSwiper.slideTo((idx + 1) % videos.length);
                    }, 100);
                  }}
                  style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            navigation={true}
            initialSlide={videos.findIndex((v) => v.id === activeVideo.id)}
            onSlideChange={(swiper) => setActiveVideo(videos[swiper.realIndex])}
            loop={true}
            className="w-[1200px] h-[700px] relative z-40"
            onSwiper={(swiper) => (window._modalSwiper = swiper)}
          >
            {videos.map((video, idx) => {
              const isActive = video.id === activeVideo.id;
              return (
                <SwiperSlide
                  key={video.id}
                  className="flex items-center justify-center transition-all"
                >
                  <div className={isActive ? "z-20" : "z-10"}>
                    <VideoStory
                      src={video.src}
                      isActive={isActive}
                      onEnded={() => {
                        setActiveVideo(videos[(idx + 1) % videos.length]);
                        setTimeout(() => {
                          if (window._modalSwiper)
                            window._modalSwiper.slideTo((idx + 1) % videos.length);
                        }, 100);
                      }}
                      style={
                        isActive
                          ? {
                              width: "450px",
                              height: "800px",
                              transform: "scale(1.1)",
                              border: "3px solid white",
                            }
                          : {
                              width: "280px",
                              height: "500px",
                              opacity: 0.4,
                              filter: "blur(1px)",
                            }
                      }
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  ) : null;

  return (
    <section className="py-12 bg-white">
      <div className="w-full px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
          Our Video Highlights
        </h2>

        <Swiper
          spaceBetween={15}
          slidesPerView={"auto"}
          centeredSlides={false}
          className="rounded-lg"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="!w-[230px]">
              <div
                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:scale-105 transition"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumb}
                  alt={`Video ${video.id} thumbnail`}
                  className="object-cover rounded-lg w-[345px] h-[400px]"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </section>
  );
}
