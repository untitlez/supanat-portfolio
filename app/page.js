import Intro from "./(pages)/intro/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Projects from "./(pages)/projects/page";
import Certificate from "./(pages)/certificate/page";
import Experience from "./(pages)/experience/page";
import Education from "./(pages)/education/page";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { GradientBg } from "./components/GradientBg";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-24 lg:gap-0 lg:my-0 bg-base-200">
      <GradientBg />
      <Intro />
      <Navbar />
      <section id="about" className="max-w-screen-2xl mx-4 z-10">
        <About />
      </section>
      <section id="skills" className="w-full z-10">
        <Skills />
      </section>
      <section id="projects" className="w-full px-4 lg:my-40 z-10">
        <Projects />
      </section>
      <section id="certificate" className="w-full max-w-screen-2xl px-4 z-10">
        <Certificate />
      </section>
      <section id="experience" className="max-w-screen-2xl mx-4 z-10">
        <Experience />
      </section>
      <section id="education" className="max-w-screen-2xl mx-4 z-10">
        <Education />
      </section>
      <Footer />
    </main>
  );
}
