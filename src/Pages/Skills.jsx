import React from 'react'

export default function Skills() {
  return (
    <>
        <div className='main'>
            {/* Block Left  */}
            <div className='text-[#34659D] ctf py-12 px-20 fin'>
              <h4>SKILLS</h4>
            </div>

            {/* Block Content  */}
            <div className='grid gap-2 sm:grid-cols-2 w-full'>
            {/* Block Single  */}
            <div className='primary rounded-2xl ctg gap-8 text-white text-center px-12 py-16 fl'>
            <h6>TECHNICAL SKILLS</h6>

              {/* Icon */}
              <div className="grid gap-2 ">
                  {/* Figma  */}
                  <a className="contact hover:opacity-80"
                  href="https://www.figma.com/design/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=954-3729&p=f&t=7yV4cSfWecJJxbmR-0"
                  target="_blank">
                  <img src="/assets/icon/figma.png" alt="icon_location" />
                  Figma
                  </a>

                  {/* VS Code  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/vs code.png" alt="icon_location" />
                  <p>VS Code</p>
                  </div>

                  {/* HTML  */}
                  <div className="contact">
                  <img className="size-6" src="/assets/icon/html.png" alt="icon_location" />
                  <p>HTML</p>
                  </div>

                  {/* CSS  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/css.png" alt="icon_location" />
                  <p>CSS</p>
                  </div>

                  {/* JavaScript  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/js.png" alt="icon_location" />
                  <p>JavaScript</p>
                  </div>

                  {/* React  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/react.png" alt="icon_location" />
                  <p>React</p>
                  </div>

                  {/* Tailwindcss  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/tailwind.png" alt="icon_location" />
                  <p>Tailwind CSS</p>
                  </div>

                  {/* BootStrap  */}
                  <div className="flex items-center gap-4">
                  <img className="size-6" src="/assets/icon/bootstrap.png" alt="icon_location" />
                  <p>Bootstrap</p>
                  </div>

                  {/* Githup  */}
                  <a className="contact hover:opacity-80"
                  href="https://github.com/untitlez/My-Portfolio.git" target="_blank">
                  <img className="size-6" src="/assets/icon/github.png" alt="icon_location" />
                  <p>GitHub</p>
                  </a>
              </div>
            </div>

            {/* Block Double  */}
            <div className='grid gap-2 fr'>
            {/* Top */}
            <div className='primary rounded-[24px] text-white ctg px-12 py-16 gap-8 '>
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
              <div className='primary rounded-[24px] text-white ctg px-10 py-16 gap-8 '>
              <h6>CERTIFICATIONS</h6>
              <div>
                  <a className='hover:opacity-80'
                  href='https://file.notion.so/f/f/51f375cc-c4ec-44ff-90ab-f5e398d3ab10/aa45c7ab-87b6-4666-864c-1489df24bb9d/image.png?table=block&id=130cc06b-87d2-8143-9195-d6b7a52f38de&spaceId=51f375cc-c4ec-44ff-90ab-f5e398d3ab10&expirationTimestamp=1736006400000&signature=7cwVxUG-dethiL1zY0NlGz8vHJ_SLX2pystWMy_804s&downloadName=image.png'
                  target='_blank'>
                  <u>Intro to User Experience Design</u></a><br />

                  <a className='hover:opacity-80'
                  href='https://file.notion.so/f/f/51f375cc-c4ec-44ff-90ab-f5e398d3ab10/25389e2f-abc2-4934-bbb9-0701df4cb48b/image.png?table=block&id=130cc06b-87d2-815d-bc31-f25cf819918a&spaceId=51f375cc-c4ec-44ff-90ab-f5e398d3ab10&expirationTimestamp=1736006400000&signature=j7wGFqTwVGuv0VB4QJXcWKgnUAsOWv_GJHNWolL6PCQ&downloadName=image.png'
                  target='_blank'>
                  <u>UI Fundamentals</u></a>
                  
                  {/* Skooldio Logo  */}
                  <a className="flex gap-2 mt-4 justify-end hover:opacity-80"
                  href='https://www.skooldio.com/'
                  target='_blank'>
                  <img className="size-6" src="/assets/icon/skooldio.png" alt="icon_location" />
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
