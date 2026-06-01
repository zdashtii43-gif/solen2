"use client";
import { translations } from "@/lib/data";

interface MarqueeProps {
  lang: "ar" | "en";
}

export default function Marquee({ lang }: MarqueeProps) {
  const text = translations[lang].marquee;
  const repeated = Array(8).fill(text).join("");

  return (
    <div
      className="w-full overflow-hidden py-3 border-y"
      style={{ background: "#0a0a0a", borderColor: "#c9a96e22" }}
    >
      <div className="animate-marquee whitespace-nowrap">
        {[repeated, repeated].map((t, i) => (
          <span
            key={i}
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
