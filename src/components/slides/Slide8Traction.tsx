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

const assets = [
  { label: "29,000 lines of simulation code",           detail: "Built & validated",               done: true },
  { label: "94% accuracy on published field trial",     detail: "DOI public · peer-reviewed",       done: true },
  { label: "30+ crop models integrated",                detail: "Operational",                      done: true },
  { label: "5-country subsidy engine",                  detail: "IT/FR/DE/US/CH — built",          done: true },
  { label: "Financial DCF + Monte Carlo risk engine",   detail: "Built",                            done: true },
  { label: "React frontend (working prototype)",        detail: "Functional · demo today",          done: true },
  { label: "First client: ACN Contract",                detail: "Active — data exchange phase",     done: true },
  { label: "Validation partner: Nextpower",             detail: "Active",                           done: true },
  { label: "Inbound from Solar Farm Summit",            detail: "In discussion",                    done: true },
];

const roadmap = [
  { q: "Q1 2026", milestone: "Incorporate · SaaS v1 · First paying customers", proves: "Product works outside our laptops", color: G  },
  { q: "Q2 2026", milestone: "5 paying design customers",                       proves: "People pay for this",              color: GL },
  { q: "Q3 2026", milestone: "MPC prototype on real tracker hardware",          proves: "Engine 2 is real",                 color: AM },
  { q: "Q4 2026", milestone: "10+ customers · €100K revenue · MPC TRL 4–5",   proves: "Seed-ready",                       color: AM },
];

const exits = [
  { icon: "☀️", type: "Tracker OEMs",  who: "Nextracker ($7B), Array Tech ($2B)", why: "Agri-trackers need crop intelligence" },
  { icon: "🏭", type: "Large IPPs",    who: "Enel, Statkraft, BayWa r.e.",        why: "Portfolio-wide agrivoltaic optimization" },
  { icon: "🌱", type: "Agri-digital",  who: "Climate Corp model",                 why: "Bayer paid $1.1B for a crop digital twin" },
];

export default function Slide8Traction() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>Traction &amp; Roadmap</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            Already building.{" "}
            <span style={{ color: G }}>Already earning trust.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — assets */}
          <motion.div {...fadeUp(0.07)} className="col-span-2 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Built with €0 funding</p>
              <span className="text-[9px] px-2 py-0.5 rounded-full font-bold"
                style={{ background: `${G}12`, color: G, border: `1px solid ${G}25` }}>
                {assets.length} assets
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {assets.map((a, i) => (
                <motion.div key={a.label}
                  initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${G}15` }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke={G} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium leading-tight truncate" style={{ color: CH }}>{a.label}</p>
                    <p className="text-[8px]" style={{ color: "#9CA3AF" }}>{a.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] font-bold" style={{ color: G }}>This is not a PowerPoint. We demo the product today.</p>
          </motion.div>

          {/* RIGHT — roadmap + exits */}
          <motion.div {...fadeUp(0.1)} className="col-span-3 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Roadmap — What Pre-Seed Funds</p>

            <div className="grid grid-cols-2 gap-2">
              {roadmap.map((r, i) => (
                <motion.div key={r.q} {...fadeUp(0.14 + i * 0.08)}
                  className="flex flex-col gap-2 rounded-2xl p-3.5 border relative overflow-hidden"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: r.color }}/>
                  <p className="text-[9px] font-black tracking-widest uppercase mt-1" style={{ color: r.color }}>{r.q}</p>
                  <p className="text-[10px] font-semibold leading-snug" style={{ color: CH }}>{r.milestone}</p>
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span style={{ color: r.color, fontSize: "0.6rem" }}>→</span>
                    <p className="text-[9px]" style={{ color: "#9CA3AF" }}>Proves: {r.proves}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Exits */}
            <div className="flex flex-col gap-2 mt-1">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Who Writes the Exit Check</p>
              {exits.map((e, i) => (
                <motion.div key={e.type} {...fadeUp(0.48 + i * 0.07)}
                  className="flex items-center gap-3 rounded-2xl px-3.5 py-3 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <span className="text-xl shrink-0">{e.icon}</span>
                  <div className="flex-1">
                    <p className="text-xs font-bold" style={{ color: G }}>{e.type}</p>
                    <p className="text-[9px]" style={{ color: "#9CA3AF" }}>{e.who}</p>
                  </div>
                  <p className="text-[9px] text-right max-w-[120px]" style={{ color: "#6B7280" }}>{e.why}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
