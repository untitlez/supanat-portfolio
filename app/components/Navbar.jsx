"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
              className="menu menu-sm dropdown-content bg-primary rounded-xl border z-[1] mt-3 p-2 "
            >
              <li>
                <Link href="/page/code">CODE</Link>
              </li>
              <li>
                <Link href="/page/design">DESIGN</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost lg:flex ">
            <p className="font-bold">PORTFOLIO</p>
          </Link>
        </div>

        <div className="navbar-end">
          
        </div>
      </div>
    </>
  );
}
