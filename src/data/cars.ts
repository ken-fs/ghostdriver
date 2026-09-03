/**
 * Ghost Driver car roster — in-game names, fictional badges (Voss, Helly, …).
 * REBUILT 2026-09-03 from two independent published sources, cross-checked:
 *   - Gamepur (Aug 20, 2026): full table — prices, top speed, HP, drivetrain, 0-60.
 *   - Sportskeeda (Aug 2026): the game's own B/A/S performance tiers + spot stats.
 * Every overlapping figure matches between the two. Earlier community nicknames
 * ("Audi RS7" etc.) were dropped — they are not the in-game names.
 *
 * valueTier is OUR value-for-cash grade (verified price vs verified stats +
 * creator consensus: Gamepur names RT10 TT best overall, Rangy Helly best cheap).
 * gameTier is the game's official B/A/S classification (per Sportskeeda).
 */

export type ValueTier = "S" | "A" | "B" | "C";
export type GameTier = "B" | "A" | "S";

export interface Car {
  name: string;
  /** URL anchor used for deep links on /cars/ and /tier-list/. */
  slug: string;
  priceCash?: number;
  priceRobux?: number;
  topSpeedMph: number;
  hp: number;
  drivetrain: "AWD" | "RWD";
  zeroToSixty: string;
  /** The game's own performance tier (Sportskeeda). */
  gameTier?: GameTier;
  /** Our value-for-cash grade. */
  valueTier: ValueTier;
  limited?: boolean;
  /** When a limited car left the shop (event windows verified via Roblox events). */
  limitedUntil?: string;
  levelReq?: number;
  note?: string;
  howToGet: string;
  analysis: string;
  bestFor: string;
}

export const CARS_LAST_CHECKED = "2026-09-03";

/** True while the Aug 29 – Sep 5 event's limited car(s) remain unverified by 2+ sources. */
export const CARS_ROSTER_PARTIAL = true;

export const CARS: Car[] = [
  {
    name: "Wulfbrecht RZ7",
    slug: "wulfbrecht-rz7",
    priceCash: 0,
    topSpeedMph: 168,
    hp: 310,
    drivetrain: "AWD",
    zeroToSixty: "4.6s",
    gameTier: "B",
    valueTier: "C",
    note: "The free starter car everyone begins with.",
    howToGet: "Free — it's the default starter car.",
    analysis:
      "It costs nothing and gets you driving immediately, but 310 HP is the weakest in the game. Every early Cash should go toward replacing it — the Kitsuni LX at $40,000 is the first jump.",
    bestFor: "Your first sessions while you bank starter Cash.",
  },
  {
    name: "Kitsuni LX",
    slug: "kitsuni-lx",
    priceCash: 40000,
    topSpeedMph: 165,
    hp: 450,
    drivetrain: "AWD",
    zeroToSixty: "3.1s",
    gameTier: "B",
    valueTier: "A",
    howToGet: "Buy at the dealership for $40,000 Cash.",
    analysis:
      "The cheapest purchase in the game and a huge leap from the starter: 450 HP (+140) and a 3.1s launch — quicker 0-60 than cars costing 5× more. Top speed stays B-tier, so treat it as a stepping stone toward the Rangy Helly.",
    bestFor: "The first upgrade when $120K feels far away.",
  },
  {
    name: "Weinchen V20",
    slug: "weinchen-v20",
    priceCash: 85000,
    topSpeedMph: 177,
    hp: 460,
    drivetrain: "RWD",
    zeroToSixty: "3.9s",
    gameTier: "A",
    valueTier: "B",
    note: "Sportskeeda spells it “VN20”.",
    howToGet: "Buy at the dealership for $85,000 Cash.",
    analysis:
      "A genuine A-tier car, but it sits in an awkward spot: only 10 HP over the Kitsuni LX, and $35,000 more saved buys the Rangy Helly's 710 HP. Most players should skip it.",
    bestFor: "RWD fans who want A-tier handling on a budget.",
  },
  {
    name: "Rangy Helly",
    slug: "rangy-helly",
    priceCash: 120000,
    topSpeedMph: 189,
    hp: 710,
    drivetrain: "AWD",
    zeroToSixty: "3.5s",
    gameTier: "A",
    valueTier: "S",
    howToGet: "Buy at the dealership for $120,000 Cash.",
    analysis:
      "The value king of the mid-game — creators (Gamepur) name it the best cheap car, and the stats back it: 710 HP and AWD traction for $120,000, numbers the $160,000 Trailhawk Helly doesn't beat. Nothing else comes close at this price.",
    bestFor: "Most players' first serious car — the best Cash-per-performance buy in the game.",
  },
  {
    name: "Trailhawk Helly",
    slug: "trailhawk-helly",
    priceCash: 160000,
    topSpeedMph: 180,
    hp: 707,
    drivetrain: "AWD",
    zeroToSixty: "3.5s",
    gameTier: "A",
    valueTier: "C",
    howToGet: "Buy at the dealership for $160,000 Cash.",
    analysis:
      "Dominated by its own sibling: it costs $40,000 more than the Rangy Helly yet has less power (707 vs 710 HP) and a lower top speed (180 vs 189 mph) for the same 3.5s launch. Skip it entirely.",
    bestFor: "Nobody — buy the Rangy Helly instead.",
  },
  {
    name: "Eisenhardt G43",
    slug: "eisenhardt-g43",
    priceCash: 200000,
    topSpeedMph: 186,
    hp: 603,
    drivetrain: "AWD",
    zeroToSixty: "3.1s",
    gameTier: "A",
    valueTier: "B",
    howToGet: "Buy at the dealership for $200,000 Cash.",
    analysis:
      "Quick 3.1s launch and AWD, but the Rangy Helly out-powers it for $80,000 less, and $60,000 more buys the S-tier Voss RT8. It's the filling nobody needs between two better sandwiches.",
    bestFor: "Players who value acceleration over top speed and can't stretch to the RT8.",
  },
  {
    name: "Weinchen V80",
    slug: "weinchen-v80",
    priceCash: 240000,
    topSpeedMph: 180,
    hp: 503,
    drivetrain: "RWD",
    zeroToSixty: "3.2s",
    gameTier: "S",
    valueTier: "C",
    howToGet: "Buy at the dealership for $240,000 Cash.",
    analysis:
      "An S-tier badge with mid-pack numbers: 503 HP and 180 mph at $240,000 — just $20,000 below the Voss RT8, which beats it on every single stat. The weakest S-tier buy.",
    bestFor: "Collectors completing the Weinchen line.",
  },
  {
    name: "Voss RT8",
    slug: "voss-rt8",
    priceCash: 260000,
    topSpeedMph: 205,
    hp: 780,
    drivetrain: "AWD",
    zeroToSixty: "3.0s",
    gameTier: "S",
    valueTier: "S",
    howToGet: "Buy at the dealership for $260,000 Cash.",
    analysis:
      "The best all-round Cash buy. At $260,000 it owns its bracket: 205 mph, 780 HP, AWD and a 3.0s launch — the identically-priced Bullseye Helly loses to it on power, traction and acceleration. Creators' consensus pick before the $760K endgame.",
    bestFor: "Players graduating from the Rangy Helly — the car to farm toward.",
  },
  {
    name: "Bullseye Helly",
    slug: "bullseye-helly",
    priceCash: 260000,
    topSpeedMph: 204,
    hp: 717,
    drivetrain: "RWD",
    zeroToSixty: "3.6s",
    gameTier: "S",
    valueTier: "B",
    howToGet: "Buy at the dealership for $260,000 Cash.",
    analysis:
      "Same $260,000 as the Voss RT8 but worse everywhere on paper: -63 HP, RWD instead of AWD, and a 3.6s launch vs 3.0s. Only makes sense if you specifically want a RWD drift feel.",
    bestFor: "RWD purists; everyone else should take the RT8.",
  },
  {
    name: "Shelly LZ1",
    slug: "shelly-lz1",
    priceCash: 360000,
    topSpeedMph: 212,
    hp: 755,
    drivetrain: "RWD",
    zeroToSixty: "2.9s",
    gameTier: "S",
    valueTier: "A",
    howToGet: "Buy at the dealership for $360,000 Cash.",
    analysis:
      "212 mph is within 3 mph of the $760,000 flagship, for less than half the price — the top-speed bargain. The tradeoffs: RWD and -25 HP vs the RT8 below it. If you can handle the tail, it's the fastest thing per dollar in the game.",
    bestFor: "Skilled drivers chasing top speed without the $760K grind.",
  },
  {
    name: "Voss RT10 TT",
    slug: "voss-rt10-tt",
    priceCash: 760000,
    topSpeedMph: 215,
    hp: 750,
    drivetrain: "AWD",
    zeroToSixty: "2.6s",
    gameTier: "S",
    valueTier: "A",
    howToGet: "Buy at the dealership for $760,000 Cash.",
    analysis:
      "The flagship: fastest launch in the game (2.6s), joint-highest top speed (215 mph), AWD grip — creators (Gamepur) call it the best car overall. It's simply not a *value* buy: it costs 2.1× the Shelly LZ1 for +3 mph. Grind for it last.",
    bestFor: "Endgame players who want the undisputed best car.",
  },
  {
    name: "Reinhardt RT32",
    slug: "reinhardt-rt32",
    priceRobux: 199,
    topSpeedMph: 210,
    hp: 520,
    drivetrain: "RWD",
    zeroToSixty: "2.9s",
    valueTier: "B",
    note: "Starter Pack also includes a custom license and Global Radio.",
    howToGet: "Robux Shop only — part of the Starter Pack (R$199).",
    analysis:
      "The only Robux-exclusive car. Its 210 mph looks strong, but 520 HP is Kitsuni-tier power — you're paying R$199 for style, the custom license and Global Radio, not performance. Stats-wise the free Cash path beats it quickly.",
    bestFor: "Supporters who want the Starter Pack extras, not stat-chasers.",
  },
  {
    name: "Castellani Specchiera",
    slug: "castellani-specchiera",
    priceCash: 960000,
    priceRobux: 999,
    topSpeedMph: 215,
    hp: 840,
    drivetrain: "RWD",
    zeroToSixty: "2.8s",
    valueTier: "B",
    limited: true,
    limitedUntil: "2026-08-22",
    note: "Highest horsepower in the game (840 HP).",
    howToGet: "Limited car — left the shop Aug 22, 2026 (was $960,000 or R$999).",
    analysis:
      "The horsepower king (840 HP) and joint-fastest at 215 mph, sold for one week in August. RWD keeps it honest. If it returns, it's the trophy buy — it beat the RT10 TT on power while it lasted.",
    bestFor: "Collectors — watch weekly events for a rerun.",
  },
  {
    name: "Takama F10 GT",
    slug: "takama-f10-gt",
    priceCash: 1800000,
    priceRobux: 1550,
    topSpeedMph: 202,
    hp: 563,
    drivetrain: "RWD",
    zeroToSixty: "3.3s",
    valueTier: "C",
    limited: true,
    limitedUntil: "2026-08-21",
    levelReq: 15,
    howToGet: "Limited car — left the shop Aug 21, 2026 (was $1,800,000 or R$1,550, requires Level 15).",
    analysis:
      "The most expensive car ever sold in Ghost Driver — and a pure collector piece. 563 HP and 202 mph are mid-tier numbers at 2.4× the flagship's price. Its worth is rarity (Level 15 gate + one-week window), not speed.",
    bestFor: "Collectors only; never a performance buy.",
  },
];

/** What we know qualitatively about how cars work (Gamepur-verified purchase flow). */
export const CARS_KNOWN = {
  hasFreeStarter: true,
  boughtAt: "dealership next to the spawn point (walk into the green circle)",
  currency: "Cash",
  tuning: true,
} as const;
