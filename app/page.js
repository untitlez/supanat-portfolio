"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./(pages)/about/page";
import Education from "./(pages)/education/page";
import Experience from "./(pages)/experience/page";
import Intro from "./(pages)/intro/page";
import Skills from "./(pages)/skills/page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const useScrollTriggerAnimation = (element, fromValues, toValues) => {
    useEffect(() => {
      gsap.fromTo(element, fromValues, {
        ...toValues,
        scrollTrigger: {
          trigger: element,
          start: "top 40%",
        },
      });
    }, [element, fromValues, toValues]);
  };

  useScrollTriggerAnimation(
    "#about",
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  );

  useScrollTriggerAnimation(
    "#skills",
    { opacity: 0, x: -100 },
    { opacity: 1, x: 0, duration: 1 }
  );

  useScrollTriggerAnimation(
    "#experience",
    { opacity: 0, x: 100 },
    { opacity: 1, x: 0, duration: 1 }
  );

  useScrollTriggerAnimation(
    "#education",
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1 }
  );

  return (
    <>
      <Intro />
      <Navbar />
      <main className="layout">
        <section id="about" className="">
          <About />
        </section>
        <section id="skills" className="animate-viewport">
          <Skills />
        </section>
        <section id="experience" className="animate-viewport">
          <Experience />
        </section>
        <section id="education" className="animate-viewport">
          <Education />
        </section>
      </main>
      <Footer />
    </>
  );
}
