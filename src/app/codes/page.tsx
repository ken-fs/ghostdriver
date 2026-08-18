import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED, REDEEM_STEPS } from "@/data/codes";
import { SITE } from "@/lib/site";

const active = CODES.filter((c) => c.status === "active");
const unconfirmed = CODES.filter((c) => c.status === "unconfirmed");
const expired = CODES.filter((c) => c.status === "expired");

export const metadata: Metadata = {
  title: "Ghost Driver Codes",
  description: `All working ${SITE.game} codes, checked ${CODES_LAST_CHECKED}. Redeem them for free Cash and skip the early grind.`,
  alternates: { canonical: "/codes/" },
};

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

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <header>
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          Ghost Driver Codes
        </Marquee>
        <p className="mt-3 text-dim">
          Free Cash codes for Roblox {SITE.game}, cross-checked and dated. Redeem
          them fast — they expire quickly.
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

      <p className="text-sm text-dim">
        Next: see the <Link href="/cash/">cash farming guide</Link> or the{" "}
        <Link href="/tier-list/">car tier list</Link>.
      </p>
    </div>
  );
}
