"use client";

import { motion } from "framer-motion";

export default function PageReveal() {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] bg-background"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
      style={{ transformOrigin: "top" }}
    />
  );
}
