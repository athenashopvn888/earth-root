import assert from "node:assert/strict";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const page = SEO_PAGES.find((entry) => entry.slug === "nicotine-vapes-etobicoke");
const slugs = ["geek-promax-5-30k-puffs","geek-universe-25k-puffs","nexa-pix-30k-puffs-many-flavors","ovns-10000-5-10k-puffs","ovns-disposable-5-8ml-many-flavors","ovns-pioneer-5-22k-puffs"];

test("EarthRoot nicotine page uses the six verified VAPE PENS products", () => {
  assert.ok(page?.heroProducts);
  assert.deepEqual(page.heroProducts.map((product) => product.sourceSlug), slugs);
  assert.equal(page.heroMenuHref, "/items/vapes");
  assert.equal(page.heroSecondaryHref, "#featured-vapes");
  assert.equal(page.warning, "Adults 19+. Nicotine is addictive.");
  assert.match(page.sections[2].body, /\/items\/vape-disposables/);
});
