import { contactMe } from "@/constant/ContactMe";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="footer sm:footer-horizontal bg-base-300 text-primary justify-items-center gap-20 px-4 lg:px-10 py-20">
        <aside className="flex flex-col items-center gap-4">
          <img
            src="/favicon/clover.png"
            alt="Logo Page"
            className="spin"
            loading="lazy"
          />
          <div>
            <h3>SUPANAT CHAISRI</h3>
            <h4>Frontend Developer</h4>
          </div>
        </aside>
        <nav className="flex flex-col justify-center items-center gap-8 h-full">
          <h3 className="">CONTACT ME</h3>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {contactMe.map((item, i) => (
              <a
                key={i}
                data-tip={item.name}
                href={item.link}
                target="_blank"
                className="rounded-md p-2 lg:tooltip"
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
