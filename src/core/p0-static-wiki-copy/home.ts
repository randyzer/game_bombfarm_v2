import type { FaqItem, QuickFact } from "./types";

export const homepageQuickFacts: QuickFact[] = [
  { label: "Platform", value: "Steam, Windows PC" },
  { label: "Release date", value: "August 28, 2026" },
  { label: "Price model", value: "Free to play" },
  { label: "Campaign frame", value: "5 worlds, 5 difficulties, 600 stages" },
  { label: "Hero structure", value: "4 roles, 3 teams, 20 abilities" },
];

export const homepageFaq: FaqItem[] = [
  {
    question: "Where should a new Bomb Farm player start?",
    answer:
      "Start with Getting Started, then How to Play, Controls, Gear and Ritual, and Steam Market Safety. Those pages cover the main systems without pretending hidden values are known.",
  },
  {
    question: "Should I trust tier lists or Market prices?",
    answer:
      "Use them cautiously unless they show a current source. Hero rankings, best squads, drop rates, market values, price tracking, and profit advice can become stale quickly.",
  },
];
