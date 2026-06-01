"use client";
import { translations } from "@/lib/data";

interface CategoriesProps { lang: "ar" | "en" }

const imgs = [
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=85&auto=format&fit=crop",
];

export default function Categories({ lang }: CategoriesProps) {
  const t = translations[lang].categories;

  return (
    <section style={{ background: "#f5f0e8" }}>
      <div className="py-16 md:py-20 px-6 md:px-16 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase mb-5" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
          {lang === "ar" ? "اكتشف المجموعات" : "EXPLORE COLLECTIONS"}
        </p>
        <h2 className="font-light tracking-[0.08em]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(2rem,5vw,4rem)", color: "#0a0a0a" }}>
          {t.title}
        </h2>
        <div className="w-10 h-px mx-auto mt-5" style={{ background: "#c9a96e" }} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {t.items.map((item, i) => (
          <div key={i} className="group relative overflow-hidden cursor-pointer" style={{ aspectRatio: "2/3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgs[i]} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: "saturate(0.65)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.18) 50%, transparent 100%)" }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(201,169,110,0.07)" }} />
            <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ background: "linear-gradient(90deg,#c9a96e,#e8c99a,#c9a96e)" }} />

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
              <p className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{item.name_en}</p>
              <h3 className="font-light mb-1" style={{ fontFamily: "Georgia, serif", color: "#f5f0e8", fontSize: "clamp(1.1rem,2.5vw,1.6rem)", letterSpacing: "0.05em" }}>{item.name}</h3>
              <p className="text-[10px]" style={{ color: "#c9a96e77", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>{item.count}</p>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase mt-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                <span className="w-4 h-px" style={{ background: "#c9a96e" }} />
                {lang === "ar" ? "تصفح" : "SHOP"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
