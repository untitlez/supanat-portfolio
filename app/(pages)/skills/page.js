const skills = [
  {
    //Frontend
    animate: "animate-flow",
    items: [
      { name: "HTML", icon: "/icon/html.svg" },
      { name: "CSS", icon: "/icon/css.svg" },
      { name: "JavaScript", icon: "/icon/javascript.svg" },
      { name: "Typescript", icon: "/icon/typescript.svg" },
      { name: "Next.js", icon: "/icon/nextjs.svg" },
      { name: "React", icon: "/icon/react.svg" },
      { name: "Vite", icon: "/icon/vite.svg" },
      { name: "PostgreSQL", icon: "/icon/postgresql.svg" },
      { name: "Prisma", icon: "/icon/prisma.svg" },
      { name: "Zod", icon: "/icon/zod.svg" },
    ],
  },
  {
    //Tool & Libraries
    animate: "animate-flow-reverse",
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
  // {
  //Backend
  //   animate: "animate-flow-reverse",
  //   items: [
  //     { name: "Node.js", icon: "/icon/nodejs.svg" },
  //     { name: "Express.js", icon: "/icon/expressjs.svg" },
  //     { name: "PostgreSQL", icon: "/icon/postgresql.svg" },
  //     { name: "Prisma", icon: "/icon/prisma.svg" },
  //     { name: "MongoDB", icon: "/icon/mongodb.svg" },
  //     { name: "Auth0", icon: "/icon/auth0.svg" },
  //   ],
  // },
];

export default function Skills() {
  return (
    <div className="overflow-hidden h-[50vh] flex flex-col justify-center gap-8">
      {skills.map((skill, index) => (
        <div key={index} className={`flex w-full gap-6 ${skill.animate}`}>
          {/* {skill.items.map((item, i) => ( */}
          {[...skill.items, ...skill.items].map((item, i) => (
            <div key={i} className="btn btn-primary text-base">
              <img src={item.icon} alt={item.name} className="size-4" />
              {item.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
