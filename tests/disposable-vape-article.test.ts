import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  ARTICLE_H1,
  ARTICLE_MD,
  CANONICAL_PATH,
  CANONICAL_URL,
  DATE_MODIFIED,
  SEO_TITLE,
  articleDescription,
  parseArticle,
} from "../app/resources/disposable-vape-pens-battery-safety-disposal/article.ts";

const page = readFileSync("app/resources/disposable-vape-pens-battery-safety-disposal/page.tsx", "utf8");
const sitemap = readFileSync("app/sitemap.ts", "utf8");
const resourceData = readFileSync("app/resources/resourceData.ts", "utf8");

test("publishes the approved body without frontmatter or editor notes", () => {
  assert.equal(ARTICLE_MD.trim().startsWith(`# ${ARTICLE_H1}`), true);
  assert.match(ARTICLE_MD, /\*Last checked: September 30, 2026\*/);
  assert.equal(DATE_MODIFIED, "2026-09-30");
  assert.doesNotMatch(ARTICLE_MD, /store_code|notes_for_editor|LOCAL NOTE|<!--/);
  assert.equal(ARTICLE_MD.includes("3.5"), false);
  assert.equal(ARTICLE_MD.includes("$"), false);
  assert.match(ARTICLE_MD, /\[visit page\]\(\/visit\)/);
});

test("meta title tracks the H1 and the description is the first paragraph", () => {
  assert.equal(SEO_TITLE.length, 60);
  assert.equal(SEO_TITLE.startsWith("Disposable vape pens:"), true);
  const description = articleDescription();
  assert.equal(description.startsWith("A disposable vape pen looks like a simple thing:"), true);
  assert.equal(description.includes("Last checked"), false);
  const blocks = parseArticle(ARTICLE_MD);
  assert.equal(blocks.some((block) => block.type === "p" && block.italic && block.text === "Last checked: September 30, 2026"), true);
  assert.equal(blocks.filter((block) => block.type === "h2").map((block) => block.type === "h2" && block.text).includes("Visiting EARTHROOT CANNABIS"), true);
  const tasks = blocks.find((block) => block.type === "ul" && block.items.some((item) => item.task));
  assert.ok(tasks && tasks.type === "ul" && tasks.items.length === 5);
  const steps = blocks.find((block) => block.type === "ol");
  assert.ok(steps && steps.type === "ol" && steps.items.length === 2);
});

test("page metadata is a self-canonical indexable Article", () => {
  assert.equal(CANONICAL_PATH, "/resources/disposable-vape-pens-battery-safety-disposal");
  assert.equal(CANONICAL_URL, "https://www.earthrootcannabis.ca/resources/disposable-vape-pens-battery-safety-disposal");
  assert.match(page, /title: \{ absolute: SEO_TITLE \}/);
  assert.match(page, /canonical: CANONICAL_URL/);
  assert.match(page, /index: true/);
  assert.match(page, /follow: true/);
  assert.match(page, /"@type": "Article"/);
  assert.match(page, /<h1>\{ARTICLE_H1\}<\/h1>/);
  assert.equal(page.includes("3.5"), false);
});

test("sitemap gains one entry and existing resource data is untouched", () => {
  assert.equal(sitemap.split(CANONICAL_PATH).length - 1, 1);
  assert.match(sitemap, /RESOURCE_PAGES\.map/);
  assert.equal(resourceData.includes("disposable-vape-pens-battery-safety-disposal"), false);
});
