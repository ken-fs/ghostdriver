import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles data, cookies, analytics, and advertising.`,
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <div className="space-y-6">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-4xl">
          Privacy Policy
        </Marquee>
        <p className="mt-2 text-sm text-dim">Last updated: August 18, 2026</p>
      </header>

      <HudPanel className="space-y-5 leading-relaxed">
        <p className="text-dim">
          {SITE.name} ({SITE.domain}) is a free, fan-made resource for the Roblox game{" "}
          {SITE.game}. This page explains what information is collected when you visit
          and how it is used. By using the site you agree to this policy.
        </p>

        <div>
          <h2 className="display text-lg glow-sodium">Information we collect</h2>
          <p className="mt-2 text-dim">
            We do not ask you to create an account and we do not knowingly collect
            personal information such as your name, email, or Roblox login. The site is
            read-only reference content. The only data gathered is standard, anonymous
            usage information described below.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Cookies &amp; analytics</h2>
          <p className="mt-2 text-dim">
            We use privacy-respecting analytics to understand which pages are useful
            (for example, page views and general location at the country level). These
            tools may set cookies or read basic device information such as browser type.
            No data is used to personally identify you.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Advertising</h2>
          <p className="mt-2 text-dim">
            This site may display third-party ads (for example, Google AdSense).
            Advertising partners may use cookies and similar technologies to serve and
            measure ads. Google&apos;s use of advertising cookies is described in{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s advertising policy
            </a>
            . You can opt out of personalized advertising via{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Third-party links</h2>
          <p className="mt-2 text-dim">
            We link to external sites such as Roblox and the game&apos;s community
            channels. We are not responsible for their content or privacy practices.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Children</h2>
          <p className="mt-2 text-dim">
            Roblox has a young audience. We do not knowingly collect personal
            information from children. If you believe a child has provided personal
            data, contact us and we will remove it.
          </p>
        </div>

        <div>
          <h2 className="display text-lg glow-sodium">Changes &amp; contact</h2>
          <p className="mt-2 text-dim">
            We may update this policy as the site evolves; the date above reflects the
            latest version. Questions? See the <Link href="/contact/">contact page</Link>.
          </p>
        </div>
      </HudPanel>
    </div>
  );
}
