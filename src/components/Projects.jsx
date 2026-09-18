"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";
import SectionHeading from "./SectionHeading";
import { getProjectViz } from "./ProjectViz";
import config from "@/data/config.json";

const projects = config.projects;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const Viz = getProjectViz(project.title);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const showViz = isMobile || hovered;

  return (
    <motion.article
      variants={slideIn}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative border-b border-border/50 py-6"
    >
      <span className="absolute left-0 top-0 h-full w-px bg-warm/0 transition-colors group-hover:bg-warm/60" />

      <div className="pl-4">
        {/* Title row */}
        <h3 className="flex items-center gap-2 text-base font-medium text-foreground transition-colors group-hover:text-warm">
          {project.title}
          <span className="inline-block text-warm opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            &rarr;
          </span>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Visualization — hover on desktop, always on mobile */}
        <AnimatePresence>
          {showViz && Viz && <Viz />}
        </AnimatePresence>

        {/* Tech tags */}
        {project.tech && (
          <p className="mt-2 text-[11px] text-muted-foreground/40 tracking-wide">
            {project.tech.join(" · ")}
          </p>
        )}

        {/* Links — Demo stands out */}
        <div className="mt-3 flex items-center gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-warm/30 px-3 py-1 text-xs tracking-wide text-warm/80 transition-all hover:border-warm hover:text-warm hover:shadow-[0_0_12px_hsl(36_80%_55%/0.1)]"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                <path d="M6.5 3.5v9l6-4.5-6-4.5z" />
              </svg>
              Watch Demo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground/50 transition-colors hover:text-warm"
            >
              Live
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 transition-colors hover:text-warm"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <>
      <SectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        id="projects"
        className="scroll-mt-20 py-16"
      >
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-8 flex flex-col">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.section>
    </>
  );
}
