"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const projects = [
  {
    title: "LLM Replay",
    description:
      "A transparent HTTP proxy that captures AI agent sessions, shows you the full decision flow in real-time, and flags issues automatically.",
    github: "https://github.com/Suryodaya27/llm-replay",
    demo: "https://www.youtube.com/watch?v=Ind6bZS_7Js",
    tech: ["Node.js", "TypeScript", "WebSocket", "React", "Ollama", "OpenAI", "Anthropic"],
  },
  {
    title: "CineLens",
    description:
      "AI-powered movie scene analysis — identify actors, detect objects, analyze scenes, and find shopping links from a single movie frame.",
    github: "https://github.com/Suryodaya27/cineLens",
    demo: "https://youtu.be/IJTzVnWbsN0",
    tech: ["Python", "FastAPI", "YOLOv8", "InsightFace", "pgvector", "Redis", "Ollama"],
  },
  {
    title: "LeetCode + GFG Post Intelligence",
    description:
      "Agentic RAG system for chatting with interview preparation content from LeetCode and GeeksforGeeks.",
    github: "https://github.com/Suryodaya27/rag_interview_experience",
    tech: ["Python", "LangChain", "RAG", "Vector DB"],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
        <motion.h2
          variants={fadeUp}
          className="mb-2 text-sm uppercase tracking-widest text-muted-foreground"
        >
          Projects
        </motion.h2>

        <div className="mt-8 flex flex-col">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={slideIn}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative flex flex-col gap-2 border-b border-border/50 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="absolute left-0 top-0 h-full w-px bg-warm/0 transition-colors group-hover:bg-warm/60" />

              <div className="flex-1 pl-4">
                <h3 className="flex items-center gap-2 text-base font-medium text-foreground transition-colors group-hover:text-warm">
                  {project.title}
                  <span className="inline-block text-warm opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    &rarr;
                  </span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                {project.tech && (
                  <p className="mt-2 text-[11px] text-muted-foreground/40 tracking-wide">
                    {project.tech.join(" · ")}
                  </p>
                )}
              </div>
              <div className="flex gap-4 pl-4 pt-2 sm:pt-0 sm:pl-8 shrink-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm/70 underline underline-offset-4 decoration-warm/30 transition-colors hover:text-warm hover:decoration-warm/50"
                  >
                    Demo
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline underline-offset-4 decoration-border transition-colors hover:text-warm hover:decoration-warm/40"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
