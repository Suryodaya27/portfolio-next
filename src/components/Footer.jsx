"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-border/50 py-8"
    >
      <div className="mx-auto flex max-w-4xl items-center justify-center px-6 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Suryodaya Pandey</span>
      </div>
    </motion.footer>
  );
}
