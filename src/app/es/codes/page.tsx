import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED } from "@/data/codes";
import { buildMeta } from "@/lib/meta";
import { CODE_LANGS } from "@/lib/i18n";

const active = CODES.filter((c) => c.status === "active");
const unconfirmed = CODES.filter((c) => c.status === "unconfirmed");
const expired = CODES.filter((c) => c.status === "expired");

const MONTH_YEAR = new Date().toLocaleString("es-ES", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Códigos de Ghost Driver (${MONTH_YEAR}) — ${active.length} Activos [Roblox]`,
  description: `Todos los códigos activos de Ghost Driver para ${MONTH_YEAR}, verificados el ${CODES_LAST_CHECKED}. Cash gratis para Roblox — los códigos caducan rápido, canjéalos ya.`,
  path: "/es/codes/",
  languages: CODE_LANGS,
});

const REDEEM_STEPS = [
  "Abre Ghost Driver en Roblox.",
  "Abre el panel Shop en el lado izquierdo de la pantalla.",
  "Ve a la pestaña Codes / Rewards.",
  "Escribe el código exactamente como aparece (distingue mayúsculas y minúsculas).",
  "Pulsa Redeem para reclamar tu Cash.",
];

const faq = [
  {
    q: "¿Cuáles son los códigos activos de Ghost Driver?",
    a: `Al ${CODES_LAST_CHECKED}, los códigos activos son: ${active
      .map((c) => `${c.code} (${c.reward})`)
      .join(", ")}.`,
  },
  {
    q: "¿Cómo canjeo códigos en Ghost Driver?",
    a: REDEEM_STEPS.join(" "),
  },
  {
    q: "¿Por qué no funciona mi código?",
    a: "Los códigos distinguen mayúsculas y caducan rápido. Escríbelos exactamente como se muestran y vuelve a esta página: la lista se re-verifica con frecuencia.",
  },
];

export default function CodesEs() {
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
          Códigos de Ghost Driver
        </Marquee>
        <p className="mt-3 text-dim">
          Todos los códigos activos de Ghost Driver para {MONTH_YEAR}, verificados y con
          fecha — Cash gratis en Roblox. Caducan rápido: canjéalos cuanto antes.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CODES_LAST_CHECKED} />
        </div>
      </header>

      <HudPanel>
        <Marquee color="active" as="h2" className="text-xl">
          <span className="pulse">●</span> Códigos activos ({active.length})
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

      {unconfirmed.length > 0 && (
        <HudPanel>
          <Marquee color="sodium" as="h2" className="text-xl">
            Podrían funcionar
          </Marquee>
          <ul className="mt-4 space-y-3">
            {unconfirmed.map((c) => (
              <li key={c.code} className="flex items-center justify-between gap-3">
                <div>
                  <code className="glow-sodium text-lg font-bold">{c.code}</code>
                  <span className="ml-3 text-sm text-dim">{c.reward}</span>
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
            Expirados
          </Marquee>
          <ul className="mt-4 space-y-1 text-dim line-through">
            {expired.map((c) => (
              <li key={c.code}>{c.code}</li>
            ))}
          </ul>
        </HudPanel>
      )}

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Cómo canjear
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
    </div>
  );
}
