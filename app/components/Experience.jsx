export default function Experience() {
    return (
      <>
        <div className="main">
          <div className="content content-lg h-20 rounded-xl bg-white text-primary ">
            <h5>EXPERIENCE</h5>
          </div>
  
          {/* Barista */}
          <div className="content lg:basis-2/3">
            <ul className="md:w-[75%] lg:w-full">
              <ul className="flex justify-between">
                <p>BARISTA</p>
                <li>JAN 2017 - OCT 2019</li>
              </ul>
              <li className="opacity-60 mb-2">
                Doi Chaang Coffee (Chiangmai international Airport)
              </li>
              <ul className="pl-6 mb-8 list-disc">
                <li>Preparing and serving meals and drinks.</li>
                <li>Cleaning work area, coffee machine and equipment.</li>
                <li>Describe menu items and suggest products to customers</li>
                <li>Cashier duties</li>
                <li>Inventory duties</li>
              </ul>
  
              {/* Purchasing  */}
              <ul>
                <ul className="flex justify-between">
                  <p>PURCHASING</p>
                  <li>JAN 2017 - OCT 2019</li>
                </ul>
                <li className="opacity-60 mb-2">
                  AnLao Lao Restaurant (Chiang Rai)
                </li>
                <ul className="pl-6 mb-8 list-disc">
                  <li>Purchase and provision of goods and ingredient</li>
                  <li>Customer service</li>
                  <li>Take orders and serving foods and beverages</li>
                  <li>
                    Assisting in the bar making cocktails, mixed drinks, wine and
                    beer
                  </li>
                </ul>
              </ul>
  
              {/* Part time  */}
              <ul>
                <ul className="flex justify-between mb-2">
                  <p>PART TIME</p>
                  <li>2014 - 2016</li>
                </ul>
                <ul className="list-disc flex justify-between pl-6 opacity-60">
                  <li>SF Cinema City (Promenada Chiang Mai)</li>
                  <li className="list-none">2014 - 2016</li>
                </ul>
                <ul className="list-disc flex justify-between pl-6 opacity-60">
                  <li>The Pizza Company (Chiang Mai)</li>
                  <li className="list-none">2014</li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </>
    );
  }
  