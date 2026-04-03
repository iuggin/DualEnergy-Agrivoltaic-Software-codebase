"use client";

import { motion } from "framer-motion";

const G  = "#2D6A4F";
const GL = "#52B788";
const CH = "#1A1A2E";
const BG = "#F7F5F0";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number], delay },
});

export default function Slide1Title() {
  return (
    <div
      className="relative w-full h-full overflow-hidden select-none"
      style={{ background: BG }}
    >
      {/* ── RIGHT 45% — aerial photo ghost ──────────────────────────────── */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full"
        style={{ width: "48%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/agrivoltaic-aerial.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.17 }}
        />
        {/* left-side fade so photo blends into the text zone */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${BG} 0%, transparent 35%)`,
          }}
        />
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-16 py-12">

        {/* TOP — logo only */}
        <motion.div {...fade(0)} className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dualenergy-logo.png"
            alt="DualEnergy"
            style={{ height: 32, width: "auto", objectFit: "contain" }}
          />
          <span
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: GL }}
          >
            Agrivoltaic Intelligence
          </span>
        </motion.div>

        {/* CENTRE — the statement */}
        <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "56%" }}>
          <motion.p
            {...fade(0.18)}
            className="font-normal leading-snug mb-6"
            style={{
              fontSize: "clamp(1.05rem, 1.9vw, 1.3rem)",
              color: "#6B7280",
              letterSpacing: "-0.01em",
            }}
          >
            €3.5 billion in European solar projects are stuck.
          </motion.p>

          <motion.h1
            {...fade(0.3)}
            className="font-black leading-[1.08]"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
              color: CH,
              letterSpacing: "-0.025em",
            }}
          >
            Not for lack of capital.
          </motion.h1>

          <motion.h1
            {...fade(0.44)}
            className="font-black leading-[1.08]"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
              color: G,
              letterSpacing: "-0.025em",
            }}
          >
            For lack of one number.
          </motion.h1>
        </div>

        {/* BOTTOM — footer: pre-seed info, invisible unless you look */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex items-end justify-between"
        >
          <span
            className="text-[10px] tracking-[0.15em] uppercase font-medium"
            style={{ color: "#9CA3AF" }}
          >
            Pre-Seed · CHF 750K–1M · February 2026 · Confidential
          </span>

          {/* Press → hint */}
          <span className="flex items-center gap-1.5">
            <span
              className="text-[10px] tracking-[0.18em] uppercase font-medium"
              style={{ color: "#9CA3AF" }}
            >
              Press →
            </span>
            <motion.span
              style={{ color: "#9CA3AF", fontSize: "0.8rem" }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
