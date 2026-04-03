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

const markets = [
  { label: "TAM", value: "$9.3B",  sub: "Global agrivoltaic software by 2031", color: "#9CA3AF", r: 115 },
  { label: "SAM", value: "€500M",  sub: "EU agrivoltaic software + consulting", color: GL,        r: 76  },
  { label: "SOM", value: "€3–5M",  sub: "Italy + France, 50–100 clients by 2028", color: G,      r: 36  },
];

const timeline = [
  { date: "2022", flag: "🇪🇺", event: "EU REPowerEU",          detail: "600 GW solar by 2030 — farmland is the only available land.", color: G  },
  { date: "2023", flag: "🇮🇹", event: "Italy DM 436/2023",      detail: "Mandatory yield prediction created. 40% CAPEX grant + €93/MWh FiP — ONLY if you prove crop compliance.", color: G  },
  { date: "2024", flag: "🇫🇷", event: "France CRE → 90%",       detail: "Even stricter requirement → even more demand for simulation.", color: GL },
  { date: "2026", flag: "⚡",  event: "Italy RED III (D.Lgs 5/2026)", detail: "CER B2B model adds ~40% revenue per MWp for community solar.", color: AM },
];

export default function Slide5Market() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>Market &amp; Timing</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            The regulation <span style={{ color: G }}>created the demand.</span>{" "}
            Climate change is accelerating it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — market circles + detail */}
          <motion.div {...fadeUp(0.07)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Market Size</p>

            {/* Concentric rings */}
            <div className="rounded-2xl border flex items-center justify-center relative"
              style={{ height: 190, background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              {markets.map((m, i) => (
                <motion.div key={m.label}
                  className="absolute rounded-full border-2"
                  style={{ width: m.r * 2, height: m.r * 2, borderColor: `${m.color}50`, background: i === 2 ? `${m.color}15` : "transparent" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22,1,0.36,1] }}
                />
              ))}
              <div className="relative z-10 flex flex-col items-center gap-1">
                {markets.map(m => (
                  <div key={m.label} className="flex items-center gap-1.5">
                    <span className="text-[9px] font-black w-7 shrink-0" style={{ color: m.color }}>{m.label}</span>
                    <span className="text-sm font-black tabular-nums" style={{ color: m.color }}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail rows */}
            <div className="flex flex-col gap-1.5">
              {markets.map((m, i) => (
                <motion.div key={m.label} {...fadeUp(0.18 + i * 0.07)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <span className="text-xs font-black w-8 shrink-0" style={{ color: m.color }}>{m.label}</span>
                  <div className="flex-1">
                    <span className="text-sm font-bold tabular-nums" style={{ color: m.color }}>{m.value}</span>
                    <p className="text-[9px] leading-snug" style={{ color: "#9CA3AF" }}>{m.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Beachhead */}
            <motion.div {...fadeUp(0.42)}
              className="rounded-2xl p-3.5 border"
              style={{ background: `${G}08`, borderColor: `${G}30` }}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-lg">🇮🇹</span>
                <p className="text-xs font-bold" style={{ color: G }}>Beachhead: Italy · 2 GW stuck</p>
              </div>
              <p className="text-[10px] leading-relaxed" style={{ color: "#6B7280" }}>
                Capital, land, hardware — all ready. Missing only the permit.{" "}
                <strong style={{ color: CH }}>We produce the document that unlocks construction.</strong>
              </p>
              <p className="text-[9px] mt-1.5" style={{ color: "#9CA3AF" }}>Italy → France → Germany → EU → global</p>
            </motion.div>
          </motion.div>

          {/* RIGHT — timeline */}
          <motion.div {...fadeUp(0.1)} className="col-span-3 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
              Why This Market Exists Now — Didn't 24 Months Ago
            </p>

            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-[27px] top-7 bottom-4 w-px" style={{ background: "#E5E5E0" }}/>

              {timeline.map((e, i) => (
                <motion.div key={e.event} {...fadeUp(0.14 + i * 0.09)}
                  className="relative flex gap-4 pb-4 last:pb-0">
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 shrink-0 rounded-2xl flex flex-col items-center justify-center gap-0.5 border"
                    style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                    <span className="text-lg leading-none">{e.flag}</span>
                    <span className="text-[9px] font-black tabular-nums" style={{ color: e.color }}>{e.date}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-bold mb-1" style={{ color: e.color }}>{e.event}</p>
                    <p className="text-[11px] leading-relaxed" style={{ color: "#6B7280" }}>{e.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p {...fadeUp(0.65)}
              className="text-[10px] pt-2.5 border-t text-center"
              style={{ borderColor: "#E5E5E0", color: "#9CA3AF" }}>
              We start with one permit in one country. The opportunity:{" "}
              <span style={{ color: G, fontWeight: 600 }}>the intelligence standard for the entire agrivoltaic economy.</span>
            </motion.p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
