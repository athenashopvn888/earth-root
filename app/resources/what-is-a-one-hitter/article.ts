export const ARTICLE_H1 = "What Is a One-Hitter? A Calm Guide to the Smallest Pipe";

export const SEO_TITLE = ARTICLE_H1;

export const CANONICAL_PATH = "/resources/what-is-a-one-hitter";

export const CANONICAL_URL = `https://www.earthrootcannabis.ca${CANONICAL_PATH}`;

/** Schema publish dates. The visible line stays "Last checked: October 30, 2026". */
export const DATE_PUBLISHED = "2026-11-05";

export const DATE_MODIFIED = "2026-11-05";

/** One sentence from the intro, kept under 155 characters. */
export const ARTICLE_DESCRIPTION =
  "It's slimmer than a marker, it fits in a pocket and it holds a pinch of flower.";

export const ARTICLE_MD = `
# What Is a One-Hitter? A Calm Guide to the Smallest Pipe

Last checked: October 30, 2026

It's slimmer than a marker, it fits in a pocket and it holds a pinch of flower. So **what is a one-hitter**, and why is it so popular for people who don't want a big piece? EARTHROOT CANNABIS takes you through it, step by step, for adults 19+. No product picks, no claims about effects, just how it works.

## What is a one-hitter?

A one-hitter is a very small pipe designed to hold a tiny amount of flower, roughly enough for one pull. It's usually a straight tube made of metal, glass or ceramic. Some have a twist-off cap or a built-in poker. Most are plain tubes.

Its defining feature is size. The bowl is small, so the amount of flower is small.

## One-hitter vs dugout

You'll hear these words together. A **dugout** is a small box, usually wooden, with two compartments: one holds flower, the other holds the one-hitter. You push the one-hitter into the flower compartment to load it. Then you close the box and keep it all together.

So the one-hitter is the pipe; the dugout is the case.

## How to use a one-hitter

1. **Break the flower up finely.** The bowl is narrow, so small, even pieces load best. Remove stems.
2. **Load it.** Press the open end into the flower, or into the dugout's compartment, and twist. Repeat until the tip is filled.
3. **Light the tip.** Hold the flame just to the end and pull gently.
4. **Tap it out.** Ash comes out easily if you tap the tube against an ashtray.
5. **Clear the tube.** Some one-hitters come with a poker. Use it to push out any remaining ash.

## Safety checklist

- The tip heats up fast. Metal one-hitters especially. Let it cool before you put it back in a pocket or dugout.
- Tap ash into an ashtray, never onto paper or into a bin with paper.
- Keep lighters and pipes away from children and pets.
- Don't leave a lit one-hitter unattended.

## Cleaning a one-hitter

A one-hitter's narrow tube clogs with resin. Clean it regularly:

1. **Push out loose ash** with the poker or a pipe cleaner.
2. **Soak in isopropyl alcohol** if it's glass or metal. A small container works well.
3. **Run a pipe cleaner through it** after soaking.
4. **Rinse with warm water** until there's no alcohol smell.
5. **Dry completely** before using it again.

Ceramic and wooden pieces may need gentler cleaning. Check how yours is made.

## Who tends to choose a one-hitter

People who want something small, simple and easy to store. People who don't want to deal with a bong's water or a larger pipe's cleaning. Some people simply like that it takes a small amount of flower each time. It's a format preference, not a recommendation.

## Choosing a material, calmly

There's no single right material. Each has trade-offs worth knowing before you choose one:

- **Metal:** sturdy and hard to break, but the tip gets hot quickly and needs time to cool.
- **Glass:** easy to see when it needs cleaning and simple to soak, but it can break if dropped.
- **Ceramic:** often used in dugout sets; it can chip, and some finishes don't like long alcohol soaks.

Whatever you choose, the same rule applies: small amounts, steady light, regular cleaning.

## Common mistakes

- **Grinding too coarse.** Big pieces won't load.
- **Overloading.** Pressing in too much blocks the airflow.
- **Pocketing it hot.** Burnt fabric is a real risk.
- **Never cleaning it.** The narrow tube clogs quickly.

## Quick answers

**What is a one-hitter made of?** Usually metal, glass or ceramic.

**How much flower does a one-hitter hold?** A small pinch. The design is meant for small amounts.

**Is a one-hitter the same as a chillum?** They're similar small straight pipes; the names are often used loosely.

## Learn the flower, at our Dundas West shop

Curious how flower is prepared before it reaches the shelf? Our article on [hand-trimmed vs machine-trimmed weed](/resources/hand-trimmed-vs-machine-trimmed-weed) explains trimming, and our [weed flower guide](/resources/weed-flower-guide) covers formats. EARTHROOT CANNABIS is at 5120 Dundas St W, Etobicoke. Adults 19+ only. Bring government-issued photo ID.
`;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

function splitRow(line: string) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isSeparator(line: string) {
  const cells = splitRow(line);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

export function parseArticle(markdown: string): ArticleBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ArticleBlock[] = [];
  let paragraph: string[] = [];
  let bullets: string[] | null = null;
  let numbered: string[] | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "p", text: paragraph.join(" ") });
    paragraph = [];
  };
  const flushBullets = () => {
    if (!bullets?.length) {
      bullets = null;
      return;
    }
    blocks.push({ type: "ul", items: bullets });
    bullets = null;
  };
  const flushNumbered = () => {
    if (!numbered?.length) {
      numbered = null;
      return;
    }
    blocks.push({ type: "ol", items: numbered });
    numbered = null;
  };
  const flush = () => {
    flushParagraph();
    flushBullets();
    flushNumbered();
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("# ") && !line.startsWith("## ")) continue;
    if (line.startsWith("|") && line.endsWith("|")) {
      flush();
      const tableLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("|") && lines[index].trim().endsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      const headerSource = tableLines[0];
      const hasSeparator = tableLines.length > 1 && isSeparator(tableLines[1]);
      const headers = splitRow(headerSource);
      const rowLines = hasSeparator ? tableLines.slice(2) : tableLines.slice(1);
      blocks.push({ type: "table", headers, rows: rowLines.map(splitRow) });
      continue;
    }
    if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3) });
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      flushNumbered();
      if (!bullets) bullets = [];
      bullets.push(line.slice(2));
      continue;
    }
    const ordered = line.match(/^\d+\. (.*)$/);
    if (ordered) {
      flushParagraph();
      flushBullets();
      if (!numbered) numbered = [];
      numbered.push(ordered[1]);
      continue;
    }
    flushBullets();
    flushNumbered();
    paragraph.push(line);
  }

  flush();
  return blocks;
}

export function articleDescription() {
  const description = ARTICLE_DESCRIPTION;
  if (description.length > 155) throw new Error("Article description is longer than 155 characters");
  if (!ARTICLE_MD.includes(description)) throw new Error("Article description is not taken from the body");
  return description;
}
