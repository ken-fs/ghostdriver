/**
 * Ghost Driver update log — newest first. One entry per game update so the
 * weekly rhythm (see UPDATE_CADENCE) is a one-line data edit, not a page rewrite.
 * RULE: only log what is verified from official update notes, the Roblox event
 * page, or 2+ independent reports. No rumored content.
 */

export interface GameUpdate {
  /** ISO date the update landed. */
  date: string;
  title: string;
  items: string[];
  /** Where it was verified. */
  source: string;
}

/** Date this log was last human-verified (drives the freshness stamp). */
export const UPDATES_LAST_CHECKED = "2026-09-03";

/**
 * Verified cadence: updates land roughly weekly, Fridays ~2:00 PM ET, and each
 * event runs one week (Aug 14→21, Aug 21→28, Aug 29→Sep 5 — Roblox event pages).
 * The current "New Limited Cars!" event ends Sep 5, 2:00 PM ET, so the next
 * update is expected around then.
 */
export const UPDATE_CADENCE = {
  rhythm: "Weekly — new updates land on Fridays around 2:00 PM ET.",
  currentEvent: "New Limited Cars! (Aug 29 – Sep 5, 2:00 PM ET)",
  nextExpected: "Around Sep 5, 2026, when the current event ends.",
} as const;

/** Likes milestone the next code is expected at (250K and 350K both dropped codes). */
export const NEXT_CODE_MILESTONE = 400_000;

export const UPDATE_LOG: GameUpdate[] = [
  {
    date: "2026-09-03",
    title: "Full car roster documented",
    items: [
      "All 14 cars verified with stats — the limited Takama F10 GT ($1.8M, Lv.15) and Castellani Specchiera (840 HP) left the shop Aug 21/22.",
      "The Aug 29 event's new limited car is still unverified from 2+ sources — added once confirmed.",
    ],
    source: "Gamepur + Sportskeeda cross-check",
  },
  {
    date: "2026-09-01",
    title: "Follow-up patch",
    items: ["Data and bug fixes following the Aug 29 update."],
    source: "Official update notes",
  },
  {
    date: "2026-08-29",
    title: "New Limited Cars! (event: Aug 29 – Sep 5)",
    items: [
      "New limited-time vehicles for the event window.",
      "New vehicle customization options.",
      "New anti-cheat system.",
      "Data fixes and minor bug fixes.",
      "THANKSFOR350K code dropped around the 350K-likes milestone (20,000 Cash).",
    ],
    source: "Official update notes + Roblox event page",
  },
  {
    date: "2026-08-21",
    title: "New Limited Car! (event: Aug 21 – Aug 28)",
    items: [
      "A single limited-edition car for the week.",
      "Expanded customization and enhanced anti-cheat.",
    ],
    source: "Roblox event page",
  },
  {
    date: "2026-08-14",
    title: "New Cars (big update, Aug 14 – Aug 21)",
    items: ["Vehicles-focused drop that grew the dealership roster."],
    source: "Roblox event page",
  },
];
