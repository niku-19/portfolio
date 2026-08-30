"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ARCHITECTURE_LAYERS } from "@/data/resume";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  const [activeLayer, setActiveLayer] = useState(0);
  const layer = ARCHITECTURE_LAYERS[activeLayer];

  return (
    <section
      id="skills"
      className="bg-surface/50 py-16 sm:py-24 md:py-28 lg:py-32"
    >
      <div className="section-container">
        <Reveal>
          <SectionHeading
            label="Stack"
            title="Technologies as architecture, not logos."
            description="Each layer represents how I think about building production applications."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-2">
              {ARCHITECTURE_LAYERS.map((l, i) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setActiveLayer(i)}
                  className={cn(
                    "interactive group flex w-full items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-all duration-300 sm:gap-4 sm:px-4 sm:py-3.5",
                    activeLayer === i
                      ? "border-primary/40 bg-card shadow-[0_0_0_1px_hsl(var(--primary)/0.08)]"
                      : "border-transparent hover:border-border hover:bg-card/50",
                  )}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded font-mono text-[9px] font-bold transition-colors duration-300 sm:h-8 sm:w-8 sm:text-[10px]"
                    style={{
                      backgroundColor:
                        activeLayer === i
                          ? `${l.color}22`
                          : "hsl(var(--muted))",
                      color: activeLayer === i ? l.color : undefined,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xs sm:text-sm">{l.label}</p>
                    <p className="line-clamp-1 text-[11px] text-muted-foreground sm:text-xs">
                      {l.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={layer.id}
                className="surface-card p-5 sm:p-6 md:p-8"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              >
                <div className="mb-4 flex items-center gap-3 sm:mb-6">
                  <div
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  <h3 className="font-display text-lg sm:text-xl">
                    {layer.label}
                  </h3>
                </div>

                <p className="prose-portfolio mb-6 text-sm sm:mb-8 sm:text-base">
                  {layer.description}
                </p>

                <div className="relative py-6 sm:py-8">
                  <div className="absolute inset-y-0 left-4 w-px bg-border" />
                  <div className="space-y-3 sm:space-y-4">
                    {layer.technologies.map((tech, i) => (
                      <motion.div
                        key={tech}
                        className="relative flex items-center gap-3 pl-8 sm:gap-4 sm:pl-10"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.04,
                          ease: EASE_OUT_EXPO,
                        }}
                      >
                        <span
                          className="absolute left-[10px] h-3.5 w-3.5 shrink-0 rounded-full border-2 border-background"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span className="font-mono text-xs sm:text-sm">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="divider-line mt-4 sm:mt-6" />
                <p className="label-mono mt-4 sm:mt-6">
                  UI → State → Data → API → Backend → Cloud → Quality
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
