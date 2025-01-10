import React from 'react'

export default function Experience() {
  return (
    <>
    <div className="main">
        {/* Block Left */}
        <div className="head fl">
            <h4>EXPERIENCE</h4>
        </div>

        {/* Block Right */}
        <div className="w-full px-12 py-16 grid gap-10 fd">
            {/* Barista  */}
            <div>
                <h6 className='flex justify-between mb-2'>PURCHASING <p><i>JAN 2017 - OCT 2019</i></p></h6>
                <p className='font-medium'>Doi Chaang Coffee (Chiangmai international Airport)</p>
                <ul className='pl-4'>
                  <li>Preparing and serving meals and drinks.</li>
                  <li>Cleaning work area, coffee machine and equipment.</li>
                  <li>Describe menu items and suggest products to customers</li>
                  <li>Cashier duties</li>
                  <li>Inventory duties</li>
                </ul>
            </div>

            {/* Purchasing  */}
            <div>
                <h6 className='flex justify-between mb-2'>PURCHASING <p><i>JAN 2017 - OCT 2019</i></p></h6>
                <p className='font-medium'>AnLao Lao Restaurant (Chiang Rai)</p>
                <ul className='pl-4'>
                  <li>Purchase and provision of goods and ingredient</li>
                  <li>Customer service</li>
                  <li>Take orders and serving foods and beverages</li>
                  <li>Assisting in the bar making cocktails, mixed drinks, wine and beer</li>
                </ul>
            </div>

            {/* Part time  */}
            <div>
                <h6 className='flex justify-between mb-2'>PART TIME <p><i>2014 - 2016</i></p></h6>
                <ul>
                <li className='flex justify-between pl-4 font-medium'>SF Cinema City (Promenada Chiang Mai) <p><i>2014 - 2016</i></p></li>
                <li className='flex justify-between pl-4 font-medium'>The Pizza Company (Chiang Mai) <p><i>2014</i></p></li>
                </ul>
            </div>

    </div>
  </div>
    </>
  )
}

