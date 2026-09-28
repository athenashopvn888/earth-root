import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read=(path)=>readFileSync(path,"utf8");
const routes=["weed-dispensary-dundas-kipling","24-hour-dundas-kipling-dispensary","native-cigarettes-dundas-kipling","nicotine-vape-dundas-kipling"];

test("adds four approved local pillars with self canonicals",()=>{for(const route of routes){const page=read(`app/${route}/page.tsx`);assert.ok(page.includes(`canonical:\"/${route}\"`));}});
test("homepage connects the six-card authority hub",()=>{const home=read("app/page.tsx");for(const route of [...routes,"weed-delivery-etobicoke","visit"])assert.ok(home.includes(`/${route}`));});
test("tier pages expose CollectionPage and dynamic ItemList",()=>{const tier=read("app/[tier]/page.tsx");assert.match(tier,/CollectionPage/);assert.match(tier,/ItemList/);assert.match(tier,/flowers\.map/);assert.match(tier,/Dundas & Kipling, Etobicoke/);});
test("rollout is additive and has no basin leaks",()=>{const content=[read("app/sitemap.ts"),read("app/lib/authorityPages.ts"),read("app/components/AuthorityLanding.tsx"),read("app/[tier]/page.tsx")].join("\n");for(const route of routes)assert.ok(content.includes(`/${route}`));assert.doesNotMatch(content,/noindex/i);assert.doesNotMatch(content,/Ottawa|Gatineau|ByWard|sister store/i);});
test("pillars carry exact NAP, adult ID, map and visit links",()=>{const c=read("app/components/AuthorityLanding.tsx");const s=read("app/lib/storeIdentity.ts");assert.match(s,/5120 Dundas St W/);assert.match(s,/\+1 437 523 4850/);assert.match(c,/Adults 19\+ with government photo ID/);assert.match(c,/mapLinkUrl/);assert.match(c,/href=\"\/visit\"/);});
