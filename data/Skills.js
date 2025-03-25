import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const size = 24;

export const skills = {
  technical: [
    { name: "HTML", icon: <FaHtml5 size={size} /> },
    { name: "CSS", icon: <FaCss3Alt size={size} /> },
    { name: "JavaScript", icon: <IoLogoJavascript size={size} /> },
    { name: "React", icon: <FaReact size={size} /> },
    { name: "Next", icon: <RiNextjsFill size={size} /> },
  ],
  tools: [
    { name: "Figma", icon: <FaFigma size={size} /> },
    {
      name: "VS Code",
      icon: <FaFigma size={size} />,

      icon: <VscVscode size={size} />,
    },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={size} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={size} /> },
    { name: "GitHub", icon: <FaGithub size={size} /> },
    { name: "Postman", icon: <SiPostman size={size} /> },
  ],
  soft: [
    "Management Skills",
    "Decision Making",
    "Flexibility and Adaptability",
    "Service Mind",
    "Teamwork",
    "Critical Thinking",
  ],
};
