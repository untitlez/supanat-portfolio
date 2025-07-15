import Image from "next/image";
import { ClockFading, SquareArrowOutUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsData = [
  {
    src: "/cover_photo/lion.jpg",
    title: "Hotel System",
    icon: ClockFading,
    label: "In Progress",
    tools: [
      "Next",
      "Next Auth",
      "Prisma ORM",
      "PostgreSQL",
      "Route API",
      "TypeScript",
      "Zod",
      "React",
      "React Hook Form",
      "Shadcn UI",
      "Tailwind CSS",
      "Axios",
      "Theme",
      "Responsive",
    ],
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "Admin",
    icon: SquareArrowOutUpRight,
    label: "Vercel",
    tools: [
      "Next",
      "React",
      "React Hook Form",
      "CRUD",
      "Mock API",
      "Tailwind CSS",
      "Daisy UI",
      "Zustand",
      "Axios",
      "Theme",
      "Responsive",
    ],
    link: "https://practice-website-projects.vercel.app/admin",
  },
  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
    icon: SquareArrowOutUpRight,
    label: "Vercel",
    tools: [
      "Next",
      "React",
      "React Hook Form",
      "Fetch API",
      "Tailwind CSS",
      "Daisy UI",
      "Zustand",
      "Axios",
      "Theme",
      "Responsive",
    ],
    link: "https://practice-website-projects.vercel.app/shop",
  },
  {
    src: "/cover_photo/penguin.jpg",
    title: "HR System",
    icon: SquareArrowOutUpRight,
    label: "Vercel",
    tools: [
      "Vite",
      "React",
      "Ant Design",
      "Fetch API",
      "Tailwind CSS",
      "Zustand",
      "Axios",
      "Theme",
      "Responsive",
    ],
    link: "https://hr-projects-lyart.vercel.app/",
  },
  {
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    icon: SquareArrowOutUpRight,
    label: "View",
    tools: ["Next", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    link: "/projects/find-your-cat",
  },
  {
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    icon: SquareArrowOutUpRight,
    label: "View",
    tools: ["Next", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    link: "/projects/to-do-list",
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    icon: SquareArrowOutUpRight,
    label: "Figma",
    tools: ["Figma", "Responsive "],
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=1028-2&t=8TXMCEq6EmJGXjQ5-1",
  },
  {
    src: "/cover_photo/koala_junior.jpg",
    title: "Re-Design",
    icon: SquareArrowOutUpRight,
    label: "Figma",
    tools: ["Figma", "Responsive "],
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=194-9&t=uSXl9qY1jnfq0c2m-1",
  },
];

export default function Projects() {
  return (
    <div className="lg:min-h-screen grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {ProjectsData.map((item, i) => (
        <Card
          key={i}
          className="grid bg-base-100 border-base-content/50 rounded-3xl shadow-xl "
        >
          <CardHeader>
            <CardTitle>
              <div className="mb-2 btn btn-block pointer-events-none">
                <h3>{item.title}</h3>
              </div>
            </CardTitle>
            <CardDescription>
              <a href={item.link} target="_blank">
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.src}
                    alt={item.title}
                    className="object-cover rounded-xl shadow-md hover:scale-95 transition duration-500"
                    sizes="30vw"
                    fill
                  />
                </div>
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, i) => (
                <div key={i} className="btn btn-xs btn-outline cursor-default">
                  {tool}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <a
              href={item.link}
              target="_blank"
              className="btn btn-block btn-primary"
            >
              {item.label}
              <item.icon className="size-5" />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
