"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "mark" | "wordmark" | "full";
}

export function Logo({ size = "md", variant = "full" }: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-primary/20 rounded w-8 h-8 animate-pulse" />;
  }

  const isDark = theme === "dark";

  const sizeMap = {
    sm: { container: "w-6 h-6", text: "text-xs" },
    md: { container: "w-8 h-8", text: "text-sm" },
    lg: { container: "w-12 h-12", text: "text-base" },
  };

  const { container, text } = sizeMap[size];

  // Mark variant - minimalist monogram
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={container}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Nikhil Ranjan Kumar">
        <defs>
          <linearGradient id="markGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#c9944a" : "#a0632b"} />
            <stop offset="100%" stopColor={isDark ? "#a0632b" : "#7a4420"} />
          </linearGradient>
        </defs>

        {/* Abstract interconnected nodes representing frontend layers */}
        <g strokeWidth="2.5" stroke="url(#markGradient)">
          {/* Central circuit pattern */}
          <circle cx="32" cy="16" r="4" fill="url(#markGradient)" />
          <circle cx="20" cy="32" r="4" fill="url(#markGradient)" />
          <circle cx="44" cy="32" r="4" fill="url(#markGradient)" />
          <circle cx="32" cy="48" r="4" fill="url(#markGradient)" />

          {/* Connecting lines */}
          <path d="M 32 20 L 32 28" strokeLinecap="round" />
          <path d="M 28 32 L 36 32" strokeLinecap="round" />
          <path d="M 26 28 L 38 36" strokeLinecap="round" />
          <path d="M 38 28 L 26 36" strokeLinecap="round" />
          <path d="M 32 40 L 32 44" strokeLinecap="round" />
          <path d="M 24 36 L 28 44" strokeLinecap="round" />
          <path d="M 40 36 L 36 44" strokeLinecap="round" />
        </g>
      </svg>
    );
  }

  // Wordmark variant - initials with context
  if (variant === "wordmark") {
    return (
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 64 64"
          className="w-5 sm:w-6 h-5 sm:h-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <defs>
            <linearGradient
              id="markGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor={isDark ? "#c9944a" : "#a0632b"} />
              <stop offset="100%" stopColor={isDark ? "#a0632b" : "#7a4420"} />
            </linearGradient>
          </defs>

          <g strokeWidth="2.5" stroke="url(#markGradient2)">
            <circle cx="32" cy="16" r="4" fill="url(#markGradient2)" />
            <circle cx="20" cy="32" r="4" fill="url(#markGradient2)" />
            <circle cx="44" cy="32" r="4" fill="url(#markGradient2)" />
            <circle cx="32" cy="48" r="4" fill="url(#markGradient2)" />

            <path d="M 32 20 L 32 28" strokeLinecap="round" />
            <path d="M 28 32 L 36 32" strokeLinecap="round" />
            <path d="M 26 28 L 38 36" strokeLinecap="round" />
            <path d="M 38 28 L 26 36" strokeLinecap="round" />
            <path d="M 32 40 L 32 44" strokeLinecap="round" />
            <path d="M 24 36 L 28 44" strokeLinecap="round" />
            <path d="M 40 36 L 36 44" strokeLinecap="round" />
          </g>
        </svg>
        <span className="font-600 font-display text-foreground text-sm sm:text-base tracking-tight">
          NRK
        </span>
      </div>
    );
  }

  // Full variant - complete branding
  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 64 64"
        className="flex-shrink-0 w-7 sm:w-8 h-7 sm:h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <defs>
          <linearGradient
            id="markGradient3"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%">
            <stop offset="0%" stopColor={isDark ? "#c9944a" : "#a0632b"} />
            <stop offset="100%" stopColor={isDark ? "#a0632b" : "#7a4420"} />
          </linearGradient>
        </defs>

        <g strokeWidth="2.5" stroke="url(#markGradient3)">
          <circle cx="32" cy="16" r="4" fill="url(#markGradient3)" />
          <circle cx="20" cy="32" r="4" fill="url(#markGradient3)" />
          <circle cx="44" cy="32" r="4" fill="url(#markGradient3)" />
          <circle cx="32" cy="48" r="4" fill="url(#markGradient3)" />

          <path d="M 32 20 L 32 28" strokeLinecap="round" />
          <path d="M 28 32 L 36 32" strokeLinecap="round" />
          <path d="M 26 28 L 38 36" strokeLinecap="round" />
          <path d="M 38 28 L 26 36" strokeLinecap="round" />
          <path d="M 32 40 L 32 44" strokeLinecap="round" />
          <path d="M 24 36 L 28 44" strokeLinecap="round" />
          <path d="M 40 36 L 36 44" strokeLinecap="round" />
        </g>
      </svg>
      <div className="hidden sm:flex flex-col">
        <span className="font-700 font-display text-foreground text-xs leading-none tracking-tight">
          NRK
        </span>
        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
          Frontend
        </span>
      </div>
    </div>
  );
}
