import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  ARTICLE_DESCRIPTION,
  ARTICLE_H1,
  ARTICLE_MD,
  CANONICAL_PATH,
  CANONICAL_URL,
  DATE_MODIFIED,
  DATE_PUBLISHED,
  SEO_TITLE,
  articleDescription,
  parseArticle,
} from "../app/resources/what-is-a-one-hitter/article.ts";

const page = readFileSync("app/resources/what-is-a-one-hitter/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const resourceData = readFileSync("app/resources/resourceData.ts", "utf8");
const nextConfig = readFileSync("next.config.ts", "utf8");

test("publishes the approved body verbatim", () => {
  assert.equal(ARTICLE_MD.trim().startsWith(`# ${ARTICLE_H1}`), true);
  assert.match(ARTICLE_MD, /^Last checked: October 30, 2026$/m);
  assert.equal(DATE_PUBLISHED, "2026-11-05");
  assert.equal(DATE_MODIFIED, "2026-11-05");
  assert.equal(ARTICLE_MD.includes("3.5"), false);
  assert.equal(ARTICLE_MD.includes("$"), false);
  assert.equal(ARTICLE_MD.includes("Farmers Link"), false);
  const links = [...ARTICLE_MD.matchAll(/\]\(([^)]+)\)/g)].map((match) => match[1]);
  assert.deepEqual(links, [
    "/resources/hand-trimmed-vs-machine-trimmed-weed",
    "/resources/weed-flower-guide",
  ]);
});

test("meta description is one intro sentence and the body structure is intact", () => {
  assert.equal(SEO_TITLE, ARTICLE_H1);
  const description = articleDescription();
  assert.equal(description, ARTICLE_DESCRIPTION);
  assert.equal(description.length <= 155, true);
  assert.equal(description.split(".").length, 2);
  assert.equal(ARTICLE_MD.includes(description), true);
  const blocks = parseArticle(ARTICLE_MD);
  assert.equal(
    blocks.some((block) => block.type === "p" && block.text === "Last checked: October 30, 2026"),
    true,
  );
  assert.deepEqual(
    blocks.filter((block) => block.type === "h2").map((block) => (block.type === "h2" ? block.text : "")),
    [
      "What is a one-hitter?",
      "One-hitter vs dugout",
      "How to use a one-hitter",
      "Safety checklist",
      "Cleaning a one-hitter",
      "Who tends to choose a one-hitter",
      "Choosing a material, calmly",
      "Common mistakes",
      "Quick answers",
      "Learn the flower, at our Dundas West shop",
    ],
  );
  const steps = blocks.filter((block) => block.type === "ol");
  assert.equal(steps.length, 2);
  assert.ok(steps.every((block) => block.type === "ol" && block.items.length === 5));
  assert.equal(blocks.some((block) => block.type === "table"), false);
});

test("page metadata is a self-canonical indexable Article", () => {
  assert.equal(CANONICAL_PATH, "/resources/what-is-a-one-hitter");
  assert.equal(CANONICAL_URL, "https://www.earthrootcannabis.ca/resources/what-is-a-one-hitter");
  assert.match(page, /title: \{ absolute: SEO_TITLE \}/);
  assert.match(page, /canonical: CANONICAL_URL/);
  assert.match(page, /index: true/);
  assert.match(page, /follow: true/);
  assert.match(page, /"@type": "Article"/);
  assert.match(page, /datePublished: DATE_PUBLISHED/);
  assert.match(page, /dateModified: DATE_MODIFIED/);
  assert.match(page, /name: "EARTHROOT CANNABIS"/);
  assert.match(page, /<h1>\{ARTICLE_H1\}<\/h1>/);
  assert.equal(page.includes("3.5"), false);
  assert.equal(page.includes("BreadcrumbList"), false);
  assert.equal(page.includes("Review"), false);
  assert.equal(page.includes("AggregateRating"), false);
  assert.equal(page.includes("Offer"), false);
  assert.equal(page.includes("Product"), false);
});

test("sitemap gains this URL and existing resource routes stay put", () => {
  assert.equal(sitemap.split(CANONICAL_PATH).length - 1, 1);
  assert.match(sitemap, /disposable-vape-pens-battery-safety-disposal/);
  assert.match(sitemap, /hand-trimmed-vs-machine-trimmed-weed/);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.equal(resourceData.includes("what-is-a-one-hitter"), false);
  assert.doesNotMatch(nextConfig, /source:\s*"\/resources"(?![a-z0-9/-])/);
  assert.doesNotMatch(nextConfig, /source:\s*"\/resources\/:path\*"/);
  assert.doesNotMatch(nextConfig, /what-is-a-one-hitter/);
});
