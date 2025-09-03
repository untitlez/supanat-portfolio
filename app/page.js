import Intro from "./(pages)/intro/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Projects from "./(pages)/projects/page";
import Certificate from "./(pages)/certificate/page";
import Experience from "./(pages)/experience/page";
import Education from "./(pages)/education/page";

import { tags } from "@/lib/constant";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuroraBg from "@/components/AuroraBg";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden grid bg-gradient">
      <AuroraBg />
      <div className="overflow-y-scroll overflow-x-hidden flex flex-col items-center gap-24 lg:gap-40 lg:my-0 z-0">
        <Intro />
        <Navbar />
        <section
          id={tags.page.about.id}
          className="w-full max-w-screen-2xl px-4"
        >
          <About />
        </section>
        <section id={tags.page.skills.id} className="w-full">
          <Skills />
        </section>
        <section
          id={tags.page.projects.id}
          className="w-full max-w-screen-2xl px-4"
        >
          <Projects />
        </section>
        <section
          id={tags.page.certificate.id}
          className="w-full max-w-screen-2xl px-4"
        >
          <Certificate />
        </section>
        <section
          id={tags.page.experience.id}
          className="w-full max-w-screen-2xl px-4"
        >
          <Experience />
        </section>
        <section
          id={tags.page.education.id}
          className="w-full max-w-screen-2xl px-4"
        >
          <Education />
        </section>
        <Footer />
      </div>
    </main>
  );
}
