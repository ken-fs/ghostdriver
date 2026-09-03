import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { ScreenshotStrip } from "@/components/media";
import { CARS, CARS_KNOWN, CARS_LAST_CHECKED, CARS_ROSTER_PARTIAL } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Cars List — All 14 Cars & Stats",
  description: `Every car in Roblox ${SITE.game} with verified price, top speed, HP, drivetrain and 0-60 — plus which ones are actually worth buying.`,
  path: "/cars/",
});

// Plain-text mirror of the visible FAQ below — drives the FAQPage schema.
const CARS_FAQ = [
  {
    q: "How many cars are in Ghost Driver?",
    a: "14 cars have been documented: 12 permanent cars plus 2 limited-time cars (Takama F10 GT and Castellani Specchiera) that left the shop in late August 2026. Weekly events keep adding more.",
  },
  {
    q: "How do you get cars in Ghost Driver?",
    a: "Walk to the dealership next to the spawn point and step into the green circle to open the purchase menu. Cars are bought with Cash earned by driving — codes give you a head start.",
  },
  {
    q: "What is the best car in Ghost Driver?",
    a: "The Voss RT10 TT ($760,000) is the best car overall — fastest 0-60 (2.6s) and joint-highest top speed (215 mph). The best value buy is the Rangy Helly at $120,000. See the tier list for the full ranking.",
  },
  {
    q: "What is the fastest car in Ghost Driver?",
    a: "Three cars tie at 215 mph: the Voss RT10 TT ($760,000) and the limited Castellani Specchiera (840 HP, the most powerful car in the game).",
  },
  {
    q: "Is there a free car in Ghost Driver?",
    a: "Yes — the Wulfbrecht RZ7 is the free starter car every player begins with.",
  },
];

const nf = new Intl.NumberFormat("en-US");

function price(c: (typeof CARS)[number]): string {
  if (c.priceCash === 0) return "FREE";
  const parts = [];
  if (c.priceCash) parts.push(`$${nf.format(c.priceCash)}`);
  if (c.priceRobux) parts.push(`R$${nf.format(c.priceRobux)}`);
  return parts.join(" / ");
}

export default function CarsPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CARS_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.game} Cars List`,
    numberOfItems: CARS.length,
    itemListElement: CARS.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      url: `${SITE.url}/cars/#${c.slug}`,
      description: `${c.topSpeedMph} mph · ${c.hp} HP · ${price(c)}`,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-5xl">
          Cars List
        </Marquee>
        <p className="mt-3 text-dim">
          All {CARS.length} documented {SITE.game} cars with verified stats — price,
          top speed, horsepower, drivetrain and 0-60 — cross-checked from two
          independent sources. The Value column is{" "}
          <Link href="/tier-list/">our tier-list grade</Link>; Game Tier is the
          game&apos;s own B/A/S classification.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CARS_LAST_CHECKED} />
        </div>
      </header>

      <ScreenshotStrip
        shots={[
          { src: "/media/shot1.webp", alt: "Ghost Driver gameplay — car on the highway (Roblox)" },
          { src: "/media/shot3.webp", alt: "Ghost Driver gameplay — traffic weaving at speed (Roblox)" },
        ]}
      />

      <HudPanel className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="text-dim">
            <tr className="border-b-2 border-lane">
              <th className="py-2 pr-3">Car</th>
              <th className="py-2 pr-3">Price</th>
              <th className="py-2 pr-3">Top Speed</th>
              <th className="py-2 pr-3">HP</th>
              <th className="py-2 pr-3">0-60</th>
              <th className="py-2 pr-3">Drive</th>
              <th className="py-2 pr-3">Game Tier</th>
              <th className="py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            {CARS.map((c) => (
              <tr key={c.slug} id={c.slug} className="border-b border-lane align-top scroll-mt-20">
                <td className="py-2 pr-3 font-medium text-fg">
                  {c.name}
                  {c.limited && (
                    <span className="ml-2 hud-panel px-1.5 py-0.5 text-xs glow-taillight">
                      Limited
                    </span>
                  )}
                  {c.levelReq && (
                    <span className="ml-2 hud-panel px-1.5 py-0.5 text-xs text-dim">
                      Lv.{c.levelReq}
                    </span>
                  )}
                  {c.note && <p className="mt-1 text-xs text-dim">{c.note}</p>}
                </td>
                <td className="py-2 pr-3">{price(c)}</td>
                <td className="py-2 pr-3">{c.topSpeedMph} mph</td>
                <td className="py-2 pr-3">{c.hp}</td>
                <td className="py-2 pr-3">{c.zeroToSixty}</td>
                <td className="py-2 pr-3">{c.drivetrain}</td>
                <td className="py-2 pr-3">{c.gameTier ?? "—"}</td>
                <td className="py-2">
                  <Link href={`/tier-list/#${c.slug}`} className="glow-sodium font-semibold">
                    {c.valueTier}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HudPanel>

      {CARS_ROSTER_PARTIAL && (
        <p className="text-sm text-dim">
          The Aug 29 – Sep 5 event added a new limited-time car whose name we can&apos;t
          yet confirm from two independent sources — it appears here the moment it&apos;s
          verified, never guessed. Track it on the <Link href="/updates/">updates page</Link>.
        </p>
      )}

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How to buy cars
        </Marquee>
        <p className="mt-3 text-dim">
          Cars are bought at the {CARS_KNOWN.boughtAt}. The shop menu has filters for
          brand, type and name. Everything except the Reinhardt RT32 (Robux Starter
          Pack) is bought with {CARS_KNOWN.currency} earned from driving — and cars can
          be tuned beyond their stock stats.
        </p>
        <p className="mt-3 text-dim">
          Short on Cash? The <Link href="/cash/">cash guide</Link> shows the fastest
          farming loop, and the current <Link href="/codes/">codes</Link> hand you free
          Cash toward your first upgrade.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Cars FAQ
        </Marquee>
        <dl className="mt-4 space-y-4 text-dim">
          {CARS_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1">{f.a}</dd>
            </div>
          ))}
        </dl>
      </HudPanel>
    </div>
  );
}
