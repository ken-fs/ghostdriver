import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee } from "@/components/ui";
import { GAME } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Roblox: What It Is, How to Play & Free Codes",
  description:
    "Ghost Driver is a Roblox highway driving game by Tilted Vehicles. See how it works, how to start, the controls, and where to find working codes.",
  path: "/ghost-driver-roblox/",
});

export default function GhostDriverRoblox() {
  const t = GAME.traction;
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="sodium" className="text-3xl sm:text-5xl">
          Ghost Driver Roblox
        </Marquee>
        <p className="mt-3 text-dim">
          Ghost Driver is a Roblox driving game by {GAME.developer}. You drive fast
          on a busy highway, weave through traffic, earn Cash, and buy faster cars.{" "}
          <a href={SITE.robloxUrl} target="_blank" rel="noopener noreferrer">
            Play it on Roblox
          </a>
          .
        </p>
      </header>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How the game works
        </Marquee>
        <p className="mt-4 text-dim">{GAME.concept}</p>
        <p className="mt-3 text-dim">
          It&apos;s a &ldquo;No Hesi&rdquo; style game. You skip the racing and just pass
          cars as close as you can without hitting them. Close passes build a combo, and
          long combos pay the most.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="active" as="h2" className="text-xl">
          Quick facts
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>• Developer: {GAME.developer}</li>
          <li>• Created: {GAME.createdDate}</li>
          <li>• Visits: {t.visits.toLocaleString("en-US")} (as of {GAME.tractionAsOf})</li>
          <li>• Favorites: {t.favorites.toLocaleString("en-US")}</li>
        </ul>
      </HudPanel>

      <HudPanel>
        <Marquee color="sodium" as="h2" className="text-xl">
          Controls
        </Marquee>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {GAME.controls.map((c) => (
            <li key={c.key} className="flex items-baseline gap-3">
              <kbd className="hud-panel px-2 py-0.5 text-sm glow-hud">{c.key}</kbd>
              <span className="text-dim">{c.action}</span>
            </li>
          ))}
        </ul>
      </HudPanel>

      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Where to go next
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>• <Link href="/codes/">Working Ghost Driver codes</Link> for free Cash</li>
          <li>• <Link href="/beginner-guide/">Beginner guide</Link> for your first session</li>
          <li>
            • <Link href="/cars/">Car list</Link> and the{" "}
            <Link href="/tier-list/">tier list</Link> to pick what to buy
          </li>
          <li>• <Link href="/cash/">Cash guide</Link> to earn faster</li>
        </ul>
        <p className="mt-4 text-xs text-dim">
          {SITE.name} is a fan site. It isn&apos;t affiliated with Roblox or {GAME.developer}.
        </p>
      </HudPanel>
    </div>
  );
}

