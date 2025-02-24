export default function About() {
  return (
    <>
      <div className="main">
        <div className="content lg:basis-1/3">
          <img
            src="/profile.jpg"
            alt="image_profile"
            className="h-[300px] lg:h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="content lg:basis-2/3">
          <div className="sm:w-[75%] lg:w-full flex flex-col gap-2">
            <h3>SUPANAT CHAISRI</h3>
            <h5 className="font-medium opacity-80 mb-8">Frontend Developer</h5>
            <p className="font-semibold">ABOUT ME</p>
            <p className="text-base opacity-80 mb-8">
              I'm interested in working as a Frontend Developer. Currently, I
              keep improving my skills and practice myself. If there were
              experts willing to guide or mentor me, I would be extremely
              grateful.
            </p>
            <p className="font-semibold mb-2">HOBBIES</p>
            <ul className="grid sm:flex sm:justify-between text-white/80">
              <ul className="grid">
                {/* Location */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon invert"
                    src="/icons/location.png"
                    alt="icon_location"
                  />
                  Chiang Mai, Thailand
                </li>

                {/* Mail */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon invert"
                    src="/icons/mail.png"
                    alt="icon_Mail"
                  />
                  tleza_championship2@hotmail.com
                </li>

                {/* Phone  */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon invert"
                    src="/icons/call.png"
                    alt="icon_Phone"
                  />
                  0882252252
                </li>

                {/* Birthdate  */}
                <li className="contact">
                  <img
                    className="h-8 w-8 icon invert"
                    src="/icons/cake.png"
                    alt="icon_birthdate"
                  />
                  11 FEB 1994
                </li>
              </ul>

              <ul className="grid gap-1">
                {/* Facebook  */}

                <li>
                  <a
                    href="https://www.facebook.com/THE.Tlez/"
                    target="_blank"
                    className="contact hover:text-[#FED43D]"
                  >
                    <img
                      className="h-7 w-7 icon invert"
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
                    className="contact hover:text-[#FED43D]"
                  >
                    <img
                      className="h-7 w-7 icon invert"
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
                    className="contact hover:text-[#FED43D]"
                  >
                    <img
                      className="h-7 w-7 icon invert"
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
                    className="contact hover:text-[#FED43D]"
                  >
                    <img
                      className="h-7 w-7 icon invert"
                      src="/icons/github.png"
                      alt="icon_githup"
                    />
                    GitHub
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
