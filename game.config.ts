import { defineGameConfig } from "./src/config/schema";

export default defineGameConfig({
  brand: {
    name: "Bomb Farm Wiki",
    shortName: "Bomb Farm",
    mark: "BF",
    tagline: "Source-aware guides for every mine run.",
  },
  site: {
    url: "https://bombfarmwiki.wiki",
    locale: "en",
    timezone: "UTC",
  },
  seo: {
    defaultTitle: "Bomb Farm Wiki — Guides, Heroes, Gear & Updates",
    titleTemplate: "%s | Bomb Farm Wiki",
    defaultDescription:
      "Bomb Farm Wiki helps players learn the idle RPG loop, heroes, gear, skill tree, Steam Market safety, codes, achievements, and updates.",
  },
  social: {},
  navigation: {
    groups: [
      {
        label: "Guides",
        pageId: "hub.guides",
        children: [
          "guide.getting-started",
          "guide.how-to-play",
          "guide.controls",
          "guide.skill-tree",
          "guide.steam-market",
          "guide.codes",
        ],
      },
      {
        label: "Heroes",
        pageId: "hub.heroes",
        children: ["guide.hero-roles", "guide.energy-rotation"],
      },
      {
        label: "Gear & Ritual",
        pageId: "guide.gear-and-ritual",
      },
      {
        label: "Progression",
        pageId: "guide.progression",
      },
      {
        label: "Updates",
        pageId: "hub.updates",
        children: ["patch.latest-update"],
      },
      {
        label: "Tools",
        pageId: "hub.tools",
        children: ["guide.achievements", "guide.system-requirements"],
      },
    ],
  },
  homepage: {
    featuredPageIds: [
      "guide.getting-started",
      "guide.how-to-play",
      "guide.gear-and-ritual",
      "guide.steam-market",
      "guide.codes",
    ],
  },
  features: {
    guides: true,
    heroes: false,
    weapons: false,
    items: false,
    maps: false,
    tierLists: false,
    news: false,
    search: false,
    calculator: false,
    planner: false,
  },
});
