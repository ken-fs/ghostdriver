import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import {
  UPDATE_LOG,
  UPDATE_CADENCE,
  UPDATES_LAST_CHECKED,
  NEXT_CODE_MILESTONE,
} from "@/data/updates";
import { CARS } from "@/data/cars";
import { GAME } from "@/data/game";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Event Schedule — Next Update & Limited Cars",
  description: `${SITE.game} events run weekly, Fridays ~2:00 PM ET. Current event status, next update date, past event windows and the limited-car tracker.`,
  path: "/events/",
});

const nf = new Intl.NumberFormat("en-US");

/** Past event windows — pulled from the update log so there is one source of truth. */
const PAST_EVENTS = UPDATE_LOG.filter((u) => u.title.includes("event:"));

/** Limited cars, most recently departed first. */
const LIMITED_CARS = CARS.filter((c) => c.limited).sort((a, b) =>
  (b.limitedUntil ?? "").localeCompare(a.limitedUntil ?? ""),
);

const EVENTS_FAQ = [
  {
    q: "When is the next Ghost Driver update?",
    a: `Ghost Driver updates roughly weekly — ${UPDATE_CADENCE.rhythm} ${UPDATE_CADENCE.nextExpected}`,
  },
  {
    q: "Is there a Ghost Driver event running right now?",
    a: UPDATE_CADENCE.currentEvent,
  },
  {
    q: "Do limited cars come back in Ghost Driver?",
    a: "Reruns haven't been confirmed by the developer. Two limited cars sold so far (Castellani Specchiera, Takama F10 GT) each had a one-week window and haven't returned since — if you want a limited car, buy it during its event week.",
  },
  {
    q: "When is the next Ghost Driver code?",
    a: `THANKSFOR415K (25,000 Cash) just dropped with the Sep 10 update, alongside NEWMAP, VECTOR and TECZWASHERE. The next likes milestone to watch is ${nf.format(NEXT_CODE_MILESTONE / 1000)}K — past drops came at 250K, 350K and 415K.`,
  },
];

export default function Events() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: EVENTS_FAQ.map((f) => ({
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
          Event Schedule
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.game} runs on a weekly event rhythm — here is what is on now, what is
          next, and which limited cars have come and gone.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={UPDATES_LAST_CHECKED} />
        </div>
      </header>

      {/* Current status — the direct answer panel */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          Right now
        </Marquee>
        <dl className="mt-4 space-y-3 text-dim">
          <div>
            <dt className="font-semibold text-fg">Update rhythm</dt>
            <dd className="mt-0.5">{UPDATE_CADENCE.rhythm}</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Current event</dt>
            <dd className="mt-0.5">{UPDATE_CADENCE.currentEvent}</dd>
          </div>
          <div>
            <dt className="font-semibold text-fg">Next expected</dt>
            <dd className="mt-0.5 glow-active">{UPDATE_CADENCE.nextExpected}</dd>
          </div>
        </dl>
      </HudPanel>

      {/* Code milestone watch */}
      <HudPanel>
        <Marquee color="sodium" as="h2" className="text-xl">
          Next code watch
        </Marquee>
        <p className="mt-3 text-dim">
          The 415K-likes milestone just paid out —{" "}
          <span className="text-fg">THANKSFOR415K (25,000 Cash)</span> dropped with the
          Sep 10 update, alongside NEWMAP, VECTOR and TECZWASHERE. Likes are already at{" "}
          {nf.format(GAME.traction.likes)}; the next watch is the{" "}
          <span className="text-fg">{nf.format(NEXT_CODE_MILESTONE)}-likes</span> mark,
          most likely with a weekly update. Verified codes land on the{" "}
          <Link href="/codes/">codes page</Link> immediately.
        </p>
      </HudPanel>

      {/* Limited car tracker */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          Limited Car Tracker
        </Marquee>
        <p className="text-dim">
          Each event week has brought a limited-time car that leaves the shop when the
          event ends. Reruns are unconfirmed — these are gone for now:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {LIMITED_CARS.map((c) => (
            <HudPanel key={c.slug}>
              <h3 className="display text-lg glow-sodium">{c.name}</h3>
              <p className="mt-1 text-sm text-dim">
                Left the shop {c.limitedUntil} — was{" "}
                {c.priceCash ? `$${nf.format(c.priceCash)}` : ""}
                {c.priceCash && c.priceRobux ? " or " : ""}
                {c.priceRobux ? `R$${nf.format(c.priceRobux)}` : ""}
                {c.levelReq ? `, required Level ${c.levelReq}` : ""}
              </p>
              <p className="mt-2 text-dim">{c.analysis}</p>
            </HudPanel>
          ))}
        </div>
        <p className="text-sm text-dim">
          The Aug 29 event&apos;s limited car is reported by 2 sources as a McLaren —
          it joins this tracker once its in-game name and stats are confirmed. Full
          roster on the <Link href="/cars/">cars page</Link>.
        </p>
      </section>

      {/* Past event windows */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          Past Events
        </Marquee>
        {PAST_EVENTS.map((u) => (
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

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Events FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {EVENTS_FAQ.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-fg">{f.q}</dt>
              <dd className="mt-1 text-dim">{f.a}</dd>
            </div>
          ))}
        </dl>
      </HudPanel>

      <p className="text-sm text-dim">
        Live player counts and the full patch-by-patch log are on the{" "}
        <Link href="/updates/">updates page</Link>.
      </p>
    </div>
  );
}
