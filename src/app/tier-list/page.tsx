import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_LAST_CHECKED } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghost Driver Car Tier List — Best Cars",
  description: `The best cars in Roblox ${SITE.game} ranked S to C by value and speed, updated as the roster is confirmed.`,
  alternates: { canonical: "/tier-list/" },
};

const TIERS: { tier: "S" | "A" | "B" | "C"; color: string; label: string }[] = [
  { tier: "S", color: "glow-sodium", label: "Best in game" },
  { tier: "A", color: "glow-hud", label: "Strong" },
  { tier: "B", color: "glow-active", label: "Solid value" },
  { tier: "C", color: "text-dim", label: "Starter / skip" },
];

export default function TierList() {
  const ranked = CARS.filter((c) => c.tier);

  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="sodium" className="text-3xl sm:text-5xl">
          Car Tier List
        </Marquee>
        <p className="mt-3 text-dim">
          Which {SITE.game} cars are actually worth your Cash, ranked by speed and
          value for money.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CARS_LAST_CHECKED} />
        </div>
      </header>

      {ranked.length > 0 ? (
        <div className="space-y-4">
          {TIERS.map((t) => {
            const cars = ranked.filter((c) => c.tier === t.tier);
            if (cars.length === 0) return null;
            return (
              <HudPanel key={t.tier} className="flex gap-4">
                <div className={`display text-4xl ${t.color}`}>{t.tier}</div>
                <div>
                  <p className="text-xs uppercase text-dim">{t.label}</p>
                  <p className="mt-1">{cars.map((c) => c.name).join(" · ")}</p>
                </div>
              </HudPanel>
            );
          })}
        </div>
      ) : (
        <HudPanel>
          <Marquee color="sodium" as="h2" className="text-xl">
            Rankings coming as stats are confirmed
          </Marquee>
          <p className="mt-3 text-dim">
            A tier list is only worth reading if the stats behind it are real.{" "}
            {SITE.game} is in pre-alpha and its car prices and top speeds aren&apos;t
            published anywhere yet, so we won&apos;t fake a ranking. Cars confirmed to
            be in the dealership so far:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CARS.map((c) => (
              <li key={c.name} className="hud-panel px-3 py-1 text-sm">
                {c.name}
                {c.limited && <span className="ml-2 glow-taillight text-xs">Limited</span>}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-dim">
            The moment we verify their speeds in-game, they get ranked S–C here. Track
            the roster on the <Link href="/cars/">cars list</Link> and new vehicles on{" "}
            <Link href="/updates/">updates</Link>.
          </p>
        </HudPanel>
      )}

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How we&apos;ll rank cars
        </Marquee>
        <p className="mt-3 text-dim">
          Ghost Driver is a No Hesi-style game: you score by weaving through dense
          highway traffic at speed. That means a car&apos;s value comes down to three
          things, which is exactly what our tiers will weigh once stats are confirmed:
        </p>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            <span className="glow-sodium">Top speed</span> — higher speed means bigger
            near-miss multipliers and more Cash per run. This is the headline stat in a
            traffic game.
          </li>
          <li>
            <span className="glow-hud">Handling &amp; braking</span> — raw speed is
            useless if you can&apos;t thread gaps. Cars that turn and slow sharply let
            you commit to tighter lines without crashing.
          </li>
          <li>
            <span className="glow-active">Value for Cash</span> — a mid-price car that
            performs near the top tier is often the smarter buy than the most expensive
            one, especially early.
          </li>
        </ul>
        <p className="mt-4 text-dim">
          When the in-game numbers are verified, each car gets an S–C grade based on
          this — never on guesswork. Learn how to afford your next upgrade in the{" "}
          <Link href="/cash/">cash guide</Link>.
        </p>
      </HudPanel>
    </div>
  );
}
