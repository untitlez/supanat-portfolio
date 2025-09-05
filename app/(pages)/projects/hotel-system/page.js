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
    skills: [skill.nextjs],
  },

  {
    label: "data base",
    skills: [skill.prisma, skill.postgresql],
  },

  {
    label: "authentication",
    skills: [skill.nextAuth],
  },
];

const theme = {
  light: {
    theme: "light mode",
    colors: [
      { label: "background", value: "oklch(1 0 0)" },
      { label: "foreground", value: "oklch(0.141 0.005 285.823)" },
      { label: "primary", value: "oklch(0.645 0.246 16.439)" },
      { label: "primary-foreground", value: "oklch(0.969 0.015 12.422)" },
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
      { label: "primary", value: "oklch(0.645 0.246 16.439)" },
      { label: "primary-foreground", value: "oklch(0.969 0.015 12.422)" },
      { label: "secondary", value: "oklch(0.274 0.006 286.033)" },
      { label: "secondary-foreground", value: "oklch(0.985 0 0)" },
      { label: "muted", value: "oklch(0.274 0.006 286.033)" },
      { label: "muted-foreground", value: "oklch(0.705 0.015 286.067)" },
      { label: "destructive", value: "oklch(0.704 0.191 22.216)" },
    ],
  },
};

export default function HotelSystemPage() {
  return (
    <div className="space-y-24 my-6 max-w-screen-xl">
      {/* Link  */}
      <div className="flex flex-col lg:flex-row gap-4 capitalize border-base-300 border-b-2 pb-6">
        {projects.hotelSystem.link.github.map((href, i) => (
          <Link key={i} href={href} target="_blank" className="btn btn-primary">
            <Github className="size-5" />
            github
          </Link>
        ))}

        {projects.hotelSystem.link.demo.map((href, i) => (
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
              src={projects.hotelSystem.home.src}
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
          <div className="relative overflow-hidden aspect-[3/2] rounded-2xl">
            {projects && (
              <Image
                src={projects.hotelSystem.dark.src}
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
        <div className="basis-1/2 aspect-square content-center">
          <div className="relative overflow-hidden aspect-[3/2] rounded-2xl">
            {projects && (
              <Image
                src={projects.hotelSystem.light.src}
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
                src={projects.hotelSystem.login.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header-reverse">login</h5>
          <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
            <li>This project uses NextAuth.js for authentication</li>
            <li>
              Supporting: Google Provider (OAuth) and Credentials
              (email/password)
            </li>
            <li>Bcrypt-hashed passwords</li>
            <li>JWT session strategy for scalable and stateless auth</li>
          </ul>
        </div>
      </div>

      {/* Block 5  */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <div className="basis-1/2 aspect-square content-center">
          <div className="relative overflow-hidden aspect-video rounded-2xl">
            {projects && (
              <Image
                src={projects.hotelSystem.dashboard.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header">dashboard</h5>
          <div className="grid gap-4">
            <p className="text-primary">
              The Dashboard is a secure and authenticated section of the
              application, built with Next.js App Router. It provides a
              centralized interface for managing business-critical resources.
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
              <li>
                Secure Access - Uses authentication and role-based access
                control
              </li>
              <li>
                Booking Management - View, edit, and manage booking details
              </li>
              <li>
                Room Management - Create, update, and manage room inventory
              </li>
              <li>Member Management - Manage user profiles and permissions</li>
              <li>
                Reusable Layout - Consistent UI with shared sidebar and header
                components
              </li>
              <li>
                Scalable Design - Easy to extend for future modules and features
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
                src={projects.hotelSystem.profile.src}
                alt="projects images"
                className="object-cover"
                sizes="100vw"
                fill
              />
            )}
          </div>
        </div>

        <div className="basis-1/2 flex flex-col gap-6 lg:gap-12">
          <h5 className="project-header-reverse">profile</h5>
          <div className="grid gap-4">
            <p className="text-primary">
              The Profile Page is the section where users can view and manage
              their personal information. It is built using Next.js App Router
              and is part of the authenticated area of the application.
            </p>
            <ul className="list-disc list-inside space-y-2 text-primary leading-relaxed">
              <li>
                View Personal Info - Users can see their profile details and
                account settings
              </li>
              <li>
                Edit Profile - Update personal information like name, contact
                info, or password
              </li>
              <li>
                Manage Bookings - Quick access to the user's bookings and
                history
              </li>
              <li>
                Sidebar Navigation - Provides links to profile sections and
                dashboard pages
              </li>
              <li>Secure Access - Only accessible to authenticated users</li>
            </ul>
          </div>
        </div>
      </div>

      {/* End  */}
    </div>
  );
}
