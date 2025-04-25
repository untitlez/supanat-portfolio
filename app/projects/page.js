import { projectsData } from "@/data/ProjectsData";
import { VscTools } from "react-icons/vsc";
import { BiCommentDetail } from "react-icons/bi";

export default function ProjectsPage() {
  return (
    <>
      <div data-theme="dark" className="bg-primary ">
        <div className="layout-projects">
          {projectsData.map((data, i) => (
            <div
              key={i}
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
                      <VscTools size={20} />

                      {data.tools}
                    </li>
                    <li className="contact">
                      <BiCommentDetail size={20} />
                      {data.description}
                    </li>
                  </ul>
                  <a
                    href={data.link}
                    target="_blank"
                    className="btn btn-accent group relative"
                  >
                    <p className="absolute opacity-100 group-hover:opacity-0 animate">
                      {data.nameIcon}
                    </p>
                    <div className="opacity-0 scale-5 group-hover:opacity-100 group-hover:scale-100 animate">
                      {data.icon}
                    </div>
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
