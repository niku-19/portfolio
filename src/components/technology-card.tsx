"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechnologyCardProps {
  title: string;
  description: string;
  dates: string;
  className?: string;
}

export function TechnologyCard({
  title,
  description,
  dates,
  className,
}: TechnologyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn("h-full", className)}
    >
      <Card className="flex flex-col h-full p-4 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 border border-white/5 bg-black/40 backdrop-blur-md group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-500/5 rotate-45 translate-x-4 -translate-y-4" />
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display font-bold text-xs group-hover:text-cyan-400 transition-colors tracking-tight">
            {title}
          </h3>
          <Badge variant="outline" className="text-[9px] font-mono border-cyan-500/20 text-cyan-500/50">
            {dates.split(" - ")[1] || dates}
          </Badge>
        </div>
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed font-sans group-hover:text-muted-foreground transition-colors">
          {description}
        </p>
        <div className="mt-auto pt-4 flex justify-end">
          <div className="size-1 bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors" />
        </div>
      </Card>
    </motion.div>
  );
}
