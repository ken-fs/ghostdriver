/**
 * Ghost Driver car roster.
 * Prices below were each STATED by creators in gameplay video captions and
 * cross-checked where possible (Aug 2026). Stock top speeds are not published
 * anywhere yet, so they stay blank ("check in-game") — we never invent numbers.
 * Tiers here rank VALUE FOR CASH (grounded in prices + creators' stated verdicts),
 * not raw top speed; a pure-speed ranking waits on verified stock speeds.
 */
export interface Car {
  name: string;
  price?: string;
  topSpeed?: string;
  tier?: "S" | "A" | "B" | "C";
  limited?: boolean;
  note?: string;
}

export const CARS_LAST_CHECKED = "2026-08-19";

export const CARS: Car[] = [
  {
    name: "Audi RS7",
    price: "260,000 Cash",
    tier: "S",
    note: "Widely called the best stats-for-money car in the game — the value pick.",
  },
  {
    name: "Ferrari 812 Superfast",
    price: "≈1.8M Cash / ~1,400 Robux",
    limited: true,
    tier: "S",
    note: "Limited car, requires Level 15. Price is player-reported and not fully confirmed — check in-game.",
  },
  {
    name: "BMW M3 (G80)",
    price: "240,000 Cash",
    tier: "A",
    note: "Cheapest of the popular picks and a common tuning base — solid all-rounder.",
  },
  {
    name: "Audi R8",
    price: "760,000 Cash",
    tier: "B",
    note: "Twin-turbo; roughly 3× the RS7's price, so a worse value buy despite the power.",
  },
  {
    name: "Porsche 911 GT3 RS",
    price: "200 Robux",
    note: "Bought with Robux, not Cash — a premium-currency car, so it sits outside the Cash-value tiers.",
  },
];

/** Roster is still incomplete — the dealership has more cars than are documented. */
export const CARS_ROSTER_PARTIAL = true;

/** What we know qualitatively about how cars work. */
export const CARS_KNOWN = {
  hasFreeStarter: true,
  boughtAt: "in-game dealership",
  currency: "Cash",
  tuning: true,
} as const;
