import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { GAME } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Updates & Stats",
  description: `Live ${SITE.game} player stats and the latest news — visits, concurrent players, likes, and new code milestones.`,
  path: "/updates/",
});

const nf = new Intl.NumberFormat("en-US");
const approval = Math.round(
  (GAME.traction.likes / (GAME.traction.likes + GAME.traction.dislikes)) * 1000,
) / 10;

const STATS = [
  { label: "Total Visits", value: nf.format(GAME.traction.visits) },
  { label: "Playing Now", value: nf.format(GAME.traction.ccu) },
  { label: "Favorites", value: nf.format(GAME.traction.favorites) },
  { label: "Approval", value: `${approval}%` },
];

export default function Updates() {
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-5xl">
          Updates &amp; Stats
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.game} is in {GAME.status}, built by the {GAME.developer} group, and is
          actively updated.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={GAME.tractionAsOf} />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <HudPanel key={s.label} className="text-center">
            <div className="display text-2xl glow-sodium sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase text-dim">{s.label}</div>
          </HudPanel>
        ))}
      </div>

      <HudPanel>
        <Marquee color="active" as="h2" className="text-xl">
          What&apos;s happening
        </Marquee>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            • The game is a live pre-alpha and ships frequent updates with new cars.
            New codes usually drop around milestones — the{" "}
            <code className="glow-active">THANKSFOR1MIL</code> code celebrated a
            1-million milestone.
          </li>
          <li>
            • We track new codes here first — grab them on the{" "}
            <Link href="/codes/">codes page</Link>.
          </li>
          <li>
            • Full car roster and tier list are being documented as the dealership
            expands.
          </li>
        </ul>
      </HudPanel>

      <p className="text-sm text-dim">
        Stats are pulled from Roblox and refreshed regularly. Play the game on{" "}
        <a href={SITE.robloxUrl} target="_blank" rel="noopener noreferrer">
          Roblox
        </a>
        .
      </p>
    </div>
  );
}
