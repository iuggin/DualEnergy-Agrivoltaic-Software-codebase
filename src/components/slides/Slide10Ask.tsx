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

const uses = [
  { pct: 60, label: "Engineering",   detail: "Python engine → SaaS + MPC v1",       color: G,  chf: "CHF 450–600K" },
  { pct: 25, label: "First hires",   detail: "2 engineers + 1 sales lead",           color: GL, chf: "CHF 190–250K" },
  { pct: 10, label: "Infrastructure",detail: "Cloud, APIs, security",               color: AM, chf: "CHF 75–100K"  },
  { pct: 5,  label: "Customers",     detail: "Pilots, conferences, travel",         color: AM, chf: "CHF 35–50K"   },
];

const kpis = [
  { icon: "🚀", label: "SaaS platform live",      detail: "External users on cloud" },
  { icon: "💰", label: "10+ paying customers",    detail: "Proven willingness to pay" },
  { icon: "📈", label: "€100K+ revenue",          detail: "Commercial traction" },
  { icon: "🔄", label: "MPC on real hardware",    detail: "Engine 2 is real" },
  { icon: "🌱", label: "Ready for Seed",          detail: "CHF 2–3M at CHF 10–15M" },
];

const truths = [
  { num: "1", text: "80 GW of agrivoltaics will be built by 2030. Every project needs a yield prediction to get permitted and an optimization engine to stay compliant.", color: G  },
  { num: "2", text: "No tool does either today. PVsyst doesn't model crops. DSSAT doesn't model PV. Manual consulting costs €50–100K and takes months.", color: GL },
  { num: "3", text: "We built the tool. 29,000 lines. 94% accuracy. Two clients. Zero funding. We demo today.", color: AM },
];

export default function Slide10Ask() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>

      {/* Very subtle warm glow */}
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(244,162,97,0.06) 0%, transparent 65%)" }}/>

      <motion.div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Big ask headline */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>The Ask</p>
          <div className="flex items-end gap-3 flex-wrap">
            <span className="font-black tabular-nums leading-none"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: G, letterSpacing: "-0.03em" }}>
              CHF 750K–1M
            </span>
            <span className="font-light mb-1" style={{ fontSize: "clamp(1rem,1.8vw,1.3rem)", color: "#6B7280" }}>
              to ship the platform and validate the controller.
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — use of funds + KPIs */}
          <motion.div {...fadeUp(0.08)} className="col-span-3 flex flex-col gap-4">

            {/* Use of funds */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Use of Funds</p>
              {uses.map((u, i) => (
                <motion.div key={u.label} {...fadeUp(0.12 + i * 0.07)} className="flex items-center gap-3">
                  <div className="relative h-8 rounded-xl overflow-hidden shrink-0" style={{ width: 140, background: "#F0EDE6" }}>
                    <motion.div className="absolute left-0 top-0 h-full rounded-xl flex items-center justify-end pr-2"
                      style={{ background: `${u.color}20`, border: `1px solid ${u.color}30` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${u.pct * 1.4}px` }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }}>
                      <span className="text-[10px] font-black tabular-nums" style={{ color: u.color }}>{u.pct}%</span>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold" style={{ color: CH }}>{u.label}</span>
                      <span className="text-[9px] font-semibold" style={{ color: u.color }}>{u.chf}</span>
                    </div>
                    <p className="text-[9px]" style={{ color: "#9CA3AF" }}>{u.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 12-month KPIs */}
            <motion.div {...fadeUp(0.42)}
              className="rounded-2xl p-4 border"
              style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-3" style={{ color: "#9CA3AF" }}>12-Month KPIs</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {kpis.map(k => (
                  <div key={k.label} className="flex items-start gap-2 rounded-xl p-2.5 border"
                    style={{ background: "#F7F5F0", borderColor: "#E5E5E0" }}>
                    <span className="text-base shrink-0">{k.icon}</span>
                    <div>
                      <p className="text-[10px] font-semibold leading-tight" style={{ color: CH }}>{k.label}</p>
                      <p className="text-[8px]" style={{ color: "#9CA3AF" }}>{k.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — terms + 3 truths + CTA */}
          <motion.div {...fadeUp(0.1)} className="col-span-2 flex flex-col gap-4">

            {/* Terms */}
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Terms</p>
              {[
                { k: "Instrument",             v: "Equity or SAFE"           },
                { k: "Pre-money",              v: "CHF 2.5–4M"               },
                { k: "Dilution",               v: "20–25%"                   },
                { k: "Non-dilutive parallel",  v: "Venture Kick (up to CHF 150K)" },
                { k: "Path to breakeven",      v: "~€1.5M ARR"               },
                { k: "Seed target (M12–18)",   v: "CHF 2–3M at CHF 10–15M"   },
              ].map((row, i) => (
                <motion.div key={row.k} {...fadeUp(0.14 + i * 0.05)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 border"
                  style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <span className="text-[10px]" style={{ color: "#9CA3AF" }}>{row.k}</span>
                  <span className="text-xs font-bold tabular-nums" style={{ color: CH }}>{row.v}</span>
                </motion.div>
              ))}
            </div>

            {/* 3 truths */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col gap-2">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>Why This Works</p>
              {truths.map(t => (
                <div key={t.num} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                    style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}>
                    {t.num}
                  </div>
                  <p className="text-[10px] leading-snug" style={{ color: "#6B7280" }}>{t.text}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.7)}
              className="rounded-2xl p-4 border text-center mt-auto"
              style={{ background: `${G}08`, borderColor: `${G}30` }}>
              <p className="text-sm font-bold mb-1" style={{ color: G }}>We'd love to show you the platform. Today.</p>
              <p className="text-xs mb-0.5" style={{ color: "#6B7280" }}>info@dual2energy.com</p>
              <p className="text-[10px]" style={{ color: "#9CA3AF" }}>+39 349 4197238 · EPFL, Lausanne</p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
