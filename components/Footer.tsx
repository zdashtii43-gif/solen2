"use client";
import { translations } from "@/lib/data";
interface FooterProps {
  lang: "ar" | "en";
}

const SocialInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="#c9a96e" stroke="none"/>
  </svg>
);
const SocialX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a96e">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const SocialYoutube = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#c9a96e" stroke="none"/>
  </svg>
);

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer style={{ background: "#050505" }}>
      {/* Gold line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }} />

      <div className="px-5 md:px-10 pt-16 pb-8 max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-6 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-4xl font-light tracking-[0.4em] mb-3"
              style={{ fontFamily: "Georgia, serif", color: "#c9a96e" }}
            >
              SOLEN
            </h3>
            <p className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: "#c9a96e66", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              {t.tagline}
            </p>
            <p className="text-sm leading-loose max-w-xs" style={{ color: "#444", fontFamily: lang === "ar" ? "Georgia, serif" : "Helvetica Neue, Arial, sans-serif", lineHeight: "2" }}>
              {lang === "ar"
                ? "كل قطعة تحكي قصة. نصنع الجمال الذي يتجاوز الزمن."
                : "Every piece tells a story. We craft beauty that transcends time."}
            </p>
            {/* Social icons */}
            <div className="flex gap-5 mt-8">
              {[SocialInstagram, SocialX, SocialYoutube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{ borderColor: "#c9a96e33" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a96e"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#c9a96e33"; }}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              {lang === "ar" ? "تصفح" : "NAVIGATE"}
            </h4>
            {[
              lang === "ar" ? "الحقائب" : "Bags",
              lang === "ar" ? "الساعات" : "Watches",
              lang === "ar" ? "المجوهرات" : "Jewelry",
              lang === "ar" ? "النظارات" : "Eyewear",
              lang === "ar" ? "الجديد" : "New Arrivals",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm mb-3 hover:text-[#c9a96e] transition-colors duration-300"
                style={{ color: "#444", fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] uppercase mb-6" style={{ color: "#c9a96e", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
              {lang === "ar" ? "تواصل" : "CONTACT"}
            </h4>
            {[
              { label: lang === "ar" ? "البريد" : "Email", value: "hello@solen.com" },
              { label: lang === "ar" ? "الهاتف" : "Phone", value: "+965 0000 0000" },
              { label: lang === "ar" ? "العنوان" : "Address", value: lang === "ar" ? "الكويت" : "Kuwait" },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <p className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: "#c9a96e55", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  {item.label}
                </p>
                <p className="text-sm" style={{ color: "#444", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "#c9a96e11" }}>
          <p className="text-[10px]" style={{ color: "#333", fontFamily: "Helvetica Neue, Arial, sans-serif" }}>
            {t.rights}
          </p>
          <div className="flex flex-wrap gap-6">
            {t.links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] hover:text-[#c9a96e] transition-colors duration-300"
                style={{ color: "#333", fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
