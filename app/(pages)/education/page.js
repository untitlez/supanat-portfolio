import Image from "next/image";

import { Header } from "@/components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const education = [
  {
    name: "PAYAP UNIVERSITY",
    year: "2016",
    major:
      "Bachelor of Business Administration : Human Resource Management (Chiang Mai)",
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
    <div className="lg:min-h-screen text-primary">
      <Header label="experience" />

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-12">
        {education.map((study, i) => (
          <Card
            key={i}
            className="max-w-screen-sm bg-base-100 border-base-content/50 rounded-3xl shadow-xl hover:shadow-base-content/20 lg:p-6 animate"
          >
            <CardContent className="mt-6">
              <div className="relative w-full overflow-hidden h-[30vh]">
                {study.src && (
                  <Image
                    src={study.src}
                    alt="Institution Logo"
                    className="object-contain"
                    sizes="50vw"
                    priority
                    fill
                  />
                )}
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>
                <div className="flex flex-wrap-reverse justify-between items-center gap-4">
                  <h3>{study.name}</h3>
                  <p className="badge badge-primary">{study.year}</p>
                </div>
                <h4 className="mb-2">{study.major}</h4>
              </CardTitle>
              <CardDescription className="lg:text-base text-base-content">
                {study.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
