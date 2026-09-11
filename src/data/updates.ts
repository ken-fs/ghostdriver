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
export const UPDATES_LAST_CHECKED = "2026-09-11";

/**
 * Verified cadence: updates land roughly weekly, Fridays ~2:00 PM ET, and each
 * event runs one week (Aug 14→21, Aug 21→28, Aug 29→Sep 5 — Roblox event pages).
 * 2026-09-05: the "New Limited Cars!" event has ended and no new event is
 * running on the Roblox event page; a client build did land Sep 4 ~1:20 PM ET
 * (games API), contents unverified.
 */
export const UPDATE_CADENCE = {
  rhythm: "Weekly — new updates land around Fridays ~2:00 PM ET (this week's landed a day early, Thursday ~4:30 PM ET).",
  currentEvent: "A client update landed Sep 10 with a 4-code drop (incl. NEWMAP — a new map is implied but unverified); no event page live yet.",
  nextExpected: "Next weekly update around Friday, Sep 18, 2026, ~2:00 PM ET.",
} as const;

/** Likes milestone to watch for the next code (250K/350K/415K all dropped codes). */
export const NEXT_CODE_MILESTONE = 450_000;

export const UPDATE_LOG: GameUpdate[] = [
  {
    date: "2026-09-11",
    title: "Update + 4-code drop (landed a day early)",
    items: [
      "Game client updated Sep 10, ~4:31 PM ET (Roblox games API) — a day ahead of the usual Friday rhythm.",
      "Four new codes verified by 3 sources (TryHardGuides, RadioTimes, creator video): THANKSFOR415K (25,000 Cash — the 415K-likes milestone, skipping 400K naming), NEWMAP (15,000), VECTOR (15,000), TECZWASHERE (10,000, creator code).",
      "THANKSFOR350K retired in the same wave.",
      "NEWMAP's name implies a new map; patch contents beyond the codes are unverified. Insider Gaming's roster shows a new 'Granadino Tocinero GT2' ($1.6M) — single source, not yet in our roster.",
    ],
    source: "Roblox games API + TryHardGuides + RadioTimes + creator video",
  },
  {
    date: "2026-09-04",
    title: "Weekly build lands, event ends",
    items: [
      "Game client updated Sep 4, ~1:20 PM ET (Roblox games API) — patch contents not yet covered by 2+ sources.",
      "The Aug 29 'New Limited Cars!' event has ended; no event is currently running on the Roblox event page.",
      "The Aug 29 limited car is now reported by 2 sources as a McLaren (creator JoJewyd + TikTok update coverage) — kept out of the roster until its in-game name and stats are confirmed.",
    ],
    source: "Roblox games API + event page + TikTok coverage",
  },
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
