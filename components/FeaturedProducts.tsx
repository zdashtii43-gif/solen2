"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { translations, products } from "@/lib/data";

interface FeaturedProductsProps { lang: "ar" | "en" }

const productImgs = [
  "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=85&auto=format&fit=crop",
];

export default function FeaturedProducts({ lang }: FeaturedProductsProps) {
  const t = translations[lang].featured;
  const [liked, setLiked] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" style={{ background: "#0a0a0a" }}>
      <div className="px-6 md:px-16 mb-14">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              {lang === "ar" ? "مختارات حصرية" : "CURATED SELECTION"}
            </p>
            <h2 className="font-light" style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(2rem,5vw,3.5rem)", color: "#f5f0e8", letterSpacing: "0.06em" }}>
              {t.title}
            </h2>
          </div>
          <button className="text-[11px] tracking-[0.25em] uppercase flex items-center gap-3 group"
            style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif", background: "none", border: "none", cursor: "pointer" }}>
            {lang === "ar" ? "عرض الكل" : "VIEW ALL"}
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ background: "#c9a96e" }} />
          </button>
        </div>
        <div className="w-full h-px mt-8" style={{ background: "linear-gradient(90deg,#c9a96e44,transparent)" }} />
      </div>

      <div className="px-6 md:px-16 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
        {products.map((product, i) => (
          <div key={product.id} className="group cursor-pointer"
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}>
            <div className="relative overflow-hidden mb-4" style={{
              aspectRatio: "3/4", background: "#111",
              border: `1px solid ${hovered === product.id ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.08)"}`,
              transition: "border-color 0.4s ease",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={productImgs[i]} alt={lang === "ar" ? product.name_ar : product.name_en}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "saturate(0.72) contrast(1.08)" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(10,10,10,0.55) 0%,transparent 60%)" }} />

              {product.isNew && (
                <div className="absolute top-4 left-4 px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase"
                  style={{ background: "#c9a96e", color: "#0a0a0a", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  {t.badge}
                </div>
              )}

              <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: hovered === product.id ? 1 : 0, background: "rgba(10,10,10,0.65)", backdropFilter: "blur(4px)" }}
                onClick={e => { e.stopPropagation(); setLiked(p => p.includes(product.id) ? p.filter(x => x !== product.id) : [...p, product.id]); }}>
                <Heart size={13} fill={liked.includes(product.id) ? "#c9a96e" : "none"} color="#c9a96e" />
              </button>

              <div className="absolute bottom-0 left-0 right-0 py-3 text-center text-[10px] tracking-[0.3em] uppercase"
                style={{
                  background: "rgba(201,169,110,0.96)", color: "#0a0a0a",
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  transform: hovered === product.id ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}>
                {t.cta}
              </div>
            </div>

            <div className={lang === "ar" ? "text-right" : "text-left"}>
              <p className="text-[9px] tracking-[0.35em] uppercase mb-1.5" style={{ color: "#c9a96e44", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                {product.category.toUpperCase()}
              </p>
              <h3 className="font-light mb-2 text-sm md:text-base" style={{ fontFamily: "Georgia,serif", color: "#f5f0e8", letterSpacing: "0.04em" }}>
                {lang === "ar" ? product.name_ar : product.name_en}
              </h3>
              <p className="text-sm" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif", letterSpacing: "0.05em" }}>
                {lang === "ar" ? product.price : product.price_en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
