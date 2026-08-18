import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { SiteNav, SiteFooter } from "@/components/ui";

const chakra = Chakra_Petch({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.game} Codes, Cars & Guides — ${SITE.name}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.game} Codes, Cars & Guides`,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.game} Codes, Cars & Guides`,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "en",
      },
      {
        "@type": "VideoGame",
        name: SITE.game,
        gamePlatform: "Roblox",
        applicationCategory: "Game",
      },
    ],
  };

  return (
    <html lang="en" className={`${chakra.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
