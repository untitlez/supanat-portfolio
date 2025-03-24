import { experience } from "@/data/Experience";

export default function Experience() {
  return (
    <>
      <div className="main text-primary">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-2 md:gap-0 col-span-6 md:scale-90">
          {experience.map((exp, i) => (
            <li key={i}>
              <div className="timeline-middle md:mx-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`md:bg-base-100 md:p-8 rounded-xl md:border md:shadow-xl ${exp.position}`}>
                <time className="font-mono italic">{exp.time}</time>
                <h3 className="font-black">{exp.job}</h3>
                <h3 className="font-bold mb-2 opacity-60">{exp.place}</h3>
                <p className="text-base-content">{exp.job_description}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
