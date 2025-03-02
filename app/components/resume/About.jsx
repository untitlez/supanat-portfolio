export default function About() {
  return (
    <>
      <div className="main text-base-100 md:flex-row">
        <div className="content items-center">
          <img
            src="/profile.jpg"
            alt="image_profile"
            className="h-[200px] sm:h-full sm:w-[75%] md:h-[400px] md:w-full object-cover rounded-xl fl"
          />
        </div>

        <div className="content gap-8 fr">
          <div className="grid gap-1">
            <h1>SUPANAT CHAISRI</h1>
            <h2 className="font-light opacity-80">Frontend Developer</h2>
          </div>
          <div className="grid gap-3">
            <h3>ABOUT ME</h3>
            <p className="opacity-80">
              I'm interested in working as a Frontend Developer. Currently, I
              keep improving my skills and practice myself. If there were
              experts willing to guide or mentor me, I would be extremely
              grateful.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>HOBBIES</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between opacity-80">
              <ul className="grid">
                {/* Location */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/location.png"
                    alt="icon_location"
                  />
                  Chiang Mai, Thailand
                </li>

                {/* Mail */}
                <li className="contact break-all mr-10 md:mr-6">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/mail.png"
                    alt="icon_Mail"
                  />
                  tleza_championship2@hotmail.com
                </li>

                {/* Phone  */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/call.png"
                    alt="icon_Phone"
                  />
                  0882252252
                </li>

                {/* Birthdate  */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon"
                    src="/icons/cake.png"
                    alt="icon_birthdate"
                  />
                  11 FEB 1994
                </li>
              </ul>

              <ul className="grid">
                {/* Facebook  */}
                <li>
                  <a
                    href="https://www.facebook.com/THE.Tlez/"
                    target="_blank"
                    className="contact hover:text-accent"
                  >
                    <img
                      className="h-7 w-7 icon"
                      src="/icons/facebook.png"
                      alt="icon_facebook"
                    />
                    Facebook
                  </a>
                </li>

                {/* IG  */}
                <li>
                  <a
                    href="https://www.instagram.com/the.tlez/"
                    target="_blank"
                    className="contact hover:text-accent"
                  >
                    <img
                      className="h-7 w-7 icon"
                      src="/icons/instagram.png"
                      alt="icon_instagram"
                    />
                    Instagram
                  </a>
                </li>

                {/* Notion  */}
                <li>
                  <a
                    href="https://bald-move-a08.notion.site/Resume-10acc06b87d2803fa3bceedef02cf141"
                    target="_blank"
                    className="contact hover:text-accent"
                  >
                    <img
                      className="h-7 w-7 icon"
                      src="/icons/notion.png"
                      alt="icon_notion"
                    />
                    Notion
                  </a>
                </li>

                {/* Githup  */}
                <li>
                  <a
                    href="https://github.com/untitlez/supanat-portfolio.git"
                    target="_blank"
                    className="contact hover:text-accent"
                  >
                    <img
                      className="h-7 w-7 icon"
                      src="/icons/github.png"
                      alt="icon_githup"
                    />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
