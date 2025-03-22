import { education } from "@/data/Education";

export default function Education() {
  return (
    <>
      <div className="main animate-viewpoint">
        {education.map((study, i) => (
          <div
            key={i}
            className="content-3 bg-base-100 rounded-xl border shadow-md p-8"
          >
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:sm:grid-cols-3 place-items-center">
              <figure className="sm:col-span-1">
                <img
                  src={study.src}
                  alt="images"
                  className="object-cover aspect-square rounded-xl"
                />
              </figure>
              <div className="sm:col-span-2 p-6">
                <div className="grid gap-2 sm:flex sm:flex-row-reverse justify-between items-center">
                  <div className="badge badge-soft badge-neutral">
                    {study.year}
                  </div>
                  <h3>{study.name}</h3>
                </div>

                <h3 className="text-base-content/60 mb-4">{study.major}</h3>

                <p>{study.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
