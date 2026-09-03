import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const page = read("app/weed-delivery-etobicoke/page.tsx");
const content = read("app/delivery/DeliveryContent.tsx");
const navbar = read("app/components/Navbar.tsx");
const navbarStyles = read("app/components/Navbar.module.css");
const footer = read("app/components/Footer.tsx");
const layout = read("app/layout.tsx");
const sitemap = read("app/sitemap.ts");
const config = read("next.config.ts");

test("Weed Delivery has one Etobicoke canonical owner", () => {
  assert.match(page, /title: "Weed Delivery Etobicoke"/);
  assert.match(page, /https:\/\/www\.earthrootcannabis\.ca\/weed-delivery-etobicoke/);
  assert.match(page, /name: "EarthRoot Cannabis Weed Delivery"/);
  assert.match(content, /<h1>Weed Delivery in Etobicoke<\/h1>/);
});

test("legacy delivery route redirects directly to the canonical owner", () => {
  assert.match(
    config,
    /source: "\/delivery",[\s\S]*?destination: "\/weed-delivery-etobicoke",[\s\S]*?permanent: true/,
  );
  assert.doesNotMatch(config, /destination: "\/delivery"/);
});

test("navigation, footer, announcement and sitemap link directly to Weed Delivery", () => {
  assert.match(navbar, /href="\/weed-delivery-etobicoke"/);
  assert.match(navbar, /styles\.pinnedDelivery/);
  assert.match(footer, /href="\/weed-delivery-etobicoke">Weed Delivery<\/Link>/);
  assert.match(layout, /href="\/weed-delivery-etobicoke"/);
  assert.match(layout, /WEED DELIVERY IS HERE — CLICK TO EXPLORE/);
  assert.match(sitemap, /\${BASE}\/weed-delivery-etobicoke/);
  assert.doesNotMatch(sitemap, /\${BASE}\/delivery/);
});

test("Weed Delivery remains pinned outside the horizontally scrollable category rail", () => {
  assert.match(navbar, /className=\{styles\.scrollViewport\}[\s\S]*?id="store-menu-scrollbar"[\s\S]*?className=\{`\$\{styles\.pill\} \$\{styles\.pinnedDelivery\}/);
  assert.match(navbarStyles, /\.scrollShell\s*\{[^}]*display:\s*flex;[^}]*min-width:\s*0;/s);
  assert.match(navbarStyles, /\.scrollViewport\s*\{[^}]*flex:\s*1 1 auto;[^}]*min-width:\s*0;/s);
  assert.match(navbarStyles, /\.pinnedDelivery\s*\{[^}]*flex:\s*0 0 auto;/s);
});

test("protected delivery facts and mechanics remain present", () => {
  assert.match(content, /\$60 PRODUCT MINIMUM/);
  assert.match(content, /sms:\+14375249617/);
  assert.match(content, /Member Loyalty Savings/);
  assert.match(content, /<EarthRootWebChat \/>/);
  assert.match(content, /Browse the delivery menu/);
});
