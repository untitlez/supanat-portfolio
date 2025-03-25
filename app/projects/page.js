import { projectsData } from "@/data/ProjectsData";

export default function ProjectsPage() {
  return (
    <>
      <div data-theme="dark" className="bg-primary ">
        <div className="layout-projects">
          {projectsData.map((data, i) => (
            <div
              key={data.id}
              className="mockup-browser border shadow-md bg-base-300 slide-top"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="mockup-browser-toolbar">
                <h3 className="input text-center">{data.title}</h3>
              </div>
              <div className="bg-base-200">
                <img
                  src={data.src}
                  alt="cover photo"
                  className="aspect-[3/2] w-full object-cover"
                />

                <div className="grid gap-4 p-4">
                  <ul className="grid">
                    <li className="contact">
                      <img
                        className="h-6 w-6 icon invert"
                        src="/icons/tools.png"
                        alt="icon tools"
                      />
                      {data.tools}
                    </li>
                    <li className="contact">
                      <img
                        className="h-6 w-6 icon invert"
                        src="/icons/detail.png"
                        alt="icon detail"
                      />
                      {data.description}
                    </li>
                  </ul>
                  <a
                    href={data.link}
                    target="_blank"
                    className="btn btn-accent"
                  >
                    {data.domain}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
