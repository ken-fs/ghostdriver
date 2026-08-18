#!/usr/bin/env node
/**
 * Refreshes src/data/stats.json from Roblox public APIs.
 * Run by GitHub Actions on a cron. Safe: bails without writing if the API
 * response is missing or malformed, so we never publish garbage/zeros.
 */
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const UNIVERSE_ID = "10173311467";
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "src", "data", "stats.json");

async function getJson(url) {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

function num(v, label) {
  if (typeof v !== "number" || !Number.isFinite(v) || v < 0) {
    throw new Error(`bad value for ${label}: ${v}`);
  }
  return v;
}

const game = (await getJson(
  `https://games.roblox.com/v1/games?universeIds=${UNIVERSE_ID}`,
)).data?.[0];
const votes = (await getJson(
  `https://games.roblox.com/v1/games/votes?universeIds=${UNIVERSE_ID}`,
)).data?.[0];

if (!game || !votes) throw new Error("empty API response — aborting write");

const next = {
  visits: num(game.visits, "visits"),
  ccu: num(game.playing, "ccu"),
  favorites: num(game.favoritedCount, "favorites"),
  likes: num(votes.upVotes, "likes"),
  dislikes: num(votes.downVotes, "dislikes"),
  asOf: new Date().toISOString().slice(0, 10),
};

// Guard: visits should never shrink; a big drop means the API lied.
try {
  const prev = JSON.parse(await readFile(OUT, "utf8"));
  if (next.visits < prev.visits * 0.9) {
    throw new Error(
      `visits dropped ${prev.visits} -> ${next.visits} (>10%), refusing to write`,
    );
  }
} catch (e) {
  if (e.code !== "ENOENT") throw e; // first run: no prior file, fine
}

await writeFile(OUT, JSON.stringify(next, null, 2) + "\n");
console.log("stats.json updated:", JSON.stringify(next));
