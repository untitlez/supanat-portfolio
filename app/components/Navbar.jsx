"use client";
import { useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex gap-4">
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(servicesRef)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Contact
        </button>
      </nav> */}

      <nav className="navbar glass h-auto pl-4 pr-6 mb-12 lg:mb-24 text-base-100 justify-end border-b sticky top-0 z-10">
        <div className="dropdown w-full">
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
            className="menu menu-sm dropdown-content z-[1] mt-3 p-1 rounded-xl border bg-base-100 text-primary"
          >
            <li>
              <Link href="/page/code">CODE</Link>
            </li>
            <li>
              <Link href="/page/design">DESIGN</Link>
            </li>
          </ul>
        </div>
        <div className="tabs-boxed flex gap-2 bg-base-100">
          <Link href="/page/test">
            <button
              className="btn btn-sm btn-primary cursor-pointer"
            >
              Test
            </button>
          </Link>
          <Link href="/page/code">
            <button
              className="btn btn-sm btn-primary cursor-pointer"
            >
              PROJECTS
            </button>
          </Link>

          <Link href="/page/skills">
            <button
              className="btn btn-sm btn-primary cursor-pointer"
            >
              RESUME
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
