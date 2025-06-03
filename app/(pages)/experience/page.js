"use client";

import { motion } from "motion/react";
import { useScrollInView } from "@/app/lib/hook/useScrollInView";
import { experience } from "@/constant/Experience";

export default function Experience() {
  const { ref, isInView } = useScrollInView({
    margin: "0px 0px -50% 0px",
  });

  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3 * customDelay, ease: "easeOut" },
    }),
  };

  return (
    <div className="min-h-screen content-center text-primary" ref={ref}>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical gap-2 md:gap-0 col-span-6 md:scale-90">
        {experience.map((exp, i) => (
          <li key={i}>
            <div className="timeline-middle md:mx-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`md:bg-base-100 py-4 md:p-8 rounded-3xl border-base-content/50 md:border md:shadow-xl 
                lg:hover:shadow-2xl animate ${exp.position}`}
            >
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={motionItem}
                custom={i}
              >
                <time className="font-mono italic">{exp.time}</time>
                <h3 className="font-bold">{exp.job}</h3>
                <h4 className="mb-2 opacity-60">{exp.place}</h4>
                <p className="text-base-content">{exp.job_description}</p>
              </motion.div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
