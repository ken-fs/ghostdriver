import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const paths = ["/", ...NAV.map((n) => n.href), ...LEGAL_NAV.map((n) => n.href)];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/codes/" ? "daily" : "weekly",
    priority: p === "/codes/" ? 1 : p === "/" ? 0.9 : 0.7,
  }));
}
