import { IoLogoVercel } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const size = 20;

export const ProjectsData = [
  {
    src: "/cover_photo/penguin.jpg",
    title: "HR System",
    icon: <IoLogoVercel size={size} />,
    nameIcon: "Vercel",
    tools: [
      "Vite",
      "React",
      "Ant Design",
      "Tailwind CSS",
      "Zustand",
      "Axios",
      "Responsive",
    ],
    link: "https://internal-projects.vercel.app/",
  },
  {
    src: "/cover_photo/cat.jpg",
    title: "Admin",
    icon: <IoLogoVercel size={size} />,
    nameIcon: "Vercel",
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Daisy UI",
      "Zustand",
      "Axios",
      "Responsive",
    ],
    link: "https://practice-website-projects.vercel.app/admin",
  },
  {
    src: "/cover_photo/shiba.jpg",
    title: "Coffee Shop",
    icon: <IoLogoVercel size={size} />,
    nameIcon: "Vercel",
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Daisy UI",
      "Zustand",
      "Axios",
      "Responsive",
    ],
    link: "https://practice-website-projects.vercel.app/shop",
  },
  {
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    icon: <HiOutlineExternalLink size={size} />,
    nameIcon: "View",
    tools: ["Next.js", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    link: "/projects/FindYourCat",
  },
  {
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    icon: <HiOutlineExternalLink size={size} />,
    nameIcon: "View",
    tools: ["Next.js", "React", "Tailwind CSS", "Daisy UI", "Responsive"],
    link: "/projects/ToDoList",
  },
  {
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    icon: <FaFigma size={size} />,
    nameIcon: "Figma",
    tools: ["Figma", "Responsive "],
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=1028-2&t=8TXMCEq6EmJGXjQ5-1",
  },
  {
    src: "cover_photo/koala_junior.jpg",
    title: "Re-Design",
    icon: <FaFigma size={size} />,
    nameIcon: "Figma",
    tools: ["Figma", "Responsive "],
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=194-9&t=uSXl9qY1jnfq0c2m-1",
  },
];
