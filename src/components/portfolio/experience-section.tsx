"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { DATA } from "@/data/resume";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = DATA.experience[activeIndex];

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            label="Experience"
            title="Production systems across fintech and B2B."
            description=" four years building investor onboarding, trading dashboards, and enterprise platforms."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr]">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:flex-col lg:pb-0">
              {DATA.experience.map((job, i) => (
                <button
                  key={job.company}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "interactive shrink-0 rounded-md border px-3 py-2.5 text-left transition-all duration-300 sm:px-4 sm:py-3 lg:whitespace-normal whitespace-nowrap",
                    activeIndex === i
                      ? "border-primary/40 bg-primary/5 shadow-[0_0_0_1px_hsl(var(--primary)/0.1)]"
                      : "border-border bg-transparent hover:border-primary/20 hover:bg-card/50",
                  )}
                >
                  <p className="font-display text-xs sm:text-sm">
                    {job.company}
                  </p>
                  <p className="label-mono mt-0.5 sm:mt-1">{job.period}</p>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="relative pl-4 sm:pl-6 lg:pl-8">
              <div className="timeline-rail" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.company}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                >
                  <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="font-display text-lg sm:text-2xl">
                          {active.company}
                        </h3>
                        {active.href && (
                          <Link
                            href={active.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="interactive text-muted-foreground transition-colors duration-300 hover:text-primary"
                            aria-label={`Visit ${active.company}`}
                          >
                            <ArrowUpRight className="size-3.5 sm:size-4" />
                          </Link>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-primary sm:text-base">
                        {active.role}
                      </p>
                      <p className="label-mono mt-1 sm:mt-2">
                        {active.location}
                      </p>
                    </div>
                    {active.featured && (
                      <span className="w-fit rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {active.products.map((product, i) => (
                      <motion.article
                        key={product.name}
                        className="surface-card-hover p-4 sm:p-5 md:p-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.06,
                          ease: EASE_OUT_EXPO,
                        }}
                      >
                        <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                          <h4 className="font-display text-base sm:text-lg">
                            {product.name}
                          </h4>
                          <span className="label-mono text-accent">
                            {product.domain}
                          </span>
                        </div>

                        <ul className="space-y-2 sm:space-y-2.5">
                          {product.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-xs leading-relaxed text-muted-foreground sm:gap-3 sm:text-sm"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                          {product.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
