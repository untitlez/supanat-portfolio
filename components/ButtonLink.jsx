"use client";

import { Download, Github } from "lucide-react";

export const ButtonLink = () => {
  return (
    <div className="flex gap-3">
      <a
        className="btn btn-outline px-8"
        href="https://github.com/untitlez"
        target="_blank"
      >
        <Github className="size-5" />
        Github
      </a>
      <a
        className="btn btn-outline px-8"
        href="https://drive.google.com/file/d/1BRoWSyP2gaAl4zZDeDh8CzW5hm6X0wbT/view?usp=sharing"
        target="_blank"
      >
        <Download className="size-5" />
        Download CV
      </a>
    </div>
  );
};
