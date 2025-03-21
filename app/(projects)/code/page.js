import { codeData } from "@/data/projects/CodeData";
import Link from "next/link";

export default function CodePage() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 py-24">
        {codeData.map((data) => (
          <div
            key={data.id}
            className="mockup-browser bg-base-300 border w-80 shadow-xl fd"
          >
            <div className="mockup-browser-toolbar">
              <p className="input">{data.title}</p>
            </div>
            <div className="bg-base-200">
              <img
                src={data.src}
                alt="project image"
                className="w-full h-48 object-cover"
              />

              <div className="flex flex-col gap-4 p-4">
                <ul>
                  <li className="contact">
                    <img
                      className="h-6 w-6 icon"
                      src="/icons/tools.png"
                      alt="icon tools"
                    />
                    {data.tools}
                  </li>
                  <li className="contact">
                    <img
                      className="h-6 w-6 icon"
                      src="/icons/detail.png"
                      alt="icon tools"
                    />
                    {data.description}
                  </li>
                </ul>
                <Link
                  href={data.link}
                  target="_blank"
                  className="btn btn-accent"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}