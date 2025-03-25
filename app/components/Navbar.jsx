"use client";

import { useEffect, useState } from "react";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const pages = ["about", "skills", "experience", "education"];

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <nav className="navbar glass justify-between px-1 lg:px-4 sticky top-0 z-10 text-primary ">
        {/* Navbar Start  */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] mt-3 p-1 rounded-xl border shadow bg-base-100"
          >
            {pages.map((page, i) => (
              <li key={i} onClick={() => scrollTo(page)}>
                <button className="uppercase font-semibold">{page}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar Center  */}
        <div
          onClick={toggleTheme}
          className="px-3 gap-1 lg:gap-2 cursor-pointer hover:scale-110 animate"
        >
          <img
            className="w-10 h-10 spin"
            src="/favicon/clover.png"
            alt="clover icon"
          />
          <div className="">
            <p className="text-base font-semibold -mb-1">SUPANAT</p>
            <p className="text-sm font-medium opacity-60">Portfolio</p>
          </div>
        </div>

        {/* Navbar End  */}
        <div className="hidden lg:flex gap-2">
          {pages.map((page, i) => (
            <button
              key={i}
              onClick={() => scrollTo(page)}
              className="btn btn-sm btn-ghost uppercase"
            >
              {page}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
