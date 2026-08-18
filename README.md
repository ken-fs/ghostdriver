# Ghost Driver Hub

Fan-made companion site for the Roblox game **[Ghost Driver](https://www.roblox.com/games/137228775845999/Ghost-Driver)** — a No Hesi-style highway traffic-weaving driver by the *Tilted Vehicles* group. Live at **[ghostdriver.net](https://ghostdriver.net)**.

Working redeem codes, the car roster, a tier list, cash farming and beginner guides, plus live game stats — the stuff players Google mid-session.

> Not affiliated with, endorsed by, or sponsored by Roblox Corporation or the Ghost Driver developer. Game names and assets belong to their owners.

## Stack

- **Next.js 16** (App Router, TypeScript) — static export (`output: export`)
- **Tailwind CSS v4**
- **Cloudflare Workers** (static assets) — deployed via Cloudflare's Git integration on push

## Content pages

| Route | Purpose |
| --- | --- |
| `/codes` | Working redeem codes (the primary traffic driver) + how to redeem |
| `/cars` | Confirmed car roster |
| `/tier-list` | Best cars, ranked once stats are verified |
| `/cash` | How to farm Cash fast |
| `/beginner-guide` | Controls + first-session loop |
| `/updates` | Live Roblox stats + what's new |
| `/about` | Site info + disclaimer |

## Data integrity rule

**Every code and stat here is real and verifiable — never invented.** Anything we can't confirm is marked "check in-game" rather than guessed. Time-sensitive facts show the date they were last verified. Game data lives in single-source-of-truth files under `src/data/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Automation

- `scripts/refresh-stats.mjs` pulls live traction (visits, CCU, likes, favorites) from Roblox's public APIs into `src/data/stats.json`. It refuses to write on malformed responses or an implausible visits drop.
- `.github/workflows/update-and-deploy.yml` runs that script on a 6-hour cron and commits any change. The commit's push triggers a Cloudflare rebuild + redeploy.

Codes and car data are **not** auto-scraped — they stay human-verified.
