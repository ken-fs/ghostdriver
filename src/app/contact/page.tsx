import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} — report an expired code, a wrong stat, or a new car.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <div className="space-y-6">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-4xl">
          Contact
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.name} is run by players, for players. Spotted an expired code, a wrong
          stat, or a new car we haven&apos;t added yet? Tell us — accuracy is the whole
          point of this site.
        </p>
      </header>

      <HudPanel className="space-y-4">
        <div>
          <h2 className="display text-lg glow-sodium">Email</h2>
          <p className="mt-2 text-dim">
            Reach us at{" "}
            <a href={`mailto:${SITE.contactEmail}`} className="glow-hud">
              {SITE.contactEmail}
            </a>
            . We read everything, though we can&apos;t always reply individually.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Good things to send</h2>
          <ul className="mt-2 space-y-1 text-dim">
            <li>• A code that no longer works (or a new one you found)</li>
            <li>• A car&apos;s real price or top speed you confirmed in-game</li>
            <li>• A correction to any guide or stat</li>
            <li>• A feature you&apos;d find useful</li>
          </ul>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Play the game</h2>
          <p className="mt-2 text-dim">
            For gameplay support, bug reports, or official news, go to the game itself
            on{" "}
            <a href={SITE.robloxUrl} target="_blank" rel="noopener noreferrer">
              Roblox
            </a>
            . We&apos;re a fan resource and can&apos;t change anything in the game.
          </p>
        </div>
      </HudPanel>

      <p className="text-sm text-dim">
        See also our <Link href="/about/">about page</Link> and{" "}
        <Link href="/privacy/">privacy policy</Link>.
      </p>
    </div>
  );
}
