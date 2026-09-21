import type { MetadataRoute } from "next";
import { SITE, NAV, LEGAL_NAV } from "@/lib/site";
import { CARS } from "@/data/cars";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const paths = [
    "/",
    ...NAV.map((n) => n.href),
    ...LEGAL_NAV.map((n) => n.href),
    // Per-car detail pages - one URL per searchable entity, same structure the
    // dungeonlootr fork uses to farm long-tail "{entity} {game}" queries.
    ...CARS.map((c) => `/cars/${c.slug}/`),
    "/es/codes/",
    "/pt-br/codes/",
  ];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: p === "/codes/" ? "daily" : "weekly",
    priority: p === "/codes/" ? 1 : p === "/" ? 0.9 : p.startsWith("/cars/") ? 0.8 : 0.7,
  }));
}
