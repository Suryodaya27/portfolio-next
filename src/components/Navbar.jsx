"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MagneticLink from "./MagneticLink";

export default function Navbar() {
  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-foreground">
          <motion.span
            className="inline-block h-2 w-2 rounded-full bg-warm"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          SP
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6 md:gap-8">
          {links.map(({ href, label }, i) => (
            <MagneticLink
              key={href}
              href={href}
              className="relative hidden sm:inline-block text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-warm after:transition-all hover:after:w-full"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                {label}
              </motion.span>
            </MagneticLink>
          ))}
          <MagneticLink
            href="https://drive.google.com/file/d/1_rJuBA8_HxgzvyXhOHiKajsB4JFAb8Im/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-foreground/20 px-2.5 py-1.5 text-sm tracking-wide text-foreground transition-all hover:border-warm hover:text-warm hover:shadow-[0_0_12px_hsl(36_80%_55%/0.15)] sm:px-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center gap-1.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 sm:hidden"
              >
                <path d="M4.5 3.5A1.5 1.5 0 0 1 6 2h5.586a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16.5A1.5 1.5 0 0 1 14.5 18H6a1.5 1.5 0 0 1-1.5-1.5v-13ZM9 8.75a.75.75 0 0 1 .75.75v2.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V9.5A.75.75 0 0 1 9 8.75Z" />
              </svg>
              <span className="hidden sm:inline">Resume</span>
            </motion.span>
          </MagneticLink>
        </nav>
      </div>
    </motion.header>
  );
}
