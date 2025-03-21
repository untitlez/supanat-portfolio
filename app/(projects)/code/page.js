import { codeData } from "@/data/projects/CodeData";
import Link from "next/link";

export default function CodePage() {
  return (
    <>
      <div className="tab-contents max-h-screen overflow-y-auto fd">
        {codeData.map((data) => (
          <div
            key={data.id}
            className="mockup-browser bg-base-300 border shadow-md"
          >
            <div className="mockup-browser-toolbar">
              <h3 className="input text-center">{data.title}</h3>
            </div>
            <div className="bg-base-200">
              <img
                src={data.src}
                alt="project image"
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
                <Link
                  href={data.link}
                  target="_blank"
                  className="btn btn-accent"
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}