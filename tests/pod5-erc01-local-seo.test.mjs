import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const layout = readFileSync("app/layout.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const visit = readFileSync("app/visit/page.tsx", "utf8");
const identity = readFileSync("app/lib/storeIdentity.ts", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const dundasInfo = readFileSync("app/lib/seoPages.ts", "utf8");

const publicBundle = [layout, home, visit, identity, footer, dundasInfo].join(
  "\n",
);

test("homepage schema identity is CannabisStore + FAQPage with exact NAP", () => {
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.match(layout, /faqPageJsonLd/);
  assert.match(identity, /"@type": "CannabisStore"/);
  assert.match(identity, /"@type": "FAQPage"/);
  assert.match(identity, /5120 Dundas St W/);
  assert.match(identity, /Etobicoke/);
  assert.match(identity, /M9A 1C2/);
  assert.match(identity, /\+14375234850/);
  assert.match(identity, /\+1 437 523 4850/);
  assert.match(identity, /opens: "00:00"/);
  assert.match(identity, /closes: "23:59"/);
  assert.doesNotMatch(identity, /7Clmh\.jpg/);
  assert.doesNotMatch(layout, /7Clmh\.jpg/);
});

test("homepage is the visit hub with unique Dundas corridor copy", () => {
  assert.match(home, /EarthRoot Cannabis on Dundas at Kipling/);
  assert.match(home, /STORE\.mapEmbedUrl/);
  assert.match(home, /href="\/visit"/);
  assert.match(home, /id="contact"/);
  assert.match(layout, /Dundas & Kipling, Etobicoke/);
  assert.doesNotMatch(home, /Shop The Menu With A Plan/);
  assert.doesNotMatch(home, /Premium Cannabis Dispensary/);
  assert.doesNotMatch(
    home,
    /Pick the category that matches the visit, then compare the current/,
  );
});

test("/visit is a Dundas-Kipling-Islington how-to-reach page", () => {
  assert.match(visit, /How to Reach EarthRoot Cannabis on Dundas Street West/);
  assert.match(visit, /5120 Dundas St W, Etobicoke, ON M9A 1C2/);
  assert.match(visit, /\+1 437 523 4850/);
  assert.match(visit, /Kipling Station/);
  assert.match(visit, /Islington Station/);
  assert.match(visit, /parking/i);
  assert.match(visit, /Adults 19\+/);
  assert.match(visit, /homepage visit hub/);
  assert.match(sitemap, /\/visit/);
  assert.match(footer, /href="\/visit"/);
});

test("public SEO copy stays standalone for EarthRoot only", () => {
  assert.doesNotMatch(publicBundle, /Athena/i);
  assert.doesNotMatch(publicBundle, /sister store/i);
  assert.doesNotMatch(publicBundle, /our other locations/i);
  assert.doesNotMatch(publicBundle, /Fort York/i);
  assert.doesNotMatch(publicBundle, /First Nation Smoke/i);
  assert.doesNotMatch(publicBundle, /Indigenous Midtown/i);
  assert.doesNotMatch(publicBundle, /Em Jay/i);
  assert.doesNotMatch(publicBundle, /treats? (pain|anxiety|insomnia)/i);
});
