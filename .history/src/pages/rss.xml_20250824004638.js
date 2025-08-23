// src/pages/rss.xml.js
import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro学習者 | ブログ",
    description: "Astroを学ぶ旅",
    site: context.site, // ← ここは astro.config.mjs の site が必須！
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>ja-jp</language>`,
  });
}