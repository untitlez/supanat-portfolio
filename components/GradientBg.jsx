"use client";

import { useEffect, useState } from "react";

export const GradientBg = ({
  count = 4,
  colors = ["#00d8ff", "#7cff67", "#00d8ff"],
}) => {
  const [backGround, setBackGround] = useState([]);
  const randomValue = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    const circles = Array.from({ length: count }).map((_, i) => {
      const size = randomValue(200, 400);
      const style = {
        position: "absolute",
        top: `${randomValue(0, 100)}%`,
        left: `${randomValue(0, 100)}%`,
        width: size,
        height: size,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        borderRadius: "50%",
        filter: "blur(100px)",
        opacity: 0.3,
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      };
      return <div key={i} style={style} />;
    });
    setBackGround(circles);
  }, []);

  return <div className="fixed inset-0 overflow-hidden z-0">{backGround}</div>;
};
