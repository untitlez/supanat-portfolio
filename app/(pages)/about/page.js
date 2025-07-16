"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { useScrollInView } from "@/lib/useScrollInView";
import { StackImage } from "@/components/StackImage";
import RotatingText from "@/components/RotatingText";

const imageProfile = [
  {
    id: 1,
    img: "/profile2.jpg",
  },
  {
    id: 2,
    img: "/profile.jpg",
  },
];

const hobby = [
  "Podcasts : Business, Economics",
  "Running half marathon",
  "Gym",
];

export default function About() {
  const { ref, isInView } = useScrollInView();
  const motionContent = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, delay: customDelay, ease: "easeOut" },
    }),
  };

  const motionItem = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: customDelay, ease: "easeOut" },
    }),
  };

  const customDelays = 0.6;

  return (
    <div className="lg:min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-12 place-content-center">
      <motion.div
        className="w-full grid place-content-center"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={motionContent}
        custom={customDelays}
      >
        <div className="hidden sm:block">
          <StackImage
            randomRotation={true}
            sendToBackOnClick={true}
            cardsData={imageProfile}
          />
        </div>
        <img
          src="/profile.jpg"
          alt="Profile Image"
          loading="lazy"
          className="sm:hidden h-[250px] lg:h-full lg:w-3/4 object-cover rounded-3xl shadow-xl border border-base-content/50"
        />
      </motion.div>

      <motion.div
        className="w-full max-w-screen-sm space-y-12 px-6 sm:px-8 py-12 rounded-3xl bg-base-100 border border-base-content/50"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={motionContent}
      >
        <motion.div
          className="space-y-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={motionItem}
          custom={customDelays + 0.3}
        >
          <div className="flex items-end gap-4">
            <h3 className="text-xl lg:text-3xl">Hi there!</h3>
            <Image
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
              alt="Say Hi"
              width={48}
              height={48}
              className="mb-1"
            />
          </div>
          <h3 className="text-xl lg:text-3xl text-primary">
            I'm SUPANAT CHAISRI
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={motionItem}
          custom={customDelays + 0.6}
        >
          <h3>About Me</h3>
          <p className="opacity-75 text-justify">
            I'm interested in working as a Web Developer. Currently, I keep
            improving my skills and practice myself. If there were experts
            willing to guide or mentor me, I would be extremely grateful.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={motionItem}
          custom={customDelays + 0.9}
        >
          <h3>Hobby</h3>
          <RotatingText
            texts={hobby}
            mainClassName="btn btn-sm btn-primary lg:text-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
