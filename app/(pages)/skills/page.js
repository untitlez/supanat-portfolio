import Image from "next/image";

const skills = {
  technical: [
    { name: "HTML", icon: "/icon/html.svg" },
    { name: "CSS", icon: "/icon/css.svg" },
    { name: "JavaScript", icon: "/icon/javascript.svg" },
    { name: "Typescript", icon: "/icon/typescript.svg" },
    { name: "React", icon: "/icon/react.svg" },
    { name: "Vite", icon: "/icon/vitejs.svg" },
    { name: "Next", icon: "/icon/nextjs.svg" },
    { name: "Git", icon: "/icon/git.svg" },
    { name: "GitHub", icon: "/icon/github.svg" },
    { name: "VS Code", icon: "/icon/vscode.svg" },
  ],
  tools: [
    { name: "Figma", icon: "/icon/figma.svg" },
    { name: "Tailwind CSS", icon: "/icon/tailwindcss.svg" },
    { name: "Daisy Ui", icon: "/icon/daisyui.svg" },
    { name: "Ant Design", icon: "/icon/antd.svg" },
    { name: "Postman", icon: "/icon/postman.svg" },
    { name: "Vercel", icon: "/icon/vercel.svg" },
    { name: "Motion", icon: "/icon/motion.svg" },
    { name: "Zustand", icon: "/icon/zustand.svg" },
    { name: "React Hook Form", icon: "/icon/react-hook-form.svg" },
  ],
};

export default function Skills() {
  return (
    <div className="overflow-hidden h-[50vh] space-y-8 content-center">
      <div className="animate-flow flex gap-4 lg:gap-8 w-max">
        {[...skills.technical, ...skills.technical].map((item, i) => (
          <div key={i} className="btn btn-primary text-base relative">
            <Image src={item.icon} width={20} height={20} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="animate-flow-reverse flex gap-4 lg:gap-8 w-max">
        {[...skills.tools, ...skills.tools].map((item, i) => (
          <div key={i} className="btn btn-primary text-base relative">
            <Image src={item.icon} width={20} height={20} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
