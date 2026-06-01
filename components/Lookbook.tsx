"use client";

interface LookbookProps { lang: "ar" | "en" }

export default function Lookbook({ lang }: LookbookProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "82vh", minHeight: "500px" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90&auto=format&fit=crop"
        alt="Lookbook" className="w-full h-full object-cover"
        style={{ filter: "saturate(0.45) contrast(1.15)", objectPosition: "center 22%" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(10,10,10,0.72) 0%,rgba(10,10,10,0.28) 60%,rgba(10,10,10,0.5) 100%)" }} />

      {[
        "top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"
      ].map(pos => (
        <div key={pos} className={`absolute ${pos} w-6 h-6`}>
          <div className="absolute top-0 left-0 w-full h-px" style={{ background: "#c9a96e" }} />
          <div className="absolute top-0 left-0 h-full w-px" style={{ background: "#c9a96e" }} />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-[10px] tracking-[0.6em] uppercase mb-6" style={{ color: "#c9a96e88", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
          {lang === "ar" ? "لوك بوك ٢٠٢٥" : "LOOKBOOK 2025"}
        </p>
        <div className="flex items-center gap-5 mb-7">
          <div className="w-10 h-px" style={{ background: "linear-gradient(90deg,transparent,#c9a96e)" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#c9a96e" }} />
          <div className="w-10 h-px" style={{ background: "linear-gradient(90deg,#c9a96e,transparent)" }} />
        </div>
        <h2 className="font-light mb-10 max-w-xl" style={{
          fontFamily: "Georgia,'Times New Roman',serif",
          fontSize: "clamp(2.5rem,7vw,5.5rem)",
          color: "#f5f0e8", lineHeight: 1.15, letterSpacing: "0.08em"
        }}>
          {lang === "ar" ? "أناقة لا حدود لها" : "Elegance Without Limits"}
        </h2>
        <button
          className="px-10 py-4 text-[11px] tracking-[0.35em] uppercase border transition-all duration-400 hover:bg-[#c9a96e] hover:text-[#0a0a0a] hover:border-[#c9a96e]"
          style={{ borderColor: "#c9a96e77", color: "#f5f0e8", fontFamily: "Helvetica Neue, Arial, sans-serif", background: "transparent", cursor: "pointer" }}>
          {lang === "ar" ? "اكتشف اللوك بوك" : "DISCOVER THE LOOKBOOK"}
        </button>
      </div>
    </section>
  );
}
