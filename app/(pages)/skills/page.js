import { skill } from "@/lib/constant";

const skills = [
  {
    //Frontend
    head: "Frontend stack",
    items: [
      skill.html,
      skill.css,
      skill.javascript,
      skill.typescript,
      skill.nextjs,
      skill.react,
      skill.vite,
    ],
  },
  {
    // Backend
    head: "Backend stack",
    items: [
      skill.nodejs,
      skill.expressjs,
      skill.bun,
      skill.elysiajs,
      skill.nextjs,
      skill.prisma,
      skill.postgresql,
      skill.mongodb,
      skill.supabase,
    ],
  },
  {
    //Tool & Libraries
    head: "Library & Tools",
    items: [
      skill.tailwindCss,
      skill.shadcnUi,
      skill.antd,
      skill.daisyUi,
      skill.zod,
      skill.zustand,
      skill.reactHookForm,
      skill.postman,
      skill.git,
      skill.vercel,
      skill.figma,
    ],
  },
];

export default function Skills() {
  return (
    <div className="overflow-hidden sm:min-h-[50vh] flex flex-col justify-center gap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative grid place-items-center py-8 border-y-2 border-base-content/50 group cursor-pointer"
        >
          <div className="absolute inset-0 z-10 grid place-items-center bg-base-100 group-hover:bottom-[99%] transform duration-700 delay-100">
            <h2 className="uppercase group-hover:opacity-0 transform duration-300 delay-100">
              {skill.head}
            </h2>
          </div>
          <div className="inline-flex flex-wrap justify-center gap-3 lg:gap-6">
            {skill.items.map((item, i) => (
              <div
                key={i}
                className="btn btn-primary btn-sm text-sm lg:btn-md lg:text-base pointer-events-none"
              >
                <img src={item.icon} alt={item.label} className="size-4" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
