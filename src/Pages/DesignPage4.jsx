import React from 'react'
import { Link } from 'react-router-dom'

export default function DesignPage4() {
  return (
    <>
        <div className='main flex-col'>
        {/* Top  */}
        <div className='head relative'>
        <Link to="/design"
        className='back'>
        <img src="/icon/arrow_circle_left.png" alt="Back" />
        </Link>
        <h4>DESIGN</h4>
        </div>

        {/* Bottom  */}
        <div className='px-12 py-14 gap-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 fin'>
        {/* Block 1  */}
        <div className='shadow-xl relative'>
            <img src="/img/iPad Pro 2020.png" alt="Redesign tablet" />
            <a href="https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?page-id=1069%3A4367&node-id=1069-19308&p=f&viewport=316%2C-681%2C0.15&t=W8UgoWJ5D7FIq7Ku-1&scaling=scale-down&content-scaling=fixed"
            target="_black"
            className='absolute right-4 bottom-4 size-10 rounded-md hover:border-2'>
            <img src="/icon/figma-color.png" alt="Figma link" />
            </a>
        </div>

        {/* Block 2  */}
        <div className='shadow-xl rounded-b-md'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Redesign Brand - KFC</h6>
            <p>( Laptop )</p>
            </div>

            {/* Detail  */}
            <div className='grid p-12 gap-4'>
                <div className='flex'>
                <img className='size-6 mr-4' src="/icon/schedule.png" alt="Timeframe" />
                <p>Timeframe :</p>
                <p className='flex-1 text-center' >4 Week (October 2024)</p>
                </div>
                
    
                <div className='flex'>
                <img className='size-6 mr-4' src="/icon/contract.png" alt="Role" />
                <p>Role :</p>
                <p className='flex-1 text-center' >Practice</p>
                </div>
            </div>
        </div>

        {/* Block 3  */}
        <div className='shadow-xl rounded-b-md text-sm'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Color</h6>
            </div>

            {/* Detail  */}
            <div className='grid p-12 gap-12'>
                <div>
                    <p>Primary Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#E4002B] ctf text-white'>#E4002B</div>
                        <div className='size-20 rounded-lg bg-[#FF95A9] ctf text-black'>#FF95A9</div>
                        <div className='size-20 rounded-lg bg-[#FFC1CD] ctf text-black'>#FFC1CD</div>
                    </div>
                </div>
                
                <div>
                    <p>Secondary Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#676767] ctf text-white'>#676767</div>
                        <div className='size-20 rounded-lg bg-[#C8C8C8] ctf text-black'>#C8C8C8</div>
                        <div className='size-20 rounded-lg bg-[#EDEDED] ctf text-black'>#EDEDED</div>
                    </div>
                </div>

                <div>
                    <p>Tertiary Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#292929] ctf text-white'>#292929</div>
                        <div className='size-20 rounded-lg bg-[#656565] ctf text-white'>#656565</div>
                    </div>
                </div>

                <div>
                    <p>Text Color</p>              
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#1F1F1F] ctf text-white'>#1F1F1F</div>
                        <div className='size-20 rounded-lg bg-[#FFFFFF] ctf text-black border-2'>#FFFFFF</div>
                    </div>
                </div>

            </div>

        </div>
        {/* Block 4  */}
        <div className='shadow-xl rounded-b-md'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Typography</h6>
            </div>

            {/* Detail  */}
            <div className='grid p-12 gap-4'>
                <div className='flex'>
                <p>Font Family :</p>
                <p className='flex-1 text-center' >Inter</p>
                </div>
                
                <div className='flex'>
                <p>Font Size :</p>
                <div className='flex-1 text-center' >
                    <p>H1 (72px)</p>
                    <p>H2 (48px)</p>
                    <p>H3 (32px)</p>
                    <p>H4 (24px)</p>
                    <p>H5 (20px)</p>
                    <p>H6 (16px)</p>
                    <p>P (14px)</p>
                </div>
                </div>
            </div>
        </div>

        </div>
        </div>
    </>
  )
}

