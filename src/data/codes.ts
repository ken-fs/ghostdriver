/**
 * Ghost Driver redeem codes — single source of truth.
 * RULE: never invent codes. Only list codes verified from 2+ sources or an
 * official source. Mark uncertain ones with status "unconfirmed".
 * Sources this pull (2026-08-31): gamerant (Aug 27) + radiotimes + pcgamesn
 * (Aug 30), cross-checked.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-08-31";

export const CODES: GameCode[] = [
  {
    // Likes-milestone drop (likes passed 250K in late Aug). Listed active by
    // gamerant (Aug 27), radiotimes and pcgamesn (Aug 30).
    code: "THANKSFOR250K",
    reward: "Cash",
    status: "active",
    note: "Amount unverified — PCGamesN says 10K, RadioTimes says $15K.",
  },
  { code: "SINCEROWASHERE", reward: "10,000 Cash", status: "active" },
  {
    // 350K-likes milestone. pcgamesn (Aug 30) is the only source so far —
    // keep unconfirmed until a second outlet or the Discord confirms it.
    code: "THANKSFOR350K",
    reward: "10,000 Cash",
    status: "unconfirmed",
  },
  {
    // 2026-08-31: gamerant (Aug 27) and radiotimes both list it expired;
    // only pcgamesn's table still shows it. Moved active → expired.
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
