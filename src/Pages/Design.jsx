import React from 'react'
import { Link } from 'react-router-dom'

export default function Design() {
  return (
    <>
        <div className='main flex-col'>
        {/* Top  */}
        <div className='head relative'>
        <Link to="/portfolio"
        className='back'>
        <img src="/src/assets/icon/arrow_circle_left.png" alt="Back" />
        </Link>
        <h4>DESIGN</h4>
        </div>

        {/* Bottom  */}
        <div className='content'>
        {/* Card 1  */}
        <Link to="/designpage1">
        <div className='card'>
            <img src="/src/assets/img/App Default.png" alt="Mobile app white theme" />
            <div className='primary rounded-b-md text-white text-center py-4'>
            <h6>Wallet App</h6>
            ( White Theme )
            </div>
        </div>
        </Link>

        {/* Card 2  */}
        <Link to="/designpage2">
        <div className='card'>
            <img src="/src/assets/img/App Dark.png" alt="Mobile app dark theme" />
            <div className='primary rounded-b-md text-white text-center py-4'>
            <h6>Wallet App</h6>
            ( Dark Theme )
            </div>
        </div>
        </Link>

        {/* Card 3  */}
        <Link to="/designpage3">
        <div className='card'>
            <img src="/src/assets/img/MacBook Air (15 inch).png" alt="Redesign desktop" />
            <div className='primary rounded-b-md text-white text-center py-4'>
            <h6>Redesign Brand - KFC</h6>
            ( Laptop )
            </div>
        </div>  
        </Link>     

         {/* Card 4  */}
        <Link to="/designpage4">
        <div className='card'>
            <img src="/src/assets/img/iPad Pro 2020.png" alt="Redesign tablet" />
            <div className='primary rounded-b-md text-white text-center py-4'>
            <h6>Redesign Brand - KFC</h6>
            ( Tablet )
            </div>
        </div>
        </Link>

        </div>
        </div>
    </>
  )
}
