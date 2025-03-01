import Navbar from "./components/Navbar";
import About from "./components/resume/About";
import Education from "./components/resume/Education";
import Experience from "./components/resume/Experience";
import Skills from "./components/resume/Skills";

export default function Home() {
  return (
    <>
      <div data-theme="light" className="min-h-screen bg-primary">
        <div className="main-layout">
          <Navbar hidden="hidden" resumeBtn={"btn-outline"} />
          <About />
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    </>
  );
}
