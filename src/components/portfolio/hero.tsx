"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { DATA } from "@/data/resume";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { Reveal } from "./reveal";
import { InteractiveHeroImage } from "./interactive-hero-image";
import { FloatingBubbleSystem } from "./floating-bubbles";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center pb-14 pt-20 sm:pb-16 sm:pt-24"
    >
      <div className="section-container">
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Connector line — desktop only */}
          <div
            className="pointer-events-none absolute left-[46%] top-1/2 hidden h-px w-[8%] -translate-y-1/2 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent lg:block"
            aria-hidden="true"
          />

          {/* Identity column */}
          <div className="order-2 lg:order-1">
            <Reveal delay={0}>
              <p className="label-mono mb-3">Hello, I&apos;m</p>
              <motion.h1
                className="font-display text-[2.75rem] font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-8xl"
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
              >
                <span className="block">Nikhil</span>
                <span className="mt-1 block text-gradient-copper">
                  Ranjan Kumar
                </span>
              </motion.h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
                <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-3 py-1 font-display text-sm text-primary sm:text-base">
                  Full-Stack Developer
                </span>
                <span className="label-mono">
                  {DATA.yearsExperience}+ years production experience
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {DATA.description}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                <Link
                  href="#projects"
                  className="interactive group btn-primary"
                >
                  View work
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link href="#contact" className="interactive btn-ghost">
                  Get in touch
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div className="mt-10 flex flex-col gap-6 border-t border-border pt-7 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-8 sm:pt-8">
                {[
                  {
                    value: `${DATA.yearsExperience}+`,
                    label: "Years experience",
                  },
                  { value: "Fintech", label: "Primary domain" },
                  { value: "React · Next", label: "Core stack" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.08,
                      ease: EASE_OUT_EXPO,
                    }}
                  >
                    <p className="font-display text-lg text-foreground sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="label-mono mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image column */}
          <Reveal delay={0.12} direction="right" className="order-1 lg:order-2">
            <div className="relative mx-auto h-[340px] w-full max-w-[380px] sm:h-[400px] lg:mx-0 lg:h-[440px] lg:max-w-none">
              <FloatingBubbleSystem
                isDark={isDark}
                mouseX={mousePos.x}
                mouseY={mousePos.y}
              />
              <InteractiveHeroImage
                isDark={isDark}
                mouseX={mousePos.x}
                mouseY={mousePos.y}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:bottom-8"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="interactive flex flex-col items-center gap-1.5 text-muted-foreground transition-colors duration-300 hover:text-primary"
        >
          <span className="label-mono">Scroll</span>
          <ArrowDown className="size-4" />
        </Link>
      </motion.div>
    </section>
  );
}
