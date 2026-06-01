"use client";
import { useState } from "react";
import { translations } from "@/lib/data";
import { isValidEmail, sanitizeText, rateLimitCheck } from "@/lib/sanitize";

interface NewsletterProps { lang: "ar" | "en" }

export default function Newsletter({ lang }: NewsletterProps) {
  const t = translations[lang].newsletter;
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=75&auto=format&fit=crop"
          alt="" className="w-full h-full object-cover" style={{ opacity: 0.1, filter: "saturate(0)" }} />
      </div>
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px" style={{ background: "linear-gradient(90deg,transparent,#c9a96e)" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#c9a96e" }} />
          <div className="w-12 h-px" style={{ background: "linear-gradient(90deg,#c9a96e,transparent)" }} />
        </div>
        <p className="text-[10px] tracking-[0.5em] uppercase mb-5" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
          {lang === "ar" ? "عالم سولن" : "THE SOLEN WORLD"}
        </p>
        <h2 className="font-light mb-5" style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(2rem,5vw,3.2rem)", color: "#f5f0e8", letterSpacing: "0.06em" }}>
          {t.title}
        </h2>
        <p className="text-sm mb-12 leading-loose" style={{ color: "#555", fontFamily: "Helvetica Neue, Arial, sans-serif", letterSpacing: "0.04em" }}>
          {t.subtitle}
        </p>
        {submitted ? (
          <div className="py-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg" style={{ border: "1px solid #c9a96e", color: "#c9a96e" }}>✓</div>
            <p className="text-sm tracking-widest" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              {lang === "ar" ? "شكراً لاشتراكك" : "THANK YOU"}
            </p>
          </div>
        ) : (
          <form onSubmit={e => {
            e.preventDefault();
            setError("");
            // A03: sanitize + validate
            const clean = sanitizeText(email.trim());
            if (!isValidEmail(clean)) {
              setError(lang === "ar" ? "بريد إلكتروني غير صالح" : "Invalid email address");
              return;
            }
            // A07: rate limiting
            if (!rateLimitCheck("newsletter", 3)) {
              setError(lang === "ar" ? "حاول مجدداً بعد دقيقة" : "Too many attempts, try again later");
              return;
            }
            setSubmitted(true);
          }}
            className="flex flex-col sm:flex-row border" style={{ borderColor: "#c9a96e22" }}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder={t.placeholder} dir={lang === "ar" ? "rtl" : "ltr"}
              className="flex-1 px-5 py-4 bg-transparent text-sm outline-none"
              style={{ color: "#f5f0e8", fontFamily: "Helvetica Neue, Arial, sans-serif", letterSpacing: "0.05em" }}
              maxLength={254}
              autoComplete="email"
            />
            <button type="submit" className="px-8 py-4 text-[11px] tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ background: "#c9a96e", color: "#0a0a0a", fontFamily: "Helvetica Neue, Arial, sans-serif", border: "none", cursor: "pointer" }}>
              {t.cta}
            </button>
          </form>
        )}
        {error && (
          <p className="mt-3 text-[11px] tracking-wide text-center" style={{ color: "#e07070", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
