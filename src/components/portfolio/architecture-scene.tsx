"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { ARCHITECTURE_LAYERS } from "@/data/resume";
import { useReducedMotion } from "@/lib/motion";

const LAYER_POSITIONS = ARCHITECTURE_LAYERS.map(
  (_, i) =>
    [Math.sin(i * 1.2) * 2.2, i * 0.85 - 2.2, Math.cos(i * 1.2) * 2.2] as [
      number,
      number,
      number,
    ],
);

interface ArchitectureNodesProps {
  activeLayer: number | null;
  onHover: (index: number | null) => void;
  isDark: boolean;
}

function ArchitectureNodes({
  activeLayer,
  onHover,
  isDark,
}: ArchitectureNodesProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.35 + t * 0.08,
      0.05,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.15,
      0.05,
    );
  });

  const connections = useMemo(() => {
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    for (let i = 0; i < LAYER_POSITIONS.length - 1; i++) {
      lines.push([
        new THREE.Vector3(...LAYER_POSITIONS[i]),
        new THREE.Vector3(...LAYER_POSITIONS[i + 1]),
      ]);
    }
    return lines;
  }, []);

  // Theme-aware colors
  const primaryColor = isDark ? "#c9944a" : "#a0632b";
  const accentColor = isDark ? "#4a8860" : "#3a6a50";
  const inactiveLineColor = isDark ? "#3a3a42" : "#888890";
  const inactiveNodeColor = isDark ? "#4a6b5a" : "#6a8b7a";

  const handlePointerMove = (e: THREE.Event & { clientX?: number; clientY?: number }) => {
    if (e.clientX == null || e.clientY == null) return;
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <group ref={groupRef} onPointerMove={handlePointerMove}>
      {/* Connection lines with theme-aware colors */}
      {connections.map(([start, end], i) => (
        <Line
          key={`line-${i}`}
          points={[start, end]}
          color={
            activeLayer === i || activeLayer === i + 1
              ? primaryColor
              : inactiveLineColor
          }
          lineWidth={1}
          transparent
          opacity={activeLayer === i || activeLayer === i + 1 ? 0.9 : 0.3}
        />
      ))}

      {/* Architecture nodes */}
      {ARCHITECTURE_LAYERS.map((layer, i) => {
        const pos = LAYER_POSITIONS[i];
        const isActive = activeLayer === i;
        const nodeColor = isActive ? primaryColor : inactiveNodeColor;

        return (
          <group key={layer.id} position={pos}>
            {/* Main node geometry */}
            <mesh
              onPointerOver={() => onHover(i)}
              onPointerOut={() => onHover(null)}
              scale={isActive ? 1.15 : 1}
              castShadow>
              <icosahedronGeometry args={[isActive ? 0.28 : 0.22, 2]} />
              <meshStandardMaterial
                color={nodeColor}
                emissive={nodeColor}
                emissiveIntensity={isActive ? 0.7 : 0.2}
                wireframe={false}
                metalness={0.4}
                roughness={0.6}
              />
            </mesh>

            {/* Glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.35, 0.42, 32]} />
              <meshBasicMaterial
                color={primaryColor}
                transparent
                opacity={isActive ? 0.6 : 0.15}
                side={THREE.DoubleSide}
              />
            </mesh>

            {/* Outer pulse ring on active */}
            {isActive && (
              <mesh
                rotation={[Math.PI / 2, 0, 0]}
                scale={1 + Math.sin(Date.now() * 0.005) * 0.15}>
                <ringGeometry args={[0.45, 0.48, 32]} />
                <meshBasicMaterial
                  color={primaryColor}
                  transparent
                  opacity={0.3}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Lighting - theme-aware */}
      <ambientLight intensity={isDark ? 0.5 : 0.6} />
      <pointLight
        position={[4, 4, 4]}
        intensity={isDark ? 1.2 : 1.0}
        color={primaryColor}
        distance={12}
      />
      <pointLight
        position={[-4, -2, -4]}
        intensity={isDark ? 0.6 : 0.4}
        color={accentColor}
        distance={10}
      />
    </group>
  );
}

function StaticFallback() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <svg
        viewBox="0 0 400 400"
        className="opacity-60 w-full h-full max-h-[420px]"
        aria-hidden="true">
        {ARCHITECTURE_LAYERS.map((layer, i) => {
          const cx = 200 + Math.sin(i * 1.2) * 80;
          const cy = 60 + i * 55;
          return (
            <g key={layer.id}>
              {i < ARCHITECTURE_LAYERS.length - 1 && (
                <line
                  x1={cx}
                  y1={cy}
                  x2={200 + Math.sin((i + 1) * 1.2) * 80}
                  y2={60 + (i + 1) * 55}
                  stroke="hsl(var(--primary))"
                  strokeOpacity={0.3}
                  strokeWidth={1}
                />
              )}
              <circle
                cx={cx}
                cy={cy}
                r="8"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={1}
                opacity={0.7}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ArchitectureScene() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduced) {
    return <StaticFallback />;
  }

  const isDark = theme === "dark";

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={
          typeof window !== "undefined" && window.devicePixelRatio > 2
            ? 1
            : [1, 1.5]
        }
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="!touch-none">
        <Suspense fallback={null}>
          <ArchitectureNodes
            activeLayer={activeLayer}
            onHover={setActiveLayer}
            isDark={isDark}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>

      {activeLayer !== null && (
        <div className="sm:right-4 bottom-3 sm:bottom-4 sm:left-auto absolute inset-x-0 sm:inset-x-4 bg-background/95 backdrop-blur-md mx-auto sm:mx-auto p-3 sm:p-4 border border-border rounded-md sm:w-64 pointer-events-none">
          <p className="text-[10px] text-primary sm:text-[11px] label-mono">
            {ARCHITECTURE_LAYERS[activeLayer].label}
          </p>
          <p className="mt-1.5 text-muted-foreground text-xs leading-relaxed">
            {ARCHITECTURE_LAYERS[activeLayer].description}
          </p>
        </div>
      )}
    </div>
  );
}
