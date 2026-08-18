"use client";

import { motion } from "framer-motion";

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

export default function Skills() {
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
        id="skills"
        className="scroll-mt-20 py-16"
      >
        <h2 className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
          Skills
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground/70">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-warm/40 hover:text-warm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
