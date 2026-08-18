import type { Metadata } from "next";
import { HudPanel, Marquee } from "@/components/ui";
import { GAME } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name} — an independent, fan-made resource for the Roblox game ${SITE.game}.`,
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-5xl">
          About
        </Marquee>
      </header>

      <HudPanel>
        <p className="text-dim">
          {SITE.name} is an independent, fan-made companion site for the Roblox game{" "}
          <strong className="text-fg">{SITE.game}</strong>. We publish working codes,
          car data, and guides so players can find what they need fast and get back to
          driving.
        </p>
        <p className="mt-4 text-dim">
          Our promise: every code and stat here is player-verified against real
          sources. When something can&apos;t be confirmed, we say so and mark it
          &ldquo;check in-game&rdquo; rather than guess. Time-sensitive facts show the
          date we last checked them.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="sodium" as="h2" className="text-xl">
          The game
        </Marquee>
        <dl className="mt-4 space-y-2 text-dim">
          <div className="flex gap-3">
            <dt className="w-28 shrink-0 text-fg">Developer</dt>
            <dd>{GAME.developer}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-28 shrink-0 text-fg">Status</dt>
            <dd>{GAME.status}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-28 shrink-0 text-fg">Released</dt>
            <dd>{GAME.createdDate}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-28 shrink-0 text-fg">Play</dt>
            <dd>
              <a href={SITE.robloxUrl} target="_blank" rel="noopener noreferrer">
                Ghost Driver on Roblox
              </a>
            </dd>
          </div>
        </dl>
      </HudPanel>

      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Disclaimer
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.name} is not affiliated with, endorsed by, or sponsored by Roblox
          Corporation or the {GAME.developer} group. All game names, trademarks, and
          assets belong to their respective owners.
        </p>
      </HudPanel>
    </div>
  );
}
