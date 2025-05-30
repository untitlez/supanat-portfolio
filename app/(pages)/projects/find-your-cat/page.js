"use client";
import { useState } from "react";

export default function FindYourCat() {
  const [catImage, setCatImage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
      );
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching the cat image:", error);
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      {/* Mobile View */}
      <section className="mockup-phone border-2 border-base-300 sm:hidden">
        <div className="camera"></div>
        <div className="display">
          <figure className="artboard artboard-demo phone-1 relative">
            {catImage && (
              <img
                src={catImage}
                alt="Random Cat"
                className="h-full object-cover"
                loading="lazy"
              />
            )}
            <button
              onClick={handleClick}
              className="btn btn-primary w-3/4 absolute bottom-4 shadow-xl"
            >
              Click to adopt a cat
            </button>
          </figure>
        </div>
      </section>

      {/* Desktop View */}
      <section className="mockup-browser bg-base-300 border border-base-content/50 shadow-xl mx-8 lg:mx-0 hidden sm:block">
        <div className="mockup-browser-toolbar">
          <p className="input text-center font-semibold">Find Your Cat</p>
        </div>
        <div className="bg-base-200 grid justify-center">
          {catImage && (
            <figure>
              <img
                src={catImage}
                alt="Random Cat"
                className="h-[500px] object-cover"
                loading="lazy"
              />
            </figure>
          )}
          <button
            onClick={handleClick}
            className="btn btn-primary m-8 shadow-md"
          >
            Click to adopt a cat
          </button>
        </div>
      </section>
    </div>
  );
}
