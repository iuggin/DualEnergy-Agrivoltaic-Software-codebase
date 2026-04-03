"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

const G  = "#2D6A4F";
const GL = "#52B788";
const AM = "#F4A261";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

const engineLayers = [
  {
    layer: "Microclimate Engine",
    items: [
      "Irradiation: 3-zone spatial (beneath τ≈0.35, drip-line τ≈0.55, inter-row τ≈0.85)",
      "Temperature + humidity + wind models",
      "Creates modified weather for crop AND corrected albedo for PV",
    ],
    color: G,
  },
  {
    layer: "PV Simulation (pvlib)",
    items: [
      "20K+ PV module database",
      "Bifacial dynamic albedo — albedo = f(LAI, soil moisture, growth stage)",
      "15-category loss waterfall (soiling, clipping, LID, PID, degradation...)",
    ],
    color: GL,
  },
  {
    layer: "Crop Simulation (DSSAT)",
    items: [
      "30+ crops integrated",
      "3-zone spatial distribution per crop row",
      "Validated 94% accuracy against 5 published studies",
    ],
    color: AM,
  },
  {
    layer: "Financial DCF Engine",
    items: [
      "30-year model with 25-item BOM",
      "10,000 Monte Carlo scenarios",
      "5-country subsidy engine (IT / FR / DE / US / CH)",
    ],
    color: AM,
  },
];

const mpcLayer = {
  items: [
    "GNN surrogate trained on physics twin outputs: <10ms inference vs. 45-min full simulation",
    "Multi-objective: maximize energy + protect crop yield simultaneously",
    "Constraint: maintain regulatory yield threshold (e.g. ≥78% Italy)",
    "Feedback loop: actual yield data retrains GNN → model improves over time",
  ],
};

const unitEcon = [
  { metric: "Revenue/unit", engine1: "€10/kWp (one-time)", engine2: "€1,000/MW/yr (recurring)" },
  { metric: "Cost to serve", engine1: "€2/kWp", engine2: "€50/MW/yr" },
  { metric: "Gross margin", engine1: "80%", engine2: "95%", highlight: true },
  { metric: "CAC", engine1: "€5K", engine2: "€0 (upsell)" },
  { metric: "LTV", engine1: "€10K", engine2: "€30K (30yr, discounted)" },
  { metric: "LTV/CAC", engine1: "2×", engine2: "∞", highlight: true },
];

export default function AppendixTech() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full px-12 py-8 overflow-hidden select-none" style={{ background: BG }}>
      <motion.div className="relative z-10 w-full max-w-5xl flex flex-col gap-5" initial="initial" animate="animate">

        <motion.div {...fadeUp(0.0)} className="flex flex-col gap-1">
          <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: GL }}>Appendix C — Technology</span>
          <h2 className="text-2xl font-bold" style={{ color: CH }}>The Physics Engine &amp; Unit Economics</h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">
          <motion.div {...fadeUp(0.1)} className="col-span-3 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Simulation Architecture</p>
            <div className="grid grid-cols-2 gap-2">
              {engineLayers.map((l, i) => (
                <motion.div key={l.layer} {...fadeUp(0.14 + i * 0.07)}
                  className="flex flex-col gap-2 rounded-xl p-3 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0", borderTopColor: l.color, borderTopWidth: 2 }}>
                  <p className="text-[10px] font-bold" style={{ color: l.color }}>{l.layer}</p>
                  <ul className="flex flex-col gap-1">
                    {l.items.map(item => (
                      <li key={item} className="flex items-start gap-1 text-[9px] leading-snug" style={{ color: "#6B7280" }}>
                        <span style={{ color: l.color }} className="shrink-0 mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp(0.45)} className="rounded-xl p-3 border"
              style={{ background: `${AM}08`, borderColor: `${AM}30` }}>
              <p className="text-[10px] font-bold mb-1.5" style={{ color: AM }}>Engine 2 — Operational MPC Controller</p>
              <div className="grid grid-cols-2 gap-x-4">
                {mpcLayer.items.map(item => (
                  <div key={item} className="flex items-start gap-1 text-[9px] leading-snug mb-1" style={{ color: "#6B7280" }}>
                    <span style={{ color: AM }} className="shrink-0 mt-0.5">·</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp(0.12)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Unit Economics</p>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              <table className="pitch-table">
                <thead><tr><th>Metric</th><th className="text-right">Engine 1</th><th className="text-right">Engine 2</th></tr></thead>
                <tbody>
                  {unitEcon.map(r => (
                    <tr key={r.metric} style={r.highlight ? { background: `${G}08` } : {}}>
                      <td><span style={{ fontWeight: r.highlight ? 600 : undefined, color: r.highlight ? CH : undefined }}>{r.metric}</span></td>
                      <td className="text-right tabular-nums text-[10px]" style={{ color: r.highlight ? GL : "#6B7280" }}>{r.engine1}</td>
                      <td className="text-right tabular-nums text-[10px]" style={{ color: r.highlight ? G : CH, fontWeight: r.highlight ? 700 : undefined }}>{r.engine2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div {...fadeUp(0.45)} className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>1 MWp Italy Reference Case</p>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
                <table className="pitch-table">
                  <thead><tr><th></th><th className="text-right">Standard PV</th><th className="text-right">Agrivoltaic + DM 436</th></tr></thead>
                  <tbody>
                    {[
                      { k: "CAPEX",                   v1: "€620K", v2: "€870K"    },
                      { k: "Net CAPEX (after grant)",  v1: "€620K", v2: "€522K", hi: true },
                      { k: "Revenue Year 1",           v1: "€186K", v2: "€369K", hi: true },
                      { k: "Project IRR",              v1: "8–10%", v2: "18–22%", hi: true },
                      { k: "Payback",                  v1: "6–7 yrs", v2: "2–3 yrs", hi: true },
                    ].map(row => (
                      <tr key={row.k} style={row.hi ? { background: `${G}08` } : {}}>
                        <td className="text-[10px]">{row.k}</td>
                        <td className="text-right tabular-nums text-[10px]" style={{ color: "#9CA3AF" }}>{row.v1}</td>
                        <td className="text-right tabular-nums text-[10px]" style={{ color: row.hi ? G : CH, fontWeight: row.hi ? 600 : undefined }}>{row.v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.6)} className="text-[9px]" style={{ color: "#9CA3AF" }}>
              Full technical due diligence package available upon NDA execution.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
