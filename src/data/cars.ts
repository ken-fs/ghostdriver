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
  /** URL anchor used for deep links on /cars/ and /tier-list/. */
  slug: string;
  price?: string;
  topSpeed?: string;
  tier?: "S" | "A" | "B" | "C";
  limited?: boolean;
  note?: string;
  /** How the car is obtained (verified channel only, no invented requirements). */
  howToGet: string;
  /** Longer value analysis for the tier-list detail block. */
  analysis: string;
  /** Who should buy it first. */
  bestFor: string;
}

export const CARS_LAST_CHECKED = "2026-08-19";

export const CARS: Car[] = [
  {
    name: "Audi RS7",
    slug: "audi-rs7",
    price: "260,000 Cash",
    tier: "S",
    note: "Widely called the best stats-for-money car in the game — the value pick.",
    howToGet: "Buy it at the in-game dealership for 260,000 Cash.",
    analysis:
      "The RS7 is the consensus value king: creators repeatedly call it the best stats-for-money car in Ghost Driver. At 260,000 Cash it sits just above the BMW M3's price while delivering the strongest all-round package of the Cash cars, so nearly every Cash you save early should point here.",
    bestFor: "Your first serious upgrade off the free starter car.",
  },
  {
    name: "Ferrari 812 Superfast",
    slug: "ferrari-812-superfast",
    price: "≈1.8M Cash / ~1,400 Robux",
    limited: true,
    tier: "S",
    note: "Limited car, requires Level 15. Price is player-reported and not fully confirmed — check in-game.",
    howToGet:
      "Limited-time dealership car — it requires Level 15 and is only sold while its event window is open.",
    analysis:
      "The aspirational pick: a limited car with a front-mid V12 badge and a price around 1.8M Cash (or ~1,400 Robux). It tops the roster on prestige and straight-line pace, but the price is player-reported and not fully confirmed — treat it as the endgame grind target, not an early purchase.",
    bestFor: "Endgame collectors grinding toward the top of the dealership.",
  },
  {
    name: "BMW M3 (G80)",
    slug: "bmw-m3-g80",
    price: "240,000 Cash",
    tier: "A",
    note: "Cheapest of the popular picks and a common tuning base — solid all-rounder.",
    howToGet: "Buy it at the in-game dealership for 240,000 Cash.",
    analysis:
      "The cheapest of the popular picks at 240,000 Cash and a favorite tuning base. It gives up a little to the RS7 at the top end, so if you can stretch the extra 20,000 Cash the RS7 is the better buy — but the M3 gets you off the starter car sooner, which raises your earnings per run immediately.",
    bestFor: "Players who want the fastest possible jump off the starter car.",
  },
  {
    name: "Audi R8",
    slug: "audi-r8",
    price: "760,000 Cash",
    tier: "B",
    note: "Twin-turbo; roughly 3× the RS7's price, so a worse value buy despite the power.",
    howToGet: "Buy it at the in-game dealership for 760,000 Cash.",
    analysis:
      "A twin-turbo mid-engine supercar — genuinely quick, but at 760,000 Cash it costs roughly three RS7s. The performance gain over the RS7 doesn't scale with the price, so it only makes sense after you already own and tune an S-tier car, or while saving toward the limited Ferrari.",
    bestFor: "Players who already own an S-tier car and want a second ride.",
  },
  {
    name: "Porsche 911 GT3 RS",
    slug: "porsche-911-gt3-rs",
    price: "200 Robux",
    note: "Bought with Robux, not Cash — a premium-currency car, so it sits outside the Cash-value tiers.",
    howToGet: "Bought with 200 Robux (premium currency), not Cash.",
    analysis:
      "A track-focused, high-downforce car famous for precision — the kind of ride that rewards threading tight gaps over pure top-end. Because it costs Robux instead of Cash it sits outside our Cash-value tiers: it skips the grind entirely rather than ranking within it.",
    bestFor: "Players happy to spend Robux to skip the Cash grind.",
  },
];

/** Roster is still incomplete — the dealership has more cars than are documented.
 *  The Aug 29, 2026 update also added a limited-time car (name not yet verified
 *  from 2+ sources — add it once confirmed) plus vehicle customization options. */
export const CARS_ROSTER_PARTIAL = true;

/** What we know qualitatively about how cars work. */
export const CARS_KNOWN = {
  hasFreeStarter: true,
  boughtAt: "in-game dealership",
  currency: "Cash",
  tuning: true,
} as const;
