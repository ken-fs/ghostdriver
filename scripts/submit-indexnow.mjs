/**
 * Submit all site URLs to IndexNow (Bing / Yandex / Naver / Seznam pick it up
 * from there). Runs in the stats-refresh workflow after content commits, and
 * can be run by hand: node scripts/submit-indexnow.mjs
 *
 * Key is hosted at /<key>.txt (see public/) as IndexNow requires.
 */
import { readFileSync } from "node:fs";

const HOST = "ghostdriver.net";
const KEY = readFileSync(new URL("../.indexnow-key", import.meta.url), "utf8").trim();

// Keep in sync with src/lib/site.ts NAV + LEGAL_NAV.
const PATHS = [
  "/",
  "/codes/",
  "/cars/",
  "/tier-list/",
  "/cash/",
  "/beginner-guide/",
  "/updates/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: PATHS.map((p) => `https://${HOST}${p}`),
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// 200 = accepted, 202 = accepted pending key check. Anything else is a real error.
if (![200, 202].includes(res.status)) {
  console.error(`IndexNow failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}
console.log(`IndexNow: submitted ${body.urlList.length} URLs (${res.status}).`);
