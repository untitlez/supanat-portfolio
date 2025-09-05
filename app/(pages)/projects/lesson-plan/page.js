import Link from "next/link";
import Image from "next/image";
import { Github, Globe } from "lucide-react";

import { projects, skill } from "@/lib/constant";
import { convertColor } from "@/lib/convert-color";

const stacks = [
  { label: "language", skills: [skill.typescript] },
  {
    label: "user interface",
    skills: [skill.shadcnUi],
  },
  {
    label: "frontend",
    skills: [skill.nextjs, skill.react, skill.reactHookForm, skill.zod],
  },
  {
    label: "backend",
    skills: [skill.nodejs, skill.expressjs],
  },

  {
    label: "data base",
    skills: [skill.mongodb],
  },

  {
    label: "authentication",
    skills: [skill.jwt],
  },
];

const theme = {
  light: {
    theme: "light mode",
    colors: [
      { label: "background", value: "oklch(1 0 0)" },
      { label: "foreground", value: "oklch(0.141 0.005 285.823)" },
      { label: "primary", value: "oklch(0.795 0.184 86.047)" },
      { label: "primary-foreground", value: "oklch(0.421 0.095 57.708)" },
      { label: "secondary", value: "oklch(0.967 0.001 286.375)" },
      { label: "secondary-foreground", value: "oklch(0.21 0.006 285.885)" },
      { label: "muted", value: "oklch(0.967 0.001 286.375)" },
      { label: "muted-foreground", value: "oklch(0.552 0.016 285.938)" },
      { label: "destructive", value: "oklch(0.577 0.245 27.325)" },
    ],
  },

  dark: {
    theme: "dark mode",
    colors: [
      { label: "background", value: "oklch(0.141 0.005 285.823)" },
      { label: "foreground", value: "oklch(0.985 0 0)" },
      { label: "primary", value: "oklch(0.795 0.184 86.047)" },
      { label: "primary-foreground", value: "oklch(0.421 0.095 57.708)" },
      { label: "secondary", value: "oklch(0.274 0.006 286.033)" },
      { label: "secondary-foreground", value: "oklch(0.985 0 0)" },
      { label: "muted", value: "oklch(0.274 0.006 286.033)" },
      { label: "muted-foreground", value: "oklch(0.705 0.015 286.067)" },
      { label: "destructive", value: "oklch(0.704 0.191 22.216)" },
    ],
  },
};

export default function LessonPlanPage() {
  return (
    <div className="space-y-24 my-6 max-w-screen-xl">
      {/* Link  */}
      <div className="flex flex-col lg:flex-row gap-4 capitalize border-base-300 border-b-2 pb-6">
        {projects.lessonPlan.link.github.map((href, i) => (
          <Link key={i} href={href} target="_blank" className="btn btn-primary">
            <Github className="size-5" />
            github {i + 1}
          </Link>
        ))}

        {projects.lessonPlan.link.demo.map((href, i) => (
          <Link key={i} href={href} target="_blank" className="btn btn-primary">
            <Globe className="size-5" />
            Demo Web
          </Link>
        ))}
      </div>

      {/* Block 1  */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="basis-1/2 relative overflow-hidden aspect-[2/3] rounded-xl">
          {projects && (
            <Image
              src={projects.lessonPlan.home.src}
              alt="projects images"
              className="object-cover"
              sizes="100vw"
              fill
            />
          )}
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          {stacks.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 place-content-start gap-2"
            >
              <div className="lg:col-span-2 project-header">{item.label}</div>
              {item.skills.map((skill, i) => (
                <div
                  key={i}
                  className="btn btn-outline border-base-300 text-primary font-medium pointer-events-none"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="bg-primary size-6 p-0.5 rounded"
                  />
                  {skill.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Block 2  */}
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.dark.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header-reverse">{theme.dark.theme}</h5>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {theme.dark.colors.map((color, i) => (
              <div
                key={i}
                className="flex flex-col aspect-square capitalize text-center text-sm"
              >
                <div
                  className="relative border border-base-300 rounded-xl h-1/2 mb-2"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-primary uppercase">
                  {convertColor(color.value)}
                </span>
                <span>{color.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 3  */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.light.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header lg:project-header">
            {theme.light.theme}
          </h5>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {theme.light.colors.map((color, i) => (
              <div
                key={i}
                className="flex flex-col aspect-square capitalize text-center text-sm"
              >
                <div
                  className="relative border border-base-300 rounded-xl h-1/2 mb-2"
                  style={{ backgroundColor: color.value }}
                />
                <span className="text-primary uppercase">
                  {convertColor(color.value)}
                </span>
                <span>{color.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 4  */}
      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.print.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header-reverse">Export PDF</h5>
          <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
            <li>
              Provides users with the ability to generate and download PDF
              documents from lesson plans or other content.
            </li>
            <li>
              Supports client-side preview before exporting, ensuring users can
              review data before printing or downloading.
            </li>
            <li>
              Handles multi-page layouts, proper margins, and responsive
              formatting for both A4 and digital-friendly sizes.
            </li>
          </ul>
        </div>
      </div>

      {/* Block 5  */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.login.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header">login</h5>
          <div className="grid gap-4">
            <p className="text-primary">
              The Login Page provides an entry point for users who want to
              access additional features of the application. It is optional for
              basic usage but unlocks extended functionality once the user is
              authenticated.
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
              <li>
                Open access by default users can access core features such as
                creating a lesson plan without logging in, Ideal for guest users
                or first-time visitors
              </li>
              <li>
                Authenticated users can access Dashboard with personalized data,
                Edit and manage lesson plans, subjects, and objectives, View
                private information tied to their account
              </li>
              <li>
                Secure password hashing (bcrypt), Token/session validation for
                restricted areas, Protection against common web vulnerabilities
                (SQL Injection, XSS)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 6  */}

      <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.dashboard.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header-reverse">Dashboard</h5>
          <div className="grid gap-4">
            <p className="text-primary">
              The Dashboard serves as the main control center for managing core
              data. Displays an overview of lesson plans, subjects, units, and
              objectives for all authenticated users.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="basis-1/2 project-card-image">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.lessonPlan.dashboard2.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header">Dashboard</h5>
          <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
            <li>
              Signed-in users (members) can view complete data but cannot modify
              or delete records.
            </li>
            <li>
              Administrators have full permissions to create, edit, and delete
              lesson plans, subjects, and objectives.
            </li>
            <li>
              Implements JWT/Session authentication and protects against
              unauthorized access to administrative actions..
            </li>
          </ul>
        </div>
      </div>

      {/* End  */}
    </div>
  );
}
