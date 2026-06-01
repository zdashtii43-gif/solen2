"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { translations } from "@/lib/data";

interface NavbarProps {
  lang: "ar" | "en";
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [t.collections, t.bags, t.watches, t.jewelry, t.eyewear, t.about];

  return (
    <>
      {/* Announcement bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 py-2 text-center text-[10px] tracking-[0.35em] uppercase"
        style={{ background: "#0a0a0a", color: "#c9a96e88", fontFamily: "Helvetica Neue, Arial, sans-serif" }}
      >
        {lang === "ar" ? "شحن مجاني للطلبات فوق ٥٠ د.ك" : "Complimentary shipping on orders above KWD 50"}
      </div>

      {/* Main nav */}
      <nav
        className="fixed top-8 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
        }}
      >
        <div className="flex items-center justify-between px-5 md:px-12 py-4 md:py-5 max-w-screen-2xl mx-auto">
          {/* Mobile menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={18} color="#c9a96e" /> : <Menu size={18} color="#c9a96e" />}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] tracking-[0.22em] uppercase transition-colors duration-300 hover:text-[#c9a96e]"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", color: "#d4cfc7" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <div
              className="text-xl md:text-2xl font-light tracking-[0.5em]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#f5f0e8" }}
            >
              SOLEN
            </div>
            <div
              className="text-[7px] tracking-[0.55em] uppercase mt-[-2px] hidden md:block"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", color: "#c9a96e" }}
            >
              {lang === "ar" ? "إكسسوارات" : "LUXURY"}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4 md:gap-5">
            <button
              onClick={onToggleLang}
              className="hidden md:block text-[10px] tracking-[0.25em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", color: "#d4cfc7" }}
            >
              {t.language}
            </button>
            <button aria-label="Search">
              <Search size={16} color="#d4cfc7" />
            </button>
            <button aria-label="Bag" className="relative">
              <ShoppingBag size={16} color="#d4cfc7" />
              <span
                className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full text-[7px] flex items-center justify-center"
                style={{ background: "#c9a96e", color: "#0a0a0a", fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 transition-all duration-500"
        style={{
          background: "#0a0a0a",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col pt-32 px-8">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="py-5 text-2xl font-light tracking-[0.15em] border-b hover:text-[#c9a96e] transition-colors duration-300"
              style={{
                fontFamily: "Georgia, serif",
                color: "#f5f0e8",
                borderColor: "#c9a96e15",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.06}s`,
              }}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => { onToggleLang(); setMenuOpen(false); }}
            className="mt-8 text-left text-[11px] tracking-[0.3em] uppercase"
            style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif", background: "none", border: "none", cursor: "pointer" }}
          >
            {t.language}
          </button>
        </div>
      </div>
    </>
  );
}
