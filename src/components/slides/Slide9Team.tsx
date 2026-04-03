"use client";

import { motion } from "framer-motion";

const G  = "#2D6A4F";
const GL = "#52B788";
const AM = "#F4A261";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22,1,0.36,1] as [number,number,number,number], delay },
});

const founders = [
  {
    name: "Giacomo Aglio", initials: "GA", role: "CEO",
    focus: "Vision · Product · Fundraise",
    bg: "EPFL Engineering — his thesis is this product.",
    superpower: "Explains physics to regulators AND business to investors.",
    why: "Italian + EPFL + energy = perfect intersection",
    color: G,
  },
  {
    name: "Eugenio Serafino", initials: "ES", role: "COO",
    focus: "Commercial · Operations",
    bg: "Energy industry + business development.",
    superpower: "Sells to IPPs AND navigates corporate procurement.",
    why: "Energy network + commercial instinct",
    color: GL,
  },
  {
    name: "Angelo Giovine", initials: "AG", role: "CTO",
    focus: "Engineering · ML/AI",
    bg: "Software engineering + ML research.",
    superpower: "Builds production systems AND research prototypes.",
    why: "Technical depth + execution speed",
    color: AM,
  },
];

const hires = [
  { num: "1", role: "Backend Engineer",  why: "Python engine → production SaaS API",            when: "Month 1–2", color: G  },
  { num: "2", role: "Frontend Engineer", why: "Prototype → production UI",                      when: "Month 2–3", color: GL },
  { num: "3", role: "Sales Lead Italy",  why: "Agrivoltaic domain + Italian developer network", when: "Month 4–6", color: AM },
];

export default function Slide9Team() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>Team</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            Built 29,000 lines.{" "}
            <span style={{ color: G }}>Zero funding. Two active clients.</span>
          </h2>
        </motion.div>

        {/* Founder-market fit banner */}
        <motion.div {...fadeUp(0.07)}
          className="rounded-2xl px-4 py-3 border flex items-center gap-4"
          style={{ background: `${G}08`, borderColor: `${G}25` }}>
          <span className="text-2xl shrink-0">🎯</span>
          <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
            <strong style={{ color: G }}>Founder-market fit: </strong>
            Italian founders → Italian beachhead (language, network, regulatory knowledge).
            EPFL pedigree → technical credibility. Proof of execution: entire platform built before asking for money.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div className="grid grid-cols-3 gap-4">
          {founders.map((f, i) => (
            <motion.div key={f.name} {...fadeUp(0.14 + i * 0.09)}
              className="flex flex-col gap-3 rounded-2xl p-4 border"
              style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>

              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black shrink-0"
                  style={{ background: `${f.color}12`, border: `2px solid ${f.color}30`, color: f.color }}>
                  {f.initials}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: CH }}>{f.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[9px] font-black px-1.5 py-0.5 rounded-lg"
                      style={{ background: `${f.color}15`, color: f.color }}>{f.role}</span>
                    <span className="text-[9px]" style={{ color: "#9CA3AF" }}>{f.focus}</span>
                  </div>
                </div>
              </div>

              <div className="h-px" style={{ background: "#E5E5E0" }}/>

              {/* Details */}
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[8px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: "#9CA3AF" }}>Background</p>
                  <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{f.bg}</p>
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-wider font-semibold mb-0.5" style={{ color: "#9CA3AF" }}>Superpower</p>
                  <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{f.superpower}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-xl px-2 py-1.5 mt-1"
                  style={{ background: `${f.color}08`, border: `1px solid ${f.color}20` }}>
                  <span style={{ color: f.color, fontSize: "0.7rem" }}>→</span>
                  <p className="text-[10px] font-medium" style={{ color: f.color }}>{f.why}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* First 3 hires */}
        <motion.div {...fadeUp(0.44)} className="flex flex-col gap-2">
          <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>First 3 Hires — Lean by Design</p>
          <div className="grid grid-cols-3 gap-3">
            {hires.map((h, i) => (
              <motion.div key={h.role} {...fadeUp(0.48 + i * 0.07)}
                className="flex items-center gap-3 rounded-2xl p-3 border"
                style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                  style={{ background: `${h.color}12`, color: h.color, border: `1px solid ${h.color}25` }}>
                  #{h.num}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: h.color }}>{h.role}</p>
                  <p className="text-[9px]" style={{ color: "#6B7280" }}>{h.why}</p>
                  <p className="text-[8px]" style={{ color: "#9CA3AF" }}>{h.when}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
