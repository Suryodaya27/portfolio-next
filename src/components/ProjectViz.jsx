"use client";

import { motion } from "framer-motion";

/* ───────────────────────────────────────────
   LLM Replay — shows a mini agent session
   being intercepted. Actual representation
   of what the tool does: capture and inspect.

   Agent ──request──▶ Proxy ──forward──▶ LLM
                        │
                   ◉ capture
                        │
                   ┌─────────┐
                   │ Session  │
                   │ ▸ req    │
                   │ ▸ tool   │
                   │ ▸ resp   │
                   │ ⚠ loop   │
                   └─────────┘
   ─────────────────────────────────────────── */
export function LLMReplayViz() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden"
    >
      <div className="py-4 flex items-start gap-6 text-[10px] tracking-wide font-mono">
        {/* The flow */}
        <div className="flex items-center gap-2 text-muted-foreground/50 shrink-0">
          <span>Agent</span>
          <motion.span
            className="text-warm/40"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ──▶
          </motion.span>
          <span className="text-warm/70">Proxy</span>
          <motion.span
            className="text-warm/40"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            ──▶
          </motion.span>
          <span className="text-muted-foreground/50">LLM</span>
        </div>

        {/* Captured session inspector */}
        <div className="border-l border-warm/20 pl-4 flex flex-col gap-1">
          <span className="text-warm/50 text-[9px] uppercase tracking-[0.2em]">Session #247</span>
          {[
            { icon: "▸", label: "POST /chat", color: "text-muted-foreground/40" },
            { icon: "▸", label: 'tool: search("GDP data")', color: "text-muted-foreground/40" },
            { icon: "▸", label: "tool: calculate({...})", color: "text-muted-foreground/40" },
            { icon: "⚠", label: "loop detected × 3", color: "text-warm/60" },
            { icon: "▸", label: "response: 200", color: "text-muted-foreground/40" },
          ].map((line, i) => (
            <motion.span
              key={i}
              className={line.color}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.3 }}
            >
              {line.icon} {line.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────
   CineLens — shows an actual analysis output.
   Frame → detections appearing with confidence.

   ┌──────────────────────────────┐
   │ ┌──────┐        ┌───────┐   │
   │ │ Tony │ 87%    │ Chair │   │
   │ │Stark │        └───────┘   │
   │ └──────┘                    │
   │          Scene: workshop    │
   │          Mood: tense        │
   └──────────────────────────────┘
   ─────────────────────────────────────────── */
export function CineLensViz() {
  const detections = [
    { label: "Tony Stark", conf: "87%", delay: 0.2 },
    { label: "Pepper Potts", conf: "74%", delay: 0.5 },
    { label: "Workshop", conf: "scene", delay: 0.8 },
    { label: "Sunglasses", conf: "obj", delay: 1.1 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="overflow-hidden"
    >
      <div className="py-4 flex items-start gap-6 text-[10px] tracking-wide font-mono">
        {/* SSE progress */}
        <div className="flex flex-col gap-1 text-muted-foreground/40 shrink-0">
          <span className="text-warm/50 text-[9px] uppercase tracking-[0.2em]">Processing</span>
          {["Downloading image", "YOLO detection", "Face matching", "Scene analysis", "Complete ✓"].map(
            (step, i) => (
              <motion.span
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: i < 4 ? 0.4 : 0.7 }}
                transition={{ delay: 0.1 + i * 0.3, duration: 0.3 }}
                className={i === 4 ? "text-warm/60" : ""}
              >
                {i < 4 ? "▸" : "●"} {step}
              </motion.span>
            )
          )}
        </div>

        {/* Detection results */}
        <div className="border-l border-warm/20 pl-4 flex flex-col gap-1">
          <span className="text-warm/50 text-[9px] uppercase tracking-[0.2em]">Detections</span>
          {detections.map((d, i) => (
            <motion.span
              key={d.label}
              className="text-muted-foreground/40"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: d.delay, duration: 0.3 }}
            >
              <span className="text-warm/50">{d.conf}</span>{" "}
              {d.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────
   Map project title → viz
   ─────────────────────────────────────────── */
const VIZ_MAP = {
  "LLM Replay": LLMReplayViz,
  "CineLens": CineLensViz,
};

export function getProjectViz(title) {
  return VIZ_MAP[title] || null;
}
