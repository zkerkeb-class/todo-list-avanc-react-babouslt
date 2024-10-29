import React, { useEffect, useState } from "react";
import "./MovingImage.css";

const MovingImage = ({ show, onClick }) => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setPosition((prev) => ({
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [show]);

  return (
    show && (
      <img
        src="/images/zak.png"
        alt="Moving"
        className="moving-image"
        style={{ position: "absolute", ...position }}
        onClick={onClick}
      />
    )
  );
};

export default MovingImage;
