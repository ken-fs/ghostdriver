import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { GAME } from "@/data/game";
import {
  UPDATE_LOG,
  UPDATE_CADENCE,
  UPDATES_LAST_CHECKED,
  NEXT_CODE_MILESTONE,
} from "@/data/updates";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Updates & Stats",
  description: `Live ${SITE.game} player stats and the latest news — visits, concurrent players, likes, and new code milestones.`,
  path: "/updates/",
});

const UPDATES_FAQ = [
  {
    q: "When is the next Ghost Driver update?",
    a: `Ghost Driver updates roughly weekly, on Fridays around 2:00 PM ET. The current event is ${UPDATE_CADENCE.currentEvent}, so the next update is expected ${UPDATE_CADENCE.nextExpected}`,
  },
  {
    q: "When is the next Ghost Driver code?",
    a: "Likely at the 400K-likes milestone — the 250K and 350K milestones each dropped a code. New codes also sometimes arrive alongside weekly updates.",
  },
  {
    q: "What was in the last Ghost Driver update?",
    a: "The Aug 29, 2026 update added new limited-time vehicles, vehicle customization options and an anti-cheat system, plus data and bug fixes. A follow-up patch landed Sep 1.",
  },
];

const nf = new Intl.NumberFormat("en-US");
const approval = Math.round(
  (GAME.traction.likes / (GAME.traction.likes + GAME.traction.dislikes)) * 1000,
) / 10;

const STATS = [
  { label: "Total Visits", value: nf.format(GAME.traction.visits) },
  { label: "Playing Now", value: nf.format(GAME.traction.ccu) },
  { label: "Favorites", value: nf.format(GAME.traction.favorites) },
  { label: "Approval", value: `${approval}%` },
];

export default function Updates() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: UPDATES_FAQ.map((f) => ({
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
        <Marquee as="h1" color="hud" className="text-3xl sm:text-5xl">
          Updates &amp; Stats
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.game} is in {GAME.status}, built by the {GAME.developer} group, and is
          actively updated.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UPDATES_LAST_CHECKED} />
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <HudPanel key={s.label} className="text-center">
            <div className="display text-2xl glow-sodium sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase text-dim">{s.label}</div>
          </HudPanel>
        ))}
      </div>

      {/* Update rhythm — answers "when is the next Ghost Driver update" directly */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          When is the next update?
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.game} updates on a near-weekly rhythm: {UPDATE_CADENCE.rhythm} The
          current event is <span className="text-fg">{UPDATE_CADENCE.currentEvent}</span>,
          so the next update is expected{" "}
          <span className="glow-active">{UPDATE_CADENCE.nextExpected}</span>
        </p>
        <p className="mt-3 text-dim">
          Code watch: likes are at {nf.format(GAME.traction.likes)} and both the 250K
          and 350K milestones dropped a code — the{" "}
          <span className="text-fg">{nf.format(NEXT_CODE_MILESTONE)}-likes</span>{" "}
          milestone is the likely next trigger. When it lands it goes straight to the{" "}
          <Link href="/codes/">codes page</Link>.
        </p>
      </HudPanel>

      {/* Dated update log — data-driven, one entry per game update */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          Update Log
        </Marquee>
        {UPDATE_LOG.map((u) => (
          <HudPanel key={u.date}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="display text-lg glow-sodium">{u.title}</h3>
              <span className="text-sm text-dim">{u.date}</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-dim">
              {u.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-dim">Source: {u.source}</p>
          </HudPanel>
        ))}
      </section>

      <p className="text-sm text-dim">
        New cars from these updates are added to the <Link href="/cars/">cars list</Link>{" "}
        and ranked on the <Link href="/tier-list/">tier list</Link> once verified.
      </p>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Updates FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {UPDATES_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </HudPanel>

      <p className="text-sm text-dim">
        Stats are pulled from Roblox and refreshed regularly. Play the game on{" "}
        <a href={SITE.robloxUrl} target="_blank" rel="noopener noreferrer">
          Roblox
        </a>
        .
      </p>
    </div>
  );
}
