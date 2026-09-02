import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const products = readFileSync("app/lib/products.ts", "utf8");
const tierPage = readFileSync("app/[tier]/page.tsx", "utf8");
const tierCopy = readFileSync("app/lib/tierSeoContent.ts", "utf8");
const navbar = readFileSync("app/components/Navbar.tsx", "utf8");
const footer = readFileSync("app/components/Footer.tsx", "utf8");
const resources = readFileSync("app/resources/resourceData.ts", "utf8");
const redirects = readFileSync("next.config.ts", "utf8");

const tiers = [
  ["exotic", "Exotic Weed"],
  ["premium", "Premium Weed"],
  ["aaa", "AAA+ Weed"],
  ["aa", "AA Weed"],
  ["budget", "Budget Weed"],
];

test("every tier uses a tier-first Weed label and canonical slug", () => {
  for (const [slug, label] of tiers) {
    assert.match(products, new RegExp(`name: "${label.replace("+", "\\+")}"`));
    assert.match(products, new RegExp(`slug: "${slug}-weed"`));
    assert.ok(tierCopy.includes(label), `missing ${label} in tier copy`);
    assert.ok(navbar.includes(`href: "/${slug}-weed", label: "${label}"`));
    assert.ok(footer.includes(`href="/${slug}-weed">${label}`));
  }
  assert.doesNotMatch(tierCopy, /Weed (Exotic|Premium|AAA\+?|AA|Budget)/);
  assert.match(tierPage, /canonical: `https:\/\/www\.earthrootcannabis\.ca\/\$\{tierSlug\}`/);
});

test("legacy tier routes redirect directly to their V2.1 owners", () => {
  for (const [slug] of tiers) {
    assert.ok(redirects.includes(`source: "/${slug}", destination: "/${slug}-weed", permanent: true`));
  }
});

test("the governed Weed flower guide has one canonical owner", () => {
  assert.match(resources, /slug: "weed-flower-guide"/);
  assert.doesNotMatch(resources, /slug: "flower-guide"/);
  assert.match(redirects, /source: "\/resources\/flower-guide"[\s\S]*destination: "\/resources\/weed-flower-guide"/);
});

test("nicotine routes remain outside this remediation", () => {
  assert.match(navbar, /href: "\/items\/vapes", label: "Nic Vape"/);
  assert.match(navbar, /href: "\/items\/vape-disposables", label: "THC Vape"/);
});

