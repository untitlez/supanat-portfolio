import { education } from "@/data/Education";

export default function Education() {
  

    return (
      <>
        <div className="main">
          {education.map((edu, i) => (
            <div key={i} className="content-3 bg-base-100 rounded-xl border shadow-md p-8">
              <div className="grid grid-cols-3 sm:items-center">
                <figure className="col-span-1">
                  <img
                    src="/shiba.jpg"
                    alt="images"
                    className="object-cover aspect-square rounded-xl"
                  />
                </figure>
                <div className="col-span-2 p-6">
                  <div className="grid gap-2 sm:flex sm:flex-row-reverse justify-between items-center">
                     <div className="badge badge-soft badge-neutral">
                      {edu.year}
                    </div>   
                    <h3>{edu.name}</h3>
                </div>
  
                <h3 className="text-base-content/60 mb-4">{edu.major}</h3>
  
                  <p>{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  