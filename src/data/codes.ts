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
// Update (2026-10-01): THANKSFOR480K added (Beebom Oct 1 NEW + TryHardGuides
// Sep 28 NEW; the 447K → 480K jump again skipped round naming). THANKSFOR447K,
// REVIVE and JOJEWASHERE → expired (Beebom dropped them, THG lists expired).
// CAT → expired (no source carries it any more). SALEEN split 1:1 (Beebom
// active, THG expired) — kept active, re-check next patrol.
// 2026-10-13: 全部四个码源重新比对（patrol 报告 reports/patrol-2026-10-13.md）：
// Beebom（10-12）新增孤证 hustleup / froppilive，其余三源未出现 → 按双源规则不收录；
// SALEEN Beebom 转 expired（1:2），暂维持 active。两个在更码本次比对无变化。
// 2026-10-19: SALEEN → expired（patrol 报告 reports/patrol-2026-10-19.md）——
// Beebom（10-12）+ TryHardGuides（09-28）双源 expired；RadioTimes（10-01）陈旧不采信。
// hustleup / froppilive 复核仍只有 Beebom 单源（均 NEW、$20,000 Cash），继续不收录。
// 2026-10-21: 找到 TryHardGuides 的可用抓取路径（站点前台是 BigScoots JS 挑战，403；
// 但 WordPress REST API 直出正文：tryhardguides.com/wp-json/wp/v2/posts?slug=ghost-driver-codes）。
// 其 10-19 更新把 hustleup / froppilive 列入 ACTIVE（NEW）→ 与 Beebom 10-12 构成双源，收录。
// 同一页面把 Thanksfor480k 列入 expired（单源），按「≥2 源 expired 才退役」维持 active 并标注分歧。
// 另 100MIL 为该页新列，但目前只有 THG 一个源，暂不收录。
// 2026-10-26: 100MIL 升级为双源（THG 10-19 + Beebom），收录；THANKSFOR480K 双源
// expired（THG 10-19 + Beebom 撤下），退役。游戏 10-25 更新（Oct 17 后新一轮）。
export const CODES_LAST_CHECKED = "2026-10-26";

export const CODES: GameCode[] = [
  {
    // 100M-visits milestone. 2026-10-26: 2-source — TryHardGuides (Oct 19, NEW)
    // + Beebom. First seen single-source on THG 2026-10-21, held back then.
    code: "100MIL",
    reward: "20,000 Cash",
    status: "active",
    note: "Visits milestone — dropped with the Oct 25 update wave.",
  },
  {
    // 480K-likes milestone. 2026-10-01: 2-source — Beebom (Oct 1, NEW) +
    // TryHardGuides (Sep 28, NEW). Supersedes THANKSFOR447K.
    // 2026-10-26: expired — THG (Oct 19) + Beebom both list it expired (2-source).
    code: "THANKSFOR480K",
    reward: "20,000 Cash",
    status: "expired",
    note: "Likes milestone — retired in the Oct 25 update wave.",
  },
  {
    // 447K-likes milestone (400K naming skipped, same as 415K). 2026-09-16:
    // confirmed active — GameRant (September, NEW) + creator redemption
    // videos ItsChalls (Sep 14) and LRo8zOX9guc. First flagged unconfirmed
    // in the Sep 16 patrol; GameRant was the second source.
    // 2026-10-01: expired — Beebom dropped it, THG lists it expired.
    code: "THANKSFOR447K",
    reward: "Cash",
    status: "expired",
    note: "Likes milestone — superseded by THANKSFOR480K.",
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
    // 2026-10-01: expired — Beebom dropped it, THG lists it expired.
    code: "REVIVE",
    reward: "Cash",
    status: "expired",
    note: "Surfaced mid-Sep 2026 — GameRant (NEW) + one creator redemption; amount unconfirmed (~25,000 Cash est.).",
  },
  {
    // 2026-09-24 patrol: GameRant (Sep 23, NEW) — single source so far,
    // amount listed as "Free Cash". Listed active pending second source.
    // 2026-10-01: expired — never got a second source and no current list
    // (Beebom / THG, active or expired) carries it any more.
    code: "CAT",
    reward: "Free Cash",
    status: "expired",
    note: "Sep 2026 single-source code; no longer listed anywhere.",
  },
  {
    // 2026-09-24: 3-source — GameRant (NEW) + Beebom (NEW) + RadioTimes (NEW).
    // 2026-10-01: expired — Beebom dropped it, THG lists it expired.
    code: "JOJEWASHERE",
    reward: "15,000 Cash",
    status: "expired",
    note: "Creator code.",
  },
  {
    // 2026-09-24: 3-source — GameRant (NEW) + Beebom (NEW) + RadioTimes (NEW).
    // 2026-10-01: split — Beebom still active, THG expired. Kept active (1:1).
    // 2026-10-19: expired — Beebom (Oct 12) + TryHardGuides (Sep 28) both list
    // it expired; RadioTimes (Oct 1) is stale and not counted.
    code: "SALEEN",
    reward: "15,000 Cash",
    status: "expired",
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
  {
    // 2026-10-21: Beebom (Oct 12, NEW) + TryHardGuides (Oct 19, NEW) — two independent
    // sources, so it clears the 2-source rule after sitting as a Beebom-only single.
    code: "hustleup",
    reward: "20,000 Cash",
    status: "active",
    note: "Added with the Oct 12 Tokyo City wave.",
  },
  {
    // 2026-10-21: same pair of sources as hustleup — Beebom (Oct 12) + TryHardGuides (Oct 19).
    code: "froppilive",
    reward: "20,000 Cash",
    status: "active",
    note: "Creator-handle code (Froppi) that shipped alongside hustleup.",
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
