"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

// Revenue trajectory from the deck
const revenueRows = [
  { year: "2026", design: "€100K", ops: "—", total: "€100K", pct: "0%", highlight: false },
  { year: "2027", design: "€250K", ops: "€25K", total: "€275K", pct: "9%", highlight: false },
  { year: "2028", design: "€400K", ops: "€125K", total: "€525K", pct: "24%", highlight: false },
  { year: "2029", design: "€500K", ops: "€400K", total: "€900K", pct: "44%", highlight: false },
  { year: "2030", design: "€500K", ops: "€1.0M", total: "€1.5M", pct: "67%", highlight: false },
  { year: "2031", design: "€500K", ops: "€2.5M", total: "€3.0M", pct: "83%", highlight: true },
];

// IRR scenario table
const irrRows = [
  { scenario: "Pre-Seed (now)", valuation: "CHF 3M pre", moic: "—", irr: "—" },
  { scenario: "Seed (M12–18)", valuation: "CHF 12M", moic: "4×", irr: "170%" },
  { scenario: "Series A (M30–36)", valuation: "CHF 40M", moic: "13×", irr: "230%" },
  { scenario: "Exit (M60–72)", valuation: "CHF 80–150M", moic: "25–50×", irr: "120–160%", highlight: true },
];

// Exit comparables
const exitComps = [
  { via: "Revenue multiple (8–15× on €3M)", multiple: "8–15×", value: "€24–45M", comp: "Energy software M&A" },
  { via: "Strategic (data asset + MPC)", multiple: "15–25×", value: "€45–75M", comp: "Climate Corp model" },
  { via: "Category leader", multiple: "25×+", value: "€75M+", comp: "Aurora Solar trajectory" },
];

const G  = "#2D6A4F";
const GL = "#52B788";
const AM = "#F4A261";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

export default function AppendixFinancials() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-12 py-8 overflow-hidden select-none" style={{ background: BG }}>
      <motion.div className="relative z-10 w-full max-w-5xl flex flex-col gap-5" initial="initial" animate="animate">

        <motion.div {...fadeUp(0.0)} className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: GL }}>Appendix A — Financials</span>
          <h2 className="text-2xl font-bold" style={{ color: CH }}>Revenue Trajectory &amp; Investor Returns</h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">
          <motion.div {...fadeUp(0.1)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Revenue Trajectory</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead><tr><th>Year</th><th className="text-right">Design</th><th className="text-right">Ops</th><th className="text-right">Total</th><th className="text-right">Rec%</th></tr></thead>
                <tbody>
                  {revenueRows.map(r => (
                    <tr key={r.year} style={r.highlight ? { background: `${G}08` } : {}}>
                      <td><span style={{ fontWeight: r.highlight ? 700 : undefined, color: r.highlight ? G : undefined }}>{r.year}</span></td>
                      <td className="text-right tabular-nums" style={{ color: "#6B7280" }}>{r.design}</td>
                      <td className="text-right tabular-nums" style={{ color: r.ops === "—" ? "#D1D5DB" : GL }}>{r.ops}</td>
                      <td className="text-right tabular-nums" style={{ color: r.highlight ? G : CH, fontWeight: r.highlight ? 700 : undefined }}>{r.total}</td>
                      <td className="text-right tabular-nums" style={{ color: r.highlight ? G : "#9CA3AF" }}>{r.pct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[9px]" style={{ color: "#9CA3AF" }}>Management projections. Every design project becomes an operational subscriber 12–18 months post-construction.</p>
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="col-span-3 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>IRR Scenario — CHF 750K at CHF 3M Pre-Money</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead><tr><th>Scenario</th><th className="text-right">Valuation</th><th className="text-right">MOIC</th><th className="text-right">IRR</th></tr></thead>
                <tbody>
                  {irrRows.map(r => (
                    <tr key={r.scenario} style={r.highlight ? { background: `${G}08` } : {}}>
                      <td><span style={{ color: r.highlight ? G : undefined, fontWeight: r.highlight ? 600 : undefined }}>{r.scenario}</span></td>
                      <td className="text-right tabular-nums" style={{ color: "#6B7280" }}>{r.valuation}</td>
                      <td className="text-right tabular-nums" style={{ color: r.moic === "—" ? "#D1D5DB" : GL, fontWeight: r.highlight ? 700 : undefined }}>{r.moic}</td>
                      <td className="text-right tabular-nums" style={{ color: r.irr === "—" ? "#D1D5DB" : AM, fontWeight: r.highlight ? 700 : undefined }}>{r.irr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Exit Comparables</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead><tr><th>Exit via</th><th className="text-right">Multiple</th><th className="text-right">Implied Value</th><th>Comparable</th></tr></thead>
                <tbody>
                  {exitComps.map(r => (
                    <tr key={r.via}>
                      <td className="text-[10px]">{r.via}</td>
                      <td className="text-right tabular-nums" style={{ color: G }}>{r.multiple}</td>
                      <td className="text-right tabular-nums" style={{ color: CH }}>{r.value}</td>
                      <td className="text-[9px]" style={{ color: "#9CA3AF" }}>{r.comp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[9px]" style={{ color: "#9CA3AF" }}>
              Seed step-up based on 10+ customers, €100K revenue, validated MPC. Exit range based on 8–15× revenue at €3M ARR (2031) or strategic premium for data asset.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
