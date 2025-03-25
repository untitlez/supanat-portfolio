"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/Skills";
import Certificate from "../certificate/page";
import ProjectsPage from "@/app/projects/page";

export default function Skills() {

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (element, delays) => {
  useEffect(() => {
    gsap.fromTo(element, 
      { opacity: 0, y: 100 }, {
        opacity: 1, y: 0, duration: 1, delay: delays,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
      },
    });
  }, [element, delays]);
};

useScrollTrigger("#card1", 0.5);
useScrollTrigger("#card2", 1);
useScrollTrigger("#card3", 1.5);



  return (
    <>
      <div className="main">
      <div className="tabs col-span-6">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab btn btn-ghost"
          aria-label="SKILLS"
          defaultChecked
        />
        <div className="tab-box">
          <div className="tab-contents">
            {/* Card 1 : TECHNICAL SKILLS */}
            <div id="card1" className="card-box">
              <div className="card-body p-4">
                <h3 className="card-heading">TECHNICAL SKILLS</h3>
                <div className="card-contents">
                  {skills.technical.map((skill, i) => (
                    <li key={i} className="contact">
                      <img
                        className="h-8 w-8 icon "
                        src={skill.src}
                        alt={skill.name}
                      />
                      {skill.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 : TOOLS SKILLS */}
            <div id="card2" className="card-box">
              <div className="card-body p-4">
                <h3 className="card-heading">TOOLS SKILLS</h3>
                <div className="card-contents">
                  {skills.tools.map((skill, i) => (
                    <li key={i} className="contact">
                      <img
                        className="h-8 w-8 icon "
                        src={skill.src}
                        alt={skill.name}
                      />
                      {skill.name}
                    </li>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3 :  SOFT SKILLS */}
            <div id="card3" className="card-box">
              <div className="card-body p-4">
                <h3 className="card-heading">SOFT SKILLS</h3>
                <ul className="card-contents list-disc">
                  {skills.soft.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 2: PROJECTS */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab btn btn-ghost"
          data-theme="dark"
          aria-label="PROJECTS"
        />
        <div className="tab-box border-none overflow-hidden">
          <ProjectsPage />
        </div>

        {/* Tab 3: CERTIFICATIONS */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab btn btn-ghost"
          data-theme="emerald"
          aria-label="CERTIFICATIONS"
        />
        <div data-theme="emerald" className="tab-box">
          <Certificate />
        </div>
      </div>
      </div>
    </>
  );
}
