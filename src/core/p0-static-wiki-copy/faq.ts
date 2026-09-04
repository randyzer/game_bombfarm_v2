import type { StaticWikiCopy } from "./types";

export const faqStaticWikiCopy: StaticWikiCopy = {
  quickFacts: [
    { label: "Official platform", value: "Steam" },
    { label: "Best first reads", value: "Getting Started, How to Play, Steam Market Safety" },
    { label: "Recheck often", value: "Codes, updates, Market safety, FAQ" },
  ],
  sections: [
    {
      heading: "How to use this FAQ",
      paragraphs: [
        "Use this page when you need a quick answer about codes, Market safety, platform support, or why fast-changing game details need a dated check.",
      ],
    },
    {
      heading: "Common gaps to watch",
      paragraphs: [
        "Hero rankings, best squads, market prices, item values, drop rates, skill tree node values, and full roster tables need current supporting data. Treat unsourced versions of those claims as guesses.",
      ],
    },
  ],
  faq: [
    {
      question: "Is Bomb Farm free to play?",
      answer:
        "Yes. Steam lists Bomb Farm as free to play, with in-app purchases also listed on the store page.",
    },
    {
      question: "Where do Bomb Farm update facts come from?",
      answer:
        "Update pages use Steam News API and Steam community announcements first, then mark patch-sensitive claims for recheck.",
    },
    {
      question: "Does Bomb Farm have active codes?",
      answer:
        "The September 4, 2026 freshness check found an official September 2 announcement for KENDO, expiring September 8, 2026 at 11:59 PM UTC-3. Recheck in game and on Steam before relying on code status.",
    },
    {
      question: "Does the Steam Market guide include item values?",
      answer:
        "No. Use the Market guide for account safety, item review, and official-system trading boundaries. Price tracking and item valuation are not covered here.",
    },
    {
      question: "Can I trade outside Steam?",
      answer:
        "Use official Steam flows only. Bomb Farm's EULA prohibits real-money trading outside official Steam systems.",
    },
    {
      question: "Why are hero names and stats missing?",
      answer:
        "The checked official source confirms role labels, abilities, and three teams, but not a complete current roster with public stats.",
    },
    {
      question: "Where should I start if controls or performance feel wrong?",
      answer:
        "Check Controls first for input and focus issues, then System Requirements for platform and hardware expectations.",
    },
  ],
};
