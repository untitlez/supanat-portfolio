import { contactMe } from "@/data/ContactMe";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal place-content-between bg-neutral text-neutral-content gap-12 px-10 py-20">
        <aside>
          <img src="/favicon/clover.png" alt="Logo Page" />
          <p>
            SUPANAT CHAISRI
            <br />
            Frontend Developer
          </p>
        </aside>
        <nav>
          <h3 className="mb-2 lg:mb-8">CONTACT ME</h3>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {contactMe.map((item, i) => (
              <a
                key={i}
                data-tip={item.name}
                href={item.link}
                target="_blank"
                className="icon-tooltip"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral-800 text-neutral-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Supanat Chaisri
          </p>
        </aside>
      </footer>
    </>
  );
}
