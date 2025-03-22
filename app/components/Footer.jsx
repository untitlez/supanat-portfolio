import { contactMe } from "@/data/ContactMe"

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
    <h3 className="mb-3">CONTACT ME</h3>
    <div className="grid grid-flow-col gap-6">
    {contactMe.map((item, i) => (
                  <a key={i}
                    data-tip={item.name}
                    href={item.link}
                    target="_blank"
                    className="h-8 w-8 rounded-md lg:tooltip lg:tooltip-accent hover:bg-accent"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="icon invert hover:invert-0"
                    />
                  </a>
              ))}
    </div>
  </nav>
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-neutral-800 text-neutral-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </>
  )
}