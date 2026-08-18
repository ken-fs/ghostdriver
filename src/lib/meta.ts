import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Build complete, consistent page metadata. Centralizes canonical + Open Graph +
 * Twitter so every page emits a correct per-page og:url (not the homepage URL).
 */
export function buildMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/codes/"
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      url: path,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
