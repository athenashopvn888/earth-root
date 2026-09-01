import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const landing = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const discovery = readFileSync("app/lib/weedDiscovery.ts", "utf8");
const home = readFileSync("app/page.tsx", "utf8");
const route = readFileSync("app/weed-dispensary-etobicoke/page.tsx", "utf8");

test("protected owner renders exactly one H1 with approved identity", () => {
  assert.equal((landing.match(/<h1>/g) || []).length, 1);
  assert.match(discovery, /EARTHROOT CANNABIS — Weed Dispensary in Etobicoke/);
  assert.match(discovery, /5120 Dundas St W/);
  assert.match(discovery, /\+1 437-523-4850/);
  assert.match(landing, /Find Your Weed/);
  assert.match(landing, /Weed, Cannabis, Flower and Bud/);
});

test("homepage has one bounded Weed bridge", () => {
  assert.equal((home.match(/<WeedDiscoveryModule \/>/g) || []).length, 1);
});

test("protected route keeps absolute title, canonical and indexability", () => {
  assert.match(route, /title: \{ absolute: weedOwner\.seoTitle \}/);
  assert.match(route, /canonical: `https:\/\/\$\{weedOwner\.domain\}\$\{weedOwner\.ownerPath\}`/);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
});

test("unsafe implementation claims stay absent from new packet", () => {
  assert.doesNotMatch(discovery, /now in stock|sale price|free delivery|best weed|#1/i);
  assert.doesNotMatch(discovery, /parking|transit|Fonthill|Muskoka/i);
});
