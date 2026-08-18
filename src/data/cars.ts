/**
 * Ghost Driver car roster.
 * Names verified from creator gameplay videos (Aug 2026). Prices, top speeds and
 * tiers are NOT published in any text source yet — they live only in gameplay
 * footage — so we leave them blank rather than invent them. The dealership almost
 * certainly has more cars (updates keep adding them); this list grows as we confirm.
 */
export interface Car {
  name: string;
  price?: string;
  topSpeed?: string;
  tier?: "S" | "A" | "B" | "C";
  limited?: boolean;
  note?: string;
}

export const CARS_LAST_CHECKED = "2026-08-18";

/** Name-confirmed cars. Stats intentionally blank until verified in-game. */
export const CARS: Car[] = [
  {
    name: "Ferrari 812 Superfast",
    limited: true,
    note: "Limited car — includes the N-Largo widebody variant.",
  },
  { name: "Porsche 911 GT3 RS" },
  { name: "BMW M3 (G80)" },
  { name: "Audi RS7" },
];

/** True while we know the roster is incomplete (drives the "more coming" note). */
export const CARS_ROSTER_PARTIAL = true;

/** What we know qualitatively about how cars work. */
export const CARS_KNOWN = {
  hasFreeStarter: true,
  boughtAt: "in-game dealership",
  currency: "Cash",
  tuning: true, // "TUNING" updates confirmed
} as const;
