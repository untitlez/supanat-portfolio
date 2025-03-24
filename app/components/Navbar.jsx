"use client";

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pages = ["about", "skills", "experience", "education"];

  return (
    <>
      <nav className="navbar glass px-1 lg:px-4 lg: border-b sticky top-0 z-10 text-primary">
        {/* Navbar Start  */}
        <div className="dropdown w-full lg:hidden">
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
        <div className="px-4 gap-2 text-start">
          <img
            className="w-10 h-10"
            src="/favicon/clover.png"
            alt="clover icon"
          />
          <div>
            <p className="text-base font-semibold -mb-1">SUPANAT</p>
            <p className="text-sm font-medium opacity-60">Portfolio</p>
          </div>
        </div>

        {/* Navbar End  */}
        <div className="w-full justify-end hidden lg:flex gap-2">
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
