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

const revenue = [
  { year: "2026", design: 100,  ops: 0,    total: "€100K",  rec: 0   },
  { year: "2027", design: 250,  ops: 25,   total: "€275K",  rec: 9   },
  { year: "2028", design: 400,  ops: 125,  total: "€525K",  rec: 24  },
  { year: "2029", design: 500,  ops: 400,  total: "€900K",  rec: 44  },
  { year: "2030", design: 500,  ops: 1000, total: "€1.5M",  rec: 67  },
  { year: "2031", design: 500,  ops: 2500, total: "€3.0M",  rec: 83, highlight: true },
];
const MAX = 3000;

export default function Slide6BusinessModel() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>How We Make Money</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            Design acquires customers.{" "}
            <span style={{ color: G }}>Operations keeps them 30 years.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — engine cards */}
          <motion.div {...fadeUp(0.07)} className="col-span-2 flex flex-col gap-3">

            {/* Engine 1 */}
            <div className="rounded-2xl p-4 border flex flex-col gap-3"
              style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase" style={{ color: GL }}>Engine 1</p>
                  <p className="text-sm font-bold" style={{ color: CH }}>Design License</p>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "#EDF6F0" }}>📐</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { k: "Pricing",       v: "€5–15 / kWp"       },
                  { k: "Example",       v: "10 MWp = €50–150K"  },
                  { k: "Gross margin",  v: "~80%", hi: true     },
                  { k: "CAC",           v: "~€5K"               },
                ].map(r => (
                  <div key={r.k}>
                    <p className="text-[8px] uppercase tracking-wider font-semibold" style={{ color: "#9CA3AF" }}>{r.k}</p>
                    <p className="text-[11px] font-semibold mt-0.5" style={{ color: r.hi ? G : CH }}>{r.v}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold pt-2 border-t" style={{ borderColor: "#E5E5E0", color: GL }}>
                Role: Customer acquisition (also earns revenue)
              </p>
            </div>

            {/* Engine 2 */}
            <div className="rounded-2xl p-4 border flex flex-col gap-3 relative"
              style={{ background: `${G}08`, borderColor: `${G}30` }}>
              <span className="absolute top-3 right-3 text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: `${G}15`, color: G, border: `1px solid ${G}30` }}>The Business</span>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-widest uppercase" style={{ color: G }}>Engine 2</p>
                  <p className="text-sm font-bold" style={{ color: CH }}>Operational Subscription</p>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${G}15` }}>🔄</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { k: "Pricing",       v: "€500–1,500/MW/yr"   },
                  { k: "Example",       v: "100 MW = €50–150K/yr"},
                  { k: "Gross margin",  v: "~95%", hi: true      },
                  { k: "CAC",           v: "€0 — pure upsell", hi: true },
                ].map(r => (
                  <div key={r.k}>
                    <p className="text-[8px] uppercase tracking-wider font-semibold" style={{ color: "#9CA3AF" }}>{r.k}</p>
                    <p className="text-[11px] font-semibold mt-0.5" style={{ color: r.hi ? G : CH }}>{r.v}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold pt-2 border-t" style={{ borderColor: `${G}25`, color: G }}>
                Role: The recurring engine (30-year lock-in)
              </p>
            </div>

            {/* Insight */}
            <div className="rounded-2xl p-3 border" style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              <p className="text-[11px] leading-relaxed" style={{ color: "#6B7280" }}>
                Every design project is a{" "}
                <strong style={{ color: G }}>paid CAC event</strong>{" "}
                that also generates revenue. Ops customers arrive 12–18 months later at{" "}
                <strong style={{ color: G }}>zero incremental cost.</strong>
              </p>
            </div>
          </motion.div>

          {/* RIGHT — revenue bar chart */}
          <motion.div {...fadeUp(0.1)} className="col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
                Revenue Trajectory 2026–2031
              </p>
              <div className="flex items-center gap-4">
                {[[GL,"Design"],[G,"Ops (recurring)"]].map(([c,l]) => (
                  <div key={l as string} className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: c as string }}/>
                    <span className="text-[9px]" style={{ color: "#9CA3AF" }}>{l as string}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border p-4 flex flex-col gap-2.5 flex-1"
              style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              {revenue.map((r, i) => (
                <div key={r.year}
                  className={`flex items-center gap-3 ${r.highlight ? "pt-2.5 border-t" : ""}`}
                  style={r.highlight ? { borderColor: "#E5E5E0" } : {}}>
                  <span className="text-[10px] font-black w-8 shrink-0 tabular-nums"
                    style={{ color: r.highlight ? G : "#9CA3AF" }}>{r.year}</span>
                  <div className="flex-1 flex flex-col gap-0.5">
                    {/* Design bar */}
                    <div className="h-3 rounded-sm overflow-hidden" style={{ background: "#F0EDE6" }}>
                      <motion.div className="h-full rounded-sm" style={{ background: GL, opacity: 0.8 }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(r.design / MAX) * 100}%` }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      />
                    </div>
                    {/* Ops bar */}
                    {r.ops > 0 && (
                      <div className="h-3 rounded-sm overflow-hidden" style={{ background: "#F0EDE6" }}>
                        <motion.div className="h-full rounded-sm" style={{ background: G }}
                          initial={{ width: 0 }}
                          animate={{ width: `${(r.ops / MAX) * 100}%` }}
                          transition={{ duration: 0.9, delay: 0.35 + i * 0.08, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-bold tabular-nums w-14 text-right"
                      style={{ color: r.highlight ? G : CH }}>{r.total}</span>
                    <span className="text-[9px] font-bold tabular-nums w-8 text-right"
                      style={{ color: r.rec > 50 ? G : "#9CA3AF" }}>
                      {r.rec > 0 ? `${r.rec}%↺` : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 83% callout */}
            <motion.div {...fadeUp(0.55)}
              className="flex gap-4 rounded-2xl p-4 border items-center"
              style={{ background: `${G}08`, borderColor: `${G}30` }}>
              <div className="shrink-0 text-center">
                <p className="font-black tabular-nums" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: G, lineHeight: 1 }}>83%</p>
                <p className="text-[9px] uppercase tracking-wider font-semibold mt-1" style={{ color: "#9CA3AF" }}>recurring by 2031</p>
              </div>
              <div className="w-px h-10" style={{ background: `${G}25` }}/>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: CH }}>SaaS economics built on a consulting-shaped go-to-market.</p>
                <p className="text-[10px] leading-relaxed" style={{ color: "#6B7280" }}>
                  We enter looking like a service. We exit with a software multiple.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
