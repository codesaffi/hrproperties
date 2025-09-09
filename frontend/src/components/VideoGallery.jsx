import React, { useState, useRef, useEffect } from "react";
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
      // ✅ FIX: use the provided style prop or a safe fallback
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
    { id: 1, src: reel1 },
    { id: 2, src: reel2 },
    { id: 3, src: reel3 },
    { id: 4, src: reel4 },
    { id: 5, src: reel5 },
    { id: 6, src: reel6 },
    { id: 7, src: reel7 },
    { id: 8, src: reel8 },
    { id: 9, src: reel9 },
    { id: 10, src: reel10 },
    { id: 11, src: reel11 },
    { id: 12, src: reel12 },
    { id: 13, src: reel13 },
    { id: 14, src: reel14 },
    { id: 15, src: reel15 },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  // ✅ UX: Allow closing modal with Escape
  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo]);

  return (
    <section className="py-12 bg-white">
      {/* Full width container so slides touch both edges */}
      <div className="w-full px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
          Our Video Highlights
        </h2>

        {/* Horizontal swipe videos */}
        <Swiper
          spaceBetween={15}
          slidesPerView={"auto"}         // Flexible, edge-to-edge flow
          centeredSlides={false}
          className="rounded-lg"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="!w-[230px]">
              <div
                className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:scale-105 transition"
                onClick={() => setActiveVideo(video)}
              >
                {/* 📌 Thumbnail size (as you requested) */}
                <video
                  src={video.src}
                  muted
                  playsInline
                  className="object-cover rounded-lg w-[345px] h-[400px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[99999]">
          {/* ✅ FIX: Make the close control always on top & clickable */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActiveVideo(null)}
            className="fixed top-6 right-8 text-white text-4xl font-bold hover:text-red-400 transition cursor-pointer select-none z-[999999] pointer-events-auto"
          >
            ×
          </button>

          <div className="relative w-full flex items-center justify-center pt-12 pb-12">
            {isMobile ? (
              <Swiper
                direction="vertical"
                modules={[Navigation, Virtual, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                initialSlide={videos.findIndex((v) => v.id === activeVideo.id)}
                onSlideChange={(swiper) =>
                  setActiveVideo(videos[swiper.realIndex])
                }
                pagination={{ clickable: true }}
                virtual
                loop={true}
                className="fixed inset-0 w-screen h-screen bg-black z-50"
                style={{
                  width: "100vw",
                  height: "100vh",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  background: "black",
                  zIndex: 50,
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
                            window._modalSwiper.slideTo(
                              (idx + 1) % videos.length
                            );
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
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                initialSlide={videos.findIndex((v) => v.id === activeVideo.id)}
                onSlideChange={(swiper) =>
                  setActiveVideo(videos[swiper.realIndex])
                }
                navigation={true}
                loop={true}
                className="w-[1100px] h-[650px]"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
                onSwiper={(swiper) => (window._modalSwiper = swiper)}
              >
                {videos.map((video, idx) => {
                  const isActive = video.id === activeVideo.id;
                  return (
                    <SwiperSlide
                      key={video.id}
                      className="flex items-center justify-center"
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
                                  width: "500px",
                                  height: "900px",
                                  transform: "scale(1.18)",
                                }
                              : {
                                  width: "220px",
                                  height: "400px",
                                  opacity: 0.5,
                                  filter: "blur(0.5px)",
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
      )}
    </section>
  );
}
