"use client";
import { translations } from "@/lib/data";

interface EditorialProps { lang: "ar" | "en" }

export default function Editorial({ lang }: EditorialProps) {
  const t = translations[lang].editorial;
  return (
    <section style={{ background: "#f5f0e8" }}>
      <div className="relative w-full overflow-hidden" style={{ height: "68vh", minHeight: "400px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=90&auto=format&fit=crop"
          alt="Editorial" className="w-full h-full object-cover" style={{ filter: "saturate(0.6) contrast(1.1)", objectPosition: "center 28%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 35%, rgba(245,240,232,0.97) 100%)" }} />
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-16">
          <p className="text-[10px] tracking-[0.5em] uppercase mb-3" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            {lang === "ar" ? "مجموعة ٢٠٢٥" : "COLLECTION 2025"}
          </p>
          <h2 className="font-light" style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(2.5rem,7vw,6rem)", color: "#0a0a0a", lineHeight: 1, letterSpacing: "0.06em" }}>
            {t.title}
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <p className="text-base md:text-lg font-light leading-loose mb-10"
            style={{ fontFamily: "Georgia,serif", color: "#1a1a1a", lineHeight: "2.1", letterSpacing: "0.03em" }}>
            {t.body}
          </p>
          <button className="flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase group"
            style={{ color: "#a07840", fontFamily: "Helvetica Neue, Arial, sans-serif", background: "none", border: "none", cursor: "pointer" }}>
            {t.cta}
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ background: "#c9a96e" }} />
          </button>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="relative overflow-hidden" style={{ height: 260 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=85&auto=format&fit=crop"
              alt="Craft" className="w-full h-full object-cover" style={{ filter: "saturate(0.55)", objectPosition: "center 15%" }} />
            <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.12)" }} />
          </div>

          <div className="grid grid-cols-3 gap-4 border-t pt-8" style={{ borderColor: "#c9a96e22" }}>
            {[
              { num: lang === "ar" ? "١٠+" : "10+", label: lang === "ar" ? "سنوات" : "Years" },
              { num: lang === "ar" ? "٨٦+" : "86+", label: lang === "ar" ? "قطعة" : "Pieces" },
              { num: lang === "ar" ? "١٢" : "12", label: lang === "ar" ? "دولة" : "Countries" },
            ].map(s => (
              <div key={s.label}>
                <p className="font-light mb-1" style={{ fontFamily: "Georgia,serif", color: "#a07840", fontSize: "clamp(1.6rem,3vw,2.5rem)" }}>{s.num}</p>
                <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "#6b6b6b", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
