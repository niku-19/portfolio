"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";

interface Bubble {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  color: string;
}

interface FloatingBubbleSystemProps {
  isDark: boolean;
  mouseX?: number;
  mouseY?: number;
}

const BUBBLE_LABELS = [
  "React",
  "Next.js",
  "TypeScript",
  "Frontend",
  "Performance",
  "Architecture",
];

const BUBBLE_COLORS_LIGHT = [
  "rgba(160, 99, 43, 0.55)",
  "rgba(58, 107, 90, 0.55)",
  "rgba(160, 99, 43, 0.45)",
  "rgba(58, 107, 90, 0.45)",
  "rgba(160, 99, 43, 0.5)",
  "rgba(58, 107, 90, 0.5)",
];

const BUBBLE_COLORS_DARK = [
  "rgba(201, 148, 74, 0.65)",
  "rgba(74, 136, 96, 0.65)",
  "rgba(201, 148, 74, 0.55)",
  "rgba(74, 136, 96, 0.55)",
  "rgba(201, 148, 74, 0.6)",
  "rgba(74, 136, 96, 0.6)",
];

export function FloatingBubbleSystem({
  isDark,
  mouseX = 0,
  mouseY = 0,
}: FloatingBubbleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const reduced = useReducedMotion();

  useEffect(() => {
    mouseRef.current = { x: mouseX, y: mouseY };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (bubblesRef.current.length === 0) {
      bubblesRef.current = BUBBLE_LABELS.map((label, i) => ({
        id: i,
        x: Math.random() * (width - 100) + 50,
        y: Math.random() * (height - 100) + 50,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 20 + Math.random() * 10,
        label,
        color: (isDark ? BUBBLE_COLORS_DARK : BUBBLE_COLORS_LIGHT)[i],
      }));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const rect = canvas.getBoundingClientRect();
      const localMouseX = mouseRef.current.x - rect.left;
      const localMouseY = mouseRef.current.y - rect.top;

      bubblesRef.current.forEach((bubble) => {
        const dx = localMouseX - bubble.x;
        const dy = localMouseY - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repulsionDistance = 120;

        if (distance < repulsionDistance && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const force = (repulsionDistance - distance) / repulsionDistance;
          bubble.vx -= Math.cos(angle) * force * 0.6;
          bubble.vy -= Math.sin(angle) * force * 0.6;
        }

        bubble.vx *= 0.985;
        bubble.vy *= 0.985;
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        if (bubble.x - bubble.radius < 0) {
          bubble.x = bubble.radius;
          bubble.vx = Math.abs(bubble.vx) * 0.5;
        }
        if (bubble.x + bubble.radius > width) {
          bubble.x = width - bubble.radius;
          bubble.vx = -Math.abs(bubble.vx) * 0.5;
        }
        if (bubble.y - bubble.radius < 0) {
          bubble.y = bubble.radius;
          bubble.vy = Math.abs(bubble.vy) * 0.5;
        }
        if (bubble.y + bubble.radius > height) {
          bubble.y = height - bubble.radius;
          bubble.vy = -Math.abs(bubble.vy) * 0.5;
        }

        ctx.fillStyle = bubble.color;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = isDark
          ? "rgba(201, 148, 74, 0.45)"
          : "rgba(160, 99, 43, 0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (bubble.radius > 24) {
          ctx.fillStyle = isDark
            ? "rgba(20, 16, 12, 0.85)"
            : "rgba(240, 235, 228, 0.9)";
          ctx.font = "500 10px var(--font-mono), monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(bubble.label, bubble.x, bubble.y);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isDark, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
