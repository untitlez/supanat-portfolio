import Image from "next/image";

const education = [
  {
    name: "PAYAP UNIVERSITY",
    year: "2016",
    major: "Bachelor of Business Administration : Human Resource Management",
    description:
      "Recruitment and selection, Human resource development, Employee relations, Performance appraisal, Managing diversity",
    src: "/logo/pyu.webp",
  },
  {
    name: "DAMRONGRATSONGKROH SCHOOL",
    year: "2012",
    major: "Computer Science (Chiang Rai)",
    description:
      "Basic computer skill such as HTML, Ebook, Microsoft Office, Adobe Photoshop, Adobe Dreamweaver",
    src: "/logo/ds.webp",
  },
];

export default function Education() {
  return (
    <div className="lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center gap-12 text-primary">
      {education.map((study, i) => (
        <div
          key={i}
          className="max-w-screen-sm grid gap-4 bg-base-100 p-8 rounded-3xl border border-base-content/50 shadow-xl lg:hover:shadow-2xl"
        >
          <figure className="relative  aspect-video overflow-hidden">
            <Image
              src={study.src}
              alt="Institution Logo"
              className="object-contain"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              fill
            />
          </figure>
          <div>
            <div className="flex flex-wrap-reverse justify-between items-center gap-4">
              <h3>{study.name}</h3>
              <p className="badge badge-primary">{study.year}</p>
            </div>
            <h4 className="mb-2">{study.major}</h4>
            <p className="text-base-content">{study.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
