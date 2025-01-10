import React from 'react'

export default function Education() {
  return (
    <>
    <div className="main">
        {/* Block Left */}
        <div className="head">
            <h4>EDUCATION</h4>
        </div>

        {/* Block Right */}
        <div className="w-full px-12 py-16 grid gap-10">
            {/* University  */}
            <div>
        
            <h6 className='flex justify-between mb-2 '>PAYAP UNIVERSITY  <p><i>2016</i></p></h6>
            <p className='font-medium'>Bachelor of Business Administration : Human Resource Management</p>
            <ul className='pl-4'>
                    <li>Recruitment and selection</li>
                    <li>Human resource development</li>
                    <li>Performance appraisal</li>
                    <li>Managing diversity</li>
            </ul>
            </div>

            {/* School  */}
            <div>
       
            <h6 className='flex justify-between mb-2'>DAMRONGRATSONGKROH SCHOOL <p><i>2012</i></p></h6>
            <p className='font-medium'>Computer Science (Chiang Rai)</p>
            <ul className='pl-4'>
                <li>Basic computer skill such as HTML, Ebook</li>
                <li>Microsoft Office Word/Powerpoint/Excel</li>
                <li>Adobe Photoshop/Dreamweaver</li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
