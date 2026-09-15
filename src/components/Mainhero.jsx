"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/suryodaya27/" },
  { name: "GitHub", url: "https://github.com/Suryodaya27" },
  { name: "LeetCode", url: "https://leetcode.com/suryodaya_27/" },
  { name: "Twitter", url: "https://twitter.com/Suryodaya27" },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Mainhero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Hero content drifts up and fades as user scrolls past
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative py-16 md:py-24">
      {/* Parallax ambient glow orbs */}
      <motion.div
        style={{ y: glowY1 }}
        className="pointer-events-none fixed top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-warm/[0.04] blur-[80px] sm:blur-[120px]"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="pointer-events-none fixed top-0 right-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] translate-x-1/3 -translate-y-1/4 rounded-full bg-warm/[0.03] blur-[60px] sm:blur-[100px]"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex flex-col gap-6"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-warm"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl leading-[1.1] tracking-[-0.03em] sm:text-6xl md:text-7xl"
        >
          <span className="animated-shimmer">Suryodaya Pandey</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          I build scalable automation systems, backend APIs, and AI-driven
          applications at{" "}
          <span className="text-foreground">Nielsen (Gracenote)</span>. I enjoy
          turning complex data problems into clean, reliable pipelines — from
          migrating legacy bots to designing intelligent retrieval systems.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Open to opportunities &amp; relocation
          </span>
          <a
            href="mailto:pandeysuryodaya@gmail.com"
            className="underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
          >
            pandeysuryodaya@gmail.com
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-2 flex flex-wrap gap-5">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="text-sm text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
            >
              {s.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
