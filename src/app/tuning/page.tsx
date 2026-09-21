import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS } from "@/data/cars";
import { SITE } from "@/lib/site";

/**
 * Tuning guide - the one topic in this niche with no website competition.
 * Mechanics + values sourced from creator footage (see TUNE_SOURCES). Where a
 * creator shows per-car slider values on screen rather than reading them out,
 * we say so instead of inventing numbers.
 */
const TUNE_CHECKED = "2026-09-21";

export const metadata = buildMeta({
  title: "Ghost Driver Tuning Guide — Best Tune for Any Car",
  description: `How to tune a car in Roblox ${SITE.game}: the gear and suspension settings creators use, what each upgrade stage does, and the fastest cars in the game.`,
  path: "/tuning/",
});

const nf = new Intl.NumberFormat("en-US");

/** Cars whose tuned top speed a creator demonstrated on camera. */
const DEMONSTRATED = [
  { name: "Wulfbrecht RZ7", slug: "wulfbrecht-rz7", stock: 168, tuned: "~400–430 km/h (250–267 mph)", note: "The free starter car, with a V10 swap and the universal tune. Creators call this the biggest free-car jump in the game." },
  { name: "Kitsuni LX", slug: "kitsuni-lx", stock: 165, tuned: "~420 km/h (261 mph)", note: "Launch control set to 5,000 RPM, ultra heavy-duty long block." },
  { name: "Trailhawk Helly", slug: "trailhawk-helly", stock: 150, tuned: "~500 km/h (311 mph)", note: "AWD plus race long block at stage 4 — described as a rocket." },
  { name: "Voss RT8", slug: "voss-rt8", stock: 205, tuned: "~500 km/h (311 mph)", note: "Quad turbo, twin charge, C16 fuel, ultra heavy-duty long block." },
  { name: "Voss RT10 TT", slug: "voss-rt10-tt", stock: 240, tuned: "~506 km/h (314 mph)", note: "The GT3RS-class tune — AWD, quad turbo, max nitrous." },
  { name: "Reinhardt RT32", slug: "reinhardt-rt32", stock: 217, tuned: "~510 km/h (317 mph)", note: "Twin-turbo V10 — creators call it the fastest car in the game in this build." },
  { name: "Shelly LZ1", slug: "shelly-lz1", stock: 212, tuned: "325+ mph (523+ km/h)", note: "The highest top speed shown on camera. AWD is required for the tune to hold." },
];

const TUNE_SOURCES = [
  { name: "Samyar — The BEST Tune for EVERY Car", what: "Per-car settings read out alongside on-screen sliders; the tuned top speeds above come from this run." },
  { name: "The BEST Racing Tune in Ghost Driver", what: "The universal tune: all gears to minimum, suspension 2.4 front / 1.5 rear. Demonstrated on a GT3RS going from 174 to 240 mph." },
  { name: "DKNEMZAV — Best Car Tunes", what: "Stage-by-stage walkthrough on the R8, confirming which stages are optional." },
];

const TUNE_FAQ = [
  {
    q: "What is the best tune in Ghost Driver?",
    a: "The tune creators use across every car: set every gear in the transmission to its minimum, then set suspension to 2.4 on the front and 1.5 on the rear. One creator demonstrated it taking a GT3RS from 174 mph to 240 mph with no other change. Max out engine and induction first — the tune multiplies what the parts give you.",
  },
  {
    q: "How do you tune a car in Ghost Driver?",
    a: "Open customization, then the performance tab. Each system (engine, induction, transmission, suspension, tires, exhaust) has its own upgrade stage, and the transmission and suspension also expose sliders. The tune is a slider configuration, not a purchase — you can apply it to any car you own for free.",
  },
  {
    q: "Do I need stage 4 upgrades to use the tune?",
    a: "No. Creators are consistent on this: stage 4 is better, but stage 3 performs close enough that the tune still works, and one creator reports running stage 2 tires while still doing well. The tune itself is what changes the car's behaviour — the stages decide how much power it has to multiply.",
  },
  {
    q: "Which long block should I use?",
    a: "It depends on the build. Race long block for the starter and mid-tier cars, and ultra heavy-duty long block once you are chasing top speed on the high-end cars. The GT3RS and R8 tunes both call for ultra heavy-duty.",
  },
  {
    q: "What is a glitch tune in Ghost Driver?",
    a: "Players call this slider configuration a \"glitch tune\" because the result looks wrong for the car's stats. It is not an exploit — every value is set through the game's own customization menu, and the game lets you save it. The name is community shorthand for how dramatic the result is, not a bug you are abusing.",
  },
  {
    q: "Is there a glitch that makes races faster?",
    a: "Creators have shown a private-server trick that despawns traffic near the end of a race, but they note it does not count toward leaderboard times and expect it to be patched. We do not document it — it is not a tuning technique, and it will not survive an update.",
  },
  {
    q: "What is the fastest car in Ghost Driver?",
    a: "On tuned top speed, the Shelly LZ1 shows the highest number on camera at 325+ mph, with the Reinhardt RT32 close behind at around 510 km/h. Both need AWD and the full tune to get there. The Vector is widely believed to be capable of more, but creators report nobody has published a tune for it.",
  },
  {
    q: "Does tuning work on limited cars?",
    a: "Yes — the tune is a slider configuration, so it applies to any car you own, limited or not. That matters because the limited cars are where the highest tuned numbers show up, and several have already left the shop. Check the event schedule for reruns.",
  },
];

export default function TuningPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    dateModified: TUNE_CHECKED,
    author: { "@type": "Person", name: SITE.editor, jobTitle: SITE.editorRole, url: `${SITE.url}/about/` },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/tuning/`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TUNE_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          Tuning Guide
        </Marquee>
        <p className="mt-3 text-dim">
          Tuning is the single biggest speed gain in {SITE.game} — bigger than buying the next
          car. Here is the configuration creators use on every build, what each upgrade stage
          actually does, and the top speeds it produces.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={TUNE_CHECKED} />
        </div>
      </header>

      {/* The universal tune */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          The Tune That Works on Any Car
        </Marquee>
        <ol className="mt-4 space-y-3">
          {[
            "Open customization → performance, and max out engine and induction first. The tune multiplies your parts — it cannot replace them.",
            "Transmission: pull every gear slider to its minimum. All of them. This is the part that looks wrong and produces the speed.",
            "Suspension: set 2.4 on the front and 1.5 on the rear.",
            "Set launch control RPM high — creators run 5,000–6,000 RPM to guarantee a clean launch.",
            "Save the settings. The tune is free and applies to any car you own, limited or not.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-dim">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-dim">
          <strong className="text-fg">What it is worth:</strong> one creator applied only this
          tune to a Porsche GT3RS and went from <span className="text-fg">174 mph to 240 mph</span> —
          with the car not fully upgraded. Players call it a &ldquo;glitch tune&rdquo; because the
          result looks wrong for the car&apos;s stats, but every value is set through the game&apos;s
          own menu. It is not an exploit.
        </p>
      </HudPanel>

      {/* What each part does */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          What Each Upgrade Actually Does
        </Marquee>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "Engine + long block", d: "Raw power. Stage 4 is the ceiling, but creators agree stage 3 is close enough to run the tune. Long block choice splits by build: race for starter and mid-tier cars, ultra heavy-duty once you are chasing top speed." },
            { t: "Induction (turbo)", d: "Quad turbo and twin charge are the top-speed picks, twin turbo for the V10 builds. Max this before the transmission — it feeds the gears." },
            { t: "Transmission", d: "Gears plus the sliders. The tune lives here: every gear to minimum. This is what makes the car pull past its listed top speed." },
            { t: "Suspension", d: "Front and rear sliders. The tune runs 2.4 / 1.5 — stiff front, softer rear. Creators note it looks wrong on screen and works anyway." },
            { t: "Tires + grip", d: "The stage most creators leave low. One reports running stage 2 and still doing well, so this is the budget slot if you have to pick." },
            { t: "Fuel + nitrous", d: "C16 fuel and maxed nitrous show up in every high-speed build. Nitrous is the burst; fuel keeps the top end repeatable." },
            { t: "Drivetrain", d: "AWD for the fastest tunes — the highest top speeds on camera all require it. RWD stays the choice for drifting, since you need the rear to break loose." },
            { t: "Launch control", d: "5,000–6,000 RPM. Set it high to guarantee a 60 mph launch instead of bogging off the line." },
          ].map((x) => (
            <HudPanel key={x.t}>
              <h3 className="display text-lg glow-sodium">{x.t}</h3>
              <p className="mt-2 text-sm text-dim">{x.d}</p>
            </HudPanel>
          ))}
        </div>
      </section>

      {/* Demonstrated top speeds */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          Tuned Top Speeds (Demonstrated on Camera)
        </Marquee>
        <p className="text-dim">
          Stock figures come from our <Link href="/cars/">verified car roster</Link>. Tuned
          figures are what creators showed in-game after applying the settings above — treat
          them as demonstrated results, not guaranteed ones, since your upgrade stages decide
          the ceiling.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {DEMONSTRATED.map((c) => {
            const car = CARS.find((x) => x.slug === c.slug);
            return (
              <HudPanel key={c.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="display text-lg glow-sodium">{c.name}</h3>
                  <span className="text-sm text-dim">
                    {car?.priceCash ? `$${nf.format(car.priceCash)}` : car?.priceRobux ? `R$${nf.format(car.priceRobux)}` : "Free"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-dim">
                  stock {c.stock} mph → <span className="text-fg">tuned {c.tuned}</span>
                </p>
                <p className="mt-2 text-sm text-dim">{c.note}</p>
              </HudPanel>
            );
          })}
        </div>
        <p className="text-sm text-dim">
          Two gaps worth knowing. The <strong className="text-fg">Vector</strong> is widely
          believed to be the fastest car in the game — one creator reports 200 mph in four
          seconds — but says nobody has published a tune for it. And the{" "}
          <strong className="text-fg">M2</strong> is the car creators tell you to skip: the
          tunes exist, the results are not worth the price.
        </p>
      </section>

      {/* Drift vs speed */}
      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Top Speed vs Drift: Two Different Tunes
        </Marquee>
        <p className="mt-3 text-dim">
          The universal tune is built for straight-line speed, and it makes a car worse at
          drifting — stiff front suspension and minimum gears both fight a slide. If you are
          building for the drift rather than the drag strip, start from the{" "}
          <Link href="/drift/">drift guide</Link> instead: RWD drivetrain, and leave the gears
          alone.
        </p>
        <p className="mt-3 text-sm text-dim">
          You are not locked in. Sliders are free to change, so the practical setup is one car
          tuned for speed and one left loose for drifting, rather than one car doing both
          badly.
        </p>
        <p className="mt-3 text-sm text-dim">
          Separately from performance, the game&apos;s visual settings are also worth a pass —
          the <Link href="/settings/">graphics settings guide</Link> covers the recipe that makes
          traffic readable at speed, which matters when your Cash depends on near-misses.
        </p>
      </HudPanel>

      {/* Sources */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Where These Numbers Come From
        </Marquee>
        <ul className="mt-4 space-y-3 text-dim">
          {TUNE_SOURCES.map((s) => (
            <li key={s.name}>
              • <span className="text-fg">{s.name}</span> — {s.what}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-dim">
          One honesty note: creators show per-car slider values on screen rather than reading
          them out, so we publish the settings that <em>are</em> stated (gears to minimum,
          suspension 2.4 / 1.5, launch RPM, the part choices) and the top speeds that resulted.
          We do not invent per-car numbers we could not hear.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Tuning FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {TUNE_FAQ.map((f) => (
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
