"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const experiences = [
  {
    role: "Member of Technical Staff",
    company: "Nielsen (Gracenote)",
    period: "Aug 2024 — Present",
    description:
      "Built and maintained ETL parsers across 8+ source types with AWS Bedrock for auto-generating extraction rules. Led infrastructure upgrades (Ubuntu, MySQL 8.0), set up Jenkins CI/CD pipelines, and migrated 10+ UiPath bots to Python — eliminating licensing costs and cutting deploy times from 45 minutes to a single trigger.",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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

export default function Experience() {
  return (
    <>
      <SectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        id="experience"
        className="scroll-mt-20 py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-2 text-sm uppercase tracking-widest text-muted-foreground"
        >
          Experience
        </motion.h2>
        <div className="mt-8 flex flex-col gap-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              className="group relative border-l-2 border-warm/40 pl-6"
            >
              <motion.span
                className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-warm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              />
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
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
