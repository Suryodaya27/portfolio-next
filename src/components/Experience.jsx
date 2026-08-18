"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Member of Technical Staff",
    company: "Nielsen (Gracenote)",
    period: "Aug 2024 — Present",
    description:
      "Building scalable automation systems and backend APIs. Migrated legacy RPA bots to Python with AWS deployment. Developed APIs that improved control and flexibility for business teams. Designed intelligent data processing pipelines for unstructured content.",
  },
];

export default function Experience() {
  return (
    <>
      <div className="flex justify-center py-4">
        <span className="text-muted-foreground/30 select-none">&middot;</span>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        id="experience"
        className="scroll-mt-20 py-16"
      >
        <h2 className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
          Experience
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="border-l-2 border-warm/40 pl-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-xl text-foreground">
                  {exp.role}
                </h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-warm/80">
                {exp.company}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
