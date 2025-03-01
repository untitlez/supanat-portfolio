import Link from "next/link";

export default function Navbar({ hidden,portfolioBtn,resumeBtn }) {
  return (
    <>
      <nav className="navbar pl-4 pr-6 md:mb-4 lg:mt-4 lg:rounded-xl text-primary bg-base-100 justify-end border-b">
      <div className={`dropdown w-full ${hidden}`}>
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
          className="menu menu-sm dropdown-content z-[1] mt-3 p-1 rounded-xl border bg-base-100 text-primary">
          <li>
            <Link href="/page/code">CODE</Link>
          </li>
          <li>
            <Link href="/page/design">DESIGN</Link>
          </li>
        </ul>
      </div>
      <div className="tabs-boxed flex gap-2 bg-base-100">
      <Link href="/page/code">
        <button className={`btn btn-sm btn-primary cursor-pointer ${resumeBtn}`}>
          PORTFOLIO
        </button>
      </Link>

      <Link href="/">
        <button className={`btn btn-sm btn-primary cursor-pointer ${portfolioBtn}`}>
          RESUME
        </button>
      </Link>
      </div>

      </nav>
    </>
  );
}
