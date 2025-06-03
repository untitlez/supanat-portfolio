import { skills } from "@/constant/Skills";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="overflow-hidden h-[50vh] space-y-8 content-center">
      <div className="animate-flow flex gap-4 w-max">
        {[...skills.technical, ...skills.technical].map((item, i) => (
          <div
            key={i}
            className="btn btn-primary btn-sm sm:btn-md text-xs sm:text-base"
          >
            {item.svg && (
              <Image src={item.svg} width={20} height={20} alt={item.name} />
            )}
            {item.icon && <figure>{item.icon}</figure>}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="animate-flow-reverse flex gap-4 w-max">
        {[...skills.tools, ...skills.tools].map((item, i) => (
          <div
            key={i}
            className="btn btn-primary btn-sm sm:btn-md text-xs sm:text-base"
          >
            {item.svg && (
              <Image src={item.svg} width={20} height={20} alt={item.name} />
            )}
            {item.icon && <figure>{item.icon}</figure>}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
