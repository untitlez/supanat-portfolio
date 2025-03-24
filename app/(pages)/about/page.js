import { aboutMe } from "@/data/AboutMe";

export default function About() {
  return (
    <>
      <div className="main">
        <div className="content-3 justify-items-center">
          <img
            src="/profile.jpg"
            alt="image_profile"
            className="h-[250px] lg:h-full lg:w-3/4 object-cover rounded-xl"
          />
        </div>

        <div className="content-3">
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
              <a
                key={i}
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
