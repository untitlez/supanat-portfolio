export default function Skills() {
  return (
    <>
      <div className="h-auto w-full px-8 pt-8 rounded-3xl">
        <div className="content h-20 border-2 rounded-xl bg-white text-primary">
          <h5>SKILLS</h5>
        </div>

        <div className="content flex-col">
          <div className="flex flex-col  sm:flex-row justify-between gap-6 my-6 w-full text-black font-medium">
            <div className="card">
              <p className="topic">TECHNICAL SKILLS</p>
              <ul className="grid text-black/80">
                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/html.png"
                    alt="icon html"
                  />
                  HTML
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/css.png"
                    alt="icon css"
                  />
                  CSS
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/javascript.png"
                    alt="icon javaScript"
                  />
                  JavaScript
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/react.png"
                    alt="icon react"
                  />
                  React
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/next.png"
                    alt="icon next"
                  />
                  Next
                </li>
              </ul>
            </div>

            <div className="card">
              <p className="topic">TOOLS</p>
              <ul className="grid text-black/80">
                <li>
                  <a
                    className="contact hover:opacity-70"
                    href="https://www.figma.com/design/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=954-3729&p=f&t=7yV4cSfWecJJxbmR-0"
                    target="_blank"
                  >
                    <img
                      src="/icons/figma.png"
                      alt="icon figma"
                      className="h-7 w-7 icon"
                    />
                    Figma
                  </a>
                </li>

                <li className="contact">
                  <img
                    className="h-7 w-7 icon"
                    src="/icons/vscode.png"
                    alt="icon vscode"
                  />
                  VS Code
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/tailwindcss.png"
                    alt="icon tailwindcss"
                  />
                  Tailwind CSS
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/bootstrap.png"
                    alt="icon bootstrap"
                  />
                  Bootstrap
                </li>

                <li>
                  <a
                    className="contact hover:opacity-70"
                    href="https://github.com/untitlez/supanat-portfolio.git"
                    target="_blank"
                  >
                    <img
                      className="h-8 w-8 icon"
                      src="/icons/github.png"
                      alt="icon github"
                    />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="card">
              <p className="topic">SOFT SKILLS</p>
              <ul className="pl-6 list-disc text-black/80">
                <li>Management Skills</li>
                <li>Decision Making</li>
                <li>Flexibility and Adalitability</li>
                <li>Service Mind</li>
                <li>Teamwork</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-base-200 w-full rounded-t-xl p-8 flex flex-col gap-8 sm:flex-row justify-between">
            <div>
              <p className="font-semibold text-white/80">CERTIFICATIONS</p>
              <ul className="mt-4 text-white/60">
                {/* Skooldio Logo */}
                <li>
                  <a
                    className="contact hover:text-[#FED43D]/80"
                    href="https://www.skooldio.com/"
                    target="_blank"
                  >
                    <img
                      className="h-8 w-8 icon bg-white/80"
                      src="/icons/skooldio.png"
                      alt="icon skooldio"
                    />
                    Skooldio
                  </a>
                </li>
                <ul className="pl-14 list-disc">
                  <li>
                    <a
                      className="hover:text-[#FED43D]/80"
                      href="https://drive.google.com/file/d/1JHPjzT2qOy4_p9k0mdrKKoFED2APk_7W/view?usp=drive_link"
                      target="_blank"
                    >
                      Intro to User Experience Design
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:text-[#FED43D]/80"
                      href="https://drive.google.com/file/d/1nSM5l17htmYBUsL3Av8CTCYJp1rUYTYh/view?usp=sharing"
                      target="_blank"
                    >
                      UI Fundamentals
                    </a>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="flex justify-between items-baseline sm:flex-col sm:items-center sm:justify-normal">
              <p className="font-semibold text-white/80 ">CONTACT ME</p>
              <div className="flex justify-center gap-4 mt-4">
              <a
                    className="contact hover:text-[#FED43D]/80"
                    href=""
                    target="_blank"
                  >
                    <img
                      className="h-10 w-10 invert"
                      src="/icons/mail.png"
                      alt="icon mail"
                    />
                  </a>
                  <a
                    className="contact hover:text-[#FED43D]/80"
                    href=""
                    target="_blank"
                  >
                    <img
                      className="h-8 w-8 invert"
                      src="/icons/call.png"
                      alt="icon call"
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
