export const ARTICLE_H1 =
  "Hand-Trimmed vs Machine-Trimmed Weed: What the Trim Tells You";

export const SEO_TITLE = ARTICLE_H1;

export const CANONICAL_PATH = "/resources/hand-trimmed-vs-machine-trimmed-weed";

export const CANONICAL_URL = `https://www.earthrootcannabis.ca${CANONICAL_PATH}`;

/** Schema publish dates. The visible line stays "Last checked: October 27, 2026". */
export const DATE_PUBLISHED = "2026-10-29";

export const DATE_MODIFIED = "2026-10-29";

/** One sentence from the intro, kept under 155 characters. */
export const ARTICLE_DESCRIPTION =
  "How that haircut happens, by scissors or by machine, is the whole hand-trimmed vs machine-trimmed weed debate.";

export const ARTICLE_MD = `
# Hand-Trimmed vs Machine-Trimmed Weed: What the Trim Tells You

Last checked: October 27, 2026

Every bud in a jar has had a haircut. After harvest, growers clip away the leaf around the flower so what's left is the dense, frosty part people actually buy. How that haircut happens, by scissors or by machine, is the whole hand-trimmed vs machine-trimmed weed debate. EARTHROOT CANNABIS, at 5120 Dundas St W in Etobicoke, walks adults 19+ through what the trim changes, what it doesn't, and how to judge it with your own eyes.

## What "trim" actually means

A flowering cannabis plant grows two kinds of leaf near the buds:

- **Fan leaves:** the big, classic five-to-seven-finger leaves. These come off early.
- **Sugar leaves:** small leaves that poke out of the bud itself, often dusted with resin.

Trimming removes the fan leaves and cuts the sugar leaves back so the bud has a clean shape. The clippings, called trim, don't go to waste. They're commonly used as input for extraction.

Trimming can happen before drying (wet trim) or after (dry trim). Either way, the job is the same: shape the bud.

## Hand-trimmed weed, explained

Hand trimming is exactly what it sounds like. A person holds each bud and works around it with small scissors, snipping leaf tips and shaping the flower one cut at a time.

What hand trimming tends to look like in the jar:

- Buds keep their natural shape: points, ridges and little foxtails stay intact.
- Less handling of the bud surface, because only the scissors touch the leaf.
- More variation from bud to bud, since every trimmer has their own style.

It's slow work. That's the trade-off.

## Machine-trimmed weed, explained

Machine trimmers come in a few designs, but most work on the same idea: buds tumble inside a drum or move over a grate while blades underneath clip anything sticking out. Some run on dry flower, some on wet.

What machine trimming tends to look like in the jar:

- Rounder, more uniform buds.
- A tidy, almost buzzed finish.
- Because buds tumble and rub, some of the surface resin can get knocked loose, depending on the machine and how it's run.

Machines are fast and consistent. A well-run machine on the right flower can look sharp. A rough run can leave buds looking roughed up.

## Hand-trimmed vs machine-trimmed weed at a glance

| | Hand-trimmed | Machine-trimmed |
|---|---|---|
| Method | Scissors, one bud at a time | Blades under a drum or grate |
| Shape | Natural, irregular | Rounder, more uniform |
| Surface | Less tumbling | More contact; surface can look rubbed |
| Consistency | Varies by trimmer | Very even batch to batch |
| Speed | Slow | Fast |

Neither column is a quality grade on its own. They're two ways of doing one job.

## What the trim does NOT tell you

Calm down on the marketing, because "hand-trimmed" gets thrown around a lot:

- **Not a THC number.** The only reliable cannabinoid values are Total THC and Total CBD on a legal label.
- **Not a guarantee.** A hand-trimmed batch can still be old or poorly stored. A machine batch can be fresh and well kept.
- **Not one of the standard label lines.** Trim method isn't among the label items Health Canada walks readers through, so if you see the claim, it comes from the producer's own description.

## How to read the trim with your own eyes

If the package lets you see the flower, run this checklist:

1. **Shape:** natural points and ridges usually point to hand work; very round, uniform nugs often point to a machine.
2. **Leaf left on:** a few sugar-leaf tips are normal. Lots of leaf means a loose trim either way.
3. **Surface:** look for intact frost. Bald, shiny patches can mean heavy handling.
4. **Stems:** long stems add weight without adding flower.
5. **Packaging date:** fresher is easier to judge than old.

Trim quality is visual, so trust what you can see over what a sticker says.

## Where the trim goes after

Remember those clippings? The resin-dusted sugar leaf becomes raw material for extracts. That's why "trim" shows up in concentrate talk. Different input, different product line, same plant.

## Storing trimmed flower

However it was trimmed, store it the same way: in its original sealed, labelled container, somewhere cool and dark, away from kids and pets. Shaking the jar around knocks resin loose no matter who held the scissors.

## Questions people ask on Dundas West

**Is hand-trimmed weed always better?** No ranking from us. It's a different look and a different process. Judge the bud in front of you.

**Why does machine-trimmed weed look so round?** The blades clip everything that sticks out past the drum or grate, so the bud ends up evenly shaved.

**Can I tell from the label?** Usually not. Look at the flower.

## The bottom line

Hand-trimmed vs machine-trimmed weed comes down to scissors or blades, irregular or uniform, slow or fast. The trim affects how a bud looks and how much it was handled. It doesn't replace reading the label. Check the shape, check the frost, check the packaging date, and decide for yourself.

Heading over? Our [Etobicoke weed dispensary page](/weed-dispensary-etobicoke) covers the neighbourhood. EARTHROOT CANNABIS is for adults 19 and over. Bring government-issued photo ID.
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
