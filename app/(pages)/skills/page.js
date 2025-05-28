import { skills } from "@/constant/Skills";

export default function Skills() {
  return (
    <div className="overflow-hidden h-[50vh] relative">
      <div className="absolute-center space-y-8">
        <div className="animate-flow w-[200%] sm:w-[200%] flex justify-around">
          {[...skills.technical, ...skills.technical].map((item, i) => (
            <div key={i} className="btn btn-primary text-base">
              {item.svg && <img src={item.svg} className="w-6" />}
              {item.icon && <figure>{item.icon}</figure>}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="animate-flow-reverse w-[200%] flex justify-around">
          {[...skills.tools, ...skills.tools].map((item, i) => (
            <div key={i} className="btn btn-primary text-base">
              {item.svg && <img src={item.svg} className="w-6" />}
              {item.icon && <figure>{item.icon}</figure>}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
