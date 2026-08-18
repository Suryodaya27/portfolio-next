"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/suryodaya27/" },
  { name: "GitHub", url: "https://github.com/Suryodaya27" },
  { name: "LeetCode", url: "https://leetcode.com/suryodaya_27/" },
  { name: "Twitter", url: "https://twitter.com/Suryodaya27" },
];

export default function Mainhero() {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        <p className="text-sm uppercase tracking-widest text-warm">
          Software Engineer &middot; Mumbai
        </p>

        <h1 className="font-serif text-5xl leading-[1.1] tracking-[-0.03em] sm:text-6xl md:text-7xl">
          Suryodaya Pandey
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I build scalable automation systems, backend APIs, and AI-driven
          applications at{" "}
          <span className="text-foreground">Nielsen (Gracenote)</span>. I enjoy
          turning complex data problems into clean, reliable pipelines — from
          migrating legacy bots to designing intelligent retrieval systems.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for collaboration
          </span>
          <a
            href="mailto:pandeysuryodaya@gmail.com"
            className="underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
          >
            pandeysuryodaya@gmail.com
          </a>
        </div>

        <div className="mt-2 flex flex-wrap gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
            >
              {s.name}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
