import React from "react";
import { Link } from "react-router-dom";


export default function CodePage3() {
  return (
    <>
      {/* Top  */}
      <div className="main flex-col">
        <div className="head relative">
          <Link to="/code" className="back">
            <img src="./icon/arrow_circle_left.png" alt="Back" />
          </Link>
          <h4>CODE</h4>
        </div>

        {/* Bottom  */}
        <div className="ctf my-8  ">
        <Link to="https://e-commerce-untitlezs-projects.vercel.app/" target="_blank"
        className="ctf gap-4 py-3 px-4 rounded-md border-2 hover:border-gray-400">
          <img src="./icon/vercel.png" alt="" className="size-8 "/>
          Vercel
          </Link>
        </div>

      </div>
    </>
  );
}
