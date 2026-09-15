"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useCallback, useEffect, useState } from "react";
import * as THREE from "three";

/* ───────────────────────────────────────────
   Constants
   ─────────────────────────────────────────── */
const POINT_COUNT_DESKTOP = 60;
const POINT_COUNT_MOBILE = 28;
const CONNECTION_DISTANCE = 2.8;
const CURSOR_INFLUENCE_RADIUS = 3.5;
const CURSOR_STRENGTH = 0.12;
const DRIFT_SPEED = 0.06;
const RETURN_SPEED = 0.015;

const WARM_COLOR = new THREE.Color(0.88, 0.66, 0.11);
const DIM_COLOR = new THREE.Color(0.4, 0.38, 0.34);

function createCircleTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const center = size / 2;
  const radius = size / 2 - 2;
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.4, "rgba(255,255,255,0.6)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function generatePositions(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = Math.random() * 10 - 3;
    positions[i3 + 1] = (Math.random() - 0.5) * 9;
    positions[i3 + 2] = (Math.random() - 0.5) * 4;
  }
  return positions;
}

/* ───────────────────────────────────────────
   Network
   ─────────────────────────────────────────── */
function Network({ mouse, scrollProgress, reducedMotion, pointCount }) {
  const pointsRef = useRef();
  const linesRef = useRef();
  const { viewport } = useThree();

  const count = pointCount;

  const basePositions = useMemo(() => generatePositions(count), [count]);
  const positions = useMemo(() => new Float32Array(basePositions), [basePositions]);
  const velocities = useMemo(() => {
    const v = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      v[i3] = (Math.random() - 0.5) * DRIFT_SPEED;
      v[i3 + 1] = (Math.random() - 0.5) * DRIFT_SPEED;
      v[i3 + 2] = (Math.random() - 0.5) * DRIFT_SPEED * 0.2;
    }
    return v;
  }, [count]);

  const maxLines = count < 40 ? 200 : 400;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const pointColors = useMemo(() => {
    const c = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      c[i3] = DIM_COLOR.r;
      c[i3 + 1] = DIM_COLOR.g;
      c[i3 + 2] = DIM_COLOR.b;
    }
    return c;
  }, [count]);

  const circleTexture = useMemo(() => createCircleTexture(), []);
  const _v = useMemo(() => new THREE.Vector3(), []);
  const _mouse3D = useMemo(() => new THREE.Vector3(), []);
  const smoothScroll = useRef(0);

  useFrame((_, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    const dt = Math.min(delta, 0.05);
    const driftScale = reducedMotion ? 0.1 : 1;

    smoothScroll.current += (scrollProgress.current - smoothScroll.current) * 0.05;
    const scroll = smoothScroll.current;

    const scrollOpacityFactor = Math.max(0.08, 1 - scroll * 0.85);
    const scrollSpread = 1 + scroll * 0.6;
    const scrollYOffset = scroll * -3;

    _mouse3D.set(
      (mouse.current.x * viewport.width) / 2,
      (mouse.current.y * viewport.height) / 2,
      0
    );

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] += velocities[i3] * dt * driftScale;
      positions[i3 + 1] += velocities[i3 + 1] * dt * driftScale;
      positions[i3 + 2] += velocities[i3 + 2] * dt * driftScale;

      const targetX = basePositions[i3] * scrollSpread;
      const targetY = basePositions[i3 + 1] * scrollSpread + scrollYOffset;
      const targetZ = basePositions[i3 + 2];
      positions[i3] += (targetX - positions[i3]) * RETURN_SPEED * dt * 60;
      positions[i3 + 1] += (targetY - positions[i3 + 1]) * RETURN_SPEED * dt * 60;
      positions[i3 + 2] += (targetZ - positions[i3 + 2]) * RETURN_SPEED * dt * 60;

      if (!reducedMotion) {
        _v.set(positions[i3], positions[i3 + 1], positions[i3 + 2]);
        const dist = _v.distanceTo(_mouse3D);
        if (dist < CURSOR_INFLUENCE_RADIUS && dist > 0.01) {
          const force = (1 - dist / CURSOR_INFLUENCE_RADIUS) * CURSOR_STRENGTH;
          _v.sub(_mouse3D).normalize().multiplyScalar(force * dt * 60);
          positions[i3] += _v.x;
          positions[i3 + 1] += _v.y;
        }
      }

      const distToMouse = Math.sqrt(
        (positions[i3] - _mouse3D.x) ** 2 +
        (positions[i3 + 1] - _mouse3D.y) ** 2
      );
      const t = Math.max(0, 1 - distToMouse / CURSOR_INFLUENCE_RADIUS);
      pointColors[i3] = (DIM_COLOR.r + (WARM_COLOR.r - DIM_COLOR.r) * t) * scrollOpacityFactor;
      pointColors[i3 + 1] = (DIM_COLOR.g + (WARM_COLOR.g - DIM_COLOR.g) * t) * scrollOpacityFactor;
      pointColors[i3 + 2] = (DIM_COLOR.b + (WARM_COLOR.b - DIM_COLOR.b) * t) * scrollOpacityFactor;
    }

    const pointGeo = pointsRef.current.geometry;
    pointGeo.attributes.position.array = positions;
    pointGeo.attributes.position.needsUpdate = true;
    pointGeo.attributes.color.array = pointColors;
    pointGeo.attributes.color.needsUpdate = true;
    pointsRef.current.material.opacity = 0.85 * scrollOpacityFactor;

    let lineIdx = 0;
    for (let i = 0; i < count && lineIdx < maxLines; i++) {
      for (let j = i + 1; j < count && lineIdx < maxLines; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = positions[i3] - positions[j3];
        const dy = positions[i3 + 1] - positions[j3 + 1];
        const dz = positions[i3 + 2] - positions[j3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        const effectiveDist = CONNECTION_DISTANCE * (1 - scroll * 0.2);

        if (dist < effectiveDist) {
          const alpha = (1 - dist / effectiveDist) * 0.35;
          const l6 = lineIdx * 6;

          linePositions[l6] = positions[i3];
          linePositions[l6 + 1] = positions[i3 + 1];
          linePositions[l6 + 2] = positions[i3 + 2];
          linePositions[l6 + 3] = positions[j3];
          linePositions[l6 + 4] = positions[j3 + 1];
          linePositions[l6 + 5] = positions[j3 + 2];

          const midX = (positions[i3] + positions[j3]) / 2;
          const midY = (positions[i3 + 1] + positions[j3 + 1]) / 2;
          const midDist = Math.sqrt(
            (midX - _mouse3D.x) ** 2 + (midY - _mouse3D.y) ** 2
          );
          const warmT = Math.max(0, 1 - midDist / CURSOR_INFLUENCE_RADIUS) * 0.5;
          const r = (DIM_COLOR.r * 0.7 + WARM_COLOR.r * warmT) * alpha * scrollOpacityFactor;
          const g = (DIM_COLOR.g * 0.7 + WARM_COLOR.g * warmT) * alpha * scrollOpacityFactor;
          const b = (DIM_COLOR.b * 0.7 + WARM_COLOR.b * warmT) * alpha * scrollOpacityFactor;

          lineColors[l6] = r;
          lineColors[l6 + 1] = g;
          lineColors[l6 + 2] = b;
          lineColors[l6 + 3] = r;
          lineColors[l6 + 4] = g;
          lineColors[l6 + 5] = b;

          lineIdx++;
        }
      }
    }

    const lineGeo = linesRef.current.geometry;
    lineGeo.setDrawRange(0, lineIdx * 2);
    lineGeo.attributes.position.array = linePositions;
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.array = lineColors;
    lineGeo.attributes.color.needsUpdate = true;
    linesRef.current.material.opacity = 0.45 * scrollOpacityFactor;
  });

  return (
    <group position={[1.5, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={count} array={pointColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          vertexColors
          transparent
          opacity={0.85}
          map={circleTexture}
          alphaMap={circleTexture}
          alphaTest={0.01}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={maxLines * 2} array={linePositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={maxLines * 2} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

/* ───────────────────────────────────────────
   Full-page fixed canvas
   ─────────────────────────────────────────── */
export default function HeroGeometry() {
  const mouse = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    // ponytail: simple width check, no resize listener — only matters on initial load
    setIsMobile(window.innerWidth < 768);

    return () => mq.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = useCallback((e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }, []);

  const handleScroll = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handlePointerMove, handleScroll]);

  const pointCount = isMobile ? POINT_COUNT_MOBILE : POINT_COUNT_DESKTOP;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Network
          mouse={mouse}
          scrollProgress={scrollProgress}
          reducedMotion={reducedMotion}
          pointCount={pointCount}
        />
      </Canvas>
    </div>
  );
}
