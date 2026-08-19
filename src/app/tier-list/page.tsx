import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_LAST_CHECKED } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Car Tier List — Best Cars",
  description: `How the best cars in Roblox ${SITE.game} compare, and how we rank them S–C once in-game top speeds are verified.`,
  path: "/tier-list/",
});

const TIERS: { tier: "S" | "A" | "B" | "C"; color: string; label: string }[] = [
  { tier: "S", color: "glow-sodium", label: "Top value — buy first" },
  { tier: "A", color: "glow-hud", label: "Strong buy" },
  { tier: "B", color: "glow-active", label: "Pricey — lower value" },
  { tier: "C", color: "text-dim", label: "Skip / starter" },
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
          Which {SITE.game} cars are actually worth your Cash, ranked by value for money
          from verified in-game prices and top-creator consensus. Stock top speeds
          aren&apos;t published yet, so this is a value ranking — we&apos;ll re-grade on
          pure speed once those are confirmed.
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
                  <ul className="mt-1 space-y-0.5">
                    {cars.map((c) => (
                      <li key={c.name}>
                        <span className="text-fg">{c.name}</span>
                        {c.price && (
                          <span className="text-sm text-dim"> — {c.price}</span>
                        )}
                        {c.limited && (
                          <span className="ml-2 text-xs glow-taillight">Limited</span>
                        )}
                      </li>
                    ))}
                  </ul>
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

      <p className="text-sm text-dim">
        The <span className="text-fg">Porsche 911 GT3 RS</span> is bought with Robux
        (200), not Cash, so it sits outside these Cash-value tiers. The dealership has
        more cars than are ranked here — see the full <Link href="/cars/">cars list</Link>.
      </p>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How we rank cars
        </Marquee>
        <p className="mt-3 text-dim">
          Ghost Driver is a No Hesi-style game: you score by weaving through dense
          highway traffic at speed. Right now we rank by <span className="glow-active">value
          for Cash</span> — verified prices plus what top creators call the best buys.
          A car&apos;s full worth comes down to three things, and we&apos;ll re-grade on
          the first two once stock speeds are confirmed:
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
          Every grade is backed by real prices and player consensus — never guesswork.
          Learn how to afford your next upgrade in the{" "}
          <Link href="/cash/">cash guide</Link>.
        </p>
      </HudPanel>
    </div>
  );
}
