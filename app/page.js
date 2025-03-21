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
      <div className="layout">
        <About />
        <Skills />
        <Experience />
        <Education />
      </div>
      <Footer />
    </>
  );
}
