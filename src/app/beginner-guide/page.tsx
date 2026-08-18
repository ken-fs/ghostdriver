import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { GAME, GAMEPLAY_LOOP } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghost Driver Beginner Guide",
  description: `New to ${SITE.game}? Learn the controls, the first-session loop, and how to earn your first upgrade fast.`,
  alternates: { canonical: "/beginner-guide/" },
};

export default function BeginnerGuide() {
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="sodium" className="text-3xl sm:text-5xl">
          Beginner Guide
        </Marquee>
        <p className="mt-3 text-dim">{GAME.concept}</p>
      </header>

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
    </div>
  );
}
