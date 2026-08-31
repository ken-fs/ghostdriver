import Script from "next/script";

/**
 * Adsterra units — paste the script src from the dashboard here after
 * creating each unit (publishers.adsterra.com → Websites → ghostdriver.net
 * → Add ad unit). Empty string = unit disabled.
 */
export const ADSTERRA = {
  /** Social Bar — sticky bar, Adsterra's top eCPM no-slot format. */
  socialBar:
    "https://pl31113153.profitableratecpmnetwork.com/cf/eb/ec/cfebec3a678851f9bcf94c52efc06a16.js",
  /** Popunder — highest CPM, hurts UX. Enable only if you want max revenue. */
  popunder: "",
} as const;

/** Global Adsterra units — rendered once in the root layout, runs on every page. */
export function AdsterraGlobal() {
  return (
    <>
      {ADSTERRA.socialBar && (
        <Script src={ADSTERRA.socialBar} strategy="lazyOnload" data-cfasync="false" />
      )}
      {ADSTERRA.popunder && (
        <Script src={ADSTERRA.popunder} strategy="lazyOnload" data-cfasync="false" />
      )}
    </>
  );
}
