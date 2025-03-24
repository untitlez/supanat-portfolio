import React from 'react'

export default function Skills() {
  return (
    <>
        <div className='main'>
            {/* Block Left  */}
            <div className='text-[#34659D] center-flex py-12 px-20 fin'>
              <h4>SKILLS</h4>
            </div>

            {/* Block Content  */}
            <div className='grid gap-2 sm:grid-cols-2 w-full'>
            {/* Block Single  */}
            <div className='bg-primary rounded-2xl center-grid gap-8 text-white text-center px-12 py-16 fl'>
            <h6>TECHNICAL SKILLS</h6>

              {/* Icon */}
              <div className="grid gap-2 ">
                  {/* Figma  */}
                  <a className="contact hover:opacity-80"
                  href="https://www.figma.com/design/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=954-3729&p=f&t=7yV4cSfWecJJxbmR-0"
                  target="_blank">
                  <img src="./icon/figma.png" alt="icon figma" />
                  Figma
                  </a>

                  {/* VS Code  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/vs code.png" alt="icon vscode" />
                  <p>VS Code</p>
                  </div>

                  {/* HTML  */}
                  <div className="contact">
                  <img className="size-6" src="./icon/html.png" alt="icon html" />
                  <p>HTML</p>
                  </div>

                  {/* CSS  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/css.png" alt="icon css" />
                  <p>CSS</p>
                  </div>

                  {/* JavaScript  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/js.png" alt="icon javaScript" />
                  <p>JavaScript</p>
                  </div>

                  {/* React  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/react.png" alt="icon react" />
                  <p>React</p>
                  </div>                  
                  
                  {/* Next  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/next.png" alt="icon next" />
                  <p>Next</p>
                  </div>

                  

                  {/* Tailwindcss  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/tailwind.png" alt="icon tailwindcss" />
                  <p>Tailwind CSS</p>
                  </div>

                  {/* BootStrap  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="./icon/bootstrap.png" alt="icon bootstrap" />
                  <p>Bootstrap</p>
                  </div>

                  {/* Githup  */}
                  <a className="contact hover:opacity-80"
                  href="https://github.com/untitlez/supanat-portfolio.git" target="_blank">
                  <img className="size-6" src="./icon/github.png" alt="icon github" />
                  <p>GitHub</p>
                  </a>
              </div>
            </div>

            {/* Block Double  */}
            <div className='grid gap-2 fr'>
            {/* Top */}
            <div className='bg-primary rounded-[24px] text-white center-grid px-12 py-16 gap-8 '>
              <h6>SOFT SKILLS</h6>
              <div>
                <ul>
                  <li>Management Skills</li>
                  <li>Decision Making</li>
                  <li>Flexibility and Adalitability</li>
                  <li>Service Mind</li>
                  <li>Teamwork</li>
                  <li>Critical Thinking</li>
                </ul>
              </div>
              </div>
              {/* Bottom */}
              <div className='bg-primary rounded-[24px] text-white center-grid px-10 py-16 gap-8 '>
              <h6>CERTIFICATIONS</h6>
              <div>
                  <a className='hover:opacity-80'
                  href='https://drive.google.com/file/d/1JHPjzT2qOy4_p9k0mdrKKoFED2APk_7W/view?usp=drive_link'
                  target='_blank'>
                  <u>Intro to User Experience Design</u></a><br />

                  <a className='hover:opacity-80'
                  href='https://drive.google.com/file/d/1nSM5l17htmYBUsL3Av8CTCYJp1rUYTYh/view?usp=sharing'
                  target='_blank'>
                  <u>UI Fundamentals</u></a>
                  
                  {/* Skooldio Logo  */}
                  <a className="flex gap-2 mt-4 justify-end hover:opacity-80"
                  href='https://www.skooldio.com/'
                  target='_blank'>
                  <img className="size-6" src="./icon/skooldio.png" alt="icon skooldio" />
                  Skooldio
                  </a>
              </div>
              </div>
            </div>
            </div>

        </div>
    </>
  )
}
