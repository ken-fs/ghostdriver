import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_LAST_CHECKED, getCar, TUNED_SPEEDS } from "@/data/cars";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return CARS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return {};
  const price = car.priceCash
    ? `$${car.priceCash.toLocaleString("en-US")}`
    : car.priceRobux
      ? `R$${car.priceRobux.toLocaleString("en-US")}`
      : "free";
  const title = `${car.name} — Stats, Price & Tune (${SITE.game})`;
  const description = `Is the ${car.name} worth it in Roblox ${SITE.game}? ${car.topSpeedMph} mph, ${car.hp} HP, ${car.drivetrain}, 0-60 in ${car.zeroToSixty} — price (${price}), how to get it, and the tune.`;
  return {
    title,
    description,
    alternates: { canonical: `/cars/${car.slug}/` },
    openGraph: {
      type: "article",
      siteName: SITE.name,
      url: `/cars/${car.slug}/`,
      title,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

const nf = new Intl.NumberFormat("en-US");

export default async function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const tuned = TUNED_SPEEDS[car.slug];

  // Comparable cars: same game tier, closest by price. Gives each page a real
  // comparison section instead of a generic "related" list.
  const peers = CARS.filter((c) => c.slug !== car.slug)
    .sort((a, b) => {
      const sameTierA = a.gameTier === car.gameTier ? 0 : 1;
      const sameTierB = b.gameTier === car.gameTier ? 0 : 1;
      if (sameTierA !== sameTierB) return sameTierA - sameTierB;
      return Math.abs((a.priceCash ?? 0) - (car.priceCash ?? 0)) - Math.abs((b.priceCash ?? 0) - (car.priceCash ?? 0));
    })
    .slice(0, 3);

  const priceLabel = car.priceCash
    ? `$${nf.format(car.priceCash)}`
    : car.priceRobux
      ? `R$${nf.format(car.priceRobux)}`
      : "Free";

  const faq = [
    {
      q: `How do you get the ${car.name} in ${SITE.game}?`,
      a: car.howToGet,
    },
    {
      q: `Is the ${car.name} worth it in ${SITE.game}?`,
      a: `${car.analysis} Our value grade is ${car.valueTier}. ${car.bestFor}`,
    },
    {
      q: `How fast is the ${car.name}?`,
      a: `Listed top speed is ${car.topSpeedMph} mph with ${car.hp} HP, ${car.drivetrain}, and a 0-60 of ${car.zeroToSixty}.${
        tuned
          ? ` With the tuning settings from our tuning guide, creators demonstrated ${tuned.tuned} - ${tuned.note}`
          : " Tuned top speed has not been demonstrated on camera for this car yet, so we do not publish a number for it."
      }`,
    },
    {
      q: `What game tier is the ${car.name}?`,
      a: car.gameTier
        ? `The game classifies it as ${car.gameTier}-tier. That is the developer's own performance band, separate from our value grade of ${car.valueTier}, which weighs price against what you get.`
        : `This car has no published game tier - it is a limited release, so the developer never slotted it into the B/A/S bands. Our value grade is ${car.valueTier}.`,
    },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${car.name} — Stats, Price & Tune`,
    description: `${car.name} in Roblox ${SITE.game}: ${car.topSpeedMph} mph, ${car.hp} HP, ${car.drivetrain}, 0-60 ${car.zeroToSixty}, ${priceLabel}.`,
    dateModified: CARS_LAST_CHECKED,
    author: { "@type": "Person", name: SITE.editor, jobTitle: SITE.editorRole, url: `${SITE.url}/about/` },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/cars/${car.slug}/`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Cars", item: `${SITE.url}/cars/` },
      { "@type": "ListItem", position: 3, name: car.name, item: `${SITE.url}/cars/${car.slug}/` },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <header>
        <p className="text-sm text-dim">
          <Link href="/">Home</Link> / <Link href="/cars/">Cars</Link> / {car.name}
        </p>
        <Marquee as="h1" color="active" className="mt-2 text-3xl sm:text-5xl">
          {car.name}
        </Marquee>
        <p className="mt-3 text-dim">
          {car.gameTier ? `${car.gameTier}-tier` : "Limited"} · {car.hp} HP · {car.topSpeedMph} mph ·{" "}
          {car.drivetrain} · 0-60 {car.zeroToSixty} · {priceLabel}
          {car.limited && " · no longer in the shop"}
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CARS_LAST_CHECKED} />
        </div>
      </header>

      {/* Spec sheet */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          Stats
        </Marquee>
        <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Price", priceLabel],
            ["Top speed", `${car.topSpeedMph} mph`],
            ["Horsepower", `${car.hp} HP`],
            ["Drivetrain", car.drivetrain],
            ["0-60 mph", car.zeroToSixty],
            ["Game tier", car.gameTier ?? "Limited (no tier)"],
            ["Our value grade", car.valueTier],
            ["Level requirement", car.levelReq ? `Level ${car.levelReq}` : "None confirmed"],
            ["Availability", car.limited ? `Limited — left ${car.limitedUntil ?? "the shop"}` : "In the shop"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-wide text-dim">{k}</dt>
              <dd className="mt-0.5 text-fg">{v}</dd>
            </div>
          ))}
        </dl>
        {tuned && (
          <p className="mt-4 border-t border-lane pt-4 text-sm text-dim">
            <span className="text-fg">Tuned:</span> creators demonstrated{" "}
            <span className="glow-sodium">{tuned.tuned}</span> after applying the settings in the{" "}
            <Link href="/tuning/">tuning guide</Link>. {tuned.note}
          </p>
        )}
      </HudPanel>

      {/* Verdict */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Is It Worth It?
        </Marquee>
        <p className="mt-3 text-dim">{car.analysis}</p>
        <p className="mt-3 text-sm text-dim">
          <span className="text-fg">Best for:</span> {car.bestFor}
        </p>
        {car.note && <p className="mt-2 text-sm text-dim">{car.note}</p>}
      </HudPanel>

      {/* How to get */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How to Get It
        </Marquee>
        <p className="mt-3 text-dim">{car.howToGet}</p>
        <p className="mt-3 text-sm text-dim">
          Cars are bought at the dealership next to the spawn point — walk into the green circle
          and pick your car. Everything is priced in Cash, which you earn by driving fast and
          chaining near-misses; the <Link href="/cash/">cash guide</Link> covers the fastest
          routes, and the <Link href="/beginner-guide/">beginner guide</Link> walks through your
          first session.
        </p>
      </HudPanel>

      {/* Comparison */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          How It Compares
        </Marquee>
        <p className="text-dim">
          Closest alternatives by tier and price — the full roster with every stat is on the{" "}
          <Link href="/cars/">car list</Link>, and the <Link href="/tier-list/">tier list</Link>{" "}
          ranks all 14 by value for Cash.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {peers.map((p) => (
            <HudPanel key={p.slug}>
              <h3 className="display text-lg glow-sodium">
                <Link href={`/cars/${p.slug}/`}>{p.name}</Link>
              </h3>
              <p className="mt-1 text-sm text-dim">
                {p.priceCash ? `$${nf.format(p.priceCash)}` : `R$${nf.format(p.priceRobux ?? 0)}`} ·{" "}
                {p.hp} HP · {p.topSpeedMph} mph
              </p>
              <p className="mt-1 text-xs text-dim">
                {p.gameTier ? `${p.gameTier}-tier` : "Limited"} · value {p.valueTier}
              </p>
              <p className="mt-2 text-sm text-dim">{p.bestFor}</p>
            </HudPanel>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          If You Buy It
        </Marquee>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Tune it first.</span> The tuning settings are free and
            worth more speed than the next car up — see the <Link href="/tuning/">tuning guide</Link>.
          </li>
          <li>
            • <span className="text-fg">Pick your build.</span> {car.drivetrain === "RWD"
              ? "RWD is the drift-friendly layout — leave the gears alone and read the "
              : "AWD grips, which suits near-miss weaving and top-speed runs rather than sliding — read the "}
            <Link href="/drift/">drift guide</Link> if you want to slide it.
          </li>
          <li>
            • <span className="text-fg">Check the event schedule.</span> Limited cars return in
            event windows — the <Link href="/events/">event page</Link> tracks what is live now.
          </li>
        </ul>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          {car.name} FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {faq.map((f) => (
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
