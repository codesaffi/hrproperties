import React from "react";
import vid from "../assets/vid_1.mp4";

export default function AdVideo({ src, poster }) {
  return (
    <div className="w-full flex justify-center my-8">
      <video
        src={src}
        controls
        muted={false}          // 🔊 audio enabled
        playsInline            // ✅ smoother mobile playback
        preload="metadata"     // ✅ only load metadata first
        poster={poster}        // ✅ optional thumbnail
        loading="lazy"         // ✅ hint browser to delay loading
        className="w-full rounded-lg shadow-lg"
        style={{ height: "auto" }}
      />
    </div>
  );
}
