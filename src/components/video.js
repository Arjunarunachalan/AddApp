import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ({ options }) => {
  const { src } = options;

  const video = useRef(null);
  useEffect(() => {
    // const player = videojs("my-video", {
    //   autoplay: true,
    // });
    // let video = document.querySelector("#my-video");
    // console.log(video);
    // // video.addEventListener("load", () => {
    // if (video.paused || video.ended) {
    //   video.play();
    // }
    // });
  }, []);

  return (
    <div>
      <video
        ref={video}
        id="my-video"
        className="video-js"
        autoPlay
        muted
        style={{ width: "100vw", height: "100vh" }}
      >
        <source src={src[0].src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoJS;
