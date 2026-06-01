"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Lookbook from "@/components/Lookbook";
import Editorial from "@/components/Editorial";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  return (
    <main dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar lang={lang} onToggleLang={() => setLang(l => l === "ar" ? "en" : "ar")} />
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <Categories lang={lang} />
      <FeaturedProducts lang={lang} />
      <Lookbook lang={lang} />
      <Editorial lang={lang} />
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
