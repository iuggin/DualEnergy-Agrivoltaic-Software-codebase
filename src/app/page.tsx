"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide1Title from "@/components/slides/Slide1Title";
import Slide2OneNumber from "@/components/slides/Slide2OneNumber";
import Slide3WhatWeDo from "@/components/slides/Slide3WhatWeDo";
import Slide4Proof from "@/components/slides/Slide4Proof";
import Slide5Market from "@/components/slides/Slide5Market";
import Slide6BusinessModel from "@/components/slides/Slide6BusinessModel";
import Slide7Moat from "@/components/slides/Slide7Moat";
import Slide8Traction from "@/components/slides/Slide8Traction";
import Slide9Team from "@/components/slides/Slide9Team";
import Slide10Ask from "@/components/slides/Slide10Ask";
import AppendixFinancials from "@/components/slides/AppendixFinancials";
import AppendixPipeline from "@/components/slides/AppendixPipeline";
import AppendixTech from "@/components/slides/AppendixTech";

// Brand palette
const G = "#2D6A4F";   // forest green
const GL = "#52B788";  // sage/leaf
const AM = "#F4A261";  // amber/gold
const CH = "#1A1A2E";  // charcoal
const BG = "#F7F5F0";  // warm off-white

const slides = [
  { id: 1,  label: "Title",            component: Slide1Title,        section: "intro" },
  { id: 2,  label: "The One Number",   component: Slide2OneNumber,    section: "intro" },
  { id: 3,  label: "What We Do",       component: Slide3WhatWeDo,     section: "story" },
  { id: 4,  label: "Proof",            component: Slide4Proof,        section: "story" },
  { id: 5,  label: "Market & Timing",  component: Slide5Market,       section: "story" },
  { id: 6,  label: "Business Model",   component: Slide6BusinessModel,section: "model" },
  { id: 7,  label: "Why Us",           component: Slide7Moat,         section: "model" },
  { id: 8,  label: "Traction",         component: Slide8Traction,     section: "model" },
  { id: 9,  label: "Team",             component: Slide9Team,         section: "team"  },
  { id: 10, label: "The Ask",          component: Slide10Ask,         section: "ask"   },
  { id: 11, label: "A — Financials",   component: AppendixFinancials, section: "appendix" },
  { id: 12, label: "B — Competitive",  component: AppendixPipeline,   section: "appendix" },
  { id: 13, label: "C — Technology",   component: AppendixTech,       section: "appendix" },
];

const sectionAccent: Record<string, string> = {
  intro:    G,
  story:    G,
  model:    AM,
  team:     G,
  ask:      AM,
  appendix: "#9CA3AF",
};

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [showNav, setShowNav] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      else if (e.key === "Escape") setShowNav(v => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const slide = slides[current];
  const SlideComponent = slide.component;
  const isAppendix = slide.section === "appendix";
  const accent = sectionAccent[slide.section];

  const slideVariants = {
    enter:  (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22,1,0.36,1] as [number,number,number,number] } },
    exit:   (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.3, ease: [0.55,0,0.45,1] as [number,number,number,number] } }),
  };

  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: BG, color: CH, fontFamily: "var(--font-geist-sans)" }}>

      {/* Top bar */}
      <div className="relative z-30 flex items-center justify-between px-8 shrink-0"
        style={{ height: 52, borderBottom: `1px solid #E5E5E0`, background: "#FFFFFF" }}>

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/dualenergy-logo.png" alt="DualEnergy" style={{ height: 28, width: "auto", objectFit: "contain" }} />
            {isAppendix && (
              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: "#F0EDE6", color: "#9CA3AF", border: "1px solid #E5E5E0" }}>
                Appendix
              </span>
            )}
          </div>

        {/* Slide label */}
        <span className="text-xs font-medium hidden sm:block" style={{ color: "#9CA3AF" }}>
          {slide.label}
        </span>

        {/* Counter + menu */}
        <div className="flex items-center gap-3">
          <span className="text-xs tabular-nums font-semibold" style={{ color: "#9CA3AF" }}>
            {current + 1} / {slides.length}
          </span>
          <button onClick={() => setShowNav(v => !v)}
            className="w-7 h-7 rounded-md flex items-center justify-center transition-colors hover:bg-gray-100"
            style={{ color: "#9CA3AF" }} title="Navigator (Esc)">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="0" y="1"    width="14" height="1.5" rx="0.75"/>
              <rect x="0" y="6.25" width="14" height="1.5" rx="0.75"/>
              <rect x="0" y="11.5" width="14" height="1.5" rx="0.75"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-30 h-[3px] shrink-0" style={{ background: "#E5E5E0" }}>
        <motion.div className="h-full" style={{ background: accent }}
          animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Slide viewport */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div key={current} custom={direction} variants={slideVariants}
            initial="enter" animate="center" exit="exit" className="absolute inset-0">
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Click zones */}
        <button onClick={prev} aria-label="Previous"
          className="absolute left-0 top-0 h-full w-14 z-20 opacity-0 hover:opacity-100 flex items-center justify-start pl-3 transition-opacity"
          style={{ cursor: current === 0 ? "default" : "pointer" }}>
          {current > 0 && (
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
              style={{ background: "#FFFFFF", color: G, border: `1px solid #E5E5E0` }}>←</div>
          )}
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-0 top-0 h-full w-14 z-20 opacity-0 hover:opacity-100 flex items-center justify-end pr-3 transition-opacity"
          style={{ cursor: current === slides.length - 1 ? "default" : "pointer" }}>
          {current < slides.length - 1 && (
            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
              style={{ background: "#FFFFFF", color: G, border: `1px solid #E5E5E0` }}>→</div>
          )}
        </button>
      </div>

      {/* Footer */}
      <div className="relative z-30 flex items-center justify-between px-8 shrink-0"
        style={{ height: 36, borderTop: `1px solid #E5E5E0`, background: "#FFFFFF" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dualenergy-logo.png" alt="DualEnergy" style={{ height: 18, width: "auto", objectFit: "contain", opacity: 0.75 }} />
        {/* Dot navigation */}
        <div className="flex items-center gap-1.5">
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => goTo(i)} title={s.label}
              className="transition-all duration-200"
              style={{
                width: i === current ? 18 : 5,
                height: 5,
                borderRadius: 99,
                background: i === current ? accent : (s.section === "appendix" ? "#D1D5DB" : "#D1D5DB"),
                opacity: i === current ? 1 : 0.45,
              }}
            />
          ))}
        </div>
        <span className="text-[10px]" style={{ color: "#9CA3AF" }}>Confidential</span>
      </div>

      {/* Navigator overlay */}
      <AnimatePresence>
        {showNav && (
          <>
            <motion.div className="fixed inset-0 z-40"
              style={{ background: "rgba(26,26,46,0.35)", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowNav(false)}
            />
            <motion.div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5 shadow-2xl"
              style={{ background: "#FFFFFF", border: "1px solid #E5E5E0", width: "min(580px,92vw)", maxHeight: "80vh", overflowY: "auto" }}
              initial={{ opacity: 0, scale: 0.96, y: "-48%" }}
              animate={{ opacity: 1, scale: 1, y: "-50%" }}
              exit={{ opacity: 0, scale: 0.96, y: "-48%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#9CA3AF" }}>Slide Navigator</span>
                <button onClick={() => setShowNav(false)} className="text-xs px-2 py-1 rounded-lg"
                  style={{ color: "#9CA3AF", background: "#F0EDE6" }}>Esc</button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {slides.map((s, i) => (
                  <button key={s.id} onClick={() => { goTo(i); setShowNav(false); }}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all border"
                    style={{
                      background: i === current ? "#EDF6F0" : "#FAFAF8",
                      borderColor: i === current ? `${G}40` : "#E5E5E0",
                    }}>
                    <span className="text-[10px] font-black tabular-nums w-5 shrink-0"
                      style={{ color: i === current ? G : "#9CA3AF" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: i === current ? G : CH }}>{s.label}</p>
                      <p className="text-[9px] capitalize" style={{ color: "#9CA3AF" }}>{s.section}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t flex gap-4 text-[10px]"
                style={{ borderColor: "#E5E5E0", color: "#9CA3AF" }}>
                <span>← → Navigate</span>
                <span>Space Next</span>
                <span>Esc Toggle</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
