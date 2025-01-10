import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    {/* Desktop  */}
    <nav className='nav h-14 px-12 md:flex justify-center items-center hidden'>
        <div className='font-medium gap-4 flex flex-1 items-center'>
            <Link to="/portfolio" className='head-menu'><h5>Portfolio</h5></Link>
            <Link to="/about" className='submenu'>ABOUT</Link>
            <Link to="/education" className='submenu'>EDUCATION</Link>
            <Link to="/experience" className='submenu'>EXPERIENCE</Link>
            <Link to="/skills" className='submenu'>SKILLS</Link>
        </div> 
        <img className='menu-icon rounded-full'src="/src/assets/icon/account_circle.png" alt="resume_file"/>
    </nav>

    {/* Mobile  */}
    <nav className='nav px-4 ctf md:hidden'>
      {/* Hamburger Menu  */}
      <div className="dropdown">
          <button className='menu-icon rounded peer'
          aria-haspopup="true" 
          aria-expanded="false">
          <img src="/src/assets/icon/menu.png" alt="menu" />
          </button>
          <div className='dropdown-content rounded grid gap-1 p-1 bg-white mt-3 text-center text-sm font-medium shadow-md'>
            <Link to="/about" className='submenu2 '>ABOUT</Link>
            <Link to="/education" className='submenu2 '>EDUCATION</Link>
            <Link to="/experience" className='submenu2 '>EXPERIENCE</Link>
            <Link to="/skills" className='submenu2 '>SKILLS</Link>
          </div>
      </div>
      
      <Link to="/portfolio" className='head-menu ctf w-full'><h5>Portfolio</h5></Link>
      <img className='menu-icon rounded-full' src="/src/assets/icon/account_circle.png" alt="resume_file"/>
      </nav>
      
    </>
  )
}


