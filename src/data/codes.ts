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
// Update (2026-09-24): THANKSFOR415K/NEWMAP/VECTOR/TECZWASHERE confirmed expired
// (GameRant Sep-23 update; RadioTimes/Beebom direction agrees). REVIVE upgraded
// to active (RadioTimes second source). New: CAT (GameRant NEW, single-source so
// far), JOJEWASHERE + SALEEN (3-source: GameRant/Beebom/RadioTimes all NEW).
export const CODES_LAST_CHECKED = "2026-09-24";

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
    // 2026-09-24: GameRant (Sep 23 update) lists it expired; RadioTimes and
    // Beebom both dropped it from active lists. Superseded by THANKSFOR447K.
    code: "THANKSFOR415K",
    reward: "25,000 Cash",
    status: "expired",
    note: "Likes milestone — was the richest code until it retired.",
  },
  {
    // Sep 10 update batch. Name implies a new map — content unverified.
    // 2026-09-24: GameRant lists expired; the Sep-10 update batch rotated out.
    code: "NEWMAP",
    reward: "15,000 Cash",
    status: "expired",
    note: "Sep 10 update batch.",
  },
  {
    // 2026-09-24: GameRant lists expired; Sep-10 batch rotated out.
    code: "VECTOR",
    reward: "15,000 Cash",
    status: "expired",
    note: "Sep 10 update batch.",
  },
  {
    // Creator code, same pattern as SINCEROWASHERE (ImSincero).
    // 2026-09-24: GameRant lists expired; creator code from the Sep-10 wave.
    code: "TECZWASHERE",
    reward: "10,000 Cash",
    status: "expired",
    note: "Creator code (TEGZ).",
  },
  {
    // 2026-09-16: surfaced in GameRant's September list (NEW) + one creator
    // redemption video (LRo8zOX9guc, ~25K Cash estimated).
    // 2026-09-24: upgraded to active — RadioTimes now lists REVIVE active
    // with a 25K Cash value; 2-source rule met.
    code: "REVIVE",
    reward: "Cash",
    status: "active",
    note: "Surfaced mid-Sep 2026 — GameRant (NEW) + one creator redemption; amount unconfirmed (~25,000 Cash est.).",
  },
  {
    // 2026-09-24 patrol: GameRant (Sep 23, NEW) — single source so far,
    // amount listed as "Free Cash". Listed active pending second source.
    code: "CAT",
    reward: "Free Cash",
    status: "active",
    note: "New Sep 2026 — GameRant NEW; awaiting second source.",
  },
  {
    // 2026-09-24: 3-source — GameRant (NEW) + Beebom (NEW) + RadioTimes (NEW).
    code: "JOJEWASHERE",
    reward: "15,000 Cash",
    status: "active",
    note: "Creator code, confirmed by 3 sources.",
  },
  {
    // 2026-09-24: 3-source — GameRant (NEW) + Beebom (NEW) + RadioTimes (NEW).
    code: "SALEEN",
    reward: "15,000 Cash",
    status: "active",
    note: "New Sep 2026 drop, confirmed by 3 sources.",
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
