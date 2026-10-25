export const ARTICLE_H1 =
  "Disposable vape pens: keeping the battery safe, and getting rid of it properly in Toronto";

export const SEO_TITLE = "Disposable vape pens: battery safety and disposal in Toronto";

export const CANONICAL_PATH = "/resources/disposable-vape-pens-battery-safety-disposal";

export const CANONICAL_URL = `https://www.earthrootcannabis.ca${CANONICAL_PATH}`;

/** ISO form of the visible "Last checked: September 30, 2026" line. */
export const DATE_MODIFIED = "2026-09-30";

export const ARTICLE_MD = `
# Disposable vape pens: keeping the battery safe, and getting rid of it properly in Toronto

*Last checked: September 30, 2026*
A disposable vape pen looks like a simple thing: use it, then throw it away. The "throw it away" part is where people go wrong. Every one of these devices has a lithium-ion battery inside, and the City of Toronto treats those batteries as household hazardous waste. The audience here is adults, 19 and up. It covers what these devices are, how to keep the battery safe at home, and how to dispose of one without putting it in a bin.

It doesn't cover strength, flavours or which product to choose. Staff can walk you through the current menu in store, or you can browse our [disposable vapes in Etobicoke](/items/vape-disposables) online first.

## Part 1: What a disposable actually is

**In plain terms:** an all-in-one or "disposable" pen is a single sealed unit. The cannabis extract and the battery come together in one body, and you don't swap parts in or out. When it's finished, the whole device is done.

**In legal terms:** the federal Cannabis Act lists vaporizers among "cannabis accessories". The Cannabis Regulations describe a pen that comes filled as a cannabis accessory that contains a cannabis extract. For that kind of product, the regulations require the label to show, among other things:

- the **net weight of the extract**, in grams
- a **list of ingredients**

**How it counts toward the 30 g limit.** Ontario's cannabis-laws page sets a 30 g public ceiling, measured in dried-cannabis terms. For concentrates, the conversion is 0.25 g of concentrate to 1 g of dried cannabis. So the extract weight printed on a pen's label counts four times over toward that limit: a pen holding 1 g of extract uses up the equivalent of 4 g of your 30.

## Part 2: Keeping the battery safe at home

E-cigarettes show up on the City's own list of gadgets powered by lithium-ion cells. It says certified batteries that are properly charged, used and disposed of are generally safe, but that overcharged, modified or damaged ones can catch fire or even explode. The City's tips, applied to a vape pen:

- **Never modify or tamper with the battery.** Don't open the casing.
- **If your pen charges, stay with it.** Keep the battery in sight while it charges, unplug it when it's done, and don't charge it on a bed, a couch or under a pillow.
- **Store it at room temperature.** Keep it out of direct sunlight and out of a hot car.
- **Keep it dry.** The City advises against using devices in very damp or humid places.
- **Store it clear of anything flammable.**
- **Don't crush, bend or drop it,** or the charger.
- **If it sparks or smokes, call 911.** If it's safe to do so, move it outside and away from anything that could catch fire.

## Part 3: Getting rid of it

### Rule one: no bins at all

Toronto's household hazardous waste rules put batteries off-limits for **garbage, recycling and organics** alike. The City explains why: items like these can injure collection crews and spark fires or blasts inside trucks and at processing sites.

### The sealed-battery snag

Now the awkward part. Toronto says its depots, its Community Environment Days and its Toxic Taxi service **only take batteries that have been removed** from whatever they power, and its e-waste page applies the same condition to electronics. A disposable pen's cell is sealed inside the body.

**Don't cut or crack the casing to get at it.** Tampering is exactly what the City's battery-safety advice tells you to avoid. Instead:

1. Search "vape" in Toronto's **Waste Wizard**, or dial **311**, and get the City's current instruction for a device whose cell can't come out.
2. For more battery drop-off options, the City sends residents to the **Resource Productivity and Recovery Authority** (RPRA) website.

### Storing it until then

The City's pre-drop-off steps for batteries are short:

- bag it in **clear plastic**, or tape over any bare metal contacts (packing, duct or electrical tape all work, per the City)
- store it **somewhere cool and dry**
- don't let it linger: hand it in **promptly**, and immediately if it's damaged

### The Etobicoke depot

Of the City depots that take household hazardous waste, one is in Etobicoke: **Disco, 120 Disco Road**, which also takes electronic waste. Before driving over, note that the City only admits motor vehicles (no walking or cycling in), and hazardous-waste drop-offs run on their own schedule, listed on the City's depot page.

Without a car, the options are a **Community Environment Day** or a free **Toxic Taxi** collection, which the City offers once you have somewhere from 10 up to 50 litres or kilograms of hazardous waste to hand over.

## Quick checklist

- [ ] Battery device? It never goes in any bin.
- [ ] Casing intact and unopened.
- [ ] Waiting in a clear bag, somewhere cool and dry.
- [ ] Checked Waste Wizard or 311 for devices with built-in batteries.
- [ ] Depot, Community Environment Day or Toxic Taxi picked.

## Visiting EARTHROOT CANNABIS

EARTHROOT CANNABIS is at 5120 Dundas St W in Etobicoke. Islington and Kipling stations are both under a kilometre away. Everything else about the trip is on our [visit page](/visit), and more about the shop is on our [weed dispensary in Etobicoke](/weed-dispensary-etobicoke) page. Can't make it in? See how our [weed delivery in Etobicoke](/weed-delivery-etobicoke) works. Shoppers must be 19 or older and are asked to bring government-issued photo ID.


Checked against: Toronto's lithium-ion battery safety page, its household hazardous waste, e-waste and depot-location pages; Ontario's provincial page on cannabis laws; and, on Justice Canada's site, the Cannabis Act definition of an accessory plus section 132.12 of the Cannabis Regulations.
`;

export type ArticleBlock =
  | { type: "p"; text: string; italic: boolean }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Array<{ text: string; task: boolean }> }
  | { type: "ol"; items: string[] };

export function parseArticle(markdown: string): ArticleBlock[] {
  const cleaned = markdown.replace(/<!--[\s\S]*?-->/g, "").replace(/\r\n/g, "\n");
  const lines = cleaned.split("\n");
  const blocks: ArticleBlock[] = [];
  let paragraph: string[] = [];
  let bullets: Array<{ text: string; task: boolean }> | null = null;
  let numbered: string[] | null = null;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "p", text: paragraph.join(" "), italic: false });
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

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      flushBullets();
      flushNumbered();
      continue;
    }
    if (line.startsWith("# ")) continue;
    if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**") && !line.slice(1, -1).includes("*")) {
      flushParagraph();
      flushBullets();
      flushNumbered();
      blocks.push({ type: "p", text: line.slice(1, -1), italic: true });
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushBullets();
      flushNumbered();
      blocks.push({ type: "h3", text: line.slice(4) });
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushBullets();
      flushNumbered();
      blocks.push({ type: "h2", text: line.slice(3) });
      continue;
    }
    const task = line.match(/^- \[ \] (.*)$/);
    if (task) {
      flushParagraph();
      flushNumbered();
      if (!bullets) bullets = [];
      bullets.push({ text: task[1], task: true });
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      flushNumbered();
      if (!bullets) bullets = [];
      bullets.push({ text: line.slice(2), task: false });
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

  flushParagraph();
  flushBullets();
  flushNumbered();
  return blocks;
}

export function articleDescription(markdown = ARTICLE_MD) {
  const paragraph = parseArticle(markdown).find((block) => block.type === "p" && !block.italic);
  if (!paragraph || paragraph.type !== "p") throw new Error("Article description paragraph is missing");
  return paragraph.text;
}
