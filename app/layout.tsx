import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLEN — إكسسوارات فاخرة",
  description: "إكسسوارات فاخرة خالدة مصممة للذوق الرفيع.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
