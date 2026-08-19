"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const skillGroups = [
  {
    label: "Languages",
    skills: ["C++", "JavaScript", "Python", "PHP"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "SvelteKit"],
  },
  {
    label: "Backend & Infrastructure",
    skills: ["Node.js", "Express", "MySQL", "MongoDB", "Prisma", "AWS", "Postman"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <>
      <SectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        id="skills"
        className="scroll-mt-20 py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="mb-2 text-sm uppercase tracking-widest text-muted-foreground"
        >
          Skills
        </motion.h2>
        <div className="mt-8 flex flex-col gap-8">
          {skillGroups.map((group) => (
            <motion.div key={group.label} variants={fadeUp}>
              <h3 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground/70">
                {group.label}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  visible: { transition: { staggerChildren: 0.04 } },
                }}
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariant}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "hsl(36 80% 55% / 0.5)",
                      color: "hsl(36 80% 55%)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="cursor-default rounded-sm border border-border px-3 py-1.5 text-sm text-foreground/80 transition-shadow hover:shadow-[0_0_12px_hsl(36_80%_55%/0.15)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
