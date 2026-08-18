import Link from "next/link";
import { buildMeta } from "@/lib/meta";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_KNOWN, CARS_LAST_CHECKED, CARS_ROSTER_PARTIAL } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata = buildMeta({
  title: "Ghost Driver Cars List",
  description: `Every car in Roblox ${SITE.game} with price and top speed. We document the full dealership roster as it is confirmed in-game.`,
  path: "/cars/",
});

export default function CarsPage() {
  return (
    <div className="space-y-8">
      <header>
        <Marquee as="h1" color="hud" className="text-3xl sm:text-5xl">
          Cars List
        </Marquee>
        <p className="mt-3 text-dim">
          The full {SITE.game} dealership roster with stats — the reference no other
          site has finished yet.
        </p>
        <div className="mt-3">
          <VerifiedStamp date={CARS_LAST_CHECKED} />
        </div>
      </header>

      {CARS.length > 0 ? (
        <>
          <HudPanel>
            <table className="w-full text-left text-sm">
              <thead className="text-dim">
                <tr className="border-b-2 border-lane">
                  <th className="py-2">Car</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Top Speed</th>
                </tr>
              </thead>
              <tbody>
                {CARS.map((c) => (
                  <tr key={c.name} className="border-b border-lane align-top">
                    <td className="py-2 font-medium text-fg">
                      {c.name}
                      {c.limited && (
                        <span className="ml-2 hud-panel px-1.5 py-0.5 text-xs glow-taillight">
                          Limited
                        </span>
                      )}
                      {c.note && <p className="mt-1 text-xs text-dim">{c.note}</p>}
                    </td>
                    <td className="py-2">{c.price ?? "check in-game"}</td>
                    <td className="py-2">{c.topSpeed ?? "check in-game"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HudPanel>
          {CARS_ROSTER_PARTIAL && (
            <p className="text-sm text-dim">
              These are the cars confirmed by name so far. Prices, top speeds and the
              rest of the dealership are being captured from in-game — we publish them
              here as they&apos;re verified, never guessed. Cars are bought with{" "}
              {CARS_KNOWN.currency} and can be tuned. See the{" "}
              <Link href="/cash/">cash guide</Link> to afford them.
            </p>
          )}

          <HudPanel>
            <Marquee color="hud" as="h2" className="text-xl">
              About the cars
            </Marquee>
            <p className="mt-3 text-dim">
              {SITE.game} models its dealership on real high-performance road cars.
              Here is what each confirmed vehicle is known for in the real world — a
              rough guide to how it tends to feel in a traffic-weaving game, where top
              speed builds your score but sharp handling keeps you alive between cars.
            </p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="font-semibold text-fg">
                  Ferrari 812 Superfast{" "}
                  <span className="text-xs glow-taillight">Limited</span>
                </dt>
                <dd className="mt-1 text-dim">
                  A front-mid V12 grand tourer built for huge straight-line speed — the
                  aspirational, hard-to-get pick. The widebody &ldquo;N-Largo&rdquo;
                  variant is a rare tuner edition, which fits its status as a limited car
                  here.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-fg">Porsche 911 GT3 RS</dt>
                <dd className="mt-1 text-dim">
                  A track-focused, high-downforce sports car famous for precision and
                  cornering — the kind of car that rewards weaving through tight gaps
                  rather than pure top-end.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-fg">BMW M3 (G80)</dt>
                <dd className="mt-1 text-dim">
                  A balanced performance sedan and a popular tuning base — well-rounded
                  speed and control, and a common favorite for players who like to modify
                  their build.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-fg">Audi RS7</dt>
                <dd className="mt-1 text-dim">
                  A big, powerful all-wheel-drive fastback — stable and quick, leaning
                  toward planted high-speed cruising over razor-sharp agility.
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-dim">
              Descriptions reflect the real-world cars for context only. In-game prices,
              top speeds and tuning figures are not shown until verified.
            </p>
          </HudPanel>

          <HudPanel>
            <Marquee color="hud" as="h2" className="text-xl">
              Cars FAQ
            </Marquee>
            <dl className="mt-4 space-y-4 text-dim">
              <div>
                <dt className="font-semibold text-fg">How do you get cars in Ghost Driver?</dt>
                <dd className="mt-1">
                  You buy them at the in-game dealership with Cash earned by driving
                  through traffic. Redeeming <Link href="/codes/">codes</Link> gives you
                  Cash to speed that up.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-fg">What is the best car?</dt>
                <dd className="mt-1">
                  Once in-game top speeds are verified we&apos;ll rank them on the{" "}
                  <Link href="/tier-list/">tier list</Link>. In a No Hesi-style game the
                  best all-rounders balance high top speed with handling sharp enough to
                  thread heavy traffic.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-fg">Can you tune cars?</dt>
                <dd className="mt-1">
                  Yes — the game has received tuning and customization updates, so cars
                  can be upgraded beyond their stock stats.
                </dd>
              </div>
            </dl>
          </HudPanel>
        </>
      ) : (
        <HudPanel>
          <Marquee color="sodium" as="h2" className="text-xl">
            Roster being documented
          </Marquee>
          <p className="mt-3 text-dim">
            {SITE.game} is in pre-alpha and the dealership is still expanding, so no
            complete car list with verified prices exists anywhere yet. Rather than
            invent numbers, here is what is confirmed in-game right now:
          </p>
          <ul className="mt-4 space-y-2 text-dim">
            <li>
              • You begin with a free{" "}
              <span className="glow-active">starter car</span> (slow).
            </li>
            <li>
              • All faster cars are bought at the{" "}
              <span className="glow-hud">{CARS_KNOWN.boughtAt}</span> with{" "}
              {CARS_KNOWN.currency}.
            </li>
          </ul>
          <p className="mt-4 text-sm text-dim">
            We are pulling the exact names, prices and speeds and will publish the full
            table here first. In the meantime, learn how to afford them in the{" "}
            <Link href="/cash/">cash guide</Link>.
          </p>
        </HudPanel>
      )}
    </div>
  );
}
