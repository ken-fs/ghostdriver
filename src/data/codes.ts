/**
 * Ghost Driver redeem codes — single source of truth.
 * RULE: never invent codes. Only list codes verified from 2+ sources or an
 * official source. Mark uncertain ones with status "unconfirmed".
 * Sources this pull (2026-09-05): dexerto (Sep 3 — one active code,
 * THANKSFOR350K only), IGN (Sep 1, in-game tested), gamerant (Sep 1).
 * Note: likes passed 400K (408K on Sep 5) but no THANKSFOR400K-style code
 * has appeared in any source yet.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-05";

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
    // 2026-09-04: disagreement resolved toward expired — IGN (Sep 1, in-game
    // tested), GameRant (Sep 1) and Dexerto (Sep 3) all list it expired;
    // only PCGamesN (Aug 30) and Beebom (Sep 1) still show it. Moved
    // unconfirmed → expired. Reward stayed disputed ($15K vs 10K) to the end.
    code: "THANKSFOR250K",
    reward: "10,000–15,000 Cash",
    status: "expired",
  },
  {
    // 2026-09-04: same resolution — IGN (Sep 1, tested), GameRant (Sep 1)
    // and Dexerto (Sep 3) all expired; PCGamesN and Beebom still list it.
    // Moved unconfirmed → expired.
    code: "SINCEROWASHERE",
    reward: "10,000 Cash",
    status: "expired",
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
