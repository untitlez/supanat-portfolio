import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <div className="main">
        <Link
          to="/code"
          className="primary w-full h-96 text-white rounded-[1.5rem] grid place-items-center hover:italic ">
          <h2>CODE</h2>
        </Link>

        <Link
          to="/design"
          className="text-[#34659D] w-full h-96 grid place-items-center hover:italic ">
          <h2>DESIGN</h2>
        </Link>
      </div>
    </>
  );
}
