import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Cannabis Arcade Games — EarthRoot Cannabis | Etobicoke",
  description: "Play free online cannabis-themed games like Flappy Bud and Snake Munchies while you wait at EarthRoot Cannabis.",
  alternates: {
    canonical: "https://earthrootcannabis.ca/games",
  },
};

export default function GamesPage() {
  return <GamesContent />;
}
