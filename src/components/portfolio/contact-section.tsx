"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { DATA } from "@/data/resume";
import { Reveal } from "./reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 lg:py-32">
      <div className="section-container">
        <Reveal>
          <div className="relative bg-card border border-border rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative gap-8 sm:gap-10 lg:gap-16 xl:gap-20 grid lg:grid-cols-2 p-6 sm:p-8 md:p-10 lg:p-12">
              <div>
                <p className="mb-3 sm:mb-4 label-mono">Contact</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] display-heading">
                  Let&apos;s build something{" "}
                  <span className="text-gradient-copper italic">
                    remarkable.
                  </span>
                </h2>
                <p className="mt-3 sm:mt-4 max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Open to full-stack engineering roles, collaborations, and
                  conversations about building production web systems.
                </p>
              </div>

              <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
                <button
                  onClick={copyEmail}
                  type="button"
                  className="interactive group flex items-center justify-between rounded-md border border-border bg-background/50 px-4 py-3 text-left transition-all duration-300 hover:border-primary/30 sm:px-5 sm:py-4"
                >
                  <div>
                    <p className="mb-1 label-mono">Email</p>
                    <p className="font-mono text-xs sm:text-sm break-all">
                      {DATA.contact.email}
                    </p>
                  </div>
                  {copied ? (
                    <Check className="flex-shrink-0 ml-3 size-4 text-accent" />
                  ) : (
                    <Copy className="flex-shrink-0 ml-3 size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </button>

                <div className="gap-2 sm:gap-3 grid grid-cols-2">
                  {Object.entries(DATA.contact.social)
                    .filter(([key]) => key !== "email")
                    .map(([name, social]) => (
                      <Link
                        key={name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive btn-ghost justify-between text-xs sm:text-[11px]"
                      >
                        {name}
                        <ArrowUpRight className="size-3 sm:size-3.5" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:mt-16 sm:flex-row sm:pt-8">
            <p className="text-[10px] sm:text-[11px] label-mono">
              © {new Date().getFullYear()} {DATA.name}
            </p>
            <p className="text-[10px] sm:text-[11px] label-mono">
              Designed & built with Next.js · TypeScript · Framer Motion
            </p>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
