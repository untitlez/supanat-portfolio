import React from 'react'
import { Link } from 'react-router-dom'

export default function DesignPage2() {
  return (
    <>
        <div className='main flex-col'>
        {/* Top  */}
        <div className='head relative'>        
        <Link to="/design"
        className='back'>
        <img src="/src/assets/icon/arrow_circle_left.png" alt="Back" />
        </Link>
        <h4>DESIGN</h4>
        </div>

        {/* Bottom  */}
        <div className='px-12 py-14 gap-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 fin'>
        {/* Block 1  */}
        <div className='shadow-xl relative'>
            <img src="/src/assets/img/App Dark.png" alt="Mobile app dark theme" />
            <a href="https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=1028-7846&t=8TXMCEq6EmJGXjQ5-1"
            target="_black"
            className='absolute right-4 bottom-4 size-10 rounded-md hover:border-2'>
            <img src="/src/assets/icon/figma-color.png" alt="Figma link" />
            </a>
        </div>

        {/* Block 2  */}
        <div className='shadow-xl rounded-b-md'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Wallet App</h6>
            <p>( Dark Theme )</p>
            </div>

            {/* Detail  */}
            <div className='grid p-12 gap-4'>
                <div className='flex'>
                <img className='size-6 mr-4' src="/src/assets/icon/schedule.png" alt="Timeframe" />
                <p>Timeframe :</p>
                <p className='flex-1 text-center' >1 Week (Nov 2024)</p>
                </div>
                
    
                <div className='flex'>
                <img className='size-6 mr-4' src="/src/assets/icon/contract.png" alt="Role" />
                <p>Role :</p>
                <p className='flex-1 text-center' >Practice</p>
                </div>
            </div>
        </div>

        {/* Block 3  */}
        <div className='shadow-xl rounded-b-md'>
            {/* Topic  */}
            <div className='primary text-white rounded-t-md text-center py-4'>
            <h6>Color</h6>
            </div>

            {/* Detail  */}
            <div className='grid p-12 gap-12 text-sm'>
                <div>
                    <p>Primary Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#257035] ctf text-white'>#257035</div>
                        <div className='size-20 rounded-lg bg-[#3AAD52] ctf text-black'>#3AAD52</div>
                    </div>
                </div>
                
                <div>
                    <p>Secondary Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='size-20 rounded-lg bg-[#C80201] ctf text-white'>#C80201</div>
                        <div className='size-20 rounded-lg bg-[#FF5B5A] ctf text-black'>#FF5B5A</div>
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
                        <div className='size-20 rounded-lg bg-[#FFFFFF] ctf text-black border-2'>#FFFFFF</div>
                        <div className='size-20 rounded-lg bg-[#1F1F1F] ctf text-white'>#1F1F1F</div>
                    </div>
                </div>

                <div>
                    <p>Surface Color</p>
                    <div className='flex flex-wrap gap-4 mt-4'>
                    <div className='size-20 rounded-lg bg-[#141414] ctf text-white '>#141414</div>
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
                <p className='flex-1 text-center' >Roboto</p>
                </div>
                

                <div className='flex'>
                <p>Font Size :</p>
                <div className='flex-1 text-center' >
                    <p>H1 (22px)</p>
                    <p>H2 (20px)</p>
                    <p>H3 (12px)</p>
                    <p>p (10px)</p>
                </div>
                </div>
            </div>
        </div>

        </div>
        </div>
    </>
  )
}
