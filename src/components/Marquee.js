import React, { useState, useEffect } from "react";

const Marquee = ({ text, containerClassName }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let width = window.innerWidth || screen.width;
    const intervalId = setInterval(() => {
      if (position > width) {
        setPosition(0);
      } else {
        setPosition((prevPos) => prevPos + 1);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, [position]);

  return (
    <div className={containerClassName}>
      <div
        className="text"
        style={{
          display: "inline-block",
          position: "absolute",
          right: `${position}px`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

Marquee.defaultProps = {
  text: "",
  containerClassName: "",
};
export default Marquee;
