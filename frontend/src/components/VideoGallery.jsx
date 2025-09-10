import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import reel9 from "../assets/reel_1.mp4";
import reel2 from "../assets/reel_2.mp4";
import reel3 from "../assets/reel_3.mp4";
import reel4 from "../assets/reel_4.mp4";
import reel5 from "../assets/reel_5.mp4";
import reel6 from "../assets/reel_6.mp4";
import reel7 from "../assets/reel_7.mp4";
import reel8 from "../assets/reel_8.mp4";
import reel1 from "../assets/reel_9.mp4";
import reel10 from "../assets/reel_10.mp4";
import reel11 from "../assets/reel_11.mp4";
import reel12 from "../assets/reel_12.mp4";
import reel13 from "../assets/reel_13.mp4";
import reel14 from "../assets/reel_14.mp4";
import reel15 from "../assets/reel_15.mp4";

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

// ✅ FIX: accept `style` prop and use it safely
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
      muted={true}
      controls={!preview}
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
  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videos = [
    { id: 1, src: reel1, thumb: img1 },
    { id: 2, src: reel2, thumb: img2 },
    { id: 3, src: reel3, thumb: img3 },
    { id: 4, src: reel4, thumb: img4 },
    { id: 5, src: reel5, thumb: img5 },
    { id: 6, src: reel6, thumb: img6 },
    { id: 7, src: reel7, thumb: img7 },
    { id: 8, src: reel8, thumb: img8 },
    { id: 9, src: reel9, thumb: img9 },
    { id: 10, src: reel10, thumb: img10 },
    { id: 11, src: reel11, thumb: img11 },
    { id: 12, src: reel12, thumb: img12 },
    { id: 13, src: reel13, thumb: img13 },
    { id: 14, src: reel14, thumb: img14 },
    { id: 15, src: reel15, thumb: img15 },
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // When modal is open, lock body scroll; restore when closed
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

  // Unified close handler: pause videos, destroy swiper, restore state
  const handleClose = (event) => {
    if (event) {
      try {
        event.preventDefault();
        event.stopPropagation();
      } catch {}
    }

    // Pause + reset any <video> elements inside modal
    try {
      const vids = document.querySelectorAll(".video-modal video");
      vids.forEach((v) => {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {}
      });
    } catch {}

    // Destroy modal swiper if exists to avoid leftover listeners
    try {
      if (window._modalSwiper && typeof window._modalSwiper.destroy === "function") {
        window._modalSwiper.destroy(true, true);
      }
      window._modalSwiper = null;
    } catch {}

    // restore scroll + close modal
    document.body.style.overflow = "";
    setActiveVideo(null);
  };

  // Escape key handler (robust)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVideo]);

  // Modal JSX (render into body to avoid stacking context issues)
  const modal = activeVideo ? (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[99999] video-modal"
      onClick={(e) => {
        // close only if the backdrop itself was clicked
        if (e.target === e.currentTarget) handleClose(e);
      }}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        onMouseDown={(e) => {
          // avoid any accidental native focus/submit behavior
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
            style={{
              width: "100vw",
              height: "100vh",
            }}
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
                  style={{
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                  }}
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
                            window._modalSwiper.slideTo(
                              (idx + 1) % videos.length
                            );
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

      {/* portal modal appended to body to avoid stacking/context issues */}
      {mounted && modal ? createPortal(modal, document.body) : null}
    </section>
  );
}
