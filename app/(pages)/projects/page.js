import { ProjectsData } from "@/constant/ProjectsData";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="lg:min-h-screen w-full overflow-x-auto snap-x snap-mandatory flex gap-4 pb-6 lg:gap-12 lg:grid lg:grid-cols-3">
      {ProjectsData.map((data, i) => (
        <div
          key={i}
          className="mockup-browser rounded-3x min-w-[90%] sm:min-w-min lg:min-w-0 snap-start flex flex-col justify-center
            shadow-xl bg-base-100 border border-base-content/50 lg:hover:scale-105 animate"
        >
          <div className="mockup-browser-toolbar">
            <h3 className="input text-center">{data.title}</h3>
          </div>

          <a
            href={data.link}
            target="_blank"
            className="px-3 sm:px-6 brightness-95 animate"
          >
            <img
              src={data.src}
              alt="cover photo"
              className="aspect-[3/2] rounded-xl object-cover"
            />
          </a>

          <div className="flex flex-col flex-1 justify-between gap-3 sm:gap-6 m-3 sm:m-6">
            <ul className="flex flex-wrap items-center my-2 gap-2">
              {data.tools.map((tool, i) => (
                <li key={i} className="btn btn-outline btn-xs cursor-default">
                  {tool}
                </li>
              ))}
            </ul>
            <a
              href={data.link}
              target="_blank"
              className="btn btn-primary btn-sm sm:btn-md sm:text-base"
            >
              {data.icon}
              {data.nameIcon}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
