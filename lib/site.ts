export const siteName = "Launch with Mark";

export const siteDescription =
  "A curated portfolio hub showcasing high-impact product marketing campaigns and strategic results.";

export const personName = "Mark Saldaña";

export const email = "markjsaldana@gmail.com";

export const linkedInUrl = "https://www.linkedin.com/in/markjsaldana/";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const preview = process.env.VERCEL_URL?.trim();

  const raw =
    explicit ||
    (production
      ? `https://${production}`
      : preview
        ? `https://${preview}`
        : "http://localhost:3000");

  return raw.replace(/\/$/, "");
}
