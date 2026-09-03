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

const TIER_FAQ = [
  {
    q: "What is the best car in Ghost Driver?",
    a: "For Cash value, the Audi RS7 (260,000 Cash) is the best car in Ghost Driver right now — creators widely call it the best stats-for-money buy. The limited Ferrari 812 Superfast is the top-end pick but requires Level 15 and around 1.8M Cash (player-reported).",
  },
  {
    q: "What car should I buy first in Ghost Driver?",
    a: "Save for the BMW M3 (240,000 Cash) or stretch to the Audi RS7 (260,000 Cash). Either is a huge jump from the free starter car — the RS7 is the better long-term value if you can afford the extra 20,000 Cash.",
  },
  {
    q: "Is the Porsche 911 GT3 RS worth the Robux?",
    a: "It costs 200 Robux instead of Cash, so it skips the grind rather than ranking in the Cash-value tiers. Worth it only if you want to pay to skip early progression.",
  },
  {
    q: "How is this tier list ranked?",
    a: "By value for Cash, using verified in-game prices and top-creator consensus. Stock top speeds aren't officially published yet, so we don't rank on raw speed — and we never invent numbers.",
  },
];

export default function TierList() {
  const ranked = CARS.filter((c) => c.tier);
  const bestValue = CARS.find((c) => c.slug === "audi-rs7")!;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TIER_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

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

      {/* Direct answer — the #1 question behind this query, quotable as-is */}
      <HudPanel className="border-active">
        <p className="text-lg">
          <span className="glow-active font-semibold">Quick answer:</span> the best
          value car in {SITE.game} right now is the{" "}
          <Link href={`/cars/#${bestValue.slug}`} className="text-fg font-semibold">
            {bestValue.name}
          </Link>{" "}
          ({bestValue.price}). Stretch to the limited{" "}
          <Link href="/cars/#ferrari-812-superfast" className="text-fg font-semibold">
            Ferrari 812 Superfast
          </Link>{" "}
          only for the endgame.
        </p>
      </HudPanel>

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

      {/* Per-car detail blocks — the depth layer behind the ranking */}
      <section className="space-y-4">
        <Marquee color="sodium" as="h2" className="text-xl">
          Every ranked car, in detail
        </Marquee>
        {CARS.map((c) => (
          <HudPanel key={c.slug}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display text-xl glow-sodium">
                {c.name}
                {c.tier && (
                  <span className="ml-3 text-sm glow-hud">Tier {c.tier}</span>
                )}
                {c.limited && (
                  <span className="ml-3 text-sm glow-taillight">Limited</span>
                )}
              </h3>
              <span className="text-sm text-dim">{c.price ?? "check in-game"}</span>
            </div>
            <dl className="mt-3 space-y-2 text-dim">
              <div>
                <dt className="inline font-semibold text-fg">How to get it: </dt>
                <dd className="inline">{c.howToGet}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-fg">Why it ranks here: </dt>
                <dd className="inline">{c.analysis}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-fg">Best for: </dt>
                <dd className="inline">{c.bestFor}</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm">
              <Link href={`/cars/#${c.slug}`}>Full specs on the cars list →</Link>
            </p>
          </HudPanel>
        ))}
        <p className="text-sm text-dim">
          Short on Cash for your next tier? Farm it with the{" "}
          <Link href="/cash/">cash guide</Link> and the current{" "}
          <Link href="/codes/">working codes</Link>.
        </p>
      </section>

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

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Tier List FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {TIER_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </HudPanel>
    </div>
  );
}
