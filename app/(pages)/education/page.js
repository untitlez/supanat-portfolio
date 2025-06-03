"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useScrollInView } from "@/app/lib/hook/useScrollInView";
import { education } from "@/constant/Education";

export default function Education() {
  const { ref, isInView } = useScrollInView({
    margin: "0px 0px -50% 0px",
  });

  const motionContent = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center gap-12 text-primary"
    >
      {education.map((study, i) => (
        <div
          className="max-w-screen-sm grid gap-4 bg-base-100 p-8 rounded-3xl border border-base-content/50 
          shadow-xl lg:hover:shadow-2xl animate"
          key={i}
        >
          <motion.figure
            className="flex justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={motionContent}
          >
            <Image
              src={study.src}
              alt="Institution Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.figure>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={motionItem}
          >
            <div className="flex flex-wrap-reverse justify-between items-center gap-4">
              <h3>{study.name}</h3>
              <p className="badge badge-primary">{study.year}</p>
            </div>
            <h4 className="mb-2 opacity-60">{study.major}</h4>
            <p className="text-base-content">{study.description}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
