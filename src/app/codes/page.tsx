import Link from "next/link";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED, REDEEM_STEPS } from "@/data/codes";
import { SITE } from "@/lib/site";
import { buildMeta } from "@/lib/meta";

const active = CODES.filter((c) => c.status === "active");
const unconfirmed = CODES.filter((c) => c.status === "unconfirmed");
const expired = CODES.filter((c) => c.status === "expired");

// Build-time month+year — kept fresh by the 6-hourly rebuild. Matches how players
// search ("ghost driver codes 2026" / "...codes august 2026").
const MONTH_YEAR = new Date().toLocaleString("en-US", {
  month: "long",
  year: "numeric",
});

export const metadata = buildMeta({
  title: `Ghost Driver Codes (${MONTH_YEAR}) — Free Cash`,
  description: `All working ${SITE.game} codes for ${MONTH_YEAR}, verified ${CODES_LAST_CHECKED}. Redeem them for free Cash and skip the early grind.`,
  path: "/codes/",
});

const faq = [
  {
    q: "What are the working Ghost Driver codes?",
    a: `As of ${CODES_LAST_CHECKED}, the working codes are: ${active
      .map((c) => `${c.code} (${c.reward})`)
      .join(", ")}.`,
  },
  {
    q: "How do I redeem codes in Ghost Driver?",
    a: REDEEM_STEPS.join(" "),
  },
  {
    q: "Why isn't my code working?",
    a: "Codes are case-sensitive and expire fast. Type them exactly as shown, and check back here — we re-verify the list regularly.",
  },
];

export default function CodesPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Working ${SITE.game} Codes`,
    numberOfItems: active.length,
    itemListElement: active.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.code,
      description: c.reward,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      <header>
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          Ghost Driver Codes
        </Marquee>
        <p className="mt-3 text-dim">
          Every working {SITE.game} code for {MONTH_YEAR}, cross-checked and dated —
          free Cash for Roblox {SITE.game}. Redeem them fast; they expire quickly.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CODES_LAST_CHECKED} />
        </div>
      </header>

      {/* Working codes board */}
      <HudPanel>
        <Marquee color="active" as="h2" className="text-xl">
          <span className="pulse">●</span> Working Codes ({active.length})
        </Marquee>
        <ul className="mt-4 divide-y divide-lane">
          {active.map((c) => (
            <li key={c.code} className="flex items-center justify-between gap-3 py-3">
              <div>
                <code className="glow-active text-lg font-bold">{c.code}</code>
                <span className="ml-3 text-sm text-dim">{c.reward}</span>
              </div>
              <CopyButton value={c.code} />
            </li>
          ))}
        </ul>
      </HudPanel>

      {/* Unconfirmed */}
      {unconfirmed.length > 0 && (
        <HudPanel>
          <Marquee color="sodium" as="h2" className="text-xl">
            Might Still Work
          </Marquee>
          <ul className="mt-4 space-y-3">
            {unconfirmed.map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3">
                <div>
                  <code className="glow-sodium text-lg font-bold">{c.code}</code>
                  <span className="ml-3 text-sm text-dim">{c.reward}</span>
                  {c.note && <p className="mt-1 text-xs text-dim">{c.note}</p>}
                </div>
                <CopyButton value={c.code} />
              </li>
            ))}
          </ul>
        </HudPanel>
      )}

      {expired.length > 0 && (
        <HudPanel>
          <Marquee color="taillight" as="h2" className="text-xl">
            Expired
          </Marquee>
          <ul className="mt-4 space-y-1 text-dim line-through">
            {expired.map((c) => (
              <li key={c.code}>{c.code}</li>
            ))}
          </ul>
        </HudPanel>
      )}

      {/* How to redeem */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How to Redeem
        </Marquee>
        <ol className="mt-4 space-y-2">
          {REDEEM_STEPS.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="display glow-taillight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </HudPanel>

      {/* FAQ */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          FAQ
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

      {/* Troubleshooting */}
      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          Code Not Working?
        </Marquee>
        <p className="mt-3 text-dim">
          If a {SITE.game} code is rejected, it&apos;s almost always one of these:
        </p>
        <ul className="mt-4 space-y-2 text-dim">
          <li>
            • <span className="text-fg">Typos or case.</span> Codes are
            case-sensitive. Use the copy button above instead of typing by hand.
          </li>
          <li>
            • <span className="text-fg">It expired.</span> Ghost Driver codes are
            short-lived — usually a few days. If it&apos;s past that, it&apos;s gone.
          </li>
          <li>
            • <span className="text-fg">Already redeemed.</span> Each code works once
            per account.
          </li>
          <li>
            • <span className="text-fg">Menu glitch.</span> Rejoin the server, reopen
            the Shop, and try again — the code box occasionally needs a refresh.
          </li>
        </ul>
      </HudPanel>

      {/* How to get more */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          How to Get More Codes
        </Marquee>
        <p className="mt-3 text-dim">
          The {SITE.developer} developer group drops new {SITE.game} codes around
          milestones — recent ones celebrated 250K and 350K likes, and the game
          is still in pre-alpha with frequent updates. New codes tend to appear when:
        </p>
        <ul className="mt-4 space-y-2 text-dim">
          <li>• The game hits a visit or like milestone.</li>
          <li>• A major update or new car drops.</li>
          <li>• Special events or collaborations go live.</li>
        </ul>
        <p className="mt-4 text-dim">
          We re-check and update this page as new codes appear — bookmark it and check
          before each session. The{" "}
          <Link href="/updates/">updates page</Link> tracks the game&apos;s milestones so
          you can see a drop coming.
        </p>
      </HudPanel>

      <p className="text-sm text-dim">
        Next: see the <Link href="/cash/">cash farming guide</Link> or the{" "}
        <Link href="/tier-list/">car tier list</Link>.
      </p>
    </div>
  );
}
