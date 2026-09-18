"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SectionHeading({ children }) {
  return (
    <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
      <span className="h-px w-6 bg-warm/40" />
      <h2 className="text-[10px] uppercase tracking-[0.3em] text-warm/60">
        {children}
      </h2>
      <span className="h-px w-6 bg-warm/40" />
    </motion.div>
  );
}
