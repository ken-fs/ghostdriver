import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { SITE, NAV } from "@/lib/site";

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
