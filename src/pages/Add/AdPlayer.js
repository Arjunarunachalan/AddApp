import { useEffect, useRef, useState } from "react";
import Marquee from "../../components/Marquee";
import VideoJS from "../../components/video";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Config/axios";

const AdPlayer = () => {
  const router = useParams();
  const { id } = router.query;
  const [ads, setAds] = useState({});

  useEffect(() => {
    if (id && id != null) {
      axiosInstance.get(`/cms/advt/advertisement-details/${id}`).then((response) => {
        console.log(response);
        setAds(response.data.data);
      });
    }
  }, [id]);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    src: [
      {
        src: ads.ads_file,
        type: "video/mp4",
      },
    ],
  };
  return (
    <div className={`container `}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 10,
          width: "100%",
        }}
      >
        <Marquee containerClassName="marquee-text-top" text={ads.top_text} />
      </div>
      {ads.ads_file && <VideoJS options={videoJsOptions} />}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: 10,
          width: "100%",
        }}
      >
        <Marquee containerClassName="marquee-text-top" text={ads.bottom_text} />
      </div>
    </div>
  );
};

export default AdPlayer;
