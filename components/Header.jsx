"use client";

import { motion } from "motion/react";
import { useScrollInView } from "@/lib/useScrollInView";

export const Header = ({ label }) => {
  const { ref, isInView } = useScrollInView();

  return (
    <div className="w-full btn btn-lg bg-base-content lg:btn-ghost pointer-events-none flex items-center lg:gap-16 my-6 lg:my-24">
      <span className="h-0 lg:h-1 bg-base-content/50 flex-1" />
      <motion.h2
        className="uppercase font-semibold text-base-100 lg:text-primary"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {label}
      </motion.h2>
      <span className="h-0 lg:h-1 bg-base-content/50 flex-1" />
    </div>
  );
};
