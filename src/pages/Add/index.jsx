import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [adsId, setAdsId] = useState("");

  useEffect(() => {
    if (localStorage.getItem("adsId")) {
      let adsId = localStorage.getItem("adsId");
      navigate(`/player/${adsId}`);
    }
  }, []);

  const onSubmit = () => {
    localStorage.setItem("adsId", adsId);
    navigate(`/player/${adsId}`);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center px-4 ">
      <div className="w-full max-w-[500px] shadow-md border border-slate-400  p-4 rounded-lg py-6">
        <h1 className="text-[30px]  font-semibold">Play Your Ad</h1>
        <div className="input-container">
          <label className="label">Enter Ads ID :</label>
          <input
            type="text"
            className="input"
            name="adsId"
            id="adsId"
            value={adsId}
            onChange={(e) => setAdsId(e.target.value)}
          />
        </div>
        <button
          type="button"
          name="submit"
          onClick={onSubmit}
          className="button"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Add;
