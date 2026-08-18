import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { SITE } from "@/lib/site";
import { GAME } from "@/data/game";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms for using ${SITE.name}, a fan-made ${SITE.game} resource.`,
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <div className="space-y-6">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-4xl">
          Terms of Use
        </Marquee>
        <p className="mt-2 text-sm text-dim">Last updated: August 18, 2026</p>
      </header>

      <HudPanel className="space-y-5 leading-relaxed">
        <p className="text-dim">
          By accessing {SITE.name} ({SITE.domain}) you agree to these terms. If you do
          not agree, please do not use the site.
        </p>

        <div>
          <h2 className="display text-lg glow-sodium">Fan-made, not official</h2>
          <p className="mt-2 text-dim">
            {SITE.name} is an independent fan project. It is not affiliated with,
            endorsed by, or sponsored by Roblox Corporation or the {GAME.developer}
            group. All game names, trademarks, and assets belong to their
            respective owners and are used for identification and informational purposes.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Accuracy &amp; no warranty</h2>
          <p className="mt-2 text-dim">
            We work hard to keep codes, car data, and guides accurate and current, and
            we mark anything unverified as &ldquo;check in-game.&rdquo; Even so, game
            content changes constantly and information may be out of date or incorrect.
            The site is provided &ldquo;as is,&rdquo; without warranties of any kind.
            Redeeming codes and following guides is at your own discretion.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Acceptable use</h2>
          <p className="mt-2 text-dim">
            You may read and share our content for personal use. You may not scrape,
            copy, or republish the site&apos;s content wholesale, or use it in a way
            that disrupts the service or infringes others&apos; rights.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">External links &amp; ads</h2>
          <p className="mt-2 text-dim">
            The site links to third-party services (such as Roblox) and may show ads. We
            are not responsible for third-party content, products, or practices.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Limitation of liability</h2>
          <p className="mt-2 text-dim">
            To the fullest extent permitted by law, {SITE.name} is not liable for any
            loss arising from your use of the site or reliance on its information.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Contact</h2>
          <p className="mt-2 text-dim">
            Questions about these terms? Reach us via the{" "}
            <Link href="/contact/">contact page</Link>.
          </p>
        </div>
      </HudPanel>
    </div>
  );
}
