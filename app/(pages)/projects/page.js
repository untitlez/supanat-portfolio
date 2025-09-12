import Image from "next/image";
import { Eye, Figma, Github, Globe } from "lucide-react";

import { skill } from "@/lib/constant";

import LessonPlanPage from "./lesson-plan/page";
import HotelSystemPage from "./hotel-system/page";
import CoffeeShopPage from "./coffee-shop/page";
import AdminPage from "./admin/page";
import HrSystemPage from "./hr-system/page";
import WalletAppPage from "./wallet-app/page";
import ReDesignPage from "./re-design/page";

import { Header } from "@/components/Header";
import { StackSkill } from "@/components/StackSkill";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const ProjectsData = [
  {
    src: "/cover_photo/otter.jpg",
    title: "Lesson Plan",
    description: "",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.typescript,
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.zod,
          skill.shadcnUi,
        ],
      },

      backend: {
        title: "backend stack",
        skill: [
          skill.javascript,
          skill.nodejs,
          skill.expressjs,
          skill.mongodb,
          skill.jwt,
        ],
      },
    },
    content: <LessonPlanPage />,
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
        label: "demo web",
        icon: Globe,
        href: "https://my-client-gamma.vercel.app",
      },
    ],
  },
  {
    src: "/cover_photo/penguin.jpg",
    title: "Hotel System",
    description:
      "Modern & scalable web application for luxury accommodation booking in Australia.Built with Next.js App Router + Prisma ORM + PostgreSQL + Zod + Shadcn UI + Vercel Serverless.",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.typescript,
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.zod,
          skill.shadcnUi,
        ],
      },
      backend: {
        title: "backend stack",
        skill: [
          skill.typescript,
          skill.nextjs,
          skill.prisma,
          skill.postgresql,
          skill.jwt,
        ],
      },
    },
    content: <HotelSystemPage />,
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/Hotel-System",
      },
      {
        label: "demo web",
        icon: Globe,
        href: "https://hotel-system-ecru.vercel.app",
      },
    ],
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "HR Project",
    description: "",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [skill.vite, skill.react, skill.zustand, skill.antd],
      },
      backend: {
        title: "backend stack",
        skill: [
          skill.typescript,
          skill.bun,
          skill.elysiajs,
          skill.supabase,
          skill.jwt,
        ],
      },
    },
    content: <HrSystemPage />,
    links: [
      {
        label: "server",
        icon: Github,
        href: "https://github.com/untitlez/HR-Projects-Server",
      },
      {
        label: "client",
        icon: Github,
        href: "https://github.com/untitlez/HR-Projects-Client",
      },
      {
        label: "demo web",
        icon: Globe,
        href: "https://hr-projects-lyart.vercel.app",
      },
    ],
  },

  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
    description: "",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.zustand,
          skill.daisyUi,
        ],
      },
    },
    content: <CoffeeShopPage />,
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/WebApp-Projects",
      },
      {
        label: "demo web",
        icon: Globe,
        href: "https://practice-website-projects.vercel.app/shop",
      },
    ],
  },
  {
    src: "/cover_photo/lion.jpg",
    title: "Admin",
    description: "",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.zustand,
          skill.daisyUi,
        ],
      },
    },
    content: <AdminPage />,
    links: [
      {
        label: "GitHub",
        icon: Github,
        href: "https://github.com/untitlez/WebApp-Projects",
      },
      {
        label: "demo web",
        icon: Globe,
        href: "https://practice-website-projects.vercel.app/admin",
      },
    ],
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    description: "",
    skills: {
      design: {
        title: "design stack",
        skill: [skill.figma],
      },
    },
    content: <WalletAppPage />,
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
    description: "",
    skills: {
      design: {
        title: "design stack",
        skill: [skill.figma],
      },
    },
    content: <ReDesignPage />,
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
    <div className="lg:min-h-screen">
      <Header label="projects" />
      <div className="grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {ProjectsData.map((item, i) => (
          <Card
            key={i}
            className="flex flex-col h-full bg-base-100 border-base-content/50 rounded-3xl shadow-xl hover:shadow-base-content/20 animate group"
          >
            <CardHeader>
              <CardTitle>
                <div className="mb-2 btn btn-block pointer-events-none bg-base-300">
                  <h3>{item.title}</h3>
                </div>
              </CardTitle>
              <CardDescription>
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Skeleton className="absolute inset-0 rounded-xl" />
                  {item.src && (
                    <Image
                      src={item.src}
                      alt={item.title}
                      className="object-cover shadow-md group-hover:scale-105 animate delay-100"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      fill
                    />
                  )}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              <div className="h-full flex flex-col">
                <StackSkill
                  title={
                    item.skills.frontend?.title ?? item.skills.design?.title
                  }
                  stacks={
                    item.skills.frontend?.skill ?? item.skills.design?.skill
                  }
                />
                {item.skills.backend && (
                  <div>
                    <div className="divider" />
                    <StackSkill
                      title={item.skills.backend?.title}
                      stacks={item.skills.backend?.skill}
                    />
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col lg:flex-row gap-2">
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

              {/* <Dialog>
                <DialogTrigger className="btn flex-1 btn-primary capitalize">
                  <Eye className="size-5" />
                  see more
                </DialogTrigger>
                <DialogContent className="bg-base-100 border-base-content/50">
                  <DialogHeader>
                    <DialogTitle className="text-primary capitalize">
                      {item.title}
                    </DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                    <ScrollArea className="h-[75vh]">{item.content}</ScrollArea>
                  </DialogHeader>
                  <ScrollMouseIcon />
                </DialogContent>
              </Dialog> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
