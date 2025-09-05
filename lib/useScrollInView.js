"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export const useScrollInView = (options = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -20% 0px",
    ...options,
  });

  return { ref, isInView };
};
