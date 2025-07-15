"use client";

import { motion } from "framer-motion";
import { useScrollInView } from "../app/lib/hook/useScrollInView";
import Image from "next/image";

const pages = ["about", "projects", "certificate", "experience", "education"];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    const target = document.body;
    const currentTheme = target.dataset.theme;
    if (currentTheme === "luxury") {
      target.setAttribute("data-theme", "autumn");
    } else {
      target.setAttribute("data-theme", "luxury");
    }
  };

  const { ref, isInView } = useScrollInView({
    once: false,
    margin: "0px 0px -90% 0px",
  });

  return (
    <motion.nav
      className="navbar justify-between px-1 lg:px-4 sticky top-0 z-20 text-primary backdrop-blur-md"
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
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
          className="menu dropdown-content z-20 mt-2 gap-1 rounded-xl shadow-xl bg-base-100/90"
        >
          {pages.map((page, i) => (
            <li key={i} onClick={() => scrollTo(page)}>
              <button className="uppercase">{page}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar Center  */}
      <div
        onClick={toggleTheme}
        className="px-3 gap-1 lg:gap-2 cursor-pointer animate"
      >
        <Image
          width={40}
          height={40}
          className="spin"
          src="/favicon/clover.png"
          alt="Logo Page"
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
    </motion.nav>
  );
}
