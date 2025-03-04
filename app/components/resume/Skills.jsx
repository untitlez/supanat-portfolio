export default function Skills() {
  return (
    <>
        <div className="main text-base-100 lg:gap-8 animate-viewpoint">
        <div className="content h-20 bg-base-100 text-primary rounded-xl justify-center items-center">
          <h2>SKILLS</h2>
        </div>

        <div className="content lg:flex animate-viewpoint">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1  */}
            <div className="card-skills">
            <p className="border-b-2 w-full p-3 text-center font-semibold">TECHNICAL SKILLS</p>
              <ul className="grid">
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

            {/* Card 2  */}
            <div className="card-skills">
              <p className="border-b-2 w-full p-3 text-center font-semibold">TOOLS</p>
              <ul className="grid">
                <li className="contact">
                  <img
                    src="/icons/figma.png"
                    alt="icon figma"
                    className="h-7 w-7 icon"
                  />
                  Figma
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

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/github.png"
                    alt="icon github"
                  />
                  GitHub
                </li>

                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/postman.webp"
                    alt="icon postman"
                  />
                  Postman
                </li>
              </ul>
            </div>

            {/* Card 3  */}
            <div className="card-skills sm:col-span-2 lg:col-span-1">
              <p className="border-b-2 w-full p-3 text-center font-semibold">SOFT SKILLS</p>
              <ul className="list-disc pl-4">
                <li>Management Skills</li>
                <li>Decision Making</li>
                <li>Flexibility and Adalitability</li>
                <li>Service Mind</li>
                <li>Teamwork</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
          </div>

          {/* Footer */}
        <div
          className="content justify-between bg-base-content gap-8 p-8
          lg:mt-8 rounded-t-xl lg:flex-row"
        >
          <div>
            <div className="gap-4 flex justify-between items-center lg:grid">
              <p>CERTIFICATIONS</p>
              <a
                className="contact hover:text-accent opacity-80"
                href="https://www.skooldio.com/"
                target="_blank"
              >
                <img
                  className="h-8 w-8 bg-base-100 rounded p-1"
                  src="/icons/skooldio.webp"
                  alt="icon skooldio"
                />
                <p className="hidden sm:flex text-base">Skooldio</p>
              </a>
            </div>

            <ul className="list-disc pl-6">
              <li>
                <a
                  className="hover:text-accent opacity-80"
                  href="https://drive.google.com/file/d/1JHPjzT2qOy4_p9k0mdrKKoFED2APk_7W/view?usp=drive_link"
                  target="_blank"
                >
                  Intro to User Experience Design
                </a>
              </li>

              <li>
                <a
                  className="hover:text-accent opacity-80"
                  href="https://drive.google.com/file/d/1nSM5l17htmYBUsL3Av8CTCYJp1rUYTYh/view?usp=sharing"
                  target="_blank"
                >
                  UI Fundamentals
                </a>
              </li>
            </ul>
          </div>

          <div className="justify-between sm:flex sm:items-center lg:flex-col">
            <p>CONTACT ME</p>
            <div className="flex gap-3 items-center">
            <a
                data-tip="tleza_championship2@hotmail.com"
                className="rounded-md lg:tooltip lg:tooltip-left lg:tooltip-accent hover:bg-accent opacity-80"
                href="mailto:tleza_championship2@hotmail.com"
              >
                <img
                  className="h-10 w-10 icon hover:invert-0"
                  src="/icons/mail.png"
                  alt="icon mail"
                />
              </a>
              <a
                data-tip="088-2252252"
                className="rounded-md lg:tooltip lg:tooltip-accent hover:bg-accent opacity-90"
                href="tel:+0882252252"
              >
                <img
                  className="h-9 w-9 icon hover:invert-0"
                  src="/icons/call.png"
                  alt="icon call"
                />
              </a>
              </div>
            </div>
          </div>
          </div>
          
    </>
  );
}
