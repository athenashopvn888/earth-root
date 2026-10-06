import type { CSSProperties } from "react";

export type TvTheme = {
  headerImage: string;
  backgroundImage: string;
  cornerLeft?: string;
  cornerRight?: string;
  primary: string;
  accent: string;
  glow: string;
  cardBorder: string;
  headerText: string;
  sloganLeft: string;
  sloganRight: string;
  footerLeft: string;
  footerRight: string;
};

export const TV_THEMES: Readonly<Record<string, TvTheme>> = {
  ERC01: {
    headerImage: "/tv-theme/erc01/header.webp",
    backgroundImage: "/tv-theme/erc01/background.webp",
    cornerLeft: "/tv-theme/erc01/corner-left.png",
    cornerRight: "/tv-theme/erc01/corner-right.png",
    primary: "#064E3B",
    accent: "#1687C8",
    glow: "rgba(107, 203, 255, 0.38)",
    cardBorder: "rgba(219, 245, 255, 0.88)",
    headerText: "#FFFFFF",
    sloganLeft: "EXPLORE EVERY TIER",
    sloganRight: "ROOTED HERE · RISING HIGH",
    footerLeft: "EARTHROOT CANNABIS",
    footerRight: "FROM ROOT TO RISE",
  },
};

export function getTvTheme(storeCode?: string | null): TvTheme | undefined {
  return storeCode ? TV_THEMES[storeCode] : undefined;
}

type TvThemeVariables = CSSProperties & {
  "--tv-theme-header-image": string;
  "--tv-theme-background-image": string;
  "--tv-theme-primary": string;
  "--tv-theme-accent": string;
  "--tv-theme-glow": string;
  "--tv-theme-card-border": string;
  "--tv-theme-header-text": string;
};

export function getTvThemeVariables(theme: TvTheme): TvThemeVariables {
  return {
    "--tv-theme-header-image": `url("${theme.headerImage}")`,
    "--tv-theme-background-image": `url("${theme.backgroundImage}")`,
    "--tv-theme-primary": theme.primary,
    "--tv-theme-accent": theme.accent,
    "--tv-theme-glow": theme.glow,
    "--tv-theme-card-border": theme.cardBorder,
    "--tv-theme-header-text": theme.headerText,
  };
}
