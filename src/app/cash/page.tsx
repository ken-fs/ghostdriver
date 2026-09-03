import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee } from "@/components/ui";
import { YouTubeEmbed } from "@/components/media";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Cash Guide — How to Get Cash Fast",
  description: `How to farm Cash fast in Roblox ${SITE.game}: near-miss driving, code boosts, and what to spend it on first.`,
  path: "/cash/",
});

const TIPS = [
  {
    h: "Chase near-misses, not clean lanes",
    p: "Cash scales with risk. Threading gaps in dense traffic at speed pays far more than cruising an empty lane. Hug cars without touching them.",
  },
  {
    h: "Keep your speed up",
    p: "Higher speed = bigger multipliers on each near-miss. Use Shift to drift around slow clusters instead of braking to a crawl.",
  },
  {
    h: "Redeem codes for a head start",
    p: "The current codes each drop a chunk of free Cash — the fastest early boost there is.",
    link: { href: "/codes/", label: "Get the codes" },
  },
  {
    h: "Reinvest at the dealership",
    p: "A faster car survives tighter gaps and earns more per run, which snowballs. Spend on your next car before cosmetics.",
  },
];

// Plain-text mirror of the visible FAQ below — drives the FAQPage schema.
const CASH_FAQ = [
  {
    q: "What is the fastest way to get Cash in Ghost Driver?",
    a: "High-speed near-misses in heavy traffic. Redeeming the current codes also grants instant Cash for a fast head start.",
  },
  {
    q: "Do codes give Cash?",
    a: "Yes — every current Ghost Driver code rewards Cash, which is why redeeming them early is the quickest boost.",
  },
  {
    q: "Is there a Cash limit?",
    a: "None that players have reported. Keep driving and your balance keeps climbing — the only cap is how long you can weave without crashing.",
  },
];

export default function CashGuide() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CASH_FAQ.map((f) => ({
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
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          How to Get Cash Fast
        </Marquee>
        <p className="mt-3 text-dim">
          Cash is the whole progression in {SITE.game} — it buys every faster car.
          Here is how to farm it efficiently.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {TIPS.map((t) => (
          <HudPanel key={t.h}>
            <h2 className="display text-lg glow-sodium">{t.h}</h2>
            <p className="mt-2 text-dim">{t.p}</p>
            {t.link && (
              <p className="mt-2">
                <Link href={t.link.href}>{t.link.label} →</Link>
              </p>
            )}
          </HudPanel>
        ))}
      </div>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          What to spend Cash on first
        </Marquee>
        <ol className="mt-4 space-y-2 text-dim">
          <li className="flex gap-3">
            <span className="display glow-taillight">01</span>
            <span>
              Your <span className="text-fg">first car upgrade</span> — the{" "}
              <Link href="/cars/#kitsuni-lx">Kitsuni LX</Link> ($40,000), or hold out
              for the <Link href="/cars/#rangy-helly">Rangy Helly</Link> ($120,000),
              the best value car in the game. Getting off the slow starter is the
              single biggest jump in earning rate — everything else can wait.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="display glow-taillight">02</span>
            <span>
              <span className="text-fg">Tuning</span> on the car you actually drive.
              Upgrading one good car beats half-upgrading three.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="display glow-taillight">03</span>
            <span>
              Saving toward the <span className="text-fg">next tier of car</span> once
              your current one is maxed — the{" "}
              <Link href="/cars/#voss-rt8">Voss RT8</Link> ($260,000) is the sweet
              spot before the $760K flagship. Cosmetics last — performance first.
            </span>
          </li>
        </ol>
      </HudPanel>

      <section>
        <Marquee color="hud" as="h2" className="text-xl">
          Watch: money &amp; leveling guide
        </Marquee>
        <div className="mt-5">
          <YouTubeEmbed
            id="Pky5r-d-DzQ"
            title="How To GET MONEY & LEVEL UP FAST in Ghost Driver — FULL GUIDE"
          />
          <p className="mt-2 text-xs text-dim">
            Video: money farming and leveling walkthrough (YouTube).
          </p>
        </div>
      </section>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Cash FAQ
        </Marquee>
        <dl className="mt-4 space-y-4 text-dim">
          <div>
            <dt className="font-semibold text-fg">
              What is the fastest way to get Cash in Ghost Driver?
            </dt>
            <dd className="mt-1">
              High-speed near-misses in heavy traffic. Redeeming the current{" "}
              <Link href="/codes/">codes</Link> also grants instant Cash for a fast
              head start.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Do codes give Cash?</dt>
            <dd className="mt-1">
              Yes — every current Ghost Driver code rewards Cash, which is why redeeming
              them early is the quickest boost.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Is there a Cash limit?</dt>
            <dd className="mt-1">
              None that players have reported. Keep driving and your balance keeps
              climbing — the only cap is how long you can weave without crashing.
            </dd>
          </div>
        </dl>
      </HudPanel>

      <p className="text-sm text-dim">
        Not sure which car to save for? Check the <Link href="/tier-list/">tier list</Link>.
      </p>
    </div>
  );
}
