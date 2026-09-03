/**
 * Ghost Driver redeem codes — single source of truth.
 * RULE: never invent codes. Only list codes verified from 2+ sources or an
 * official source. Mark uncertain ones with status "unconfirmed".
 * Sources this pull (2026-09-03): IGN (Sep 1, in-game tested), tryhardguides
 * (Aug 30), pcgamesn (Aug 30), progameguides (Aug 29), beebom (Sep 1),
 * gamerant (Aug 27) — cross-checked.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-03";

export const CODES: GameCode[] = [
  {
    // 350K-likes milestone (dropped ~Aug 29). 2026-09-03: confirmed active by
    // 5 sources — IGN (Sep 1, tests in-game), tryhardguides, pcgamesn,
    // progameguides, allthings.how. Promoted unconfirmed → active.
    code: "THANKSFOR350K",
    reward: "20,000 Cash",
    status: "active",
    note: "IGN (tested) says 20,000 Cash; PCGamesN lists 10K.",
  },
  {
    // 2026-09-03: fresh sources split — IGN (Sep 1) and tryhardguides (Aug 30)
    // moved it to expired; beebom (Sep 1) and pcgamesn (Aug 30) still list it
    // working. Moved active → unconfirmed ("might still work") until the
    // disagreement resolves. Reward also disputed: RadioTimes/beebom say $15K,
    // PCGamesN says 10K.
    code: "THANKSFOR250K",
    reward: "10,000–15,000 Cash",
    status: "unconfirmed",
    note: "Reports conflict (Sep 1): IGN & Try Hard Guides say expired, Beebom & PCGamesN still list it — try your luck.",
  },
  {
    // 2026-09-03: same split — IGN (Sep 1) and tryhardguides (Aug 30) say
    // expired; beebom (Sep 1), pcgamesn and progameguides (Aug 29–30) still
    // list it working. Moved active → unconfirmed.
    code: "SINCEROWASHERE",
    reward: "10,000 Cash",
    status: "unconfirmed",
    note: "Reports conflict (Sep 1): IGN & Try Hard Guides say expired, but Beebom, PCGamesN & ProGameGuides still list it.",
  },
  {
    // 2026-08-31: gamerant (Aug 27) and radiotimes both list it expired;
    // only pcgamesn's table still shows it. Moved active → expired.
    // 2026-09-03: IGN (Sep 1) + tryhardguides also expired — settled.
    code: "THANKSFOR1MIL",
    reward: "10,000 Cash",
    status: "expired",
  },
  {
    // 2026-08-22: disagreement resolved toward expired — 3/4 sources (beebom,
    // pockettactics, gamerant/newest) list it expired; only the older
    // tryhardguides still shows it. Reclassified from unconfirmed to expired.
    code: "SORRYFORLATE",
    reward: "10,000 Cash",
    status: "expired",
  },
];

/** How to redeem — from in-game shop flow. */
export const REDEEM_STEPS: string[] = [
  "Launch Ghost Driver on Roblox.",
  "Open the Shop panel on the left side of the screen.",
  "Go to the Codes / Rewards tab.",
  "Type a code exactly as shown (they are case-sensitive).",
  "Hit Redeem to claim your Cash.",
];
