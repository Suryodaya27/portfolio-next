"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Member of Technical Staff",
    company: "Gracenote (Nielsen)",
    period: "Aug 2024 — Present",
    highlights: [
      "Built and maintained parsers for an ETL pipeline across 10+ source types, each with its own schema, file format, and delivery method. Reduced failed ingestion jobs by ~20%.",
      "Migrated email ingestion from SMTP to AWS SES with S3 storage and Lambda for attachment extraction. Built an SNS/SQS polling pipeline where clients push schedule data via SNS and a cron routes messages to the parser.",
      "Migrated 10+ UiPath bots to Python (Playwright, requests, pandas) on AWS with GitLab CI/CD. Added threaded parallelism and eliminated UiPath licensing costs entirely.",
      "Replaced a blocking SFTP implementation with cURL-based selective retrieval, cutting processing time from hours to minutes on 1,000+ file workloads.",
      "Automated parsing for 20+ channels with irregular PDF layouts. Built MCP tooling for config verification and extended Bedrock/Claude-assisted mapping recovery.",
      "Built Jira automation using REST API and Google Apps Script. Auto-creates tickets, reorders backlog, maps fields, and handles real-time status transitions via webhooks.",
    ],
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
        <SectionHeading>Experience</SectionHeading>
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
              <ul className="mt-3 flex flex-col gap-2">
                {exp.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-warm/40" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
