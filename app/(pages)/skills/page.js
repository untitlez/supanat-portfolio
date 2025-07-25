const skills = [
  {
    //Frontend
    head: "Frontend stack",
    items: [
      { name: "HTML", icon: "/icon/html.svg" },
      { name: "CSS", icon: "/icon/css.svg" },
      { name: "JavaScript", icon: "/icon/javascript.svg" },
      { name: "Typescript", icon: "/icon/typescript.svg" },
      { name: "Next.js", icon: "/icon/nextjs.svg" },
      { name: "React", icon: "/icon/react.svg" },
      { name: "Vite", icon: "/icon/vite.svg" },
    ],
  },
  {
    //Tool & Libraries
    head: "Backend stack",
    items: [
      { name: "Next.js", icon: "/icon/nextjs.svg" },
      { name: "Typescript", icon: "/icon/typescript.svg" },
      // { name: "Node.js", icon: "/icon/nodejs.svg" },
      // { name: "Express.js", icon: "/icon/expressjs.svg" },
      { name: "PostgreSQL", icon: "/icon/postgresql.svg" },
      { name: "Prisma", icon: "/icon/prisma.svg" },
      // { name: "MongoDB", icon: "/icon/mongodb.svg" },
      // { name: "Auth0", icon: "/icon/auth0.svg" },
      { name: "Zod", icon: "/icon/zod.svg" },
    ],
  },
  {
    // Backend
    head: "Library & Tools",
    items: [
      { name: "Tailwind CSS", icon: "/icon/tailwindcss.svg" },
      { name: "Shadcn UI", icon: "/icon/shadcnui.svg" },
      { name: "Ant Design", icon: "/icon/antd.svg" },
      { name: "Daisy UI", icon: "/icon/daisyui.svg" },
      { name: "Zustand", icon: "/icon/zustand.svg" },
      { name: "React Hook Form", icon: "/icon/react-hook-form.svg" },
      { name: "Figma", icon: "/icon/figma.svg" },
      { name: "Postman", icon: "/icon/postman.svg" },
      { name: "Vercel", icon: "/icon/vercel.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="overflow-hidden sm:h-[50vh] flex flex-col justify-center gap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative grid place-items-center py-8 border-y border-base-content/50 group cursor-pointer"
        >
          <div className="absolute inset-0 z-10 grid place-items-center bg-base-100 group-hover:bottom-28 transform duration-700 delay-100">
            <h2 className="uppercase group-hover:opacity-0 transform duration-300 delay-100">
              {skill.head}
            </h2>
          </div>
          <div className="inline-flex flex-wrap justify-center gap-3 lg:gap-6">
            {skill.items.map((item, i) => (
              <div
                key={i}
                className="btn btn-primary btn-sm text-sm lg:btn-md lg:text-base"
              >
                <img src={item.icon} alt={item.name} className="size-4" />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
