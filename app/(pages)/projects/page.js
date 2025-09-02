import Image from "next/image";
import { Link, Figma, Github, Globe, Lightbulb } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
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
    src: "/cover_photo/otter.jpg",
    title: "Lesson Plan",
    tools: [
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Cookie",
      "Next",
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
    links: [
      {
        label: "server",
        icon: Github,
        href: "https://github.com/untitlez/my-server",
      },
      {
        label: "client",
        icon: Github,
        href: "https://github.com/untitlez/my-client",
      },
      {
        label: "production",
        icon: Globe,
        href: "https://my-client-gamma.vercel.app",
      },
    ],
  },
  {
    src: "/cover_photo/lion.jpg",
    title: "Hotel System",
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
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/Hotel-System",
      },
      {
        label: "production",
        icon: Globe,
        href: "https://hotel-system-ecru.vercel.app",
      },
    ],
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "Admin",
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
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/WebApp-Projects",
      },
      {
        label: "demo web",
        icon: Lightbulb,
        href: "https://practice-website-projects.vercel.app/admin",
      },
    ],
  },
  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
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
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/WebApp-Projects",
      },
      {
        label: "demo web",
        icon: Lightbulb,
        href: "https://practice-website-projects.vercel.app/shop",
      },
    ],
  },
  {
    src: "/cover_photo/penguin.jpg",
    title: "HR System",
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
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/HR-Projects",
      },
      {
        label: "demo web",
        icon: Lightbulb,
        href: "https://hr-projects-lyart.vercel.app/",
      },
    ],
  },
  {
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    tools: ["Next", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    links: [{ label: "View", icon: Link, href: "/projects/find-your-cat" }],
  },
  {
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    tools: ["Next", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    links: [{ label: "View", icon: Link, href: "/projects/to-do-list" }],
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    tools: ["Figma", "Responsive "],
    links: [
      {
        label: "Figma",
        icon: Figma,
        href: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=1028-2&t=8TXMCEq6EmJGXjQ5-1",
      },
    ],
  },
  {
    src: "/cover_photo/koala_junior.jpg",
    title: "Re-Design",
    tools: ["Figma", "Responsive "],
    links: [
      {
        label: "Figma",
        icon: Figma,
        href: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=194-9&t=uSXl9qY1jnfq0c2m-1",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="lg:min-h-screen grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {ProjectsData.map((item, i) => (
        <Card
          key={i}
          className="grid bg-base-100 border-base-content/50 rounded-3xl shadow-xl hover:shadow-base-content/30 animate group"
        >
          <CardHeader>
            <CardTitle>
              <div className="mb-2 btn btn-block pointer-events-none">
                <h3>{item.title}</h3>
              </div>
            </CardTitle>
            <CardDescription>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Skeleton className="absolute inset-0 rounded-xl" />
                <Image
                  src={item.src}
                  alt={item.title}
                  className="object-cover shadow-md
                  group-hover:scale-105 animate delay-100"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  fill
                />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {item.tools.map((tool, i) => (
                <div
                  key={i}
                  className="btn btn-xs btn-outline border-base-content/50 cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 ">
            {item.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                className="btn flex w-full sm:flex-1 btn-primary capitalize"
              >
                <link.icon className="size-5" />
                {link.label}
              </a>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
