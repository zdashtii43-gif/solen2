"use client";
import { useEffect, useState } from "react";
import { translations } from "@/lib/data";

interface HeroProps { lang: "ar" | "en" }

const slides = [
  { img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&q=90&auto=format&fit=crop", labelAr: "الحقائب", labelEn: "BAGS" },
  { img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=90&auto=format&fit=crop", labelAr: "الساعات", labelEn: "WATCHES" },
  { img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=90&auto=format&fit=crop", labelAr: "المجوهرات", labelEn: "JEWELRY" },
];

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => { const id = setTimeout(() => setLoaded(true), 80); return () => clearTimeout(id); }, []);
  useEffect(() => { const id = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5500); return () => clearInterval(id); }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col" style={{ background: "#0a0a0a" }}>
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1200" style={{ opacity: current === i ? 1 : 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.img} alt={s.labelEn} className="w-full h-full object-cover"
            style={{ opacity: 0.52, filter: "saturate(0.75) contrast(1.1)" }} />
        </div>
      ))}

      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, rgba(10,10,10,0.1) 35%, rgba(10,10,10,0.72) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.45) 0%, transparent 55%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px z-20" style={{ background: "linear-gradient(90deg, transparent, #c9a96e55, transparent)" }} />

      <div className="relative z-10 flex flex-col justify-end flex-1 pb-20 md:pb-28 px-6 md:px-16 pt-32 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-5" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "all 0.9s ease 0.2s" }}>
          <div className="w-8 h-px" style={{ background: "#c9a96e" }} />
          <span className="text-[10px] tracking-[0.45em] uppercase" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            {lang === "ar" ? slides[current].labelAr : slides[current].labelEn}
          </span>
        </div>

        <h1 style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(5rem, 14vw, 11rem)",
          letterSpacing: "0.1em", lineHeight: 0.9,
          color: "#f5f0e8", fontWeight: 300,
          opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(30px)",
          transition: "all 1.1s ease 0.1s",
        }}>SOLEN</h1>

        <p className="mt-6 mb-10 text-sm" style={{
          fontFamily: "Georgia, serif", color: "#b0a090",
          letterSpacing: "0.07em", lineHeight: 1.9,
          opacity: loaded ? 1 : 0, transition: "all 0.9s ease 0.4s",
        }}>{t.subtitle}</p>

        <div style={{ opacity: loaded ? 1 : 0, transition: "all 0.9s ease 0.6s" }}>
          <button className="group flex items-center gap-5 text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "#f5f0e8", fontFamily: "Helvetica Neue, Arial, sans-serif", background: "none", border: "none", cursor: "pointer" }}>
            <span className="w-10 h-px transition-all duration-500 group-hover:w-16" style={{ background: "#c9a96e" }} />
            {t.cta}
          </button>
        </div>

        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: current === i ? 28 : 6, height: 2,
              background: current === i ? "#c9a96e" : "#c9a96e33",
              border: "none", cursor: "pointer", padding: 0, transition: "all 0.4s ease"
            }} />
          ))}
        </div>
      </div>

      <p className="absolute right-6 top-1/2 hidden md:block text-[9px] tracking-[0.5em] uppercase z-10"
        style={{ color: "#c9a96e33", fontFamily: "Helvetica Neue, Arial, sans-serif", writingMode: "vertical-rl", transform: "rotate(180deg) translateY(50%)" }}>
        SOLEN — LUXURY ACCESSORIES — 2025
      </p>
    </section>
  );
}
