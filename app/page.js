import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-self-center w-full max-w-screen-lg">
        <Navbar />
        <About />
        <Education />
        <Experience />
        <Skills />
      </div>
    </>
  );
}
