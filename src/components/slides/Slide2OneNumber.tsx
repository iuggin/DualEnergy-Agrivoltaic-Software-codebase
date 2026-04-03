"use client";

import { motion } from "framer-motion";

const G   = "#2D6A4F";
const GL  = "#52B788";
const AM  = "#F4A261";
const RE  = "#E76F51";
const CH  = "#1A1A2E";
const GR  = "#6B7280";
const BG  = "#F7F5F0";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

const regs = [
  { flag: "🇮🇹", country: "Italy",   law: "DM 436/2023", label: "≥ 78%", pct: 78 },
  { flag: "🇫🇷", country: "France",  law: "CRE tenders", label: "≥ 90%", pct: 90 },
  { flag: "🇩🇪", country: "Germany", law: "EEG 2023",    label: "Cat. I/II", pct: 80 },
];

const tools = [
  {
    name: "PVsyst",
    tag: "PV design standard",
    problem: "Models PV perfectly. Knows nothing about crops.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    color: AM,
  },
  {
    name: "DSSAT",
    tag: "USDA crop model",
    problem: "Models crops perfectly. Knows nothing about PV shadows.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: GL,
  },
  {
    name: "Consultants",
    tag: "Manual consulting",
    problem: "€50–100K · 3–6 months. Still can't produce bankable yield predictions.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    color: RE,
  },
];

const buyers = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    type: "Engineering offices",
    co: "ACN Contract — our first client",
    quote: "I can only do 4 studies a year. I need to do 10.",
    stat: "4/yr max",
    color: G,
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    type: "Originators",
    co: "Axpo, BayWa r.e.",
    quote: "I'm risking €50M on a consultant's best guess.",
    stat: "€50M at risk",
    color: GL,
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    type: "Developer-designers",
    co: "Nextpower",
    quote: "I test 3 configs. My competitor should test 300. Neither of us can.",
    stat: "3 vs 300",
    color: AM,
  },
];

export default function Slide2OneNumber() {
  return (
    <div
      className="relative w-full h-full flex flex-col overflow-hidden select-none"
      style={{ background: BG }}
    >
      <div className="relative w-full max-w-6xl mx-auto px-12 py-7 flex flex-col gap-5 h-full">

        {/* ── HEADLINE ── */}
        <motion.div {...up(0)} className="text-center">
          <p className="text-[9px] tracking-[0.22em] uppercase font-semibold mb-2" style={{ color: GL }}>
            The Problem
          </p>
          <h2 style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)", color: CH, fontWeight: 700, lineHeight: 1.25 }}>
            <span style={{ color: GR, fontWeight: 300 }}>"</span>
            What will the <span style={{ color: G }}>crop yield</span> be
            {" "}under panels that <span style={{ color: G }}>don't exist yet</span>?
            <span style={{ color: GR, fontWeight: 300 }}>"</span>
          </h2>
          <p className="mt-1.5 text-[12px]" style={{ color: GR }}>
            Europe requires proof of crop survival — before a single panel is installed.
          </p>
        </motion.div>

        {/* ── THREE-COLUMN BODY ── */}
        <div className="grid gap-4 flex-1" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>

          {/* COL 1 — Regulations */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
              What regulators demand
            </p>

            {regs.map((r, i) => (
              <motion.div key={r.country} {...up(0.08 + i * 0.06)}
                className="rounded-2xl px-3.5 py-2.5 border flex items-center gap-3"
                style={{ background: "#FFFFFF", borderColor: "#EBEBEB" }}>
                <span className="text-xl leading-none shrink-0">{r.flag}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold" style={{ color: CH }}>{r.country}</p>
                  <p className="text-[9px]" style={{ color: "#B0B0B0" }}>{r.law}</p>
                  <div className="mt-1 h-1 rounded-full overflow-hidden" style={{ background: "#F0EDE6" }}>
                    <motion.div className="h-full rounded-full"
                      style={{ background: AM }}
                      initial={{ width: 0 }}
                      animate={{ width: `${r.pct}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <span className="text-lg font-black tabular-nums shrink-0" style={{ color: AM }}>
                  {r.label}
                </span>
              </motion.div>
            ))}

            {/* 3.5 GW stat */}
            <motion.div {...up(0.28)}
              className="rounded-2xl px-3.5 py-3 border mt-1"
              style={{ background: `${G}08`, borderColor: `${G}20` }}>
              <p className="text-2xl font-black" style={{ color: G }}>~3.5 GW</p>
              <p className="text-[10px] leading-snug mt-0.5" style={{ color: GR }}>
                of agrivoltaic projects stuck in permitting across Europe — capital, land, and hardware ready.
                <br />
                <span style={{ color: CH, fontWeight: 600 }}>Missing: one number.</span>
              </p>
            </motion.div>
          </div>

          {/* COL 2 — What exists today */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
              What exists today — and why it fails
            </p>

            {tools.map((t, i) => (
              <motion.div key={t.name} {...up(0.1 + i * 0.07)}
                className="rounded-2xl px-3.5 py-2.5 border flex items-start gap-3"
                style={{ background: "#FFFFFF", borderColor: "#EBEBEB", borderLeftWidth: 3, borderLeftColor: t.color }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${t.color}15`, color: t.color }}>
                  {t.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[11px] font-bold" style={{ color: CH }}>{t.name}</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full font-medium"
                      style={{ background: `${t.color}15`, color: t.color }}>{t.tag}</span>
                  </div>
                  <p className="text-[10px] leading-snug" style={{ color: GR }}>{t.problem}</p>
                </div>
              </motion.div>
            ))}

            {/* Gap callout */}
            <motion.div {...up(0.32)}
              className="rounded-2xl px-3.5 py-2.5 border mt-1 flex items-center gap-2"
              style={{ background: `${RE}07`, borderColor: `${RE}25` }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={RE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <p className="text-[10px] leading-snug" style={{ color: GR }}>
                No tool bridges PV physics + crop biology.{" "}
                <span style={{ color: RE, fontWeight: 600 }}>The gap is structural.</span>
              </p>
            </motion.div>
          </div>

          {/* COL 3 — Buyers + clawback */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
              Three buyers feel this every day
            </p>

            {buyers.map((b, i) => (
              <motion.div key={b.type} {...up(0.12 + i * 0.07)}
                className="rounded-2xl px-3.5 py-2.5 border flex items-start gap-3"
                style={{ background: "#FFFFFF", borderColor: "#EBEBEB", borderLeftWidth: 3, borderLeftColor: b.color }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${b.color}15`, color: b.color }}>
                  {b.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1.5 flex-wrap mb-0.5">
                    <span className="text-[11px] font-bold" style={{ color: b.color }}>{b.type}</span>
                    <span className="text-[8px]" style={{ color: "#B0B0B0" }}>{b.co}</span>
                  </div>
                  <p className="text-[10px] italic leading-snug" style={{ color: GR }}>"{b.quote}"</p>
                </div>
                <span className="text-[9px] font-bold tabular-nums shrink-0 text-right leading-tight"
                  style={{ color: b.color, minWidth: 44 }}>{b.stat}</span>
              </motion.div>
            ))}

            {/* Clawback bombshell */}
            <motion.div {...up(0.38)}
              className="rounded-2xl px-3.5 py-3 border mt-1"
              style={{ background: "#FAFAF8", borderColor: `${RE}30` }}>
              <p className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: AM }}>
                The hidden operational risk
              </p>
              <p className="text-[10px] leading-relaxed" style={{ color: GR }}>
                Permit assumes ≥78% yield for 30 years. Year 7 drought drops it to 60%.
                The €93/MWh feed-in premium gets clawed back.
              </p>
              <p className="text-[13px] font-bold mt-1.5" style={{ color: RE }}>
                Twenty years of subsidized revenue — gone.
              </p>
              <p className="text-[9px] mt-1" style={{ color: CH }}>
                No tracker on the market knows crops exist underneath it.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
