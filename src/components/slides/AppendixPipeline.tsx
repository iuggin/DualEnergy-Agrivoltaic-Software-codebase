"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

// Competitive landscape from the deck
const competitors = [
  { name: "DualEnergy", pv: true, crop: true, micro: true, mpc: true, financial: true, speed: "45 min", flywheel: true, highlight: true },
  { name: "PVsyst", pv: true, crop: false, micro: false, mpc: false, financial: false, speed: "N/A", flywheel: false },
  { name: "Consulting", pv: "partial", crop: "partial", micro: false, mpc: false, financial: "partial", speed: "3–6 months", flywheel: false },
  { name: "Others", pv: "partial", crop: "partial", micro: false, mpc: false, financial: "partial", speed: "Days", flywheel: false },
];

const subsidy = [
  { flag: "🇮🇹", country: "Italy", capex: "40% grant", revenue: "€80–93/MWh FiP", duration: "20 yr" },
  { flag: "🇫🇷", country: "France", capex: "—", revenue: "€60–90/MWh FiP", duration: "20 yr" },
  { flag: "🇩🇪", country: "Germany", capex: "—", revenue: "~€80/MWh", duration: "20 yr" },
  { flag: "🇺🇸", country: "USA", capex: "30% ITC", revenue: "—", duration: "One-time" },
  { flag: "🇨🇭", country: "Switzerland", capex: "300–400 CHF/kWp", revenue: "—", duration: "One-time" },
];

const objections = [
  { q: "No incorporation?", a: "Incorporating Q1 2026. Built product first — 29K lines validated before spending on legal." },
  { q: "No revenue?", a: "Two active engagements (ACN, Nextpower). We validated tech before selling. Revenue starts Q1." },
  { q: "PVsyst copies it?", a: "They'd need DSSAT (40yr crop science), microclimate coupling, field validation. 3–5yr of R&D. No MPC. No data flywheel." },
  { q: "Sounds academic?", a: "Started as research. Became a company when developers said they can't get permits. Demo today." },
  { q: "How is MPC different?", a: "Every tracker today: one objective (max energy). Ours: two objectives (max energy + protect crop). First dual-objective controller." },
  { q: "IP?", a: "Trade secrets (29K lines). Patent planned for MPC crop-aware method. Deepest IP = the data asset." },
];

function Check({ val }: { val: boolean | string }) {
  if (val === true) return <span style={{ color: "#2D6A4F", fontWeight: 700 }}>✓</span>;
  if (val === "partial") return <span style={{ color: "#F4A261", fontWeight: 700 }}>~</span>;
  return <span style={{ color: "#D1D5DB" }}>×</span>;
}

const G  = "#2D6A4F";
const GL = "#52B788";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

export default function AppendixPipeline() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-12 py-8 overflow-hidden select-none" style={{ background: BG }}>
      <motion.div className="relative z-10 w-full max-w-5xl flex flex-col gap-5" initial="initial" animate="animate">

        <motion.div {...fadeUp(0.0)} className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: GL }}>Appendix B — Competitive Landscape</span>
          <h2 className="text-2xl font-bold" style={{ color: CH }}>Competitive Matrix &amp; Subsidy Landscape</h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">
          <motion.div {...fadeUp(0.1)} className="col-span-3 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Competitive Landscape</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th className="text-center">PV sim</th>
                    <th className="text-center">Crop (30+)</th>
                    <th className="text-center">Micro-climate</th>
                    <th className="text-center">MPC</th>
                    <th className="text-center">Financial DCF</th>
                    <th className="text-center">Speed</th>
                    <th className="text-center">Data flywheel</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map(c => (
                    <tr key={c.name} style={c.highlight ? { background: `${G}08` } : {}}>
                      <td>
                        <span style={{ color: c.highlight ? G : CH, fontWeight: c.highlight ? 700 : undefined }}>{c.name}</span>
                      </td>
                      <td className="text-center"><Check val={c.pv} /></td>
                      <td className="text-center"><Check val={c.crop} /></td>
                      <td className="text-center"><Check val={c.micro} /></td>
                      <td className="text-center"><Check val={c.mpc} /></td>
                      <td className="text-center"><Check val={c.financial} /></td>
                      <td className="text-center text-[10px]" style={{ color: c.highlight ? G : "#9CA3AF" }}>{c.speed}</td>
                      <td className="text-center"><Check val={c.flywheel} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Subsidy Landscape</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead><tr><th>Country</th><th>CAPEX</th><th>Revenue</th><th>Duration</th></tr></thead>
                <tbody>
                  {subsidy.map(s => (
                    <tr key={s.country}>
                      <td>{s.flag} {s.country}</td>
                      <td className="text-[10px]" style={{ color: "#6B7280" }}>{s.capex}</td>
                      <td className="text-[10px]" style={{ color: G }}>{s.revenue}</td>
                      <td className="text-[10px] tabular-nums" style={{ color: "#9CA3AF" }}>{s.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Objection Handling</p>
              {objections.slice(0, 4).map((o, i) => (
                <motion.div key={o.q} {...fadeUp(0.2 + i * 0.06)}
                  className="rounded-xl p-2 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <p className="text-[9px] font-bold mb-0.5" style={{ color: CH }}>"{o.q}"</p>
                  <p className="text-[9px] leading-snug" style={{ color: "#6B7280" }}>{o.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
