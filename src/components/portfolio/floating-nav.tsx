"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "./logo";
import { NAV_SECTIONS, DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_SECTIONS.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      const current = sections
        .filter((s) => s.el)
        .reverse()
        .find((s) => {
          const rect = s.el!.getBoundingClientRect();
          return rect.top <= 120;
        });

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "top-0 z-50 fixed inset-x-0 transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
            : "bg-transparent",
        )}>
        <nav
          className="flex justify-between items-center h-16 section-container"
          aria-label="Main navigation">
          <Link
            href="#home"
            className="hover:opacity-80 transition-opacity"
            onClick={() => setMobileOpen(false)}>
            <Logo variant="mark" size="md" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_SECTIONS.slice(1, -1).map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "nav-link",
                  active === section.id && "nav-link-active",
                )}>
                {section.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {Object.entries(DATA.contact.social)
              .filter(([, s]) => s.navbar)
              .slice(0, 2)
              .map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="hidden sm:block text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="size-4" />
                </Link>
              ))}
            <ModeToggle />
            <Link href="#contact" className="hidden sm:inline-flex btn-primary">
              Contact
            </Link>
            <button
              type="button"
              className="interactive inline-flex size-10 items-center justify-center rounded-md border border-border md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}>
              {mobileOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="md:hidden z-40 fixed inset-0">
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="top-20 absolute inset-x-4 bg-card shadow-xl p-4 border border-border rounded-lg">
            <div className="flex flex-col gap-1">
              {NAV_SECTIONS.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md font-mono text-xs uppercase tracking-wider transition-colors",
                    active === section.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted",
                  )}>
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
