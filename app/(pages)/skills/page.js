import { skills } from "@/data/Skills";
import Certificate from "../certificate/page";
import CodePage from "@/app/(projects)/code/page";

export default function Skills() {
  return (
    <>
      <div className="tabs lg:mb-24">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab btn btn-ghost"
          aria-label="SKILLS"
          defaultChecked
        />
        <div className="tab-box">
          <div className="tab-contents fd">
            {/* Card 1 : TECHNICAL SKILLS */}
            <div className="card-box">
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
            <div className="card-box">
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
            <div className="card-box">
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
        <div data-theme="dark" className="tab-box">
          <CodePage />
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
    </>
  );
}
