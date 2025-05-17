import { IoMailOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const size = 24;

export const contactMe = [
  {
    name: "supanatt.cs@gmail.com",
    icon: <IoMailOutline size={size} />,
    link: "mailto:supanatt.cs@gmail.com",
  },
  {
    name: "0882252252",
    icon: <LuPhone size={size} />,
    link: "tel:+0882252252",
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={size} />,
    link: "https://www.facebook.com/THE.Tlez/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={size} />,
    link: "https://www.instagram.com/the.tlez/",
  },
  {
    name: "Notion",
    icon: <RxNotionLogo size={size} />,
    link: "https://bald-move-a08.notion.site/Resume-10acc06b87d2803fa3bceedef02cf141",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={size} />,
    link: "https://github.com/untitlez",
  },
];
