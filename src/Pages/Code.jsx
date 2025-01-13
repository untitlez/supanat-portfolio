import React from 'react'
import { Link } from 'react-router-dom'

export default function Code() {
  return (
    <>
        <div className='main flex-col'>
        {/* Top  */}
        <div className='head relative fu'>
        <Link to="/portfolio"
        className='back'>
        <img src="/icon/arrow_circle_left.png" alt="Back" />
        </Link>
        <h4>CODE</h4>
        </div>

        {/* Bottom  */}
        <div className='content px-12 py-14 gap-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 fin'>
        
        {/* Block 1  */}
        <Link to="/codepage1">
        <div className='card'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>To-Do List</h6>
            </div>

              {/* Detail  */}
              <div className='grid p-12 gap-4'>
                  <div className='flex'>
                    <img className='size-6 mr-4' src="/icon/build.png" alt="Timeframe" />
                    <p>Tools :</p>
                  <div className='flex-1 text-center'>
                    <p>React - useState</p>
                    <p>Tailwind CSS</p>
                  </div>
                </div>
            </div>
        </div>
        </Link>

        {/* Block 2  */}
        <Link to="/codepage2">
        <div className='card'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Random Image</h6>
            </div>

              {/* Detail  */}
              <div className='grid p-12 gap-4'>
                  <div className='flex'>
                    <img className='size-6 mr-4' src="/icon/build.png" alt="Timeframe" />
                    <p>Tools :</p>
                  <div className='flex-1 text-center'>
                    <p>React - useState</p>
                    <p>React - Fetch API</p>
                    <p>Tailwind CSS</p>
                  </div>
                </div>
            </div>
        </div>
        </Link>
    
        </div>
        </div>

        
    </>
  )
}
