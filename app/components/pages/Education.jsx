export default function Education() {
  const education = [
    {
      name: "PAYAP UNIVERSITY",
      year: "2016",
      major: "Bachelor of Business Administration : Human Resource Management",
      description:
        "Recruitment and selection, Human resource development, Employee relations, Performance appraisal, Managing diversity",
    },
    {
      name: "DAMRONGRATSONGKROH SCHOOL",
      year: "2012",
      major: "Computer Science (Chiang Rai)",
      description:
        "Basic computer skill such as HTML, Ebook, Microsoft Office, Adobe Photoshop, Adobe Dreamweaver",
    },
  ];

  return (
    <>
      <div className="main">
        {education.map((edu, i) => (
          <div key={i} className="content ">
            <div className="grid grid-cols-3">
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
