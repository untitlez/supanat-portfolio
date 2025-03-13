import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Experience from "./components/pages/Experience";
import Intro from "./components/pages/Intro";
import Skills from "./components/pages/Skills";

export default function Home() {
  return (
    <>
      <Intro/>
      <Navbar/>
      <div className="layout">
        <About />
        <Experience />
        <Education />
        <Skills />
      </div>
    </>
  );
}
