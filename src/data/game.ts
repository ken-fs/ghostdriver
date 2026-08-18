/**
 * Verified game facts — pulled from Roblox public APIs (games / votes / universe).
 * Traction numbers live in ./stats.json and are refreshed automatically by
 * scripts/refresh-stats.mjs (GitHub Actions cron). Do not hand-edit stats here.
 */
import stats from "./stats.json";

export const GAME = {
  title: "Ghost Driver",
  status: "PRE-ALPHA",
  createdDate: "2026-05-16",
  developer: "Tilted Vehicles",
  concept:
    "An underground, No Hesi-style highway driver: weave through heavy traffic at high speed for near-misses, earn Cash, and buy faster cars at the dealership.",
  controls: [
    { key: "W A S D / Arrows", action: "Drive" },
    { key: "Shift", action: "Handbrake / drift" },
    { key: "V", action: "Toggle camera / first-person" },
    { key: "L", action: "Headlights" },
  ],
  // Live snapshot — auto-refreshed from ./stats.json.
  traction: {
    visits: stats.visits,
    ccu: stats.ccu,
    favorites: stats.favorites,
    likes: stats.likes,
    dislikes: stats.dislikes,
  },
  tractionAsOf: stats.asOf,
} as const;

/** The core cash → dealership → faster car loop (verified qualitatively). */
export const GAMEPLAY_LOOP: string[] = [
  "You start in a slow free starter car.",
  "Drive on the busy freeway and weave through traffic — the closer the near-miss, the more you earn.",
  "Bank Cash from driving (and from redeeming codes to skip the early grind).",
  "Spend Cash at the in-game dealership to buy a faster, better car.",
  "Repeat with the faster car to chase high-end vehicles (e.g. Ferrari-tier).",
];
