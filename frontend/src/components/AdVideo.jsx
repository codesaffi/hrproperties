import React from "react";
import vid from "../assets/vid_1.mp4";

export default function AdVideo({ src }) {
    return (
        <div className="w-full flex justify-center my-8">
            <video
                src={src} // Ensure this path is correct
                controls
                className="w-full rounded-lg shadow-lg"
                style={{ height: "auto" }}
            />
        </div>
    );
}
