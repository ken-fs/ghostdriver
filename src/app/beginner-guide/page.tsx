import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee } from "@/components/ui";
import { ScreenshotStrip, YouTubeEmbed } from "@/components/media";
import { GAME, GAMEPLAY_LOOP } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Beginner Guide",
  description: `New to ${SITE.game}? Learn the controls, the first-session loop, and how to earn your first upgrade fast.`,
  path: "/beginner-guide/",
});

export default function BeginnerGuide() {
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="sodium" className="text-3xl sm:text-5xl">
          Beginner Guide
        </Marquee>
        <p className="mt-3 text-dim">{GAME.concept}</p>
      </header>

      <ScreenshotStrip
        shots={[
          { src: "/media/shot3.webp", alt: "Ghost Driver gameplay — first drive on the highway (Roblox)" },
          { src: "/media/shot5.webp", alt: "Ghost Driver — dealership where you buy cars (Roblox)" },
        ]}
      />

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
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
        <Marquee color="active" as="h2" className="text-xl">
          Your First Session
        </Marquee>
        <ol className="mt-4 space-y-3">
          {GAMEPLAY_LOOP.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </HudPanel>

      <HudPanel>
        <Marquee color="sodium" as="h2" className="text-xl">
          Fastest Start
        </Marquee>
        <p className="mt-3 text-dim">
          Before you grind, redeem the current{" "}
          <Link href="/codes/">Ghost Driver codes</Link> — they hand you free Cash so
          you can skip straight to your first dealership upgrade. Then read the{" "}
          <Link href="/cash/">cash farming guide</Link> to keep the money flowing.
        </p>
      </HudPanel>

      <section>
        <Marquee color="hud" as="h2" className="text-xl">
          Watch: full beginner walkthrough
        </Marquee>
        <div className="mt-5">
          <YouTubeEmbed
            id="63O2vSsmR80"
            title="Ghost Driver Guide — How To Get MONEY FAST, Leveling Up, Best Settings — CHALLS"
          />
          <p className="mt-2 text-xs text-dim">
            Video: CHALLS on YouTube — money farming, leveling and settings walkthrough.
          </p>
        </div>
      </section>

      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Common Beginner Mistakes
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Braking too early.</span> Lifting off at every
            car kills your speed multiplier. Commit to gaps and use Shift to drift, not
            the brake.
          </li>
          <li>
            • <span className="text-fg">Driving empty lanes.</span> No traffic means no
            near-misses and almost no Cash. Stay where the cars are.
          </li>
          <li>
            • <span className="text-fg">Hoarding Cash.</span> Sitting on money slows you
            down — buy your first upgrade as soon as you can afford it.
          </li>
          <li>
            • <span className="text-fg">Skipping the codes.</span> Free Cash from{" "}
            <Link href="/codes/">codes</Link> is the fastest early boost; redeem them
            before you grind.
          </li>
        </ul>
      </HudPanel>
    </div>
  );
}
