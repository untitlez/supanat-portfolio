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
        <Link to="https://drive.google.com/file/d/16B74JyQMgziL5SL5o3qAtGZZvxx-w-CT/view?usp=sharing" target="_blank">
        <img className='menu-icon w-12 rounded-full'src="./icon/account_circle.png" alt="resume_file"/>
        </Link>
    </nav>

    {/* Mobile  */}
    <nav className='nav px-4 center-flex md:hidden z-50'>
      {/* Hamburger Menu  */}
      <div className="dropdown">
          <button className='menu-icon w-10 rounded peer'
          aria-haspopup="true" 
          aria-expanded="false">
          <img src="./icon/menu.png" alt="menu" />
          </button>
          <div className='dropdown-content rounded grid gap-1 p-1 bg-white mt-3 text-center text-sm font-medium shadow-md'>
            <Link to="/portfolio" className='submenu2'>PORTFOLIO</Link>
            <Link to="/about" className='submenu2'>ABOUT</Link>
            <Link to="/education" className='submenu2'>EDUCATION</Link>
            <Link to="/experience" className='submenu2'>EXPERIENCE</Link>
            <Link to="/skills" className='submenu2'>SKILLS</Link>
            <Link className='submenu2' target="_blank"
            to="https://drive.google.com/file/d/16B74JyQMgziL5SL5o3qAtGZZvxx-w-CT/view?usp=sharing">RESUME</Link>
          </div>
      </div>
      
            <Link to="/portfolio" className='head-menu center-flex w-full'><h5>Portfolio</h5></Link>
        
            <Link to="https://drive.google.com/file/d/16B74JyQMgziL5SL5o3qAtGZZvxx-w-CT/view?usp=sharing" target="_blank">
            <img className='menu-icon w-14 rounded-full'src="./icon/account_circle.png" alt="resume_file"/>
            </Link>
      </nav>
      
    </>
  )
}


