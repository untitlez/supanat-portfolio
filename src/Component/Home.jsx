import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen center-flex bg-primary text-white absolute">
        <div className="w-full h-screen center-flex absolute hover:bg-[#C2C7CC] hover:text-[#34659D] fade delay-1000">
          <Link to="/about">
            <h1>Portfolio .</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
