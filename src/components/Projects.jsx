"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "LeetCode + GFG Post Intelligence",
    description:
      "Agentic RAG system for chatting with interview preparation content from LeetCode and GeeksforGeeks.",
    github: "https://github.com/Suryodaya27/rag_interview_experience",
  },
  {
    title: "AI Journaling App",
    description:
      "Backend service that generates AI summaries, insights, and goal recommendations from daily journal entries.",
    github: "https://github.com/Suryodaya27/ai-journal-backend",
  },
  {
    title: "Prepbuddy",
    description:
      "MCQ generator that creates quizzes from user input data for knowledge testing.",
    live: "https://prep-buddy-next.vercel.app",
    github: "https://github.com/Suryodaya27/prep-buddy-next",
  },
  {
    title: "Apna Mart",
    description:
      "Online grocery store with cart management and Razorpay payment integration.",
    live: "https://youtu.be/-JezvLU1dow",
    github: "https://github.com/Suryodaya27/marketPoint",
  },
  {
    title: "TrimTrends",
    description:
      "Platform for discovering and booking appointments at local barbershops.",
    live: "https://www.youtube.com/watch?v=MQEKdOPNHwI",
    github: "https://github.com/Suryodaya27/barber",
  },
  {
    title: "E-commerce Store",
    description:
      "React-based store with product browsing, cart, and wishlist management.",
    live: "https://ecommerce-thrift-store.netlify.app/",
    github: "https://github.com/Suryodaya27/ecom",
  },
  {
    title: "NewsApp",
    description:
      "Category-filtered news reader using NewsAPI, built with React.",
    github: "https://github.com/Suryodaya27/news",
  },
  {
    title: "The MovieDB",
    description:
      "SvelteKit app to search and explore movies via TMDB API.",
    live: "https://movie-iota-lilac.vercel.app/",
    github: "https://github.com/Suryodaya27/movie",
  },
  {
    title: "Notes Maker",
    description: "Minimal note-taking app with create, edit, and delete.",
    live: "https://suryodaya27.github.io/MyNotes-Notes-maker/",
    github: "https://github.com/Suryodaya27/MyNotes-Notes-maker",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <>
      <div className="flex justify-center py-4">
        <span className="text-muted-foreground/30 select-none">&middot;</span>
      </div>
      <section id="projects" className="scroll-mt-20 py-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-2 text-sm uppercase tracking-widest text-muted-foreground"
        >
          Projects
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-col divide-y divide-border"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div className="flex-1">
                <h3 className="flex items-center gap-2 text-base font-medium text-foreground transition-colors group-hover:text-warm">
                  {project.title}
                  <span className="inline-block translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 text-warm">
                    &rarr;
                  </span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4 pt-2 sm:pt-0 sm:pl-8 shrink-0">
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
        </motion.div>
      </section>
    </>
  );
}
