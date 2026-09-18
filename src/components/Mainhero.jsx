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
    transition: { staggerChildren: 0.14, delayChildren: 0.5 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Small decorative diamond sparkle */
function Sparkle({ className, delay = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-warm/30 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.6, 0.3], scale: [0, 1, 0.8], rotate: [0, 15, 0] }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
    </motion.svg>
  );
}

export default function Mainhero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[70vh] sm:min-h-[90vh] items-center justify-center py-16 md:py-32">
      {/* Parallax ambient glow orbs */}
      <motion.div
        style={{ y: glowY1 }}
        className="pointer-events-none fixed top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-warm/[0.04] blur-[80px] sm:blur-[120px]"
      />
      <motion.div
        style={{ y: glowY2 }}
        className="pointer-events-none fixed top-0 right-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] translate-x-1/3 -translate-y-1/4 rounded-full bg-warm/[0.03] blur-[60px] sm:blur-[100px]"
      />

      {/* Decorative sparkles */}
      <Sparkle className="absolute top-20 right-[15%] h-4 w-4 hidden sm:block" delay={1} />
      <Sparkle className="absolute bottom-32 left-[10%] h-3 w-3 hidden sm:block" delay={2.5} />
      <Sparkle className="absolute top-[40%] right-[8%] h-5 w-5 hidden sm:block" delay={4} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex flex-col items-start text-left sm:items-center sm:text-center gap-5"
      >
        {/* Thin ornamental line above name */}
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-warm/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-warm/60">
            Software Engineer
          </span>
          <span className="h-px w-8 bg-warm/40" />
        </motion.div>

        {/* Name — large, golden, the centerpiece */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="animated-shimmer">Suryodaya Pandey</span>
        </motion.h1>

        {/* Thin ornamental line below name */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 sm:self-center self-start">
          <span className="h-px w-5 bg-warm/30" />
          <Sparkle className="h-2.5 w-2.5" delay={0.8} />
          <span className="h-px w-5 bg-warm/30" />
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          I build things that move data, automate the boring stuff, and make
          AI agents actually debuggable. Mostly Python, TypeScript, and whatever
          the problem needs. Currently building ETL pipelines, cloud automation,
          and AI tooling at Gracenote.
        </motion.p>

        {/* Social links with / separators */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center sm:justify-center gap-1.5 text-sm text-muted-foreground">
          <motion.a
            href="mailto:pandeysuryodaya@gmail.com"
            whileHover={{ color: "hsl(36 80% 55%)" }}
            className="transition-colors hover:text-warm"
          >
            Email
          </motion.a>
          {socials.map((s) => (
            <span key={s.name} className="flex items-center gap-1.5">
              <span className="text-border">/</span>
              <motion.a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ color: "hsl(36 80% 55%)" }}
                className="transition-colors hover:text-warm"
              >
                {s.name}
              </motion.a>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
