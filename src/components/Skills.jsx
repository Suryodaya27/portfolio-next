"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

const skills = [
  "Python",
  "JavaScript",
  "AWS",
  "Docker",
  "Node.js",
  "React",
  "Next.js",
  "MongoDB",
  "Kubernetes",
  "Kafka",
  "Terraform",
  "Jenkins",
  "MySQL",
  "Express",
  "Git",
  "Linux",
  "Grafana",
  "Prisma",
  "Tailwind CSS",
  "C++",
  "SvelteKit",
  "HTML/CSS",
  "Postman",
  "PHP",
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

const cellVariant = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export default function Skills() {
  return (
    <>
      <SectionDivider />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          visible: { transition: { staggerChildren: 0.06 } },
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

        <motion.div
          className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border/50 bg-border/30 sm:grid-cols-4 md:grid-cols-6"
          variants={{
            visible: { transition: { staggerChildren: 0.03 } },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={cellVariant}
              whileHover={{
                backgroundColor: "hsl(220 15% 8%)",
                color: "hsl(36 80% 55%)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex items-center justify-center bg-background px-2 py-4 text-sm text-foreground/80 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
