import type { NextConfig } from "next";

// ─── OWASP Security Headers ───────────────────────────────────────────────────
const securityHeaders = [
  // A05 - Security Misconfiguration: prevent clickjacking
  { key: "X-Frame-Options", value: "DENY" },

  // A05 - Prevent MIME sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },

  // A05 - Control referrer information leakage
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // A05 - Force HTTPS (HSTS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },

  // A05 - Disable browser features not needed
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },

  // A03 - XSS Protection (legacy browsers)
  { key: "X-XSS-Protection", value: "1; mode=block" },

  // A05 - Content Security Policy
  // Allows: self, Unsplash images, no inline scripts except Next.js
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-eval in dev
      "style-src 'self' 'unsafe-inline'",                // Tailwind inline styles
      "img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // ─── A06: Vulnerable Components ─────────────────────────────────────────────
  // Disable x-powered-by header (hides Next.js version)
  poweredByHeader: false,

  // ─── Security Headers on all routes ──────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // ─── A05: Only allow images from trusted domains ──────────────────────────────
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
