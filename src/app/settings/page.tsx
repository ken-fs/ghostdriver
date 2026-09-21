import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { SITE } from "@/lib/site";

/**
 * Graphics settings - the one Ghost Driver topic with real demand and no
 * website competition (the SERP is TikTok and YouTube only).
 *
 * The recipe below is one creator's complete, step-by-step run-through, with
 * every value read out. We reproduce it exactly and say where it came from.
 * Anything we could not verify is marked as such rather than filled in.
 */
const SETTINGS_CHECKED = "2026-09-21";

export const metadata = buildMeta({
  title: "Ghost Driver Graphics Settings — Best Look & FPS Setup",
  description: `The exact graphics settings for Roblox ${SITE.game}: weather, shadows, reflections, brightness and saturation values, plus which ones to drop for FPS.`,
  path: "/settings/",
});

const RECIPE = [
  {
    group: "First, outside the game",
    items: [
      { k: "Roblox graphics quality", v: "Maximum", note: "Set this in Roblox's own settings before anything else — the in-game menu cannot compensate for a low Roblox quality level." },
    ],
  },
  {
    group: "Weather tab",
    items: [
      { k: "Skies", v: "Clear skies" },
      { k: "Weather", v: "Sunny" },
      { k: "Show sun and clouds", v: "On" },
      { k: "Horizon haze", v: "On" },
      { k: "Fog layer", v: "Volumetric" },
      { k: "Time", v: "5:00 PM", note: "Late-afternoon light is what makes the paint and reflections read as expensive." },
    ],
  },
  {
    group: "Graphics tab",
    items: [
      { k: "Shadows", v: "On" },
      { k: "Reflection", v: "On" },
      { k: "Ambient lighting", v: "High" },
      { k: "Neon glow", v: "On" },
      { k: "Sun rays", v: "On" },
    ],
  },
  {
    group: "Colour grading",
    items: [
      { k: "Brightness", v: "0.63" },
      { k: "Contrast", v: "0.22" },
      { k: "Saturation", v: "-0.17", note: "Negative saturation is the counter-intuitive one — it stops the neon glow from turning the whole frame into a smear." },
    ],
  },
];

const PERFORMANCE = [
  { k: "Shadows", cost: "High", why: "Realtime shadows are the single most expensive thing on this list. First thing to switch off if you are dropping frames." },
  { k: "Reflection", cost: "High", why: "Reflections redraw the scene a second time. Big look gain, big cost." },
  { k: "Sun rays", cost: "Medium", why: "A screen-space effect — cheaper than reflections, but still per-frame work." },
  { k: "Volumetric fog", cost: "Medium", why: "Volumetric is the expensive fog mode. Switch to a simpler layer if you need frames back." },
  { k: "Neon glow", cost: "Low", why: "A post-process pass. Usually worth keeping even on weak hardware." },
  { k: "Brightness / contrast / saturation", cost: "Free", why: "Pure colour grading — zero performance cost, so never turn these off." },
];

const SETTINGS_FAQ = [
  {
    q: "What are the best graphics settings in Ghost Driver?",
    a: "Turn Roblox's own graphics quality to maximum first, then in-game: Weather tab — clear skies, sunny, sun and clouds on, horizon haze on, fog layer volumetric, time 5:00 PM. Graphics tab — shadows on, reflection on, ambient lighting high, neon glow on, sun rays on. Then set brightness 0.63, contrast 0.22, saturation -0.17.",
  },
  {
    q: "Why is saturation negative in the best settings?",
    a: "Because of the neon glow. Ghost Driver leans hard on glow, and pushing saturation up on top of that blows out the highlights until the frame looks washed. Dropping saturation to -0.17 keeps the neon readable without losing the colour underneath. It looks wrong on paper and right on screen.",
  },
  {
    q: "What time of day looks best in Ghost Driver?",
    a: "5:00 PM. The creator who published the widely-copied settings uses it because late-afternoon light produces long shadows and warm reflections — which is what makes cars look expensive. Midday flattens everything out.",
  },
  {
    q: "Which settings should I turn off for more FPS?",
    a: "Shadows first, then reflections. Both redraw or recompute large parts of the scene every frame, and they are the two biggest costs in the list. Sun rays and volumetric fog are the next tier. Leave neon glow and the brightness/contrast/saturation values alone — glow is cheap and colour grading is free.",
  },
  {
    q: "Do these settings work on mobile?",
    a: "The weather, graphics and colour-grading options are the game's own menu, so they exist on every platform. What differs is headroom: a phone will struggle with shadows plus reflections plus volumetric fog at Roblox quality 10, so mobile players should start with the same recipe and then drop shadows and reflections if the frame rate suffers.",
  },
  {
    q: "Will these settings make me faster?",
    a: "No. Nothing on this page changes your car's performance — that is tuning, which is a separate menu. What better graphics can do is make traffic easier to read at speed, since shadows and reflections give you depth cues that a flat render does not. The speed itself comes from the tuning guide.",
  },
  {
    q: "Why does my game still look flat after applying this?",
    a: "Check Roblox's own graphics quality level first — it is the prerequisite, and if it is below maximum the in-game menu cannot recover the detail. The second usual cause is time of day: if you have not set it to 5:00 PM, the shadows and reflections that do most of the visual work will not be there.",
  },
];

export default function SettingsPage() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    dateModified: SETTINGS_CHECKED,
    author: { "@type": "Person", name: SITE.editor, jobTitle: SITE.editorRole, url: `${SITE.url}/about/` },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: `${SITE.url}/settings/`,
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SETTINGS_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header>
        <Marquee as="h1" color="active" className="text-3xl sm:text-5xl">
          Graphics Settings
        </Marquee>
        <p className="mt-3 text-dim">
          {SITE.game} looks flat out of the box. The fix is not a new car or a mod — it is about a
          dozen values in the game&apos;s own settings menu. Here is the full recipe, the reasoning
          behind the odd ones, and what to cut if your frame rate drops.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={SETTINGS_CHECKED} />
        </div>
      </header>

      {/* The recipe */}
      <HudPanel className="border-active">
        <Marquee color="active" as="h2" className="text-xl">
          The Full Recipe
        </Marquee>
        <p className="mt-3 text-sm text-dim">
          Every value below is stated, not estimated. Apply them in this order — the Roblox-level
          setting is a prerequisite, and the colour grading only reads correctly once the lighting
          is in place.
        </p>
        <div className="mt-5 space-y-6">
          {RECIPE.map((g) => (
            <div key={g.group}>
              <h3 className="display text-sm uppercase tracking-wide glow-sodium">{g.group}</h3>
              <dl className="mt-2 divide-y divide-lane">
                {g.items.map((it) => (
                  <div key={it.k} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2">
                    <dt className="text-dim">{it.k}</dt>
                    <dd className="text-fg font-semibold">{it.v}</dd>
                    {it.note && <dd className="w-full text-xs text-dim">{it.note}</dd>}
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </HudPanel>

      {/* Why the odd ones */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Why the Odd Values
        </Marquee>
        <ul className="mt-4 space-y-3 text-dim">
          <li>
            • <span className="text-fg">Saturation at -0.17.</span> This is the value that surprises
            people. {SITE.game} uses neon glow heavily; adding saturation on top of glow blows out
            the highlights and the frame turns to mush. Going negative keeps the neon readable.
          </li>
          <li>
            • <span className="text-fg">Time at 5:00 PM.</span> Late-afternoon light is what makes
            the shadows long and the reflections warm. At midday the scene flattens out and none of
            the other settings have much to work with.
          </li>
          <li>
            • <span className="text-fg">Volumetric fog.</span> It is the expensive fog mode, and it
            is also the one that gives distant traffic depth. Worth it at 5:00 PM specifically,
            because the light catches the haze.
          </li>
        </ul>
      </HudPanel>

      {/* Performance */}
      <section className="space-y-4">
        <Marquee color="hud" as="h2" className="text-xl">
          If Your FPS Drops
        </Marquee>
        <p className="text-dim">
          The recipe above is the full-fat version. On weaker hardware you trade looks for frames —
          here is what each setting actually costs, so you cut in the right order instead of
          turning everything off.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {PERFORMANCE.map((p) => (
            <HudPanel key={p.k}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="display text-lg glow-sodium">{p.k}</h3>
                <span className="text-xs text-dim">cost: {p.cost}</span>
              </div>
              <p className="mt-2 text-sm text-dim">{p.why}</p>
            </HudPanel>
          ))}
        </div>
        <p className="text-sm text-dim">
          Cut order: <span className="text-fg">shadows → reflections → volumetric fog → sun rays</span>.
          Never touch the colour grading — it is free, and it is doing more for how the game looks
          than any single toggle.
        </p>
      </section>

      {/* What this does not do */}
      <HudPanel>
        <Marquee color="taillight" as="h2" className="text-xl">
          What Settings Do Not Change
        </Marquee>
        <p className="mt-3 text-dim">
          Graphics settings are cosmetic. They do not make your car faster — that is the{" "}
          <Link href="/tuning/">tuning guide</Link> — and they do not change how you handle a
          corner, which is the <Link href="/drift/">drift guide</Link>. What they do change is how
          early you can read traffic at speed, and that is worth something in a game where your
          Cash scales with near-misses.
        </p>
        <p className="mt-3 text-sm text-dim">
          If you are still choosing a car, better graphics will not fix a slow one — the{" "}
          <Link href="/tier-list/">tier list</Link> ranks all 14 by value for Cash, and the{" "}
          <Link href="/cars/">car list</Link> has every stat.
        </p>
      </HudPanel>

      {/* Source note */}
      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Where These Values Come From
        </Marquee>
        <p className="mt-3 text-dim">
          The recipe is one creator&apos;s complete run-through of the settings menu, read out value
          by value — it is the version the community copies, and it is what the TikTok and YouTube
          results on this topic are all demonstrating. We reproduce it exactly rather than
          paraphrasing it.
        </p>
        <p className="mt-3 text-sm text-dim">
          One honest gap: in the source, one graphics toggle is turned off without being named on
          screen. We have not guessed which one it is. If you find it, the value here is the rest of
          the recipe, which is complete.
        </p>
      </HudPanel>

      <HudPanel>
        <Marquee color="hud" as="h2" className="text-xl">
          Settings FAQ
        </Marquee>
        <dl className="mt-4 space-y-4">
          {SETTINGS_FAQ.map((f) => (
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
