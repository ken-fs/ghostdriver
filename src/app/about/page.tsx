import { HudPanel, Marquee } from "@/components/ui";
import { buildMeta } from "@/lib/meta";
import { GAME } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "About",
  description: `About ${SITE.name} — an independent, fan-made resource for the Roblox game ${SITE.game}.`,
  path: "/about/",
});

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
        <Marquee color="hud" as="h2" className="text-xl">
          How we keep this accurate
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Codes</span> are cross-checked against multiple
            sources and only listed as working when they agree; conflicting ones are
            flagged &ldquo;might still work.&rdquo; Each check is dated.
          </li>
          <li>
            • <span className="text-fg">Game stats</span> (visits, players, likes) are
            pulled directly from Roblox&apos;s public data and refreshed automatically,
            so the numbers you see are current.
          </li>
          <li>
            • <span className="text-fg">Cars &amp; stats</span> are only published once
            confirmed in-game. If we can&apos;t verify a price or top speed, we say
            &ldquo;check in-game&rdquo; instead of guessing.
          </li>
        </ul>
        <p className="mt-4 text-dim">
          Codes are re-verified daily, game stats refresh automatically from
          Roblox&apos;s public data, and every content page carries a dated stamp.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How we handle disagreements
        </Marquee>
        <p className="mt-4 text-dim">
          Code sites constantly contradict each other - one says a code works, another
          says it&apos;s dead. Our rule: a code is only &ldquo;working&rdquo; when
          independent sources agree, and when they split we publish the split itself,
          not a guess. Real examples from our log: THANKSFOR250K sat in
          &ldquo;unconfirmed&rdquo; for days until IGN (in-game tested), GameRant and
          Dexerto all landed on expired - only then did we move it. When the Sep 10
          update dropped four codes at once, we held publication until a second and
          third source (RadioTimes + creator footage) confirmed names and rewards.
        </p>
        <p className="mt-4 text-dim">
          The same discipline covers the car roster: every price and stat is confirmed
          from two independent published sources before it appears, and community
          nicknames that aren&apos;t the real in-game names get dropped, not repeated.
          Anything we can&apos;t confirm is marked &ldquo;check in-game&rdquo; - a smaller,
          honest page beats a bigger invented one.
        </p>
        <p className="mt-4 text-dim">
          {SITE.name} is maintained by {SITE.editor} ({SITE.editorRole.toLowerCase()})
          with help from {SITE.game} players. Spotted something wrong?{" "}
          <a href={`mailto:${SITE.contactEmail}`}>Tell us</a> and we&apos;ll fix it.
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
