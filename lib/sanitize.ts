// ─── OWASP A03: Injection / XSS Prevention ────────────────────────────────────

/**
 * Strip dangerous HTML characters to prevent XSS
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Validate email format — RFC 5322 simplified
 */
export function isValidEmail(email: string): boolean {
  const pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email) && email.length <= 254;
}

/**
 * Rate-limit guard (client-side token bucket)
 * Returns false if the action should be blocked
 */
const buckets: Record<string, { count: number; reset: number }> = {};

export function rateLimitCheck(key: string, maxPerMinute = 3): boolean {
  const now = Date.now();
  if (!buckets[key] || now > buckets[key].reset) {
    buckets[key] = { count: 1, reset: now + 60_000 };
    return true;
  }
  if (buckets[key].count >= maxPerMinute) return false;
  buckets[key].count++;
  return true;
}
