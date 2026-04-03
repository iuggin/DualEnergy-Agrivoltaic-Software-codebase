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

const layers = [
  {
    num: "01", icon: "💻",
    title: "Nobody Has Built This",
    sub: "18-month head start",
    body: "29,000 lines coupling solar energy simulation, crop growth physics (DSSAT), and financial modeling. PVsyst would need 2–3 years to replicate our crop science.",
    color: G, strength: 75,
  },
  {
    num: "02", icon: "🔗",
    title: "AI Controller Requires the Physics Twin",
    sub: "Structural lock-in",
    body: "Our operational controller uses a neural network trained on the physics twin's outputs. You cannot build the controller without first building the simulator. We have both. Patentable.",
    color: GL, strength: 88,
  },
  {
    num: "03", icon: "🗃️",
    title: "The Data Asset",
    sub: "Unreplicable — compounds daily",
    body: "Every project collects data that exists nowhere else: agrivoltaic microclimate profiles, predicted vs. actual crop yield, tracker angle × crop stress × energy output (hourly, multi-year).",
    color: AM, strength: 100,
  },
];

const flywheel = [
  { label: "Design project runs",                  color: G  },
  { label: "Site data collected",                  color: GL },
  { label: "Model improves",                       color: AM },
  { label: "Plant built → MPC activates",          color: AM },
  { label: "Real data flows daily",                color: GL },
  { label: "Better predictions → more customers",  color: G  },
];

export default function Slide7Moat() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>Why Us · Why Now · Why Not Someone Else</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            The moat is{" "}
            <span style={{ color: G }}>data that doesn't exist anywhere</span>{" "}
            — and grows daily.
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — 3 layers */}
          <div className="col-span-3 flex flex-col gap-3">
            {layers.map((l, i) => (
              <motion.div key={l.num} {...fadeUp(0.08 + i * 0.09)}
                className="rounded-2xl p-4 border"
                style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: `${l.color}12`, border: `1px solid ${l.color}25` }}>{l.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-bold" style={{ color: l.color }}>{l.title}</p>
                      <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: `${l.color}12`, color: l.color, border: `1px solid ${l.color}20` }}>
                        {l.sub}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed mt-1" style={{ color: "#6B7280" }}>{l.body}</p>
                  </div>
                </div>
                {/* Strength bar */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-wider font-semibold shrink-0" style={{ color: "#9CA3AF" }}>Defensibility</span>
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#F0EDE6" }}>
                    <motion.div className="h-full rounded-full"
                      style={{ background: l.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${l.strength}%` }}
                      transition={{ duration: 1.1, delay: 0.35 + i * 0.12, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[10px] font-black tabular-nums w-8 text-right" style={{ color: l.color }}>{l.strength}%</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — data table + flywheel */}
          <motion.div {...fadeUp(0.12)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Data we collect — who else has it</p>

            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E5E0" }}>
              {[
                "Agrivoltaic microclimate profiles (crops × climates)",
                "Predicted vs. actual crop yield under PV systems",
                "Tracker angle × crop stress × energy output (hourly)",
                "Financial forecasts vs. actuals for agrivoltaic investments",
              ].map((d, i) => (
                <div key={i} className="flex items-center justify-between gap-3 px-3 py-2.5 border-b last:border-0"
                  style={{ borderColor: "#E5E5E0", background: "#FFFFFF" }}>
                  <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{d}</p>
                  <span className="text-[9px] font-black shrink-0 px-2 py-0.5 rounded-lg"
                    style={{ background: "#FEF2EE", color: "#E76F51", border: "1px solid #FDDDD6" }}>Nobody</span>
                </div>
              ))}
            </div>

            {/* Flywheel */}
            <motion.div {...fadeUp(0.5)}
              className="rounded-2xl p-4 border flex flex-col gap-3"
              style={{ background: `${G}08`, borderColor: `${G}25` }}>
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: G }}>The Data Flywheel</p>

              {/* Visual cycle arrows */}
              <div className="flex flex-col gap-1.5">
                {flywheel.map((step, i) => (
                  <motion.div key={step.label}
                    initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.06 }}
                    className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[9px] font-black"
                      style={{ background: `${step.color}15`, color: step.color, border: `1px solid ${step.color}30` }}>
                      {i + 1}
                    </div>
                    <span className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{step.label}</span>
                    {i < flywheel.length - 1 && (
                      <span className="ml-auto text-[9px]" style={{ color: "#D1D5DB" }}>↓</span>
                    )}
                    {i === flywheel.length - 1 && (
                      <span className="ml-auto text-[9px]" style={{ color: G }}>↺</span>
                    )}
                  </motion.div>
                ))}
              </div>
              <p className="text-[9px]" style={{ color: "#9CA3AF" }}>
                By 2030: 200+ sites · 30+ crops · 15 climates.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
