"use client";

import { FolderOpen, Github } from "lucide-react";

export const ButtonLink = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex gap-3">
      <button
        className="btn btn-outline px-8"
        onClick={() => scrollTo("projects")}
      >
        <FolderOpen className="size-5" />
        Project
      </button>
      <a
        className="btn btn-outline px-8"
        href="https://github.com/untitlez"
        target="_blank"
      >
        <Github className="size-5" />
        Github
      </a>
    </div>
  );
};
