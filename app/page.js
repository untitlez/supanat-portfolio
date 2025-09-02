import Intro from "./(pages)/intro/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Projects from "./(pages)/projects/page";
import Certificate from "./(pages)/certificate/page";
import Experience from "./(pages)/experience/page";
import Education from "./(pages)/education/page";

import { fieldItems } from "@/lib/constant";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuroraBg from "@/components/AuroraBg";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden grid bg-gradient">
      <AuroraBg />
      <div className="overflow-y-scroll flex flex-col items-center gap-24 lg:gap-0 lg:my-0  z-0">
        <Intro />
        <Navbar />
        <section
          id={fieldItems.page.about.id}
          className="flex-1 max-w-screen-2xl mx-4 z-10"
        >
          <About />
        </section>
        <section id={fieldItems.page.skills.id} className="w-full z-10">
          <Skills />
        </section>
        <section
          id={fieldItems.page.projects.id}
          className="w-full max-w-screen-2xl px-4 lg:my-40 z-10"
        >
          <Projects />
        </section>
        <section
          id={fieldItems.page.certificate.id}
          className="flex-1 max-w-screen-2xl px-4 z-10"
        >
          <Certificate />
        </section>
        <section
          id={fieldItems.page.experience.id}
          className="flex-1 max-w-screen-2xl mx-4 z-10"
        >
          <Experience />
        </section>
        <section
          id={fieldItems.page.education.id}
          className="flex-1 max-w-screen-2xl mx-4 z-10"
        >
          <Education />
        </section>
        <Footer />
      </div>
    </main>
  );
}
