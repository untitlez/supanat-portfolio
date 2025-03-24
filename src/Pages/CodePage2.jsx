import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CodePage2() {
  const [catImage, setCatImage] = useState("");

  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching the cat image:", error);
    }
  };

  return (
    <>
      {/* Top  */}
      <div className="main flex-col">
        <div className="head relative">
            <Link to="/code"
            className='back'>
            <img src="./icon/arrow_circle_left.png" alt="Back" />
            </Link>
            <h4>CODE</h4>
        </div>

        {/* Bottom   */}
        <div className="px-12 py-14 center-flex text-center fin">
          <div className="shadow-xl rounded-b-md">
            <div className='bg-primary text-white text-center rounded-t-md p-4'>
                <h6>Random Cat</h6>
            </div>

            {catImage && (<img src={catImage} alt="Random Cat"/>)}

            <button
            onClick={handleButtonClick}
            className="rounded border text-[#34659D] hover:font-bold hover:border-[#34659D] p-4 m-6">
            Click to adopt a cat
            </button>
          </div>
        </div>
        
        
      </div>
    </>
  );
}
