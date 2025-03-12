export default function Experience() {
    return (
      <>
        <div className="main text-base-100 lg:flex-row animate-viewpoint">
          <div
            className="content h-20 bg-base-100 text-primary rounded-xl justify-center items-center 
            lg:h-[430px] lg:w-[50%]"
          >
            <h2>EXPERIENCE</h2>
          </div>
  
          <div className="content gap-8 animate-viewpoint">
          {/* Barista */}
            <div>
              <div className="flex justify-between">
                <p>BARISTA</p>
                <p className="text-bas text-end ml-11">JAN 2017 - OCT 2019</p>
              </div>
              <ul className="list-disc pl-6">
                <li className="list-none ml-[-24px] text-base-100/60">
                  Doi Chaang Coffee (Chiangmai international Airport)
                </li>
                <li>Preparing and serving meals and drinks.</li>
                <li>Cleaning work area, coffee machine and equipment.</li>
                <li>Describe menu items and suggest products to customers</li>
                <li>Cashier duties</li>
                <li>Inventory duties</li>
              </ul>
            </div>
  
            {/* Purchasing  */}
            <div>
              <div className="flex justify-between">
                <p>PURCHASING</p>
                <p className="text-base text-end ml-4">JAN 2017 - OCT 2019</p>
              </div>
              <ul className="list-disc pl-6">
                <li className="list-none ml-[-24px] text-base-100/60 mr-7">
                  AnLao Lao Restaurant (Chiang Rai)
                </li>
                <li>Purchase and provision of goods and ingredient</li>
                <li>Customer service</li>
                <li>Take orders and serving foods and beverages</li>
                <li>
                  Assisting in the bar making cocktails, mixed drinks, wine and
                  beer
                </li>
              </ul>
            </div>
  
            {/* Part time  */}
            <div>
              <div className="flex justify-between">
                <p>PART TIME</p>
                <p className="text-base">2014 - 2016</p>
              </div>
              <ul className="flex justify-between list-disc pl-6 opacity-60">
                <li>SF Cinema City (Promenada Chiang Mai)</li>
                <li className="list-none text-base text-end">2014 - 2016</li>
              </ul>
              <ul className="flex justify-between list-disc pl-6 opacity-60">
                <li>The Pizza Company (Chiang Mai)</li>
                <li className="list-none text-base">2014</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  