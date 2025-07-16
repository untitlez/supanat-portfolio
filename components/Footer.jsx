import {
  Box,
  Facebook,
  Github,
  Instagram,
  MapPin,
  Phone,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

const contactMe = [
  {
    name: "Chiang Mai,Thailand",
    icon: <MapPin />,
  },
  {
    name: "supanatt.cs@gmail.com",
    icon: <UserCircle />,
    link: "mailto:supanatt.cs@gmail.com",
  },
  {
    name: "0882252252",
    icon: <Phone />,
    link: "tel:+0882252252",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/THE.Tlez/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/the.tlez/",
  },
  {
    name: "Notion",
    icon: <Box />,
    link: "https://bald-move-a08.notion.site/Resume-10acc06b87d2803fa3bceedef02cf141",
  },
  {
    name: "GitHub",
    icon: <Github />,
    link: "https://github.com/untitlez",
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="footer sm:footer-horizontal bg-base-300 text-primary justify-items-center gap-20 px-4 lg:px-10 py-20">
        <aside className="flex flex-col items-center gap-4">
          <div className="relative w-full aspect-square">
            <Image
              src="/favicon/clover.webp"
              alt="Logo Page"
              className="object-contain spin"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              fill
            />
          </div>
          <div>
            <h3>SUPANAT CHAISRI</h3>
            <h4>Web Developer</h4>
          </div>
        </aside>
        <nav className="flex flex-col justify-center items-center gap-8 h-full">
          <h3 className="">CONTACT ME</h3>
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
      <aside className="footer footer-center p-2 bg-base-200">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Supanat Chaisri
        </p>
      </aside>
    </footer>
  );
}
