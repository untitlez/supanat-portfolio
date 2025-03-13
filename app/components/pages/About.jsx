export default function About() {
  const aboutMe = [
    {
      name: "tleza_championship2@hotmail.com",
      src: "/icons/location.png",
      alt: "location",
    },
    {
      name: "Chiang Mai,Thailand",
      src: "/icons/mail.png",
      alt: "email",
      link: "mailto:tleza_championship2@hotmail.com",
    },
    {
      name: "0882252252",
      src: "/icons/call.png",
      alt: "phone",
      link: "tel:+0882252252",
    },
    {
      name: "11 FEB 1994",
      src: "/icons/cake.png",
      alt: "birthdate",
    },
    {
      name: "Facebook",
      src: "/icons/facebook.png",
      alt: "facebook",
      link: "https://www.facebook.com/THE.Tlez/",
    },
    {
      name: "Instagram",
      src: "/icons/instagram.png",
      alt: "instagram",
      link: "https://www.instagram.com/the.tlez/",
    },
    {
      name: "Notion",
      src: "/icons/notion.png",
      alt: "notion",
      link: "https://bald-move-a08.notion.site/Resume-10acc06b87d2803fa3bceedef02cf141",
    },
    {
      name: "GitHub",
      src: "/icons/github.png",
      alt: "github",
      link: "https://github.com/untitlez/supanat-portfolio.git",
    },
  ];
  return (
    <>
      <div className="main">
        <div className="content justify-items-center">
          <img
            src="/profile.jpg"
            alt="image_profile"
            className="h-[250px] lg:h-full lg:w-3/4 object-cover rounded-xl fl"
          />
        </div>

        <div className="content fr">
          <div className="grid gap-3">
            <h1>SUPANAT CHAISRI</h1>
            <h2 className="font-normal">Frontend Developer</h2>
          </div>
          <div className="grid gap-3">
            <h3>ABOUT ME</h3>
            <p>
              I'm interested in working as a Frontend Developer. Currently, I
              keep improving my skills and practice myself. If there were
              experts willing to guide or mentor me, I would be extremely
              grateful.
            </p>
          </div>
          <div className="grid gap-3">
            <h3>HOBBIES</h3>
            <div>
              <p>Listening to podcasts : Business, Economics</p>
              <p>Workout : Running half marathon, Gym </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 lg:gap-8">
              {aboutMe.map((item, i) => (
                  <a key={i}
                    data-tip={item.name}
                    href={item.link}
                    target="_blank"
                    className="h-8 w-8 rounded-md lg:tooltip lg:tooltip-accent hover:bg-accent"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="icon hover:invert-0"
                    />
                  </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
