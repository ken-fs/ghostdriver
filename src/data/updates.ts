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
export const UPDATES_LAST_CHECKED = "2026-10-19";

/**
 * Verified cadence: updates land on a near-weekly rhythm. Through August the
 * builds landed Fridays ~2:00 PM ET; since October the three verified builds
 * (Oct 5, Oct 12, Oct 17) landed Mondays, early afternoon ET. The game renames its
 * listing after the headline feature, which is the quickest read on what
 * shipped (currently "[NEW LIMITED] Ghost Driver [ALPHA]", build Oct 17
 * 19:34 UTC = 3:34 PM ET per the Roblox games API).
 */
export const UPDATE_CADENCE = {
  rhythm: "Near-weekly — the three October builds (Oct 5, Oct 12, Oct 17) landed Mondays, ~2:00 PM ET; before that the rhythm was Fridays.",
  currentEvent: "The Oct 17 [NEW LIMITED] build — the limited Varnstrom Vildra hypercar (7 days only) plus the permanent Helly Mamba ($450,000) with an exclusive wide body kit.",
  nextExpected: "within the coming week — October has shipped one build per week (Oct 5, Oct 12, Oct 17).",
} as const;

/** Likes milestone to watch for the next code (415K/447K/480K all dropped codes; likes passed 520K on Oct 13). */
export const NEXT_CODE_MILESTONE = 500_000;

export const UPDATE_LOG: GameUpdate[] = [
  {
    date: "2026-10-17",
    title: "[NEW LIMITED] build — Varnstrom Vildra limited hypercar + Helly Mamba permanent",
    items: [
      "Game client updated Oct 17, 19:34 UTC (3:34 PM ET) and the listing was renamed '[NEW LIMITED] Ghost Driver [ALPHA]' (Roblox games API).",
      "Official Discord #updates announcement (Release 10/17/2026, read on screen in JoJewyd's Oct 17 video): new LIMITED VEHICLE — VARNSTROM VILDRA, a hypercar available 7 DAYS ONLY (off sale ~Oct 24); new PERMANENT VEHICLE — HELLY MAMBA, available to everyone and comes with an exclusive Wide Body kit.",
      "Helly Mamba price $450,000 confirmed in-game by two independent creators (Cluck's purchase + JoJewyd's buy dialog).",
      "Also per the announcement: performance improvements (including faster car spawning), a small UI refresh (HUD buttons, dealership UI), and more bug fixes.",
      "No new codes with this wave — Cluck checked in-game after the update; the only active code remains THANKSFOR480K.",
      "Both new cars are held out of the roster page for now: in-game names and the Helly Mamba price are confirmed, but their stat cards (HP / top speed / 0-60) are not yet in any published source.",
    ],
    source: "Roblox games API + official Discord #updates (read in JoJewyd, Oct 17) + Cluck (Oct 17)",
  },
  {
    date: "2026-10-12",
    title: "Tokyo City map wave (the [NEW MAP] build)",
    items: [
      "Game client updated Oct 12, 17:47 UTC (1:47 PM ET) and the listing was renamed '[🗺️NEW MAP] Ghost Driver [ALPHA]' (Roblox games API).",
      "Tokyo City map confirmed by three independent creator videos spanning Oct 10–12 — the wave is the map plus limited cars.",
      "Cars named in that coverage include a Nissan GT-R R35 and a Bugatti Veyron; a new limited car also shipped (creator coverage; not yet added to the roster page until its in-game name and stats are confirmed).",
    ],
    source: "Roblox games API + JoJewyd (Oct 10) + two further creator videos (Oct 10, Oct 12)",
  },
  {
    date: "2026-10-05",
    title: "Car + Trials update with a 2x cash window",
    items: [
      "Two independent creator videos posted Oct 5 covering the same drop: a new car, Trials content, and a 2x Cash event window.",
      "A third creator video (Oct 6) covers a newly added secret car from the same stretch.",
      "No codes verified with this wave (the next verified code drop remains the Sep 10 four-code batch).",
    ],
    source: "Two independent creator videos (Oct 5) + one follow-up (Oct 6)",
  },
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
