import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import { SiteNav, SiteFooter } from "@/components/ui";
import { AdsterraGlobal } from "@/components/ads";

// Fonts are self-hosted (src/fonts, OFL). next/font/google downloads them during the build,
// and when that download flakes on Cloudflare's builders the whole build fails
// ("Can't resolve '@vercel/turbopack-next/internal/font/google/font'", 2026-10-06).
const chakra = localFont({
  src: [
    { path: "../fonts/chakra-petch-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/chakra-petch-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/chakra-petch-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-chakra",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.game} Codes, Cars & Guides`,
    description: SITE.tagline,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.game} Codes, Cars & Guides`,
    description: SITE.tagline,
    images: ["/og.png"],
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
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: `Independent fan resource for the Roblox game ${SITE.game}: working codes, car data, and guides.`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${SITE.url}/contact/`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "VideoGame",
        "@id": `${SITE.url}/#videogame`,
        name: SITE.game,
        url: SITE.robloxUrl,
        description:
          "A No Hesi-style Roblox driving game: weave through heavy highway traffic at high speed, earn Cash, and buy faster cars.",
        gamePlatform: "Roblox",
        applicationCategory: "Game",
        genre: ["Racing", "Driving"],
        playMode: "MultiPlayer",
        image: `${SITE.url}/og.png`,
        author: { "@type": "Organization", name: SITE.developer },
      },
    ],
  };

  return (
    <html lang="en" className={`${chakra.variable} ${inter.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZ44TZM6NG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZ44TZM6NG');
          `}
        </Script>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <SiteFooter />
        <AdsterraGlobal />
      </body>
    </html>
  );
}
