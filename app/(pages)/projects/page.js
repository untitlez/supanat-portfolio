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
import { skill } from "@/lib/constant";
import { StackSkill } from "@/components/StackSkill";
import HotelSystemPage from "./hotel-system/page";
import CoffeeShopPage from "./coffee-shop/page";
import HrSystemPage from "./hr-system/page";
import FindYourCat from "./find-your-cat/page";
import ToDoList from "./to-do-list/page";
import WalletAppPage from "./wallet-app/page";
import ReDesignPage from "./re-design/page";
import AdminPage from "./admin/page";

const ProjectsData = [
  {
    src: "/cover_photo/otter.jpg",
    title: "Lesson Plan",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.typescript,
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.shadcnUi,
          skill.zod,
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
    content: <HotelSystemPage />,
  },
  {
    src: "/cover_photo/lion.jpg",
    title: "Hotel System",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.typescript,
          skill.nextjs,
          skill.react,
          skill.reactHookForm,
          skill.shadcnUi,
          skill.zod,
        ],
      },

      backend: {
        title: "backend stack",
        skill: [skill.typescript, skill.nextjs, skill.prisma, skill.postgresql],
      },
    },
    content: <HotelSystemPage />,
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "Admin",
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
  },
  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
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
  },
  {
    src: "/cover_photo/penguin.jpg",
    title: "HR System",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [
          skill.vite,
          skill.react,
          skill.reactHookForm,
          skill.zustand,
          skill.antd,
        ],
      },
    },
    content: <HrSystemPage />,
  },
  {
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [skill.react, skill.daisyUi],
      },
    },
    content: <FindYourCat />,
  },
  {
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    skills: {
      frontend: {
        title: "frontend stack",
        skill: [skill.react, skill.daisyUi],
      },
    },
    content: <ToDoList />,
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    skills: {
      design: {
        title: "design stack",
        skill: [skill.figma],
      },
    },
    content: <WalletAppPage />,
  },
  {
    src: "/cover_photo/koala_junior.jpg",
    title: "Re-Design",
    skills: {
      design: {
        title: "design stack",
        skill: [skill.figma],
      },
    },
    content: <ReDesignPage />,
  },
];

export default function Projects() {
  return (
    <div className="lg:min-h-screen grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
      {ProjectsData.map((item, i) => (
        <Card
          key={i}
          className="flex flex-col h-full bg-base-100 border-base-content/50 rounded-3xl shadow-xl hover:shadow-base-content/30 animate group"
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
            <div className="h-full flex flex-col bg-base-200 border border-base-300/60 rounded-xl p-4 sm:p-6">
              <StackSkill
                title={item.skills.frontend?.title ?? item.skills.design?.title}
                stacks={
                  item.skills.frontend?.skill ?? item.skills.design?.skill
                }
              />
              {item.skills.backend && (
                <div>
                  <div className="divider my-6" />
                  <StackSkill
                    title={item.skills.backend?.title}
                    stacks={item.skills.backend?.skill}
                  />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>{item.content}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
