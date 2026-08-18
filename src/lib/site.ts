/** Single source of truth for site-wide config. */
export const SITE = {
  name: "Ghost Driver Hub",
  domain: "ghostdriver.net",
  url: "https://ghostdriver.net",
  game: "Ghost Driver",
  robloxUrl: "https://www.roblox.com/games/137228775845999/Ghost-Driver",
  placeId: "137228775845999",
  universeId: "10173311467",
  developer: "Tilted Vehicles",
  tagline: "Working codes, best cars & cash guides for Roblox Ghost Driver.",
  // TODO(user): set up Cloudflare Email Routing so this address forwards to you.
  contactEmail: "contact@ghostdriver.net",
} as const;

/** Primary nav — kept in one place so header/footer/sitemap stay in sync. */
export const NAV: { href: string; label: string }[] = [
  { href: "/codes/", label: "Codes" },
  { href: "/cars/", label: "Cars" },
  { href: "/tier-list/", label: "Tier List" },
  { href: "/cash/", label: "Cash Guide" },
  { href: "/beginner-guide/", label: "Beginner Guide" },
  { href: "/updates/", label: "Updates" },
];

/** Footer / legal + info pages. */
export const LEGAL_NAV: { href: string; label: string }[] = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms" },
];
