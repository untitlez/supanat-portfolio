import Image from "next/image";
import { ClockFading, Link, Figma, Github, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import HotelSystemPage from "./hotel-system/page";

const ProjectsData = [
  {
    src: "/cover_photo/lion.jpg",
    title: "Hotel System",
    description: "",
    tools: [
      { label: "Next", icon: "/icon/nextjs.svg" },
      { label: "Next Auth", icon: "/icon/" },
      { label: "Prisma ORM", icon: "/icon/Prisma.svg" },
      { label: "PostgreSQL", icon: "/icon/" },
      { label: "Route API", icon: "/icon/" },
      { label: "TypeScript", icon: "/icon/TypeScript.svg" },
      { label: "Zod", icon: "/icon/" },
      { label: "React", icon: "/icon/" },
      { label: "React Hook Form", icon: "/icon/" },
      { label: "Shadcn UI", icon: "/icon/" },
      { label: "Tailwind CSS", icon: "/icon/" },
      { label: "Axios", icon: "/icon/" },
      { label: "Theme", icon: "/icon/" },
      { label: "Responsive", icon: "/icon/" },
    ],
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "Admin",
    tools: [
      { label: "Next", icon: "" },
      { label: "React", icon: "" },
      { label: "React Hook Form", icon: "" },
      { label: "CRUD", icon: "" },
      { label: "Mock API", icon: "" },
      { label: "Tailwind CSS", icon: "" },
      { label: "Daisy UI", icon: "" },
      { label: "Zustand", icon: "" },
      { label: "Axios", icon: "" },
      { label: "Theme", icon: "" },
      { label: "Responsive", icon: "" },
    ],
  },
  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
    tools: [
      { label: "Next", icon: "" },
      { label: "React", icon: "" },
      { label: "React Hook Form", icon: "" },
      { label: "Fetch API", icon: "" },
      { label: "Tailwind CSS", icon: "" },
      { label: "Daisy UI", icon: "" },
      { label: "Zustand", icon: "" },
      { label: "Axios", icon: "" },
      { label: "Theme", icon: "" },
      { label: "Responsive", icon: "" },
    ],
  },
  {
    src: "/cover_photo/penguin.jpg",
    title: "HR System",
    tools: [
      { label: "Vite", icon: "" },
      { label: "React", icon: "" },
      { label: "Ant Design", icon: "" },
      { label: "Fetch API", icon: "" },
      { label: "Tailwind CSS", icon: "" },
      { label: "Zustand", icon: "" },
      { label: "Axios", icon: "" },
      { label: "Theme", icon: "" },
      { label: "Responsive", icon: "" },
    ],
  },
  {
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    tools: [
      { label: "Next", icon: "" },
      { label: "React", icon: "" },
      { label: "Tailwind CSS", icon: "" },
      { label: "Daisy UI", icon: "" },
      { label: "Responsive", icon: "" },
    ],
    links: [{ label: "View", icon: Link, href: "/projects/find-your-cat" }],
  },
  {
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    tools: [
      { label: "Next", icon: "" },
      { label: "React", icon: "" },
      { label: "Tailwind CSS", icon: "" },
      { label: "Daisy UI", icon: "" },
      { label: "Responsive", icon: "" },
    ],
    links: [{ label: "View", icon: Link, href: "/projects/to-do-list" }],
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    tools: [
      { label: "Figma", icon: "" },
      { label: "Responsive", icon: "" },
    ],
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
    tools: [
      { label: "Figma", icon: "" },
      { label: "Responsive", icon: "" },
    ],
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
                  className="btn btn-sm btn-outline border-base-content/50 cursor-default"
                >
                  <div className="relative aspect-square size-4">
                    <Image
                      src={tool.icon}
                      alt="icon"
                      className="object-cover"
                      sizes="30vw"
                      fill
                    />
                  </div>
                  {tool.label}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger className="btn flex-1 btn-primary capitalize">
                <Eye className="size-5" />
                see more
              </DialogTrigger>
              <DialogContent className="bg-base-100 border-base-content/50">
                <DialogHeader>
                  <DialogTitle className="text-primary">
                    Are you absolutely sure?
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <div>
                  <HotelSystemPage />
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
