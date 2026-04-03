"use client";

import { motion } from "framer-motion";

const G  = "#2D6A4F";
const GL = "#52B788";
const AM = "#F4A261";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0  },
  transition: { duration: 0.55, ease: [0.22,1,0.36,1] as [number,number,number,number], delay },
});

const inputs = [
  { icon: "📍", label: "GPS pin" },
  { icon: "☀️", label: "PV layout" },
  { icon: "🌾", label: "Crop type" },
];

const outputs = [
  { icon: "📋", label: "Permit number",       detail: "Crop yield ≥78/90% compliance",  color: G  },
  { icon: "⚡", label: "Energy forecast",     detail: "P50 / P75 / P90",               color: GL },
  { icon: "💹", label: "Investment analysis", detail: "IRR, NPV, LCOE, 30-yr cash flow",color: AM },
  { icon: "🎲", label: "Risk assessment",     detail: "10,000 Monte Carlo scenarios",   color: AM },
  { icon: "📄", label: "Compliance package",  detail: "Regulator-ready documentation", color: G  },
];

const personas = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Engineering Office",
    company: "ACN Contract",
    quote: "I delivered 4 feasibility studies last year. With DualEnergy, I deliver 12 — with better margins and numbers regulators actually trust.",
    stat: "3× throughput",
    color: G,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    label: "Originator",
    company: "Axpo, BayWa r.e.",
    quote: "I'm not making a €50M decision on a consultant's opinion anymore. I'm making it on a physics-based simulation validated against field data.",
    stat: "Bankable number",
    color: GL,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    label: "Developer-Designer",
    company: "Nextpower",
    quote: "I can test 500 panel configurations in an afternoon and find the one that maximizes energy, keeps the crop alive, and delivers the best IRR.",
    stat: "166× configurations",
    color: AM,
  },
];

export default function Slide3WhatWeDo() {
  return (
    <div className="relative w-full h-full flex flex-col px-14 py-8 select-none" style={{ background: BG }}>

      {/* ── HEADER ── */}
      <motion.div {...fadeUp(0)} className="mb-5">
        <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-1.5" style={{ color: GL }}>What We Do</p>
        <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", color: CH }}>
          We produce the number.{" "}
          <span style={{ color: G }}>Then we protect it for 30 years.</span>
        </h2>
      </motion.div>

      {/* ── HORIZONTAL FLOW STRIP ── */}
      <motion.div {...fadeUp(0.07)}
        className="rounded-2xl border flex items-stretch gap-0 mb-5 overflow-hidden"
        style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>

        {/* Input card */}
        <div className="flex flex-col justify-center px-5 py-4 gap-2" style={{ background: "#EDF6F0", minWidth: 160 }}>
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold mb-0.5" style={{ color: GL }}>3 inputs</p>
          {inputs.map(inp => (
            <div key={inp.label} className="flex items-center gap-2">
              <span className="text-sm">{inp.icon}</span>
              <span className="text-xs font-medium" style={{ color: CH }}>{inp.label}</span>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center px-3" style={{ color: "#D1D5DB" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        {/* Hero — 45 minutes */}
        <div className="flex flex-col items-center justify-center px-8 py-4 border-x" style={{ borderColor: "#E5E5E0" }}>
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22,1,0.36,1] }}
            className="font-black tabular-nums leading-none"
            style={{ fontSize: "clamp(3rem,6vw,5rem)", color: G }}>
            45
          </motion.span>
          <span className="text-sm font-medium tracking-wide mt-0.5" style={{ color: "#6B7280" }}>minutes</span>
          <p className="text-[9px] text-center mt-1.5 leading-snug" style={{ color: "#9CA3AF", maxWidth: 120 }}>
            vs €50–100K<br/>and 3–6 months today
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center px-3" style={{ color: "#D1D5DB" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>

        {/* Outputs */}
        <div className="flex flex-col justify-center px-5 py-4 gap-1.5 flex-1">
          <p className="text-[9px] tracking-[0.18em] uppercase font-semibold mb-0.5" style={{ color: "#9CA3AF" }}>Complete package</p>
          {outputs.map((o, i) => (
            <motion.div key={o.label}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
              className="flex items-center gap-2">
              <span className="text-xs">{o.icon}</span>
              <span className="text-xs font-semibold" style={{ color: o.color }}>{o.label}</span>
              <span className="text-[9px]" style={{ color: "#9CA3AF" }}>— {o.detail}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── PERSONA CARDS ── */}
      <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
        {personas.map((p, i) => (
          <motion.div key={p.label} {...fadeUp(0.18 + i * 0.1)}
            className="rounded-2xl border flex flex-col overflow-hidden"
            style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>

            {/* Color top accent */}
            <div className="h-1 w-full" style={{ background: p.color }} />

            <div className="flex flex-col flex-1 px-4 py-3 gap-2">
              {/* Header row */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${p.color}15`, color: p.color }}>
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-tight truncate" style={{ color: CH }}>{p.label}</p>
                  <p className="text-[9px] leading-tight" style={{ color: "#9CA3AF" }}>{p.company}</p>
                </div>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={{ background: `${p.color}15`, color: p.color }}>
                  {p.stat}
                </span>
              </div>

              {/* Quote */}
              <p className="text-[11px] leading-relaxed italic flex-1" style={{ color: "#4B5563" }}>
                &ldquo;{p.quote}&rdquo;
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── ENGINE 2 STRIP ── */}
      <motion.div {...fadeUp(0.5)}
        className="mt-4 rounded-2xl border flex items-center gap-4 px-5 py-3"
        style={{ background: "#FFF8EE", borderColor: `${AM}40` }}>

        {/* Icon */}
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${AM}25` }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={AM} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold" style={{ color: AM }}>After construction → Engine 2</span>
          <span className="text-xs ml-2" style={{ color: "#6B7280" }}>
            Our controller optimizes the tracker every 15 minutes — maximize energy AND protect crop yield.{" "}
            <strong style={{ color: CH }}>First dual-objective system in the market.</strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-[10px] font-semibold px-3 py-1.5 rounded-xl"
          style={{ background: `${AM}20`, color: AM }}>
          30-yr recurring
        </div>
      </motion.div>

    </div>
  );
}
