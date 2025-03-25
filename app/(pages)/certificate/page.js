import { certificate } from "@/data/Certificate";
import { HiOutlineExternalLink } from "react-icons/hi";

const size = 20;

export default function Certificate() {
  return (
    <>
      <div data-theme="emerald" className="bg-primary">
        <div className="tab-contents">
          {certificate.map((item, i) => (
            <div
              key={i}
              className="card border relative shadow-md text-base-100 bg-base-100 group slide-top"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <figure className="rounded-2xl">
                <img
                  src={item.src}
                  alt={item.name}
                  className=" group-hover:blur group-hover:brightness-50 animate"
                />
              </figure>
              <div className="grid gap-4 lg:gap-8 text-center absolute-center opacity-0 group-hover:opacity-100 animate">
                <p>{item.course}</p>
                <a href={item.link} target="_blank" className="btn btn-accent ">
                  <p className="text-base">{item.name}</p>
                  <HiOutlineExternalLink size={size} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
