"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

interface InteractiveHeroImageProps {
  isDark: boolean;
  mouseX?: number;
  mouseY?: number;
}

export function InteractiveHeroImage({
  isDark,
  mouseX = 0,
  mouseY = 0,
}: InteractiveHeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const offsetRef = useRef({ x: 0, y: 0, rotateX: 0, rotateY: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const animate = () => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const targetX = (mouseX - centerX) * 0.035;
      const targetY = (mouseY - centerY) * 0.035;
      const targetRotateY = (mouseX - centerX) * 0.012;
      const targetRotateX = -(mouseY - centerY) * 0.012;

      offsetRef.current.x += (targetX - offsetRef.current.x) * 0.12;
      offsetRef.current.y += (targetY - offsetRef.current.y) * 0.12;
      offsetRef.current.rotateX += (targetRotateX - offsetRef.current.rotateX) * 0.12;
      offsetRef.current.rotateY += (targetRotateY - offsetRef.current.rotateY) * 0.12;

      const { x, y, rotateX, rotateY } = offsetRef.current;
      image.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="interactive group relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-sm lg:max-w-[380px]"
      style={{ perspective: "900px" }}
    >
      {/* Ambient glow */}
      <motion.div
        className={`absolute -inset-6 rounded-[2rem] blur-3xl ${
          isDark
            ? "bg-gradient-to-br from-primary/25 via-accent/10 to-primary/15"
            : "bg-gradient-to-br from-primary/20 via-accent/10 to-primary/12"
        }`}
        animate={{ opacity: [0.5, 0.75, 0.5], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Orbit ring */}
      <motion.div
        className="pointer-events-none absolute inset-[-12px] rounded-[1.75rem] border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-1 top-1/4 h-2 w-2 rounded-full bg-primary/70"
        aria-hidden="true"
      />

      {/* Image frame */}
      <motion.div
        ref={imageRef}
        className="relative h-full w-full will-change-transform"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.15 }}
      >
        <div
          className={`relative h-full w-full overflow-hidden rounded-[1.5rem] shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_24px_60px_-20px_hsl(var(--primary)/0.35)] ${
            isDark ? "border border-primary/35" : "border border-primary/25"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/30 via-transparent to-primary/5" />
          <Image
            src="/me.jpg"
            alt="Nikhil Ranjan Kumar — Full-Stack Developer"
            fill
            className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-[1.03]"
            priority
            quality={90}
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 384px, 380px"
          />
        </div>
      </motion.div>

      {/* Role badge — bridges identity + image */}
      <motion.div
        className={`absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur-md sm:text-[11px] ${
          isDark
            ? "border border-primary/35 bg-background/85 text-primary"
            : "border border-primary/30 bg-background/90 text-primary"
        }`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: EASE_OUT_EXPO }}
      >
        Full-Stack Developer · 4 Years
      </motion.div>

      {/* Tech chips */}
      <div className="absolute -left-1 bottom-10 flex flex-col gap-2 sm:-left-3">
        {["React", "Next.js", "TypeScript"].map((tech, i) => (
          <motion.span
            key={tech}
            className={`rounded px-2 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur-md sm:text-[10px] ${
              isDark
                ? "border border-accent/35 bg-accent/20 text-accent"
                : "border border-accent/30 bg-accent/15 text-accent"
            }`}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 + i * 0.08, ease: EASE_OUT_EXPO }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
