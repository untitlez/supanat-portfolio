import About from "./(pages)/about/page";
import Education from "./(pages)/education/page";
import Experience from "./(pages)/experience/page";
import Intro from "./(pages)/intro/page";
import Skills from "./(pages)/skills/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Intro />
      <Navbar />
      <main className="layout">
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
      </main>
      <Footer />
    </>
  );
}
