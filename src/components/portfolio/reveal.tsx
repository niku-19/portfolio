"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { EASE_OUT_EXPO, useReducedMotion } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
  blur?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  once = true,
  blur = true,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const reduced = useReducedMotion();

  const offsets = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
    none: { y: 0, x: 0 },
  };

  const offset = offsets[direction];

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: blur ? "blur(6px)" : "blur(0px)",
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
              filter: blur ? "blur(6px)" : "blur(0px)",
            }
      }
      transition={{
        duration: 0.85,
        delay,
        ease: EASE_OUT_EXPO,
      }}
    >
      {children}
    </motion.div>
  );
}
