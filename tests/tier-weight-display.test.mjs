import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const tvPage = fs.readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");

test("TV highlighted cards show 6g only for Exotic, Premium and AAA+", () => {
  assert.match(tvPage, /<span>\{isTop3 \? "6g" : "5g"\} <b>/);
  assert.match(tvPage, /const isTop3 = \["EXOTIC","PREMIUM","AAA\+"\]\.includes\(tier\);/);
});

test("AA public labels remain 5g", () => {
  assert.match(tvPage, />\$20 5g AA<\/span>/);
  assert.match(tvPage, /<span className=\{styles\.pLab\}>5g<\/span>/);
});

test("the backend price5g field and price lookup remain unchanged", () => {
  assert.match(tvPage, /price3g: PricePoint\|null; price5g: PricePoint\|null;/);
  assert.match(tvPage, /hi\.price5g\.sale \?\? hi\.price5g\.regular/);
});
