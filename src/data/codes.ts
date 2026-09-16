/**
 * Ghost Driver redeem codes — single source of truth.
 * RULE: never invent codes. Only list codes verified from 2+ sources or an
 * official source. Mark uncertain ones with status "unconfirmed".
 * Sources this pull (2026-09-11): TryHardGuides (Sep 6) + RadioTimes (fresh,
 * with reward values) + YouTube creator coverage — 3-source. Roblox API
 * corroboration: likes 436K (415K milestone crossed), game updated Sep 10
 * 20:31 UTC. THANKSFOR350K retired the same wave (THG explicit + IGN expired
 * list direction + PocketTactics). Note: the milestone skipped 400K naming —
 * the drop was THANKSFOR415K.
 * Update (2026-09-16): THANKSFOR447K confirmed active — GameRant (September
 * list, marked NEW) + two creator redemption videos (ItsChalls Sep 14,
 * LRo8zOX9guc). Amount unconfirmed (creator estimated ~25K Cash). REVIVE
 * added as unconfirmed — GameRant NEW + one creator redemption, but
 * GameRant's list still carries settled-expired codes, so awaiting a
 * cleaner second source.
 */
export interface GameCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "unconfirmed";
  note?: string;
}

/** Date the codes list was last human-verified (drives the freshness stamp). */
export const CODES_LAST_CHECKED = "2026-09-16";

export const CODES: GameCode[] = [
  {
    // 447K-likes milestone (400K naming skipped, same as 415K). 2026-09-16:
    // confirmed active — GameRant (September, NEW) + creator redemption
    // videos ItsChalls (Sep 14) and LRo8zOX9guc. First flagged unconfirmed
    // in the Sep 16 patrol; GameRant was the second source.
    code: "THANKSFOR447K",
    reward: "Cash",
    status: "active",
    note: "Likes milestone. Amount unconfirmed — a creator redemption suggested ~25,000 Cash.",
  },
  {
    // 415K-likes milestone (the 400K naming was skipped). 2026-09-11:
    // 3-source — TryHardGuides (Sep 6), RadioTimes (has reward values),
    // YouTube creator video ("four new working money codes").
    code: "THANKSFOR415K",
    reward: "25,000 Cash",
    status: "active",
    note: "Likes milestone — richest code to date.",
  },
  {
    // Sep 10 update batch. Name implies a new map — content unverified.
    code: "NEWMAP",
    reward: "15,000 Cash",
    status: "active",
    note: "Dropped with the Sep 10 update (name suggests a new map).",
  },
  {
    code: "VECTOR",
    reward: "15,000 Cash",
    status: "active",
    note: "Dropped with the Sep 10 update.",
  },
  {
    // Creator code, same pattern as SINCEROWASHERE (ImSincero).
    code: "TECZWASHERE",
    reward: "10,000 Cash",
    status: "active",
    note: "Creator code (TEGZ), same pattern as SINCEROWASHERE.",
  },
  {
    // 2026-09-16: surfaced in GameRant's September list (NEW) + one creator
    // redemption video (LRo8zOX9guc, ~25K Cash estimated). GameRant still
    // lists settled-expired codes (THANKSFOR1MIL/SORRYFORLATE), so this
    // stays unconfirmed until RadioTimes/IGN/THG corroborates.
    code: "REVIVE",
    reward: "Cash",
    status: "unconfirmed",
    note: "Surfaced mid-Sep 2026 — GameRant (NEW) + one creator redemption; amount unconfirmed (~25,000 Cash est.).",
  },
  {
    // 2026-09-11: retired in the Sep 10 update wave — THG (Sep 6) lists it
    // expired, IGN's expired list starts with it, PocketTactics confirms
    // direction. Was the 350K-likes milestone code.
    code: "THANKSFOR350K",
    reward: "20,000 Cash",
    status: "expired",
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
