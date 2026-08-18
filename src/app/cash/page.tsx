import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghost Driver Cash Guide — How to Get Cash Fast",
  description: `How to farm Cash fast in Roblox ${SITE.game}: near-miss driving, code boosts, and what to spend it on first.`,
  alternates: { canonical: "/cash/" },
};

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

export default function CashGuide() {
  return (
    <div className="space-y-8">
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

      <p className="text-sm text-dim">
        Not sure which car to save for? Check the <Link href="/tier-list/">tier list</Link>.
      </p>
    </div>
  );
}
