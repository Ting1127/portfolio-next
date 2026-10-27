// Two entry points into the same site:
//   jenniezeng.com         → PM framing (default)
//   jenniezeng.com/design  → UX / product design framing
// Everything that differs between the two lives in this file.

export type SiteMode = "pm" | "design";

// Small uppercase label under "Hello! I'm Jennie."
export const ROLE_LABEL: Record<SiteMode, string> = {
  pm: "Product Manager",
  design: "UX / Product Designer",
};

// Design mode: these slugs move to the front, in this order.
// Anything not listed keeps its Notion "Order" position after them.
export const DESIGN_CARD_ORDER = [
  "kadokawa-creator-center",
  "kadokawa-discovery-reading",
];

export function orderForMode<T>(items: T[], mode: SiteMode, getSlug: (item: T) => string): T[] {
  if (mode !== "design") return items;
  const rank = (item: T) => {
    const i = DESIGN_CARD_ORDER.indexOf(getSlug(item));
    return i === -1 ? DESIGN_CARD_ORDER.length : i;
  };
  // Array.prototype.sort is stable, so unlisted items keep their original order.
  return [...items].sort((a, b) => rank(a) - rank(b));
}

// sessionStorage key remembering which homepage the visitor came from,
// so the logo link on inner pages returns them to the same version.
export const MODE_STORAGE_KEY = "jz-site-mode";