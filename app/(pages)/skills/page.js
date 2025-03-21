import { skills } from "@/data/Skills";
import Certificate from "../certificate/page";
import CodePage from "@/app/(projects)/code/page";

export default function Skills() {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift h-screen content-center animate-viewpoint">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab btn btn-sm btn-outline"
          aria-label="SKILLS"
          defaultChecked
        />
        <div className="tab-content p-8 rounded-b-lg border-b-2 border-primary bg-primary">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="card-skills">
              <p className="card-skills-title">TECHNICAL SKILLS</p>
              <ul className="card-skills-content">
                {skills.technical.map((skill, i) => (
                  <li key={i} className="contact">
                    <img
                      className="h-8 w-8 icon invert"
                      src={skill.src}
                      alt={skill.name}
                    />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="card-skills">
              <p className="card-skills-title">TECHNICAL SKILLS</p>
              <ul className="card-skills-content">
                {skills.tools.map((tool, i) => (
                  <li key={i} className="contact">
                    <img
                      className="h-8 w-8 icon invert"
                      src={tool.src}
                      alt={tool.name}
                    />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="card-skills">
              <p className="card-skills-title">TECHNICAL SKILLS</p>
              <ul className="card-skills-content">
                {skills.tools.map((tool, i) => (
                  <li key={i}>{tool.soft}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="PROJECTS"
        />
        <div className="tab-content p-6">
          <CodePage />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="CERTIFICATIONS"
        />
        <div className="tab-content p-6">
          <Certificate />
        </div>
      </div>
    </>
  );
}
