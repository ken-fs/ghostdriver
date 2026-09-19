import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CopyButton } from "@/components/CopyButton";
import { CODES, CODES_LAST_CHECKED } from "@/data/codes";
import { buildMeta } from "@/lib/meta";
import { CODE_LANGS } from "@/lib/i18n";

const active = CODES.filter((c) => c.status === "active");
const unconfirmed = CODES.filter((c) => c.status === "unconfirmed");
const expired = CODES.filter((c) => c.status === "expired");

const MONTH_YEAR = new Date().toLocaleString("pt-BR", { month: "long", year: "numeric" });

export const metadata = buildMeta({
  title: `Códigos de Ghost Driver (${MONTH_YEAR}) — ${active.length} Ativos [Roblox]`,
  description: `Todos os códigos ativos de Ghost Driver para ${MONTH_YEAR}, verificados em ${CODES_LAST_CHECKED}. Cash grátis no Roblox — os códigos expiram rápido, resgate já.`,
  path: "/pt-br/codes/",
  languages: CODE_LANGS,
});

const REDEEM_STEPS = [
  "Abra o Ghost Driver no Roblox.",
  "Abra o painel Shop no lado esquerdo da tela.",
  "Vá para a aba Codes / Rewards.",
  "Digite o código exatamente como mostrado (diferencia maiúsculas e minúsculas).",
  "Toque em Redeem para resgatar seu Cash.",
];

const faq = [
  {
    q: "Quais são os códigos ativos de Ghost Driver?",
    a: `Em ${CODES_LAST_CHECKED}, os códigos ativos são: ${active
      .map((c) => `${c.code} (${c.reward})`)
      .join(", ")}.`,
  },
  {
    q: "Como resgato códigos no Ghost Driver?",
    a: REDEEM_STEPS.join(" "),
  },
  {
    q: "Por que meu código não funciona?",
    a: "Os códigos diferenciam maiúsculas e expiram rápido. Digite-os exatamente como mostrados e volte a esta página: a lista é re-verificada com frequência.",
  },
];

export default function CodesPtBr() {
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
          Todos os códigos ativos de Ghost Driver para {MONTH_YEAR}, verificados e
          datados — Cash grátis no Roblox. Expiram rápido: resgate quanto antes.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CODES_LAST_CHECKED} />
        </div>
      </header>

      <HudPanel>
        <Marquee color="active" as="h2" className="text-xl">
          <span className="pulse">●</span> Códigos ativos ({active.length})
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
            Talvez ainda funcionem
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
          Como resgatar
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
