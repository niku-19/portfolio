"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { DATA } from "@/data/resume";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  const [activeCase, setActiveCase] = useState(0);
  const featured = DATA.featuredProjects[activeCase];

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            label="Projects"
            title="Case studies from production work."
            description="Real systems — onboarding flows, trading dashboards, and enterprise platforms."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2 sm:mt-12">
            {DATA.featuredProjects.map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveCase(i)}
                className={cn(
                  "interactive rounded-md border px-3 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 sm:px-4 sm:text-[11px]",
                  activeCase === i
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.2)]"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:bg-primary/5",
                )}
              >
                {project.title.split("—")[0].trim()}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <AnimatePresence mode="wait">
            <motion.article
              key={featured.title}
              className="mt-6 overflow-hidden surface-card sm:mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto lg:min-h-[360px]">
                  {featured.image && (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-[1.03] mix-blend-multiply"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute bottom-4 left-4 lg:left-auto lg:right-4">
                    <span className="label-mono text-accent">
                      {featured.domain}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
                  <h3 className="font-display text-xl leading-[1.2] sm:text-2xl lg:text-3xl">
                    {featured.title}
                  </h3>

                  <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4 md:mt-6">
                    {[
                      { label: "Problem", text: featured.problem },
                      { label: "Built", text: featured.built },
                      { label: "Architecture", text: featured.architecture },
                    ].map((block) => (
                      <div key={block.label}>
                        <p className="label-mono mb-1 text-primary">
                          {block.label}
                        </p>
                        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {block.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 sm:mt-5 md:mt-6">
                    <p className="label-mono mb-2">Challenges</p>
                    <div className="flex flex-wrap gap-2">
                      {featured.challenges.map((c) => (
                        <span
                          key={c}
                          className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 md:mt-6">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] uppercase tracking-wider text-accent sm:text-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <p className="label-mono mb-4 sm:mb-6">Side projects</p>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {DATA.projects.map((project) => (
                <article
                  key={project.title}
                  className="interactive group overflow-hidden surface-card-hover"
                >
                  {project.video && (
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Play className="size-7 text-foreground sm:size-8" />
                      </div>
                    </div>
                  )}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-xs sm:text-sm">
                        {project.title}
                      </h4>
                      <span className="label-mono shrink-0">
                        {project.dates}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                      {project.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="interactive inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-primary transition-colors duration-300 hover:text-accent"
                        >
                          {link.type}
                          <ArrowUpRight className="size-2.5 sm:size-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
