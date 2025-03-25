import { IoLogoVercel } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const size = 20;

export const projectsData = [
  {
    id: "6",
    src: "/cover_photo/cat.jpg",
    title: "Users",
    tools: "Vercel / Axios / React.js / Next.js",
    description: "RESTful API / State",
    icon: <IoLogoVercel size={size} />,
    nameIcon: "Vercel",
    link: "https://practice-website-projects.vercel.app/page/users",
  },

  {
    id: "5",
    src: "/cover_photo/shiba.jpg",
    title: "Products",
    tools: "Vercel / Axios / React.js / Next.js",
    description: "Fetch API / State",
    icon: <IoLogoVercel size={size} />,
    nameIcon: "Vercel",
    link: "https://practice-website-projects.vercel.app/page/product",
  },

  {
    id: "4",
    src: "/cover_photo/dear.jpg",
    title: "Find Your Cat",
    tools: "React.js / Next.js",
    description: "Fetch API / State",
    icon: <HiOutlineExternalLink size={size} />,
    nameIcon: "View",
    link: "/projects/FindYourCat",
  },

  {
    id: "3",
    src: "/cover_photo/cow.jpg",
    title: "To-Do-List",
    tools: "React.js / Next.js",
    description: "State / Event",
    icon: <HiOutlineExternalLink size={size} />,
    nameIcon: "View",
    link: "/projects/ToDoList",
  },
  {
    id: "2",
    src: "/cover_photo/koala.jpg",
    title: "Wallet App",
    tools: "Figma",
    description: "Design Mobile App",
    icon: <FaFigma size={size} />,
    nameIcon: "Figma",
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=1028-2&t=8TXMCEq6EmJGXjQ5-1",
  },
  {
    id: "1",
    src: "cover_photo/koala_junior.jpg",
    title: "Re-Design",
    tools: "Figma",
    description: "Re-Design Brand KFC",
    icon: <FaFigma size={size} />,
    nameIcon: "Figma",
    link: "https://www.figma.com/proto/V2ExOe0brOdTwT6pVIJaxf/My-Project?node-id=194-9&t=uSXl9qY1jnfq0c2m-1",
  },
];
