import type { StaticWikiCopy } from "./types";

export const heroStaticWikiCopy = {
  "hub.heroes": {
    quickFacts: [
      { label: "Role labels", value: "Attacker, Support, Collector, Specialist" },
      { label: "Team structure", value: "Three teams can be switched to keep mining active" },
      { label: "Ability frame", value: "20 abilities with levels 1 to 10" },
    ],
    sections: [
      {
        heading: "How to read heroes",
        paragraphs: [
          "Bomb Farm's Steam page says heroes are organized around roles, abilities, attributes, and a three-team idle structure. Start there before chasing a named roster or tier list.",
          "Use the role guide to understand team shape, then use the energy rotation guide to decide when another team should take over the mine.",
        ],
      },
      {
        heading: "What to avoid assuming",
        bullets: [
          "Do not assume a named hero list is complete unless it comes from the current game or an official source.",
          "Do not treat hero stats, rarity odds, skill values, or team rankings as stable without a dated check.",
          "Do not use exact energy recovery or swap timing unless the live game confirms it.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is there no hero database yet?",
        answer:
          "A useful database needs a complete current roster and stable stats. Until then, the role and rotation pages are the better starting point.",
      },
    ],
  },
  "guide.hero-roles": {
    quickFacts: [
      { label: "Attacker", value: "Official role label" },
      { label: "Support", value: "Official role label" },
      { label: "Collector", value: "Official role label" },
      { label: "Specialist", value: "Official role label" },
    ],
    sections: [
      {
        heading: "Role labels to know",
        paragraphs: [
          "Steam identifies four Bomb Farm hero roles: Attacker, Support, Collector, and Specialist. Use those labels to understand what your team is trying to do before comparing individual heroes.",
          "A role label is not a ranking. Performance still depends on the hero, upgrades, stage context, and the current patch.",
        ],
      },
      {
        heading: "How to use roles in early teams",
        bullets: [
          "Compare what your current heroes do in the live client.",
          "Watch whether each team has enough role coverage to keep progress moving.",
          "Use skill tree and gear decisions as context, not as fixed build orders.",
        ],
      },
    ],
    faq: [
      {
        question: "Are Attacker heroes always better for pushing stages?",
        answer:
          "Not necessarily. The Attacker label is official, but a reliable answer needs hero-specific data, stage context, and patch-aware testing.",
      },
    ],
  },
  "guide.energy-rotation": {
    quickFacts: [
      { label: "Teams", value: "Three teams" },
      { label: "Main habit", value: "Switch teams to keep mining active" },
      { label: "Still unknown", value: "Exact recovery math and best timers" },
    ],
    sections: [
      {
        heading: "The rotation idea",
        paragraphs: [
          "The official Steam page says players can switch between three teams to keep the mine running. The useful habit is simple: check whether another team can keep working before you leave progress idle.",
          "Treat rotation as a routine you verify in the current client. Energy recovery rates, hidden formulas, and best-squad timing can change or require direct measurement.",
        ],
      },
      {
        heading: "Rotation checklist",
        bullets: [
          "Check whether another team can continue progress before spending resources.",
          "Review role coverage before building all three teams the same way.",
          "Revisit update notes when Market, rewards, hero panels, or XP sharing change.",
        ],
      },
    ],
    faq: [
      {
        question: "Does this page include the best rotation timer?",
        answer:
          "No. Use it for the three-team habit, then confirm exact timing in the current game client.",
      },
    ],
  },
} satisfies Record<string, StaticWikiCopy>;
