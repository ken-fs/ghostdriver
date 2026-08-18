import type { Metadata } from "next";
import Link from "next/link";
import { HudPanel, Marquee, VerifiedStamp } from "@/components/ui";
import { CARS, CARS_KNOWN, CARS_LAST_CHECKED, CARS_ROSTER_PARTIAL } from "@/data/cars";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ghost Driver Cars List",
  description: `Every car in Roblox ${SITE.game} with price and top speed. We document the full dealership roster as it is confirmed in-game.`,
  alternates: { canonical: "/cars/" },
};

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
