import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  decideCigaretteSurface,
  publicWebsiteCigaretteFlag,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
} from "../app/lib/cigDecision.ts";
import { isRealCigaretteItem } from "../app/lib/cigMarkers.ts";
import { cigaretteEnvHardOff, filterCigaretteItems, SHOW_CIGARETTES } from "../app/lib/siteConfig.ts";
import { cigaretteCardItems, hideForTv2Daytime, selectTv2Cards } from "../app/lib/tvCigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const grabba = { category: "CIGARETTES", name: "GRABBA", slug: "grabba" };
const backwoods = { category: "CIGARETTES", name: "BACKWOODS ASSORTED FLAVORS $20-$25", slug: "backwoods-assorted-flavors-20-25" };
const pouch = { category: "CIGARETTES", name: "NICOTINE POUCHES , VELO, PABLO, KILLA", slug: "nicotine-pouches-velo-pablo-killa" };
const zyn = { category: "CIGARETTES", name: "ZYN NICOTINE POUCHES", slug: "zyn-nicotine-pouches" };
const wrap = { category: "CIGARETTES", name: "HEMP WRAPS", slug: "hemp-wraps" };
const paper = { category: "ADD ONS", name: "RAW PAPER KING SIZE", slug: "raw-paper-king-size" };
const cigarillo = { category: "CIGARETTES", name: "CIGARILLO", slug: "cigarillo" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const nicotineVape = { category: "VAPE DISPOSABLE", name: "N VAPE MANGO", slug: "n-vape-mango" };

const cards = [
  { id: "VAPES", title: "VAPES" },
  { id: "CIGARETTES", title: "🚬 CIGARETTES" },
  { id: "MAGIC", title: "MAGIC" },
];

test("tv flag true shows the cigarettes card and items; false hides the card", () => {
  const on = decideCigaretteSurface({
    cig: { webOn: false, tvOn: true },
    items: [carton, backwoods, pouch],
    surface: "tv",
  });
  assert.equal(on.show, true);
  assert.equal(on.reason, "on");
  assert.deepEqual(selectTv2Cards(cards, on.show).map((card) => card.id), ["VAPES", "CIGARETTES", "MAGIC"]);

  const shelf = [carton, grabba, backwoods, pouch, zyn, wrap, cigarillo];
  const shown = cigaretteCardItems(shelf, true);
  assert.ok(shown.some((item) => item.slug === carton.slug));
  assert.ok(shown.some((item) => item.slug === grabba.slug));
  assert.ok(shown.some((item) => item.slug === backwoods.slug));
  assert.ok(shown.some((item) => item.slug === zyn.slug));

  const off = decideCigaretteSurface({
    cig: { webOn: false, tvOn: false },
    items: shelf,
    surface: "tv",
  });
  assert.equal(off.show, false);
  assert.deepEqual(selectTv2Cards(cards, off.show).map((card) => card.id), ["VAPES", "MAGIC"]);
  const kept = cigaretteCardItems(shelf, false).map((item) => item.slug);
  assert.deepEqual(kept, [backwoods.slug, pouch.slug, zyn.slug, wrap.slug, cigarillo.slug]);
});

test("web stays hidden when tv is on, and the static website gate still strips real cigarettes", () => {
  const items = [carton, grabba, backwoods, pouch, zyn, wrap, paper, vape];
  const decision = decideCigaretteSurface({
    cig: { on: true, webOn: false, tvOn: true },
    items,
    surface: "web",
  });
  assert.equal(decision.show, false);
  assert.equal(decision.reason, "off");
  assert.equal(SHOW_CIGARETTES, false);
  const web = filterCigaretteItems(items);
  assert.equal(web.some((item) => item.slug === carton.slug), false);
  assert.equal(web.some((item) => item.slug === grabba.slug), false);
  assert.equal(web.some((item) => item.slug === backwoods.slug), true);
  assert.equal(web.some((item) => item.slug === paper.slug), true);
  assert.equal(web.some((item) => item.slug === vape.slug), true);
});

test("env hard-off blocks tv even when the feed tv flag is true", () => {
  assert.equal(cigaretteEnvHardOff(undefined), false);
  assert.equal(cigaretteEnvHardOff(""), false);
  assert.equal(cigaretteEnvHardOff("false"), true);
  const blocked = decideCigaretteSurface({
    cig: { webOn: true, tvOn: true },
    items: [carton],
    surface: "tv",
    envRaw: "off",
  });
  assert.equal(blocked.show, false);
  assert.equal(blocked.reason, "env");
  assert.equal(decideCigaretteSurface({
    cig: { webOn: false, tvOn: true },
    items: [carton],
    surface: "tv",
    envRaw: "true",
  }).show, true);
});

test("item reconcile hides real cigarettes when tv is off and always keeps wraps and pouches", () => {
  const menu = [vape, carton, grabba, backwoods, pouch, zyn, wrap, paper, cigarillo];
  const hidden = reconcileSurfaceItems(menu, menu, false);
  assert.deepEqual(hidden.map((item) => item.slug), [vape.slug, backwoods.slug, pouch.slug, zyn.slug, wrap.slug, paper.slug, cigarillo.slug]);
  assert.equal(hidden.some((item) => isRealCigaretteItem(item)), false);
  const shown = reconcileSurfaceItems([vape, backwoods], [carton, backwoods], true);
  assert.deepEqual(shown.map((item) => item.slug), [vape.slug, backwoods.slug, carton.slug]);
});

test("daytime quiet keeps the cigarette shelf and still hides nicotine vapes", () => {
  assert.equal(hideForTv2Daytime(carton, true, (item) => item.category === "CIGARETTES" || /N VAPE/i.test(item.name || "")), false);
  assert.equal(hideForTv2Daytime(backwoods, true, () => true), false);
  assert.equal(hideForTv2Daytime(nicotineVape, true, (item) => /N VAPE/i.test(item.name || "")), true);
  assert.equal(hideForTv2Daytime(nicotineVape, false, () => true), false);
});

test("tv header reader follows x-tv-data-cig-tv", () => {
  const headers = new Headers({ "x-tv-data-cig-tv": "1", "x-tv-data-cig-web": "0" });
  assert.equal(readCigaretteTvHeader(headers).show, true);
  assert.equal(readCigaretteTvHeader(new Headers({ "x-tv-data-cig-tv": "0" })).show, false);
});

test("tv pages and the tv-data route follow the feed flag, not the static website gate", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const home = readFileSync(new URL("../app/HomePageClient.tsx", import.meta.url), "utf8");
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /selectTv2Cards/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /snapshotHeaders/);
  assert.match(route, /reconcileSurfaceItems/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES/);
  assert.match(home, /SHOW_CIGARETTES/);
});

test("TV hides on a feed error or a missing cig block, and follows tvOn on a successful feed", () => {
  const items = [carton, backwoods, pouch];
  const errored = decideCigaretteSurface({
    cig: { on: true, webOn: true, tvOn: true },
    items,
    surface: "tv",
    errored: true,
  });
  assert.equal(errored.reason, "error");
  assert.equal(errored.show, false);
  const missing = decideCigaretteSurface({ cig: null, items, surface: "tv" });
  assert.equal(missing.reason, "missing");
  assert.equal(missing.show, false);
  const liveMissing = decideCigaretteSurface({ cig: null, items, surface: "tv", errored: false });
  assert.equal(liveMissing.show, false);
  assert.equal(liveMissing.reason, "missing");
  const shown = decideCigaretteSurface({ cig: { on: false, tvOn: true }, items, surface: "tv" });
  assert.equal(shown.show, true);
  assert.equal(shown.reason, "on");
  const hidden = decideCigaretteSurface({ cig: { on: true, tvOn: false }, items, surface: "tv" });
  assert.equal(hidden.show, false);
  assert.equal(hidden.reason, "off");
  // A saved last-good block is not an error, so it still follows tvOn.
  assert.equal(decideCigaretteSurface({ cig: { tvOn: true }, items, surface: "tv", errored: false }).show, true);
  assert.equal(decideCigaretteSurface({ cig: { tvOn: false }, items, surface: "tv", errored: false }).show, false);
  const stripped = reconcileSurfaceItems([vape, carton, grabba, backwoods, pouch, zyn, wrap, paper, cigarillo], [carton, grabba], false);
  assert.equal(stripped.some((item) => item.slug === carton.slug), false);
  assert.equal(stripped.some((item) => item.slug === grabba.slug), false);
  for (const kept of [backwoods, pouch, zyn, wrap, paper, cigarillo]) {
    assert.equal(stripped.some((item) => item.slug === kept.slug), true, kept.slug);
  }
});

test("website flag stays false whenever the static gate is off, and on a feed error or missing block", () => {
  const items = [carton, backwoods];
  const explicitOn = decideCigaretteSurface({ cig: { webOn: true, tvOn: true }, items, surface: "web" });
  const explicitOff = decideCigaretteSurface({ cig: { webOn: false, tvOn: true }, items, surface: "web" });
  const errored = decideCigaretteSurface({ cig: { webOn: true, tvOn: true }, items, surface: "web", errored: true });
  const missing = decideCigaretteSurface({ cig: null, items, surface: "web" });
  assert.equal(explicitOn.show, true);
  assert.equal(errored.show, true);
  assert.equal(missing.show, true);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, false), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOff, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, false), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, false), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, true), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, true), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOff, true), false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, true), true);
  assert.equal(SHOW_CIGARETTES, false);
  assert.equal(publicWebsiteCigaretteFlag(explicitOn, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(errored, SHOW_CIGARETTES), false);
  assert.equal(publicWebsiteCigaretteFlag(missing, SHOW_CIGARETTES), false);
  assert.equal(SHOW_CIGARETTES ? explicitOn.show : false, false);
});

test("website surfaces keep the static gate and TV still reads the feed on the existing poll", () => {
  const feed = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const status = readFileSync(new URL("../app/api/content-status/route.ts", import.meta.url), "utf8");
  const banner = readFileSync(new URL("../app/components/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  const sheetBanner = readFileSync(new URL("../app/components/fleet/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  assert.match(feed, /publicWebsiteCigaretteFlag\(webDecision, SHOW_CIGARETTES\)/);
  assert.match(feed, /!live && !cig/);
  assert.match(layout, /web: SHOW_CIGARETTES \? cigarettes\.web : false/);
  assert.match(status, /web: SHOW_CIGARETTES \? cig\.web\.show : false/);
  assert.match(banner, /useCigaretteState\(\)\.web/);
  assert.match(sheetBanner, /useCigaretteState\(\)\.web/);
  assert.match(tv, /readCigaretteTvHeader/);
  assert.match(tv, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.match(tv2, /readCigaretteTvHeader/);
  assert.match(tv2, /setInterval\(loadData, 5\*60\*1000\)/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
});
