import { SITE } from "./site";

/** hreflang map for codes pages (en / es / pt-BR). */
export const CODE_LANGS: Record<string, string> = {
  en: `${SITE.url}/codes/`,
  es: `${SITE.url}/es/codes/`,
  "pt-BR": `${SITE.url}/pt-br/codes/`,
  "x-default": `${SITE.url}/codes/`,
};
