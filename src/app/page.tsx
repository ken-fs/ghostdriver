import Link from "next/link";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { SITE, NAV } from "@/lib/site";
import { CODES, CODES_LAST_CHECKED } from "@/data/codes";
import { GAME } from "@/data/game";

const activeCodes = CODES.filter((c) => c.status === "active");
const nf = new Intl.NumberFormat("en-US");
const approval =
  Math.round(
    (GAME.traction.likes / (GAME.traction.likes + GAME.traction.dislikes)) * 1000,
  ) / 10;
const HOME_STATS = [
  { label: "Visits", value: nf.format(GAME.traction.visits) },
  { label: "Playing Now", value: nf.format(GAME.traction.ccu) },
  { label: "Approval", value: `${approval}%` },
];

const HOME_FAQ = [
  {
    q: "Are Ghost Driver codes free?",
    a: "Yes. Every Ghost Driver code is free and issued by the developer. Each one gives in-game Cash you redeem in the Shop menu — no Robux required.",
  },
  {
    q: "How often do new codes come out?",
    a: "New codes usually drop around milestones (like visit or like targets) and major updates. The game is in active pre-alpha, so check the codes page before each session.",
  },
  {
    q: "What is the best car in Ghost Driver?",
    a: "The dealership tops out at supercars like the Ferrari 812 Superfast. Once in-game top speeds are verified we rank every car S–C on the tier list — we won't guess before then.",
  },
];

const HUBS = [
  { href: "/codes/", title: "Codes", blurb: "Every working redeem code, checked and dated." },
  { href: "/cars/", title: "Cars", blurb: "Full car list with stats, price and top speed." },
  { href: "/tier-list/", title: "Tier List", blurb: "Which cars are actually worth buying right now." },
  { href: "/cash/", title: "Cash Guide", blurb: "How to farm cash fast and what to spend it on." },
  { href: "/beginner-guide/", title: "Beginner Guide", blurb: "Your first session, controls and the free starter car." },
  { href: "/updates/", title: "Updates", blurb: "Latest patch notes and what changed in the game." },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="pt-4">
        <Marquee as="h1" color="sodium" className="text-4xl sm:text-6xl">
          Ghost Driver
        </Marquee>
        <p className="mt-3 max-w-2xl text-lg text-dim">
          {SITE.tagline} Cut through traffic, redline the engine — and grab the
          current codes before they expire.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/codes/"
            className="hud-panel px-5 py-2 font-medium glow-active no-underline hover:border-active"
          >
            → Working Codes
          </Link>
          <Link
            href="/tier-list/"
            className="hud-panel px-5 py-2 font-medium glow-hud no-underline hover:border-hud"
          >
            → Best Cars
          </Link>
        </div>
      </section>

      <div className="lane-divider" />

      {/* Working codes teaser — the top reason people land here */}
      <section className="grid gap-4 md:grid-cols-3">
        <HudPanel className="md:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <Marquee color="active" as="h2" className="text-xl">
              <span className="pulse">●</span> Working Codes
            </Marquee>
            <Link href="/codes/" className="text-sm">
              All codes →
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-lane">
            {activeCodes.map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <code className="glow-active text-lg font-bold">{c.code}</code>
                  <span className="ml-3 text-sm text-dim">{c.reward}</span>
                </div>
                <CopyButton value={c.code} />
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <VerifiedStamp date={CODES_LAST_CHECKED} />
          </div>
        </HudPanel>
        <HudPanel>
          <Marquee color="hud" as="h2" className="text-xl">
            Live Game Stats
          </Marquee>
          <dl className="mt-4 space-y-3">
            {HOME_STATS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between">
                <dt className="text-sm text-dim">{s.label}</dt>
                <dd className="display text-xl glow-sodium">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-dim">
            Live from Roblox · {GAME.tractionAsOf}
          </p>
        </HudPanel>
      </section>

      <div className="lane-divider" />

      {/* Hub grid — deliberately uneven, not a tidy 3-card row */}
      <section>
        <Marquee color="hud">Pit Stop</Marquee>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HUBS.map((h) => (
            <Link key={h.href} href={h.href} className="no-underline">
              <HudPanel className="h-full transition-colors hover:border-hud">
                <h3 className="display text-xl glow-sodium">{h.title}</h3>
                <p className="mt-2 text-sm text-dim">{h.blurb}</p>
              </HudPanel>
            </Link>
          ))}
        </div>
      </section>

      <div className="lane-divider" />

      <section className="grid gap-4 md:grid-cols-2">
        <HudPanel>
          <Marquee color="sodium" as="h2" className="text-xl">
            What is Ghost Driver?
          </Marquee>
          <p className="mt-3 text-dim">
            Ghost Driver is a No Hesi-style Roblox driving game: you cut through heavy
            highway traffic at high speed, scoring on near-misses to earn Cash, then
            spend it at the dealership on faster cars. It&apos;s in pre-alpha but already
            one of Roblox&apos;s busiest driving games, with new cars and codes arriving
            in frequent updates.
          </p>
          <p className="mt-3 text-dim">
            This hub is where you grab what you need between runs — the current codes,
            which cars are worth buying, and how to bank Cash fast — without digging
            through outdated articles.
          </p>
        </HudPanel>
        <HudPanel>
          <Marquee color="active" as="h2" className="text-xl">
            Why trust us
          </Marquee>
          <p className="mt-3 text-dim">
            Everything here is player-verified. Codes are cross-checked before we list
            them and stamped with the date we last confirmed them. Game stats come
            straight from Roblox and refresh automatically. When we can&apos;t verify a
            number, we say &ldquo;check in-game&rdquo; instead of making it up.
          </p>
          <p className="mt-3 text-dim">
            <Link href="/about/">More about how we verify →</Link>
          </p>
        </HudPanel>
      </section>

      <div className="lane-divider" />

      <section>
        <Marquee color="hud" as="h2" className="text-xl">
          Ghost Driver FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {HOME_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="text-sm text-dim">
        Looking for something specific?{" "}
        {NAV.map((n, i) => (
          <span key={n.href}>
            <Link href={n.href}>{n.label}</Link>
            {i < NAV.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </div>
  );
}
