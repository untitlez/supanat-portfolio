import { FaFigma } from "react-icons/fa";

const sizeIcon = 24;

export const skills = {
  technical: [
    { name: "HTML", svg: "/icon/html.svg" },
    { name: "CSS", svg: "/icon/css.svg" },
    { name: "JavaScript", svg: "/icon/javascript.svg" },
    { name: "Typescript", svg: "/icon/typescript.svg" },
    { name: "React", svg: "/icon/react.svg" },
    { name: "Vite", svg: "/icon/vitejs.svg" },
    { name: "Next", svg: "/icon/nextjs.svg" },
    { name: "Git", svg: "/icon/git.svg" },
    { name: "GitHub", svg: "/icon/github.svg" },
    { name: "VS Code", svg: "/icon/vscode.svg" },
  ],
  tools: [
    { name: "Figma", icon: <FaFigma size={sizeIcon} /> },
    { name: "Tailwind CSS", svg: "/icon/tailwindcss.svg" },
    { name: "Daisy Ui", svg: "/icon/daisyui.svg" },
    { name: "Ant Design", svg: "/icon/antd.svg" },
    { name: "Postman", svg: "/icon/postman.svg" },
    { name: "Vercel", svg: "/icon/vercel.svg" },
    { name: "Motion", svg: "/icon/motion.svg" },
    { name: "Zustand", svg: "/icon/zustand.svg" },
    { name: "React Hook Form", svg: "/icon/react-hook-form.svg" },
  ],
};
