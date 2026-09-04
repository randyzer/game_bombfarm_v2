import type { StaticWikiCopy } from "./types";

export const toolsStaticWikiCopy = {
  "hub.tools": {
    quickFacts: [
      { label: "Available now", value: "Achievements and system requirements" },
      { label: "Not covered yet", value: "Squad planner and Market values" },
      { label: "Media status", value: "No reusable media assets" },
    ],
    sections: [
      {
        heading: "Useful tools for now",
        paragraphs: [
          "The Tools hub starts with pages that can be checked cleanly on Steam: achievements and system requirements. They help with planning without needing hidden formulas.",
        ],
      },
      {
        heading: "Tools to treat carefully",
        paragraphs: [
          "Squad planners, Market value trackers, and price-history tools need current data, player-safety rules, and a clear method. For now, use the Steam Market page for safety checks rather than price advice.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is there no Market price tracker?",
        answer:
          "Market prices move quickly and can look like financial advice. Use the Market guide for account and item safety, not item valuation.",
      },
    ],
  },
  "guide.achievements": {
    quickFacts: [
      { label: "Total achievements", value: "21" },
      { label: "Source", value: "Steam achievement page" },
      { label: "Coverage", value: "Stages, difficulty clears, heroes, gear, Homes, gold, playtime" },
    ],
    sections: [
      {
        heading: "Steam achievement checklist",
        bullets: [
          "Full Field: Have 9 heroes cleared for battle.",
          "Beat the Clock: Cross first clock gate and leave stage 10 behind.",
          "Demolisher: Destroy 1,000 props.",
          "A Day's Work: Play BombFarm for 10 hours.",
          "Steady Hammer: Forge gear to +8.",
          "Easy Cleared: Finish Easy difficulty.",
          "Millionaire: Earn lifetime 10,000,000 gold.",
          "Devastator: Destroy 50,000 props.",
          "Maxed Home: Take a Home to level 20.",
          "Relic: Obtain a Mythic piece of gear.",
          "Normal Cleared: Finish Normal difficulty.",
          "Hard Cleared: Finish Hard difficulty.",
          "Very Hard Cleared: Finish Very Hard difficulty.",
          "Inferno Cleared: Finish Inferno difficulty, reach stage 600, and clear the campaign.",
          "Living Legend: Get a Legendary hero.",
          "Myth: Get a Mythic hero.",
          "Ceiling: Reach the maximum level of a hero: 500.",
          "Full Ritual: Complete the ritual and get your hero to 3 stars.",
          "Masterpiece: Forge gear to +15.",
          "End of the Line: Take a gear piece to level 300.",
          "Five Homes: Unlock all five Homes, one for each hero rarity.",
        ],
      },
      {
        heading: "How to use achievements as a roadmap",
        paragraphs: [
          "Achievements are not a full optimization guide, but they show durable milestones: campaign completion, long-term gear upgrades, Homes, high hero levels, lifetime gold, playtime, and prop destruction.",
        ],
      },
    ],
    faq: [
      {
        question: "Does the checklist include global unlock percentages?",
        answer:
          "No. The checklist focuses on the Steam achievement names and descriptions, not dynamic unlock-rate data.",
      },
    ],
  },
  "guide.system-requirements": {
    quickFacts: [
      { label: "Supported OS", value: "Windows 10/11 64-bit" },
      { label: "Minimum memory", value: "4 GB RAM" },
      { label: "Recommended memory", value: "8 GB RAM" },
      { label: "Storage", value: "1 GB available space" },
      { label: "Network", value: "Broadband Internet connection" },
    ],
    sections: [
      {
        heading: "Minimum requirements from Steam",
        bullets: [
          "64-bit processor and operating system.",
          "Windows 10/11 64-bit.",
          "Intel Core i3-4130, AMD FX-4300, or equivalent CPU.",
          "4 GB RAM.",
          "Integrated graphics with Vulkan 1.0 or OpenGL 3.3 support, such as Intel HD 520, AMD Radeon R5, or better.",
          "DirectX 11.",
          "Broadband Internet connection.",
          "1 GB available storage.",
        ],
      },
      {
        heading: "Recommended requirements from Steam",
        bullets: [
          "64-bit processor and operating system.",
          "Windows 10/11 64-bit.",
          "Intel Core i5-6400, AMD Ryzen 3 1200, or equivalent CPU.",
          "8 GB RAM.",
          "Dedicated GPU with Vulkan 1.0 support, such as GeForce GTX 750 Ti, Radeon RX 460, or better.",
          "DirectX 11.",
          "Broadband Internet connection.",
          "1 GB available storage.",
        ],
      },
      {
        heading: "Before you troubleshoot",
        paragraphs: [
          "Steam currently lists Windows support for the public store page. Check the current store page before relying on macOS, Linux, Steam Deck, controller, or unsupported-hardware assumptions.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Steam Deck support confirmed?",
        answer:
          "Not from the checked Steam store data. Check the current Steam store and the live client before relying on Deck compatibility.",
      },
    ],
  },
} satisfies Record<string, StaticWikiCopy>;
