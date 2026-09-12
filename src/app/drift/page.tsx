import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_LAST_CHECKED } from "@/data/cars";
import { SITE } from "@/lib/site";

/** Page verification date - mechanics cross-checked 2026-09-12 (game description + creator footage). */
const DRIFT_CHECKED = "2026-09-12";

export const metadata = buildMeta({
  title: "Ghost Driver Drift Guide - Best Drift Cars & How to Slide",
  description: `How to drift in Roblox ${SITE.game}: the Shift handbrake and drift toggle, the best RWD drift cars at every budget, and how sliding keeps your near-miss combo alive.`,
  path: "/drift/",
});

/** RWD drift candidates, price ascending - data straight from cars.ts. */
const DRIFT_CARS = CARS.filter((c) => c.drivetrain === "RWD" && !c.limited).sort(
  (a, b) => (a.priceCash ?? 0) - (b.priceCash ?? 0),
);

const nf = new Intl.NumberFormat("en-US");

const DRIFT_FAQ = [
  {
    q: "How do you drift in Ghost Driver?",
    a: "Turn the drift / traction-control toggle on in the UI, then tap Shift (handbrake) mid-corner to kick the rear out and steer through the slide. Use it to sweep around slow traffic clusters instead of braking - braking kills your speed multiplier.",
  },
  {
    q: "What is the best drift car in Ghost Driver?",
    a: "On paper, the RWD cars: the Weinchen V20 ($85,000) is the budget way in, the Bullseye Helly ($260,000, 717 HP) is the mid-tier pick, and the Shelly LZ1 ($360,000, 755 HP, 212 mph) is the strongest non-limited slider. The limited Castellani Specchiera (840 HP, RWD) was the drift king but left the shop in August.",
  },
  {
    q: "Does drifting earn more Cash?",
    a: "Indirectly, yes. Cash scales with your speed and near-miss combo - drifting lets you keep speed through dense traffic instead of braking, so your multiplier survives the corner. The drift itself pays nothing; the combo it protects does.",
  },
  {
    q: "Can you tune cars for drifting?",
    a: "The Aug 29, 2026 update added vehicle customization options, and tuning upgrades level-gate as you progress. Specific drift-tuning parts haven't been verified from 2+ sources yet - check the customization menu in-game for what's available on your car.",
  },
];

export default function DriftPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ghost Driver Drift Guide - Best Drift Cars & How to Slide",
    description: metadata.description,
    dateModified: DRIFT_CHECKED,
    author: {
      "@type": "Person",
      name: SITE.editor,
      jobTitle: SITE.editorRole,
      url: `${SITE.url}/about/`,
    },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/drift/`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DRIFT_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          Drift Guide
        </Marquee>
        <p className="mt-3 text-dim">
          Drifting in {SITE.game} isn&apos;t just style - it&apos;s how you keep speed
          (and your near-miss combo) through dense traffic. Here&apos;s the technique
          and the cars that do it best.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={DRIFT_CHECKED} />
        </div>
      </header>

      {/* Technique */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          How to Drift
        </Marquee>
        <ol className="mt-4 space-y-3">
          {[
            "Turn the drift / traction-control toggle ON in the UI - it's a switch, not a separate key. (Learning? Leave it off for grippier handling first.)",
            "Approach a slow traffic cluster at speed - clusters are where combos usually die to braking.",
            "Tap Shift (handbrake) to kick the rear out, then steer through the slide around the pack.",
            "Lift off the handbrake and power out - you keep your speed, your near-miss combo survives, and the multiplier keeps paying.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-dim">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-dim">
          Why it matters: Cash scales with speed and combo length - creators have shown
          200X+ swerve streaks. Braking resets neither, but the speed loss shrinks every
          payout after it. A drift keeps the number big. More on the earning side in the{" "}
          <Link href="/cash/">cash guide</Link>.
        </p>
      </HudPanel>

      {/* Best drift cars - data-driven */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          Best Drift Cars
        </Marquee>
        <p className="text-dim">
          Our take, from the verified roster: <span className="text-fg">RWD cars are the
          drift picks</span> - rear-drive plus horsepower is what holds a slide. AWD cars
          (like the value-king <Link href="/cars/#rangy-helly">Rangy Helly</Link>) grip
          harder and stay the better near-miss weave machines; pick RWD when you want to
          slide. Prices and stats from the <Link href="/cars/">car roster</Link>:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {DRIFT_CARS.map((c) => (
            <HudPanel key={c.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="display text-lg glow-sodium">{c.name}</h3>
                <span className="text-sm text-dim">
                  {c.priceCash ? `$${nf.format(c.priceCash)}` : `R$${nf.format(c.priceRobux ?? 0)}`}
                </span>
              </div>
              <p className="mt-1 text-sm text-dim">
                {c.hp} HP · RWD · {c.topSpeedMph} mph · 0-60 {c.zeroToSixty}
              </p>
              <p className="mt-2 text-sm text-dim">{c.bestFor}</p>
            </HudPanel>
          ))}
        </div>
        <p className="text-sm text-dim">
          Fallen legends: the limited <strong className="text-fg">Castellani Specchiera</strong>{" "}
          (840 HP, RWD) was the drift king before it left the shop Aug 22, and the{" "}
          <strong className="text-fg">Takama F10 GT</strong> (563 HP, RWD) went with it -
          watch the <Link href="/events/">event schedule</Link> for a rerun.
        </p>
      </section>

      {/* Common mistakes */}
      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Drift Mistakes
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Drifting empty lanes.</span> A slide with no
            near-misses pays nothing - drift through traffic, not around nothing.
          </li>
          <li>
            • <span className="text-fg">Holding Shift too long.</span> The handbrake is a
            tap, not a hold - long slides scrub the speed you were trying to save.
          </li>
          <li>
            • <span className="text-fg">Overdriving the slide.</span> A crash wipes the
            whole combo. Bail out straight early rather than stylish into the wall.
          </li>
        </ul>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Drift FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {DRIFT_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </HudPanel>

      <p className="text-sm text-dim">
        New driver? Start with the <Link href="/beginner-guide/">beginner guide</Link>,
        then check the <Link href="/tier-list/">tier list</Link> for where these cars rank
        overall. Car data verified {CARS_LAST_CHECKED}.
      </p>
    </div>
  );
}
