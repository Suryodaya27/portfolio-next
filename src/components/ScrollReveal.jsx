"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Wraps children with a scroll-progress-driven fade+rise.
 * Starts invisible/shifted, becomes fully visible as it enters the viewport.
 * Smoother than threshold-based whileInView — feels continuous.
 */
export default function ScrollReveal({ children, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.55"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.8], [4, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div ref={ref} style={{ opacity, y, filter }} className={className}>
      {children}
    </motion.div>
  );
}
