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

const zones = [
  { zone: "Inter-row (full sun)",         field: 83, predicted: 83, color: G   },
  { zone: "Drip-line (partial shade)",    field: 56, predicted: 56, color: GL  },
  { zone: "Beneath panel (heavy shade)",  field: 39, predicted: 39, color: AM  },
  { zone: "Weighted average",             field: 71, predicted: 71, color: G, highlight: true },
];

const studies = [
  { study: "Dupraz et al.",   year: "2011", flag: "🇫🇷", system: "Fixed, 4m height",    result: "✓" },
  { study: "Marrou et al.",   year: "2013", flag: "🇫🇷", system: "Fixed, 3.5m height",  result: "✓" },
  { study: "Fraunhofer ISE",  year: "2019", flag: "🇩🇪", system: "Tracked, 5m height",  result: "✓" },
  { study: "Fraunhofer ISE",  year: "2020", flag: "🇩🇪", system: "Drought year",        result: "+7.1%", drought: true },
];

export default function Slide4Proof() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-12 py-8 select-none" style={{ background: BG }}>
      <motion.div className="w-full max-w-5xl mx-auto flex flex-col gap-5" initial="initial" animate="animate">

        {/* Header */}
        <motion.div {...fadeUp(0)}>
          <p className="text-xs tracking-[0.2em] uppercase font-semibold mb-1" style={{ color: GL }}>Proof</p>
          <h2 className="font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)", color: CH }}>
            We replicated a field trial blind —{" "}
            <span style={{ color: G }}>and matched it exactly.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">

          {/* LEFT — zone bar chart + 94% hero */}
          <motion.div {...fadeUp(0.07)} className="col-span-3 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
                Nextpower Brazil · Peer-reviewed 2024
              </p>
              <span className="text-[9px] px-2 py-0.5 rounded-lg border font-mono"
                style={{ color: "#9CA3AF", borderColor: "#E5E5E0", background: "#FFFFFF" }}>
                DOI: 10.52825/agripv.v3i.1355
              </span>
            </div>

            {/* Chart */}
            <div className="rounded-2xl border p-5 flex flex-col gap-4" style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
              {zones.map((z, i) => (
                <div key={z.zone} className={`flex flex-col gap-1.5 ${z.highlight ? "pt-3 border-t" : ""}`}
                  style={z.highlight ? { borderColor: "#E5E5E0" } : {}}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium" style={{ color: z.highlight ? CH : "#6B7280" }}>{z.zone}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px]" style={{ color: "#9CA3AF" }}>
                        Field: <span className="font-semibold tabular-nums">{z.field}%</span>
                      </span>
                      <span className="text-sm font-black tabular-nums" style={{ color: z.color }}>{z.predicted}%</span>
                      <span style={{ color: G }}>✓</span>
                    </div>
                  </div>
                  {/* Bar */}
                  <div className="relative h-3 rounded-full overflow-hidden" style={{ background: "#F0EDE6" }}>
                    <motion.div className="absolute left-0 top-0 h-full rounded-full opacity-25"
                      style={{ background: z.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${z.field}%` }}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                    />
                    <motion.div className="absolute left-0 top-1 h-1 rounded-full"
                      style={{ background: z.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${z.predicted}%` }}
                      transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 94% hero */}
            <motion.div {...fadeUp(0.45)}
              className="flex items-center gap-5 rounded-2xl p-4 border"
              style={{ background: `${G}08`, borderColor: `${G}30` }}>
              <span className="font-black tabular-nums shrink-0"
                style={{ fontSize: "clamp(3rem,6vw,4.5rem)", color: G, lineHeight: 1 }}>
                94%
              </span>
              <div>
                <p className="text-sm font-bold mb-0.5" style={{ color: CH }}>Accuracy — blind replication of a published field trial</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                  We had no access to the actual data. We ran our physics engine and matched the published results.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — other studies + drought */}
          <motion.div {...fadeUp(0.1)} className="col-span-2 flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ color: "#9CA3AF" }}>
              Replicated across 4 more studies
            </p>

            <div className="flex flex-col gap-2">
              {studies.map((s, i) => (
                <motion.div key={`${s.study}-${s.year}`} {...fadeUp(0.14 + i * 0.07)}
                  className="flex items-center gap-3 rounded-2xl px-3.5 py-3 border"
                  style={{
                    background: s.drought ? `${AM}0A` : "#FFFFFF",
                    borderColor: s.drought ? `${AM}40` : "#E5E5E0",
                  }}>
                  <span className="text-lg shrink-0">{s.flag}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate" style={{ color: CH }}>{s.study} <span className="font-normal" style={{ color: "#9CA3AF" }}>({s.year})</span></p>
                    <p className="text-[9px]" style={{ color: "#9CA3AF" }}>{s.system}</p>
                  </div>
                  <span className="text-sm font-black shrink-0" style={{ color: s.drought ? AM : G }}>{s.result}</span>
                </motion.div>
              ))}
            </div>

            {/* Drought finding */}
            <motion.div {...fadeUp(0.52)}
              className="rounded-2xl p-4 border flex flex-col gap-3"
              style={{ background: `${AM}0A`, borderColor: `${AM}35` }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌵</span>
                <p className="text-xs font-bold" style={{ color: AM }}>The Narrative-Shifting Finding</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3 text-center border" style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <p className="text-2xl font-black" style={{ color: AM }}>+7.1%</p>
                  <p className="text-[9px] mt-0.5" style={{ color: "#9CA3AF" }}>Fraunhofer measured</p>
                </div>
                <div className="rounded-xl p-3 text-center border" style={{ background: "#FFFFFF", borderColor: "#E5E5E0" }}>
                  <p className="text-2xl font-black" style={{ color: G }}>+9.5%</p>
                  <p className="text-[9px] mt-0.5" style={{ color: "#9CA3AF" }}>We predicted</p>
                </div>
              </div>

              <p className="text-[11px] leading-relaxed" style={{ color: "#6B7280" }}>
                In the 2020 drought year, crops performed <em>better</em> under panels. Agrivoltaics isn't a compromise —{" "}
                <strong style={{ color: CH }}>it's climate adaptation.</strong>
              </p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
