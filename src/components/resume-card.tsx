"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer group"
      onClick={handleClick}
    >
      <Card className="flex cyber-glass p-1 border-white/5 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-20 group-hover:opacity-100 transition-opacity" />
        <div className="flex-none p-4">
          <Avatar className="border-2 border-cyan-500/10 size-12 m-auto bg-black rounded-lg">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain grayscale group-hover:grayscale-0 transition-all"
            />
            <AvatarFallback className="font-display bg-cyan-900/20 text-cyan-500">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-2 p-2 flex flex-col justify-center">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-display font-bold leading-none text-xs sm:text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-[9px] bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-1 py-0 h-4"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 text-cyan-500",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-[10px] sm:text-xs font-mono tabular-nums text-cyan-500/50 text-right uppercase">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-mono text-[10px] text-muted-foreground/60 mt-0.5">{subtitle}</div>}
          </CardHeader>
          <AnimatePresence>
            {description && isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-3 text-xs sm:text-sm border-t border-cyan-500/10 pt-3"
              >
                <div className="font-sans leading-relaxed text-muted-foreground/80 italic">
                  &gt; {description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </Link>
  );
};
