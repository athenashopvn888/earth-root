import { isRealCigaretteItem } from "./cigMarkers.ts";

/** TV2 keeps the cigarettes card only while the feed TV flag is on. Off hides the card, same as the static gate did. */
export function selectTv2Cards<T extends { id: string }>(cards: readonly T[], showCigarettes: boolean): T[] {
  if (showCigarettes) return [...cards];
  return cards.filter((card) => card.id !== "CIGARETTES");
}

/**
 * Rows for the cigarettes card. Real cigarettes follow the flag.
 * Backwoods, cigarillos, papers, pouches, Zyn, Velo, and wraps stay.
 */
export function cigaretteCardItems<T extends { category?: string; name?: string; slug?: string }>(
  items: readonly T[],
  showCigarettes: boolean,
): T[] {
  if (showCigarettes) return [...items];
  return items.filter((item) => !isRealCigaretteItem(item));
}

/** Daytime quiet hides nicotine vapes. Cigarette-shelf rows stay so a true TV flag can still list them. */
export function hideForTv2Daytime<T extends { category?: string; name?: string }>(
  item: T,
  daytime: boolean,
  isNicotine: (item: T) => boolean,
): boolean {
  if (!daytime) return false;
  if ((item.category || "").toUpperCase() === "CIGARETTES") return false;
  return isNicotine(item);
}
