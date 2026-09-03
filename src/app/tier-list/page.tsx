import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_LAST_CHECKED, type ValueTier } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Car Tier List — Best Cars",
  description: `The best cars in Roblox ${SITE.game} ranked by value for Cash — verified prices, top speeds and HP for all 14 cars.`,
  path: "/tier-list/",
});

const TIERS: { tier: ValueTier; color: string; label: string }[] = [
  { tier: "S", color: "glow-sodium", label: "Best value — buy these first" },
  { tier: "A", color: "glow-hud", label: "Strong buy" },
  { tier: "B", color: "glow-active", label: "Situational — outclassed at the price" },
  { tier: "C", color: "text-dim", label: "Skip / collector" },
];

const TIER_FAQ = [
  {
    q: "What is the best car in Ghost Driver?",
    a: "The Voss RT10 TT ($760,000) is the best car overall — fastest 0-60 in the game (2.6s) with a 215 mph top speed and AWD. The best value car is the Rangy Helly ($120,000): 710 HP and AWD at a mid-game price.",
  },
  {
    q: "What car should I buy first in Ghost Driver?",
    a: "Buy the Kitsuni LX at $40,000 to get off the free starter, then save for the Rangy Helly ($120,000) — the best Cash-per-performance car in the game. After that, farm toward the Voss RT8 ($260,000).",
  },
  {
    q: "What is the fastest car in Ghost Driver?",
    a: "Top speed ties at 215 mph between the Voss RT10 TT ($760,000 Cash) and the limited Castellani Specchiera (840 HP — the most powerful car, gone from the shop since Aug 22, 2026).",
  },
  {
    q: "Is the Reinhardt RT32 Starter Pack worth it?",
    a: "Only for the extras. The R$199 Starter Pack's car has 520 HP — mid-tier power you can out-earn with Cash quickly. You buy it for the custom license, Global Radio and style, not the stats.",
  },
  {
    q: "How is this tier list ranked?",
    a: "By value for Cash: verified in-game prices measured against verified stats (top speed, HP, drivetrain, 0-60), cross-checked between two independent sources, plus creator consensus. The game's own B/A/S performance tiers are shown separately on the cars list.",
  },
];

const nf = new Intl.NumberFormat("en-US");

export default function TierList() {
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
          Which {SITE.game} cars are actually worth your Cash. Every car is graded on
          verified price vs verified stats — never guesswork. The game&apos;s own B/A/S
          performance tiers are a different system; you&apos;ll find them on the{" "}
          <Link href="/cars/">cars list</Link>.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CARS_LAST_CHECKED} />
        </div>
      </header>

      {/* Direct answer — the #1 question behind this query, quotable as-is */}
      <HudPanel className="border-active">
        <p className="text-lg">
          <span className="glow-active font-semibold">Quick answer:</span> the best
          value car in {SITE.game} is the{" "}
          <Link href="/cars/#rangy-helly" className="text-fg font-semibold">
            Rangy Helly
          </Link>{" "}
          ($120,000 — 710 HP, AWD). The best car overall is the{" "}
          <Link href="/cars/#voss-rt10-tt" className="text-fg font-semibold">
            Voss RT10 TT
          </Link>{" "}
          ($760,000 — 215 mph, 2.6s 0-60).
        </p>
      </HudPanel>

      {/* Value tier board */}
      <div className="space-y-4">
        {TIERS.map((t) => {
          const cars = CARS.filter((c) => c.valueTier === t.tier);
          if (cars.length === 0) return null;
          return (
            <HudPanel key={t.tier} className="flex gap-4">
              <div className={`display text-4xl ${t.color}`}>{t.tier}</div>
              <div>
                <p className="text-xs uppercase text-dim">{t.label}</p>
                <ul className="mt-1 space-y-0.5">
                  {cars.map((c) => (
                    <li key={c.slug}>
                      <a href={`#${c.slug}`} className="text-fg">
                        {c.name}
                      </a>
                      <span className="text-sm text-dim">
                        {" "}
                        — {c.priceCash ? `$${nf.format(c.priceCash)}` : c.priceRobux ? `R$${nf.format(c.priceRobux)}` : "FREE"} · {c.topSpeedMph} mph · {c.hp} HP
                      </span>
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

      {/* Per-car detail blocks — the depth layer behind the ranking */}
      <section className="space-y-4">
        <Marquee color="sodium" as="h2" className="text-xl">
          Every car, in detail
        </Marquee>
        {CARS.map((c) => (
          <HudPanel key={c.slug}>
            <span id={c.slug} className="block scroll-mt-20" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display text-xl glow-sodium">
                {c.name}
                <span className="ml-3 text-sm glow-hud">Value {c.valueTier}</span>
                {c.gameTier && (
                  <span className="ml-3 text-sm text-dim">Game Tier {c.gameTier}</span>
                )}
                {c.limited && (
                  <span className="ml-3 text-sm glow-taillight">Limited</span>
                )}
              </h3>
              <span className="text-sm text-dim">
                {c.priceCash === 0 && !c.priceRobux
                  ? "FREE"
                  : [
                      c.priceCash ? `$${nf.format(c.priceCash)}` : null,
                      c.priceRobux ? `R$${nf.format(c.priceRobux)}` : null,
                    ]
                      .filter(Boolean)
                      .join(" / ")}
              </span>
            </div>
            <p className="mt-2 text-sm text-dim">
              {c.topSpeedMph} mph · {c.hp} HP · {c.drivetrain} · 0-60 {c.zeroToSixty}
              {c.levelReq ? ` · requires Level ${c.levelReq}` : ""}
              {c.limitedUntil ? ` · left shop ${c.limitedUntil}` : ""}
            </p>
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
              <Link href={`/cars/#${c.slug}`}>Full stats on the cars list →</Link>
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
          {SITE.game} is a No Hesi-style game: you score by weaving through dense
          highway traffic at speed. Our value grade weighs three verified numbers
          against the verified price:
        </p>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            <span className="glow-sodium">Top speed</span> — higher speed means bigger
            near-miss multipliers and more Cash per run. This is the headline stat in a
            traffic game.
          </li>
          <li>
            <span className="glow-hud">Acceleration &amp; drivetrain</span> — 0-60 time
            and AWD/RWD decide how quickly you reach scoring speed and how much grip
            you have threading gaps.
          </li>
          <li>
            <span className="glow-active">Value for Cash</span> — a mid-price car that
            performs near the flagship is the smarter buy: the Rangy Helly delivers
            710 HP for $120,000 while the $1.8M Takama F10 GT managed only 563.
          </li>
        </ul>
        <p className="mt-4 text-dim">
          Every number on this page is cross-checked between two independent published
          sources — when they conflict, we say so instead of picking one silently.
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
