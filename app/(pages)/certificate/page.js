"use client";

import { motion } from "motion/react";

import { useScrollInView } from "@/app/lib/hook/useScrollInView";
import { certificate } from "@/constant/Certificate";

import Carousel from "@/app/components/Carousel";

export default function Certificate() {
  const { ref, isInView } = useScrollInView({ margin: "0px 0px -50% 0px" });

  const motionContent = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const propsCarousel = {
    items: certificate,
    autoplay: true,
    pauseOnHover: true,
    loop: true,
  };

  return (
    <div className="lg:min-h-screen grid place-content-center" ref={ref}>
      <motion.div
        className="sm:hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={motionContent}
      >
        <Carousel baseWidth={300} {...propsCarousel} />
      </motion.div>
      <motion.div
        className="hidden sm:block"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={motionContent}
      >
        <Carousel baseWidth={600} {...propsCarousel} />
      </motion.div>
    </div>
  );
}
