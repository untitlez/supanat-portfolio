import Image from "next/image";
import {
  Box,
  Facebook,
  Github,
  Instagram,
  MapPin,
  Phone,
  UserCircle,
} from "lucide-react";
import { Routes } from "@/lib/routes";

const contactMe = [
  {
    name: "Chiang Mai,Thailand",
    icon: <MapPin />,
  },
  {
    name: Routes.link.mail,
    icon: <UserCircle />,
    link: `mailto:${Routes.link.mail}`,
  },
  {
    name: Routes.link.phone,
    icon: <Phone />,
    link: `tel:+${Routes.link.phone}`,
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: Routes.link.facebook,
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: Routes.link.instagram,
  },
  {
    name: "Notion",
    icon: <Box />,
    link: Routes.link.notion,
  },
  {
    name: "GitHub",
    icon: <Github />,
    link: Routes.link.github,
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="footer sm:footer-horizontal bg-base-200 text-primary justify-items-center gap-20 px-4 lg:px-10 py-20">
        <aside className="flex flex-col items-center gap-4">
          <div className="relative w-full size-24 aspect-square">
            <Image
              src="/favicon/clover.webp"
              alt="Logo Page"
              className="object-contain spin"
              sizes="50vw"
              fill
            />
          </div>
          <div>
            <h3 className="text-base-content uppercase">
              {Routes.name.fullName}
            </h3>
            <h4 className="text-base-content/75 capitalize">
              {Routes.position}
            </h4>
          </div>
        </aside>
        <nav className="flex flex-col justify-center items-center gap-8 h-full">
          <h3 className="uppercase">contact me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {contactMe.map((item, i) => (
              <a
                key={i}
                data-tip={item.name}
                href={item.link}
                target="_blank"
                className="btn btn-circle btn-ghost bg-base-100 px-3 grid place-content-center lg:tooltip"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <aside className="footer footer-center p-2 bg-base-300 capitalize">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          {Routes.name.fullName}
        </p>
      </aside>
    </footer>
  );
}
